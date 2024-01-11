import firebase from "@/config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";

const storage = getStorage(firebase);
const firestore = getFirestore(firebase);

const state = {
  newId: 0,
  equipments: [],
  members: [],
  reviews: [],
  imageUrl: "",
  invoiceUrl: "",
  manualUrl: "",
};

const getters = {
  newId: (state) => state.newId,
  equipments: (state) => state.equipments,
  imageUrl: (state) => state.imageUrl,
  invoiceUrl: (state) => state.invoiceUrl,
  manualUrl: (state) => state.manualUrl,
};

const mutations = {
  setNewId(state, payload) {
    state.newId = payload;
  },

  setEquipments(state, payload) {
    state.equipments = payload;
  },

  addEquipments(state, payload) {
    state.equipments.push(payload);
  },

  setMembers(state, payload) {
    state.members = payload;
  },

  addMembers(state, payload) {
    state.members.push(payload);
  },
  addReviews(state, payload) {
    state.reviews.push(payload);
  },

  setFileUrl(state, payload) {
    switch (payload.type) {
      case "image":
        state.imageUrl = payload.url;
        break;
      case "invoice":
        state.invoiceUrl = payload.url;
        break;
      case "manual":
        state.manualUrl = payload.url;
        break;
      default:
        break;
    }
  },
};

const actions = {
  async getData(context) {
    /*list all collections in db in this array: */
    let appData = ["equipment", "members"];

    for (let i = 0; i < appData.length; i++) {
      let data = [];
      const documents = await getDocs(collection(firestore, appData[i]));
      documents.forEach((doc) => {
        let item = doc.data();
        item.firestoreId = doc.id;
        data.push(item);
      });

      /*list all collections (cases) in this switch: */
      let equipments = [];
      switch (appData[i]) {
        case "equipment":
          /*filter discarded (ausgeschiedene) equipment from data */
          for (let i = 0; i < data.length; i++) {
            if (!data[i].discarded) {
              equipments.push(data[i]);
            }
          }
          context.commit("setEquipments", equipments);
          break;
        case "members":
          context.commit("setMembers", data);
          break;
        default:
          break;
      }
    }
  },

  addData(context, payload) {
    addDoc(collection(firestore, payload.collection), payload.data)
      .then(() => {
        switch (payload.collection) {
          case "equipment":
            context.commit("addEquipments", payload.data);
            break;
          case "members":
            context.commit("addMembers", payload.data);
            break;
          default:
            break;
        }
        return true;
      })
      .catch((error) => {
        const err = new Error(error);
        throw err;
      });
  },

 

  getEquipmentId(context) {
    //gets next unused equipmentId from database
    const docRef = doc(firestore, "configData", "ZocUScAesXH8ijJPqfTu");
    getDoc(docRef)
      .then((response) => {
        let id = Number(
          response._document.data.value.mapValue.fields.equIdCounter
            .integerValue
        );
        context.commit("setNewId", id);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  updateEquipmentId(context, payload) {
    //updates next unused equipmentId in database and local store
    const docRef = doc(firestore, "configData", "ZocUScAesXH8ijJPqfTu");
    const newId = payload + 1;
    context.commit("setNewId", newId);
    updateDoc(docRef, { equIdCounter: newId })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  },

  /* updateDoc(context, payload){
    //updates docs in firestore-collections
    console.log(payload);
    //const docRef = doc(firestore, payload.collection, payload.docId);
    context.commit("updateDoc", payload);

  }, */

  updateImgUrl(context, payload) {
    context.commit("setFileUrl", payload);
  },

  compressImage(context, fileObject) {
    //Tutorial: https://www.npmjs.com/package/browser-image-compression
    const options = {
      maxSizeMb: 0.5,
      maxWidthOrHeight: 600,
      useWebWorker: true,
    };
    imageCompression(fileObject.file, options)
      .then((compressedFile) => {
        fileObject.file = compressedFile;
        context.dispatch("fileUpload", fileObject);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  fileUpload(context, payload) {
    const storageRef = ref(storage, payload.path);
    uploadBytes(storageRef, payload.file)
      .then((snapshot) => {
        console.log(snapshot);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  fileDownload(context, payload) {
    if (payload.path !== "") {
      getDownloadURL(ref(storage, payload.path))
        .then((response) => {
          let urlObj = {
            type: payload.type,
            url: response,
          };
          context.commit("setFileUrl", urlObj);
        })
        .catch((error) => {
          console.log("ERROR: " + error);
        });
    }
  },
};

const storageModule = {
  state,
  getters,
  mutations,
  actions,
};

export default storageModule;

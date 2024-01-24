import firebase from "@/config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import imageCompression from "browser-image-compression";

const storage = getStorage(firebase);
const firestore = getFirestore(firebase);

const state = {
  newId: 0,
  equipments: [],
  members: [],
  singleDocument: {},
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
    if (payload.mode == "edit") {
      for (let i = 0; i < state.equipments.length; i++) {
        if (payload.id === state.equipments[i].id) {
          state.equipments[i] = payload.data;
        }
      }
    } else {
      state.equipments.push(payload.data);
    }
  },

  setMembers(state, payload) {
    state.members = payload.data;
  },

  addMembers(state, payload) {
    state.members.push(payload);
  },

  updateStateDocument(state, payload) {
    for (let i = 0; i < state.equipments.length; i++) {
      if (Number(payload.itemId) === state.equipments[i].id) {
        state.equipments[i] = payload.item;
      }
    }
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
  deleteStateDoc(state, payload) {
    //this function only deletes the fields in this equipment/id-path.
    //sub-collections will not be deleted!
    for (let i = 0; i < state.equipments.length; i++) {
      if (Number(payload.docId) === state.equipments[i].id) {
        //delete (one) "1" item on index "i", 
        state.equipments.splice(i, 1);
      }
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
      switch (appData[i]) {
        case "equipment":
          context.commit("setEquipments", data);
          break;
        case "members":
          context.commit("setMembers", data);
          break;
        default:
          break;
      }
    }
  },

  async setData(context, payload) {
    await setDoc(
      doc(firestore, payload.collection, String(payload.id)),
      payload.data
    )
      .then(() => {
        switch (payload.collection) {
          case "equipment":
            context.commit("addEquipments", payload);
            break;
          case "members":
            context.commit("addMembers", payload);
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

  getNewId(context) {
    //gets next unused itemId from database
    const docRef = doc(firestore, "configData", "nextId");
    getDoc(docRef)
      .then((response) => {
        let id = Number(response.data().idCounter);
        context.commit("setNewId", id);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async updateNewId(context, payload) {
    /* updates next unused equipmentId in database and local store
    separated from common updateDoc-function and exposed as singular function with hardcoded docRef because of its importance! */
    const docRef = doc(firestore, "configData", "nextId");
    const newId = payload + 1;
    await updateDoc(docRef, { idCounter: newId })
      .then(() => {
        context.commit("setNewId", newId);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async updateDocument(context, payload) {
    //updates docs in firestore-collections (used for all data except the itemId (equipmentId))
    const docRef = doc(firestore, payload.collection, String(payload.docId));
    await updateDoc(docRef, payload.data).catch((error) => {
      console.log(error);
    });
  },

  async getSingleDocument(context, payload) {
    const docRef = doc(firestore, payload.collection, String(payload.docId));
    await getDoc(docRef)
      .then((response) => {
        let item = response.data();
        let updateObj = {
          collection: payload.collection,
          itemId: payload.docId,
          item: item,
        };
        context.commit("updateStateDocument", updateObj);
      })
      .catch((error) => {
        console.log(error);
      });
  },

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
      .then(() => {})
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
  async deleteDocument(context, payload) {
    await deleteDoc(doc(firestore, payload.collection, String(payload.docId)))
    .then(() => {
      context.commit("deleteStateDoc", payload);
    })
    .catch((error) => {
      console.log(error);
    });
  },
};

const storageModule = {
  state,
  getters,
  mutations,
  actions,
};

export default storageModule;

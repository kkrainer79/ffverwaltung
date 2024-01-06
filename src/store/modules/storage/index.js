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
  imgUrl: "",
};

const getters = {
  newId: (state) => state.newId,
  equipments: (state) => state.equipments,
  imgUrl: (state) => state.imgUrl,
};

const mutations = {
  setNewId(state, payload) {
    state.newId = payload;
  },

  setEquipments(state, payload) {
    state.equipments = payload;
  },

  updateEquipments(state, payload) {
    state.equipments.push(payload);
  },

  setImgUrl(state, payload) {
    state.imgUrl = payload;
  },
};

const actions = {
  async getCollection(context) {
    let equipments = [];
    const documents = await getDocs(collection(firestore, "equipment"));
    documents.forEach((doc) => {
      equipments.push(doc.data());
    });
    context.commit("setEquipments", equipments);
  },

  dataUpload(context, payload) {
    addDoc(collection(firestore, payload.collection), payload.data)
      .then(() => {
        console.log(payload.data);
        context.commit("updateEquipments", payload.data);
        return true;
      })
      .catch((error) => {
        const err = new Error(error);
        throw err;
      });
  },

  updateEquipmentId(context, payload) {
    //aktualisiert die nächste freie EquipmentId am Server und im State
    const docRef = doc(firestore, "configData", "ZocUScAesXH8ijJPqfTu");
    const newId = payload + 1;
    context.commit("setNewId", newId);
    updateDoc(docRef, { equIdCounter: newId })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  },

  getEquipmentId(context) {
    //holt nächste freie EquipmentId vom Server
    console.log("getEquipmentId");
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

  updateImgUrl(context, payload) {
    context.commit("setImgUrl", payload);
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
        console.log("FileUpload done.");
      })
      .catch((error) => {
        console.log(error);
      });
  },

  fileDownload(context, payload) {
    if (payload.imgUrl !== "") {
      getDownloadURL(ref(storage, payload))
        .then((response) => {
          context.commit("setImgUrl", response);
        })
        .catch((error) => {
          console.log('ERROR: ' + error);
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

import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function registrarUbers(contacto) {
  const docRef = await addDoc(collection(db, "contactos"), contacto)
};

export const obtenerUbers = async()=> {
  const ref = collection(db,"contactos");
  const querySnapshot = await getDocs(ref)

  let ubers = []
  querySnapshot.forEach((doc) => {
    ubers.push({...doc.data(),id:doc.id})
  });
  return ubers;
};
  
export const actualizarUber = async(nuevosDatos,id)=>{
  const ref = doc(db, "contactos", id);
  await updateDoc(docRef, nuevosDatos);
};

export const eliminarUber = async(id) =>{
  const docRef = doc(db, "contactos", id);
  await deleteDoc(docRef);
};
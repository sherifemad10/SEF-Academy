import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/Firebase/Config";

const UsehandleDelete = async (id)=>{
  console.log("deleted")
  await deleteDoc(doc(db, 'Artical', id));
}

export default UsehandleDelete

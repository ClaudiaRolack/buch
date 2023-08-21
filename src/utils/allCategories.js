import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const allCategories = async () => {

  const categorias = [
    'AgendasYCalendarios',
    'CienciasYNaturaleza',
    'FiccionJuvenil',
    'JuegosDeMesa',
    'OcioYHobbies'
  ]

  const promises = categorias.map(categoria => {
    const pf1 = collection(db, categoria);
    return getDocs(pf1)
      .then((resp) => {
        return resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      });
  });

  return Promise.all(promises)
  .then(results => {
    return [].concat(...results);
  })
  .catch(e => {
    console.log(e);
    return [];
  })
}
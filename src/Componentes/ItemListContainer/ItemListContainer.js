import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";




const ItemListContainer = ({mensaje}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const { id } = useParams();

  const URL_BASE = "https://api.storerestapi.com/products";
  const URL_CAT = `${URL_BASE}/categories/${id}`;

  const productCollection = collection(db, "productos");
  const q = query(productCollection, where('categories', '==', "women's clothing" ))

  useEffect(() => {
    getDocs(productCollection)
    .then((result) => {
      const listaProductos = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProductos(listaProductos);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));

    }, [id, URL_BASE, URL_CAT]);

  return (
   <>
   <h3>{mensaje}</h3>
    {
      <>
        {loading ? <h1>Cargando...</h1> : <ItemList lista={productos}/>}
      </>
    }
   </>
  );
};

export default ItemListContainer

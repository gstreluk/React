import React from 'react';
import Item from './Item';

const ItemList = ({lista}) => {
  return (
    <div style={styles.container}>
      {
        lista.map((producto) => {
          return <Item key={producto.id} producto={producto} />
        })
      }
    </div>  
  );
};

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}

export default ItemList

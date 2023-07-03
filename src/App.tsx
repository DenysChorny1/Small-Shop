import React, {useContext, useEffect, useState} from 'react';
import Product from './components/Product';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Modal from './components/Modal';
import CreateProudct from './components/CreateProudct';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

function App() {
  const {loading, error, products, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
      {modal && <Modal onClose={close}>
         <CreateProudct onCreate={createHandler}/>
      </Modal>}
      <button onClick={open} className='fixed bottom-5 right-5 border rounded-full bg-blue-400 text-2xl px-4 py-2'>+</button>
    </div>
  );
}

export default App;

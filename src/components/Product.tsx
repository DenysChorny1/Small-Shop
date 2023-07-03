import React, {useState} from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)

  return (<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
    <div>{product.title}</div>
    <img src={product.image} alt={product.title} className='w-1/6'/>
    <p>{product.price}</p>
    <button 
        className='py-2 px-4 border bg-yellow-400'
        onClick={() => setDetails(!details)}
    >{details ? 'Hide details' : 'Show details'}</button>
    {details && <p>{product.description}</p>}
  </div>
  )
}

export default Product
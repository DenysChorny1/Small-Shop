import React, {useState} from 'react'
import { IProduct } from '../models'
import axios, {AxiosError} from 'axios';

interface CreateProudctProps {
    onCreate: (product: IProduct) => void
}

const ProductData: IProduct =  {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 1,
        count: 1
    }
}

const CreateProudct = ({onCreate}: CreateProudctProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if(value.trim().length === 0){
            setError('Enter valid title')
            return
        }

        ProductData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', ProductData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

  return (
    <form onSubmit={submitHandler}>
        <input
            type='text'
            value={value}
            className='border py-2 px-4 mb-2 w-full'
            placeholder='Enter product title...'
            onChange={changeHandler}
        />
        {error && <p>{error}</p>}
        <button type='submit' className='py-2 px-4 border bg-blue-400'>Create</button>
    </form>
  )
}

export default CreateProudct
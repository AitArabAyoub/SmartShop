import { getNewProducts } from '@/utils'
import { TProduct } from '@/utils/types'
import React from 'react'
import Product from './Product'

async function TopProds() {
    const prods : TProduct[] = await getNewProducts()
    return (
        <div className='container py-3'>
            <h2 className='text-center text-3xl font-bold'>Top Rated Products</h2>
            <div className='grid grid-cols-4 gap-3 py-5'>
                {
                    prods.map(el=>{
                        return (
                            el.rating.rate >4 ? <Product prod={el} key={el.id}/> : ""
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopProds

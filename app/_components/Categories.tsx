import React from 'react'
import Category from './Category'

function Categories() {
    const cats= [{link : "/women.jpeg",title : "women's clothing"},{link : "/men.jpeg",title : "men's clothing"},{link : "/elect.jpg",title : "electronics"},{link : "/jew.jpg",title : "jewelery"}]
    return (
        <div className='container py-3'>
            <h2 className='text-3xl font-bold text-center'>Choise Your Category</h2>
            <div className="grid grid-cols-4 gap-4 py-5">
                {
                    cats.map(el =>{
                        return <Category img={el.link} title={el.title} key={el.title}/>
                    })
                }
            </div>
        </div>
    )
}

export default Categories

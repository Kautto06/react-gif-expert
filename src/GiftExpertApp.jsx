import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Metal Gear Solid'])


    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return
        // console.log(newCategory)
        setCategories([newCategory,...categories])
        // setCategories(cat => [...cat,'Silent Hill'])
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
                
            />
            {/* Listado de Gif */}
            
            
            {
                categories.map((category) => (
                        <GifGrid 
                        key={category} 
                        category = {category}/>
                    ))
            }
                
            
                {/* Gif Item */}
        </>
    )
}

export default GiftExpertApp

'use strict'
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import {useStore} from "@/zustand/store";

function BeerItem({id, image_url, name, tagline, description, first_brewed, abv, ph, ebc, srm,}) {
    const [isSelected, setIsSelected] = useState(false);
    const deleteBeerRecipe = useStore((state) => state.deleteBeerRecipe);

    
    const handleContextMenu = (event) => {
        event.preventDefault();
        setIsSelected(!isSelected);

    };
    const deleteItem = ()=>{
        deleteBeerRecipe(id)
    }
    const linkHref = isSelected ? '#' : `${id}`;
    
    return (
        <Link href={linkHref}>
            <div
                className={isSelected ? ' relative  border-4 border-red-500 card ' : 'card'}
                onContextMenu={handleContextMenu}>
                {isSelected && <div className='absolute top-0 right-0 hover:bg-red-300 rounded-full'
                                    onClick={deleteItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>}
                
                <Image className="m-3" src={image_url} alt={name} width={100} height={70} loading='lazy'/>
                <div className='flex-col justify-start'>
                    <h3 className='font-serif text-xl lg:text-2xl text-amber-100 text-center py-1'>{name}</h3>
                    <p className='text-blue-400 text-base lg:text-xl text-center'>{tagline}</p>
                    <p className='text-amber-100 text-sm '>{description}</p>
                    <p className='card_text'>ABV <span className='font-bold'>{abv}</span></p>
                    <p className='card_text'>PH <span className='font-bold'>{ph}</span></p>
                    <p className='card_text'>EBC <span className='font-bold'>{ebc}</span></p>
                    <p className='card_text'>SRM <span className='font-bold'>{srm}</span></p>
                    <p className='card_text'>First Brewed <span className='font-bold'>{first_brewed}</span></p>
                </div>
            </div>
        </Link>
    
    );
}

export default BeerItem;
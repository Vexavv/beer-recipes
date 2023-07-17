'use client'
import {useStore} from "@/zustand/store";
import {useEffect} from "react";

import BeerItem from "@/components/BeerItem";

function BeerList(props) {
 
    const recipes = useStore((state) => state.beerRecipes)
    const fetchData = useStore((state) => state.fetchData);
    
    const selectedIds = useStore((state) => state.selectedIds);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    return (
        <section className='feed'>
            <ul>
                {recipes.map(item => {
                    return <BeerItem key={item.id} {...item}/>
                })}
            </ul>
            </section>
    );
}

export default BeerList;
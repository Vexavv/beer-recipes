'use client'

import Image from "next/image";

function OnePage({data}) {
    const {
        image_url,
        name,
        tagline,
        first_brewed,
        abv,
        ibu,
        ebc,
        srm,
        ph,
        attenuation_level,
        description,
        volume,
        boil_volume,
        ingredients,
        method,
        food_pairing,
        brewers_tips,
        contributed_by
    } = data[0]
    return (
        <>
            <div className='bg-sky-100 p-3'>
                <h1 className='text-xl md:text-5xl text-center font-bold  text-sky-700'>{name}</h1>
                <h2 className='text-xl md:text-3xl text-center  text-sky-500 mb-1 '>{tagline}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 '>
                    <div className='col-span-1 flex justify-center w-full'>
                        <Image className='items-center' src={image_url} alt={name} width={250} height={250}/>
                    </div>
                    <div className='col-span-1 mb-2'>
                        <p className='page_text'>First Brewed: <span className='font-light'>{first_brewed}</span></p>
                        <p className='page_text'>ABV: <span className='font-light'>{abv}</span></p>
                        <p className='page_text'>IBU: <span className='font-light'>{ibu}</span></p>
                        <p className='page_text'>EBC: <span className='font-light'>{ebc}</span></p>
                        <p className='page_text'>SRM: <span className='font-light'>{srm}</span></p>
                        <p className='page_text'>PH: <span className='font-light'>{ph}</span></p>
                        <p className='page_text'>Attenuation level: <span
                            className='font-light'>{attenuation_level}</span></p>
                        <p className='page_text'>Description: <span className='font-light'>{description}</span></p>
                        <p className='page_text'>Volume: <span
                            className='font-light'>{volume.value} {volume.unit}</span></p>
                        <p className='page_text'>Boil Volume: <span
                            className='font-light'>{boil_volume.value} {boil_volume.unit}</span></p>
                    </div>
                    <div className='lg:col-span-2 '>
                        <h2 className='page_title'>Ingredients</h2>
                        <h3 className='page_subTitle'>Malt</h3>
                        <ul>
                            {ingredients.malt.map((item, index) => {
                                return <li key={index}><span className='page_text'>{item.name}</span>: <span
                                    className='font-light'>{item.amount.value} {item.amount.unit}</span></li>
                            })}
                        </ul>
                        <h3 className='page_subTitle'>Hops</h3>
                        <ul>
                            {ingredients.hops.map((item, index) => {
                                return <li
                                    key={index}><span className='page_text'>{item.name}</span>: <span
                                    className='font-light'>{item.amount.value} {item.amount.unit}</span> add: {item.add} attribute: {item.attribute}
                                </li>
                            })}
                        </ul>
                        <p className='page_text'>Yeast: <span className='font-light'>{ingredients.yeast}</span></p>
                        <h2 className='page_title'>Method</h2>
                        <h3 className='page_subTitle'>Mash Temp</h3>
                        <ul>
                            {method.mash_temp.map((item, index) => {
                                return <li className='page_text' key={index}> {item.temp.value} {item.temp.unit},
                                    duration: {item.duration}</li>
                            })}
                        </ul>
                        <p className='page_text'>Fermentation: <span
                            className='font-light'>temp {method.fermentation.temp.value} {method.fermentation.temp.unit}</span>
                        </p>
                        {method.twist &&
                            <p className='page_text'>Twist: <span className='font-light'> {method.twist}</span></p>}
                        <h2 className='page_title'>Food Pairing</h2>
                        <ul>
                            {food_pairing.map((item, index) => {
                                return <li className='page_text list-inside list-disc' key={index}>{item}</li>
                            })}
                        </ul>
                        <p className='page_text'>Brewers tips:<span className='font-light'>  {brewers_tips}</span></p>
                        <p className='page_text'>Contributed by: <span className='font-light'>{contributed_by}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    
    );
}

export default OnePage;
import OnePage from "@/components/OnePage";

async function getData(id) {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    return response.json();
}

export async function generateMetadata({params: {id}}) {
    const recipe = await getData(id);
    let name = recipe[0].name
    return {title: name};
    
    
}

export default async function Recipe({params: {id}}) {
    const recipe = await getData(id);
    return (
        <>
            <OnePage data={recipe}/>
        </>
    
    
    );
}


import BeerList from "@/components/BeerList";


export default function Home() {
  
  return (
   <section className='w-full flex-center flex-col'>
       <h1 className='head_text text-center text-amber-600 '>
           Most Popular Beer Recipes
       </h1>
       <BeerList/>
   </section>
  )
}

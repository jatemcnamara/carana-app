import MainBanner from "@/components/MainBanner"
import SearchBar from "@/components/SearchBar"
import CustomFilter from "@/components/CustomFilter"
import CarCard from "@/components/CarCard"
import { fetchCars } from "@/utils"
import { HomeInterface } from "@/types"
import ShowMore from "@/components/ShowMore"

export default async function Home({searchParams}: HomeInterface) {
  const carsList = await fetchCars({
    manufacturer: searchParams.manufacturer || 'Volkswagen',
    model: searchParams.model || '',
    year: searchParams.year,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 9
  })

  const isDataEmpty = !Array.isArray(carsList) || carsList.length < 1 || !carsList

  return (
    <main className="w-4/5 m-auto max-w-max">
      <MainBanner />
      <div className="mt-20 w-full" id="discover">
        <h2 className="text-3xl h-10">Car catalogue</h2>

        <div className="flex flex-row justify-between w-full mt-5">
          <div className="search-bars w-full">
            <SearchBar />
          </div>
        </div>


        {!isDataEmpty ? (
          <section>
            <div className="cars-cards-container mt-20 flex flex-row justify-start items-center gap-[10%] gap-y-14 lg:gap-x-[5%]  flex-wrap">
              {carsList?.map(car => <CarCard car={car}/>)}
            </div>

            <ShowMore pageNumber={Math.ceil((searchParams.limit || 9) / 9)} isNext={(searchParams.limit || 9) <= carsList.length}/>
          </section>
        )

          : (
          
            <p className="font-nunitoRegular mt-10 text-center text-xl">We didn't find anything. Try to book something else</p>
          )
        }
        
      </div>
    </main>
  )
}

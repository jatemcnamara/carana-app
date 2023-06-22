"use client"

import { ShowMoreInterface } from "@/types"
import { useRouter } from "next/navigation"
import Button from "./ui/Button"
import { useUpdateParams } from "@/hooks/useUpdateParams"

const ShowMore = ({pageNumber, isNext}: ShowMoreInterface) => {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 9
    const newPathName = useUpdateParams('limit', String(newLimit))

    router.push(newPathName)
  }

  return (
    <div className="w-full flex justify-center items-center mt-10">
        {isNext && (
            <Button title="Show more" btnType="button" handleClick={handleNavigation} containerStyles="w-[25%] lg:w-[20%] xl:w-[15%]"/>
        )}
    </div>
  )
}

export default ShowMore
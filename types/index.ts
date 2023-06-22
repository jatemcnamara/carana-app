import { MouseEventHandler } from "react"

export interface CustomButtonPropsInterface {
    title: string
    containerStyles?: string
    btnType?: "button" | "submit"
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface OptionsInterface {
    title: string
    value: string
}

export interface CustomFilterInterface {
    title: string
    options: OptionsInterface[]
    onChange: (value: string) => void
}

export interface SearchManufacturerInterface {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}

export interface CarCardInterface {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type:string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface CarModalInterface {
    isOpen: boolean
    closeModal: () => void
    car: CarCardInterface

}

export interface FilterInterface {
    manufacturer: string
    model: string
    year: number
    fuel: string
    limit: number
}

export interface HomeInterface {
    searchParams: FilterInterface;
}

export interface ShowMoreInterface {
    pageNumber: number
    isNext: boolean
}


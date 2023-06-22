export const useUpdateParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    if (value !== ''){
        searchParams.set(type, value)
    } else{
        searchParams.delete(type)
    }
    
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    
    return newPathName
}
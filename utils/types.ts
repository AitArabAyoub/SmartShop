export type TProduct ={
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}
export type TCartProduct = {
    id : number
    title : string
    price : number
    image : string
    quantity : number
}
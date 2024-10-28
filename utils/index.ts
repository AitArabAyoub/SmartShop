export const getNewProducts = async()=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`,{cache : "no-store"})
    const prods = await req.json()
    return prods
}
export const getProduct = async(id:string)=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`,{cache : "no-store"})
    const prods = await req.json()
    return prods
}
export const getRelativeProds = async(cat:string,id:number)=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${cat}`,{cache : "no-store"})
    const prods = await req.json()
    return prods
}
export const getCatProducts = async(cat:string)=>{
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${cat}`,{cache : "no-store"})
    const prods = await req.json()
    return prods
}
export function PerCalc(price:number,old:number){
    const dis = ((old - price) / old) * 100
    return dis.toFixed(0)
}
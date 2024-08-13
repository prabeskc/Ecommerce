
export interface Iproduct{
    productCategory: ICategory,
    productDescription: string,
    productName: string,
    productPrice: string,
    productRating: string,
    totalProduct: number,
    createdAt: string,
    productImage: string,
    _id:string
}

export interface ICategory{
    id: string
    categoryName: string
}
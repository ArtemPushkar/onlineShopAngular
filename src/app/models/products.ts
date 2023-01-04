export interface IProducts {
    id?: number,
    title: string,
    price: number,
    image?: string;
    configure: IProductsConfig;
}

export interface IProductsConfig {
    color: string,
    legs: number,
    eyes: number,
    memory: string
}

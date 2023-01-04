export interface IProducts {
    id: number,
    title: string,
    price: number,
    image?: string;
    configure: IProductsConfig;
    quantity: number;
}

export interface IProductsConfig {
    color: string,
    legs: number,
    eyes: number,
    memory: string
}

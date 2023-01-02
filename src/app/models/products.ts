// "id": 2,
//             "title": "bear 300",
//             "price": 400,
//             "image": "assets/images/Majestic-Sow.jpeg",
//             "configure": {
//                 "color": "brown",
//                 "legs": 4,
//                 "eyes": 1,
//                 "memory": "super+"

export interface IProducts {
    id: number,
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

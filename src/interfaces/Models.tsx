export interface ProductModel {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

export interface CartProductModel {
    id: number;
    title: string;
    price: number;
    image: ImageModel;
}

export interface ImageModel {
    id: string;
    imageUrl: string;
}

export interface CartModel {
    id: number;
    products: CartProductModel[];
}

export interface RegisterModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginModel {
    email: string;
    password: string;
}


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddProductArgs {
    name: string;
    price: number;
    priceOld: number;
    description: string;
    avatar: string;
    amount: number;
    categoryId: number;
}

export interface UpdateProductArgs {
    name?: Nullable<string>;
    price?: Nullable<number>;
    priceOld?: Nullable<number>;
    description?: Nullable<string>;
    avatar?: Nullable<string>;
    amount?: Nullable<number>;
    categoryId?: Nullable<number>;
    id: number;
}

export interface CreateCategoryInput {
    name: string;
    avatar: string;
}

export interface UpdateCategoryInput {
    id: number;
}

export interface CreateUserInput {
    fullname: string;
    avatar: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    id: number;
}

export interface CategorySchema {
    id: number;
    name: string;
    avatar: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    priceOld: number;
    avatar: string;
    categoryId: number;
    amount: number;
    category: CategorySchema;
}

export interface Response {
    message: string;
    data: number;
}

export interface UserSchema {
    id: number;
    fullname: string;
    avatar: string;
    email: string;
    password: string;
    role: string;
}

export interface IQuery {
    products(): Product[] | Promise<Product[]>;
    getProductById(id: number): Product | Promise<Product>;
    categories(): CategorySchema[] | Promise<CategorySchema[]>;
    getCategoryById(id: number): CategorySchema | Promise<CategorySchema>;
    users(): UserSchema[] | Promise<UserSchema[]>;
    getUserById(id: number): UserSchema | Promise<UserSchema>;
}

export interface IMutation {
    newProduct(createProductInput: AddProductArgs): Product | Promise<Product>;
    updateProduct(product: UpdateProductArgs): Response | Promise<Response>;
    deleteProduct(id: number): Response | Promise<Response>;
    newCategory(createCategoryInput: CreateCategoryInput): CategorySchema | Promise<CategorySchema>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Response | Promise<Response>;
    deleteCategory(id: number): Response | Promise<Response>;
    newUser(createUserInput: CreateUserInput): UserSchema | Promise<UserSchema>;
    updateUser(updateUserInput: UpdateUserInput): Response | Promise<Response>;
    deleteUser(id: number): Response | Promise<Response>;
}

type Nullable<T> = T | null;

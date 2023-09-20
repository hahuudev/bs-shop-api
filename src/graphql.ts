
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

export interface CreateUserInput {
    fullname: string;
    avatar: string;
    email: string;
    password: string;
}

export interface UpdateUserInput {
    id: number;
}

export interface CreateCategoryInput {
    name: string;
    avatar: string;
}

export interface UpdateCategoryInput {
    id: number;
}

export interface CreateOrderInput {
    totalPrice: number;
}

export interface UpdateOrderInput {
    id: number;
}

export interface CreateCommentInput {
    userId: number;
    content: string;
    productId: number;
}

export interface UpdateCommentInput {
    id: number;
}

export interface Response {
    message: string;
    data: number;
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

export interface UserSchema {
    id: number;
    fullname: string;
    avatar: string;
    email: string;
    password: string;
    role: string;
}

export interface OrderSchema {
    totalPrice: number;
}

export interface CommentSchema {
    id: number;
    userId: number;
    content: string;
    productId: number;
    createdAt: string;
    updatedAt: string;
}

export interface IQuery {
    products(): Product[] | Promise<Product[]>;
    getProductById(id: number): Product | Promise<Product>;
    users(): UserSchema[] | Promise<UserSchema[]>;
    getUserById(id: number): UserSchema | Promise<UserSchema>;
    categories(): CategorySchema[] | Promise<CategorySchema[]>;
    getCategoryById(id: number): CategorySchema | Promise<CategorySchema>;
    orders(): OrderSchema[] | Promise<OrderSchema[]>;
    getOrderById(id: number): OrderSchema | Promise<OrderSchema>;
    comments(): CommentSchema[] | Promise<CommentSchema[]>;
    getCommentById(id: number): CommentSchema | Promise<CommentSchema>;
}

export interface IMutation {
    newProduct(createProductInput: AddProductArgs): Product | Promise<Product>;
    updateProduct(product: UpdateProductArgs): Response | Promise<Response>;
    deleteProduct(id: number): Response | Promise<Response>;
    newUser(createUserInput: CreateUserInput): UserSchema | Promise<UserSchema>;
    updateUser(updateUserInput: UpdateUserInput): Response | Promise<Response>;
    deleteUser(id: number): Response | Promise<Response>;
    newCategory(createCategoryInput: CreateCategoryInput): CategorySchema | Promise<CategorySchema>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Response | Promise<Response>;
    deleteCategory(id: number): Response | Promise<Response>;
    neworder(createorderInput: CreateOrderInput): OrderSchema | Promise<OrderSchema>;
    updateOrder(updateOrderInput: UpdateOrderInput): Response | Promise<Response>;
    deleteOrder(id: number): Response | Promise<Response>;
    newComment(createCommentInput: CreateCommentInput): CommentSchema | Promise<CommentSchema>;
    updateComment(updateCommentInput: UpdateCommentInput): Response | Promise<Response>;
    deleteComment(id: number): Response | Promise<Response>;
}

type Nullable<T> = T | null;

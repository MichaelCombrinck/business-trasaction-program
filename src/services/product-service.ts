import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product-interface";

@Injectable({
    providedIn: 'root'
  })

export class ProductService {
    public product: Product[] = [];
    public indexOfProduct:number = 0;
    public billTotal:number = 0;
    
    public addProduct(product:Product) {
        this.product.push(product);
        this.increaseAmount();
    }

    public getProducts() {
        return this.product;
    }

    public setQuantityOfProduct(product:Product) {
        this.indexOfProduct = this.product.indexOf(product, 0);
        this.increaseQuantityOfProduct(this.indexOfProduct);
    }

    private increaseQuantityOfProduct(indexOfProduct: number) {
        this.product[indexOfProduct].quantity++;
    }

    public increaseAmount() {
        this.product[this.indexOfProduct].totalAmount = this.product[this.indexOfProduct].amount * this.product[this.indexOfProduct].quantity;
    }

    public removeProduct(product: Product) {
        const removeProductIndex = this.product.indexOf(product, 0);
        if (removeProductIndex !== -1) {
            this.product.splice(removeProductIndex, 1);
        }
    }

    public setBillTotal(product: Product[]) {
        this.billTotal = 0;  
        for (let i = 0; i < product.length; i++) {
            this.billTotal += product[i].amount as number;
        }
        return this.billTotal;
    }

    public getBillsTotal(): number {
        return this.billTotal;
    }

}
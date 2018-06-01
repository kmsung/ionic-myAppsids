import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Product} from "../../interFaces/Product";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl: string = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  // Product 전체 List
  public getProducts(): Observable<Product[]> {
    return this.http.get(this.baseUrl + "/products")
      .map((resp: Product[]) => {
        return resp.map(product => {
          return new Product(product);
        })
      }).catch(err => {
        return Observable.empty<Product[]>();
      });
  }


  ///Product 등록
  public createProduct(product: Product): Observable<Product> {
    return this.http.post(this.baseUrl + "/products", product)
      .map(resp => new Product(resp));
  }

  // 수정
  public updateProduct(product: Product): Observable<Product> {
    console.log("aasss==",this.baseUrl + "/products/"+product.id);
    console.log("aasss==",this.baseUrl + "/products/"+product.name)
    console.log("aasss==",this.baseUrl + "/products/"+product.cost)
    return this.http.put(this.baseUrl + "/products/"+product.id, product)
      .map(resp => new Product(resp)); // .catch(err => {});
  }
  // 삭제
  public deleteProductById(productId:number): Observable<Product>{
    return this.http.delete(this.baseUrl + "/products/" + productId)
      .map(resp=>{
        return new Product(resp)
      }).catch((err)=>{
        console.error(err);
        return Observable.empty<Product>();
      })
  }

}

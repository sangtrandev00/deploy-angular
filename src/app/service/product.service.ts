import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient // private messageService: MessageService
  ) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl);
  }

  getById(id: string): Observable<IProduct> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProduct>(url);
  }

  onCreate(dataProduct: Omit<IProduct, 'id'>) {
    return this.http.post(this.baseUrl, dataProduct);
  }

  onDelete(id: number): Observable<Object> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  onUpdate(product: IProduct): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/${product.id}`,
      product,
      this.httpOptions
    );
    // .pipe(
    //   tap(_ => this.log(`updated hero id=${hero.id}`)),
    //   catchError(this.handleError<any>('updateHero'))
    // );
  }
}

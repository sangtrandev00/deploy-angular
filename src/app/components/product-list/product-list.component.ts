import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { IProduct } from 'src/app/types/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: IProduct[];

  _listFilter: string = '';
  listProduct: IProduct[] = []; // Store the whole products here!
  currentRating: number = 0;
  currentName: string = '';

  page: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((p) => {
      console.log('products: ', p);

      this.products = p.map((product) => {
        return {
          ...product,
          releaseDate: new Date(product.releaseDate).toDateString(),
        };
      });
    });

    // this.listProduct = this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.products = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.listProduct;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.listProduct.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  // Get and Set to filter products by name

  onFilter() {
    console.log(this.listFilter);
  }

  onRatingClicked(star: StarRatingComponent) {
    console.log('rating: ', star);

    this.currentRating = star.rating;
    this.currentName = star.productName;
  }
}

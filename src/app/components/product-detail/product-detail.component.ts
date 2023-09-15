import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, products } from 'src/app/types/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: IProduct | undefined;
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.params['productId'];
    this.product = products.find((product) => product.id == id);
  }

  ngOnInit() {}
}

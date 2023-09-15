import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/types/Product';
import { Helper } from 'src/app/utils/helper';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  product!: IProduct;
  isFetching: boolean = false;
  editForm = new FormGroup({
    id: new FormControl(1),
    productName: new FormControl(''),
    productCode: new FormControl(''),
    releaseDate: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    starRating: new FormControl(3),
    imageUrl: new FormControl(''),
  });

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const id = this.activatedRoute.snapshot.params['id'];

    console.log('Id: ', id);

    this.productService.getById(id).subscribe((product) => {
      this.product = product;

      this.editForm.patchValue({
        id: product.id,
        productName: product.productName,
        productCode: product.productCode,
        releaseDate: Helper.formatInputDate(product.releaseDate),
        description: product.description,
        price: product.price,
        starRating: product.starRating,
        imageUrl: product.imageUrl,
      });
    });
  }

  onSubmit() {
    console.log(this.editForm.value);

    this.isFetching = true;
    const formData: IProduct = {
      id: this.editForm.value.id as number,
      productName: this.editForm.value.productName as string,
      productCode: this.editForm.value.productCode as string,
      releaseDate: this.editForm.value.releaseDate as string,
      description: this.editForm.value.description as string,
      price: Number(this.editForm.value.price),
      starRating: Number(this.editForm.value.starRating),
      imageUrl: this.editForm.value.imageUrl as string,
    };

    this.productService.onUpdate(formData).subscribe((p) => {
      this.isFetching = false;
      this.route.navigate(['admin', 'products']);
    });
  }
}

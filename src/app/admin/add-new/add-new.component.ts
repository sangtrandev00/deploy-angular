import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/types/Product';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
})
export class AddNewComponent {
  addForm = new FormGroup({
    productId: new FormControl(1),
    productName: new FormControl(''),
    productCode: new FormControl(''),
    releaseDate: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    starRating: new FormControl(''),
    imageUrl: new FormControl(''),
  });
  isFetching = false;
  @Input() type: string = '';
  constructor(private productService: ProductService, private route: Router) {}
  onSubmit() {
    this.isFetching = true;
    const formData: Omit<IProduct, 'id'> = {
      productName: this.addForm.value.productName as string,
      productCode: this.addForm.value.productCode as string,
      releaseDate: this.addForm.value.releaseDate as string,
      description: this.addForm.value.description as string,
      price: Number(this.addForm.value.price),
      starRating: Number(this.addForm.value.starRating),
      imageUrl: this.addForm.value.imageUrl as string,
    };

    console.log('form: ', formData);

    this.productService.onCreate(formData).subscribe((p) => {
      this.isFetching = false;

      console.log('naviagation!!!');

      this.route.navigate(['admin', 'products']);
    });

    // if (type === 'add') {

    // } else if (type === 'edit') {
    //   console.log('edit post here at modal.component', this.postForm.value);
    //   const updatedForm = {
    //     id: this.addForm.value.id as number,
    //     title: this.addForm.value.title as string,
    //     body: this.addForm.value.body as string,
    //   };
    //   console.log('updated form: ', updatedForm);
    //   this.productService.onUpdate(updatedForm).subscribe((p) => {
    //     this.isFetching = false;
    //     window.location.reload();
    //   });
    // }
  }
  // addPostClick() {}
  // onAddPostClick() {
  //   console.log('click add btn in modal');
  //   // this.postEventService.emitAddPostEvent('add');
  // }
}

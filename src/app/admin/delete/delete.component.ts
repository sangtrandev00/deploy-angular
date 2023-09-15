import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const id = this.activatedRoute.snapshot.params['id'];

    this.productService.onDelete(id).subscribe((data) => {
      this.router.navigate(['admin', 'products']);
    });
  }
}

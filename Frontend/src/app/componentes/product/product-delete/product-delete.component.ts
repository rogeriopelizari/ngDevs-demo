import { Product } from './../../../model/product';
import { ProductsService } from './../../../core/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    //this.productService.getById(id).subscribe((product:Product) => {
      //this.product = product;
      console.log(this.product);
    }
    //)}
}

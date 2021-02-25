import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductsService } from './../../../core/products.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['nome', 'preco', 'action']
  dataSource = new MatTableDataSource<Product>(this.products);

  constructor(private productService: ProductsService,
              private route: Router ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.read().subscribe( products =>  {
      this.products = products;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      //console.log(this.products)
    })
  }

  redirectToCreate(){
    this.route.navigate(['/product/create'])
  }
}

import { Product } from './../../../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../../core/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product!: Product;

  constructor( private productService: ProductsService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
    this.productService.getById(id).subscribe((product:Product) => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productService.updProduct(this.product).subscribe(() => {
      alert("Produto atualizado com sucesso!")
      this.router.navigate(['/product']);
    });
  }

  cancelaEdit(){
    this.router.navigate(['/product']);
  }

}

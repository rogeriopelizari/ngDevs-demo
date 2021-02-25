import { Component, OnInit } from '@angular/core';
import { Product } from './../../../model/product';
import { ProductsService } from './../../../core/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.productService.getById(id).subscribe((product:Product) => {
      this.product = product;
      //console.log(this.product);
    })
  }

  deleteProduct(){
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      alert(`Item ID: ${this.product.id } Nome: ${this.product.nome} Preço: ${this.product.preco} Excluído com sucesso!`)
      this.router.navigate(['/product']);
    })
  }

  cancelaDelete(){
    this.router.navigate(['/product']);
  }

}

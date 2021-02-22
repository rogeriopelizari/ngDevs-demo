import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../../core/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private productService: ProductsService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3)]],
      preco: [null, [Validators.required]]
    });
  }

  adicionarProduto(){
    const product = this.productForm.value;

    this.productService.criar(product).subscribe(data => {
      alert("Adicionado com sucesso!")
      this.router.navigate(['/product']);
    })
  }

}

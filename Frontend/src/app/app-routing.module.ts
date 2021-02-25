import { EditProductComponent } from './componentes/product/edit-product/edit-product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCrudComponent } from './componentes/product/product-crud/product-crud.component';
import { CreateProductComponent } from './componentes/product/create-product/create-product.component';
import { ReadProductComponent } from './componentes/product/read-product/read-product.component';
import { ProductDeleteComponent } from './componentes/product/product-delete/product-delete.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductCrudComponent,
    children: [
      {
        path: '',
        component: ReadProductComponent
      },
      {
      path: 'create',
      component: CreateProductComponent
      },
      {
        path: 'delete/:id',
        component: ProductDeleteComponent
      },
      {
        path: 'edit/:id',
        component: EditProductComponent
      }
  ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

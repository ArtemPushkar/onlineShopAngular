import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductResolver } from './services/product.resolver';


const routes: Routes = [

{path: '', component: BaseComponent},
{path: 'products', component: ProductsComponent},
{path: 'product/:id', component: ProductDetailComponent, resolve: {data: ProductResolver}},
{path: 'basket', component: BasketComponent},
{path: '**', redirectTo: "", component: BaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

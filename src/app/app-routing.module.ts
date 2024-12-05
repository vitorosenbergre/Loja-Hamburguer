import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { MenuComponent } from './views/menu/menu.component';
import { OrderComponent } from './views/order/order.component';
import { ProductComponent } from './views/product/product.component';
import { EndComponent } from './views/end/end.component';
import { LocationComponent } from './views/location/location.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireciona para a rota 'home' quando a URL estiver vazia (página inicial)
  { path: 'home', component: HomeComponent }, // Define a rota '/home' que carrega o componente HomeComponent
  { path: 'detail', component: DetailComponent }, // Define a rota '/detail' que carrega o componente DetailComponent
  { path: 'menu', component: MenuComponent }, // Define a rota '/menu' que carrega o componente MenuComponent
  { path: 'order', component: OrderComponent }, // Define a rota '/order' que carrega o componente OrderComponent
  { path: 'product', component: ProductComponent }, // Define a rota '/product' que carrega o componente ProductComponent
  { path: 'category', component: MenuComponent }, // Define a rota '/category' que carrega o componente MenuComponent
  { path: 'location', component: LocationComponent }, // Define a rota '/location' que carrega o componente LocationComponent
  { path: 'contact', component: ContactComponent}, // Define a rota '/contact' que carrega o componente ContactComponent
  { path: 'order/:categoryId', component: OrderComponent },  // Define a rota dinâmica '/order/:category' que carrega o componente OrderComponent, ':category' é um parâmetro de URL que pode ser acessado dentro do componente OrderComponent
  { path: 'detail/:title', component: DetailComponent },   // Define a rota dinâmica '/detail/:title' que carrega o componente DetailComponent, ':title' é um parâmetro de URL que pode ser acessado dentro do componente DetailComponent
  { path: 'product', component: ProductComponent },  // Define a rota '/product' que carrega o componente ProductComponent (repetido na lista de rotas)
  { path: 'end', component: EndComponent },   // Define a rota '/end' que carrega o componente EndComponent
  { path: '**', redirectTo: 'home' }          // Rota coringa '**' que redireciona qualquer URL não reconhecida para a rota 'home'  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

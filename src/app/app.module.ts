import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { DetailComponent } from './views/detail/detail.component';
import { MenuComponent } from './views/menu/menu.component';
import { OrderComponent } from './views/order/order.component';
import { ProductComponent } from './views/product/product.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { OrderService } from './services/order.service';
import { EndComponent } from './views/end/end.component';
import { LocationComponent } from './views/location/location.component';
import { ContactComponent } from './views/contact/contact.component';
import { DescriptionComponent } from './components/description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    HomeComponent,
    DetailComponent,
    MenuComponent,
    OrderComponent,
    ProductComponent,
    EndComponent,
    LocationComponent,
    ContactComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule 
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

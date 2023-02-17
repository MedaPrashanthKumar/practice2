import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    OrderViewComponent,
    SearchComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

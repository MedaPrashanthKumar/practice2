import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'learning',component:LearningComponent},
  {path:'products',component:ProductsComponent},
  {path:'products',children : [
    {path : 'view',component:ProductViewComponent},
    {path :'edit',component:ProductEditComponent},
    {path:'view/:id',component:ProductIdComponent}
  ]},
  //{path:'product-view',component:ProductViewComponent},
  //{path:'product-edit',component:ProductEditComponent},
  //{path:'product/:id',component:ProductIdComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, 
  {path:'order/:id/:id2',component:OrderViewComponent},
  {path :'search' , component : SearchComponent},
  {path:'',redirectTo:'product-view',pathMatch:'full'},
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },// to deal with empty paths
  {path:'**',component:PageNotfoundComponent} //to deal with invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

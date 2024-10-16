import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NewOrdersComponent } from './components/new-orders/new-orders.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"app",
    pathMatch:"full"
  },
  {
    path:"orderhistory",
    component:OrderHistoryComponent
  },
  {
    path:"Notifications",
    component:NotificationsComponent
  },
  {
    path:"neworders",
    component:NewOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import * as customerdetails from './customerdetails.json';



interface customer{
  Order:String;
  Name:String;
  Address:String; 
}


@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrl: './new-orders.component.css'
})
export class NewOrdersComponent implements OnInit  {

  
  Customerdetails: any;
  customers:customer[]=customerdetails.Customers;
chips: any;
  
  ngOnInit():void { 
  
}
items: string[] = ['Uber Eats', 'Cancelled', 'Booked', 'Pending'];
  
  remove(item: string): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
}
  }
}

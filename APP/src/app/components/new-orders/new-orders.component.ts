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

  ngOnInit():void { }
};

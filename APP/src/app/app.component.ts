import { Component, OnInit} from '@angular/core';


interface Customers{
  OrderId:String;
  Name:string;
  Address:string;
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title(title: any) { }
  
}
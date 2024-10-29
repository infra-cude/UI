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
export class AppComponent implements OnInit
{
setOnchangeButton(arg0: number) {
throw new Error('Method not implemented.');
}
activeButton: any;
  
    ngOnInit() {
      // Prevent scrolling of the entire page
      document.body.style.overflow = 'hidden';
  }
 
  }
  
  

 
  
  

import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
FormsModule:any;

  onSubmit(value:any){
    console.log(value);
    localStorage.setItem('key',JSON.stringify(value))
  }
  
 
}
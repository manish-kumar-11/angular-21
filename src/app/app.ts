import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Child } from "./components/child/child";
import { Nabvar } from "./components/nabvar/nabvar";
import { Home } from "./components/home/home";

interface Person{
  name:string;
  age:number;
  address:{
    street:string;
    city:string;
    state:string;
    zip:string; 
  };
  phoneNumber:number[];

}
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, CardModule, ButtonModule, CommonModule, Child, Nabvar, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  protected readonly title = signal('angular-v-20');
  data:string = 'Angular v20';
  person:Person = {
    name:'John Doe',
    age:30, 
    address:{ street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
    phoneNumber:[1234567890, 9876543210]
  }

  titleChange(newTitle:string){
   // this.title.set(newTitle);
    console.log('Title changed to:', newTitle);
  }
}

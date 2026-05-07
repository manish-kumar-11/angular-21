import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

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
  imports: [RouterOutlet, CardModule,ButtonModule,CommonModule],
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
}

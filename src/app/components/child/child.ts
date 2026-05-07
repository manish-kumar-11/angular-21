import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() title: string ='';
  @Output() titleChange = new EventEmitter<string>();

  ngOnInit() {
    console.log('Child component initialized with title:', this.title);
    this.title= 'child component';
    this.titleChange.emit(this.title);
  }
}

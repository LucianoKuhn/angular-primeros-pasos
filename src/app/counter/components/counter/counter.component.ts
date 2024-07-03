import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  i: number = 10;

  contador(i:number):void  {
  
    this.i = this.i + i;
  }
  reset():void{
    this.i= 10;
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: v4(),
      name: 'Trunks',
      power: 10,
    },
  ];

  onDeleteEmit(id?: string):void {

    if(!id) return; //! si no le paso ID entonces retorna y no devuelve nada.
    console.log(id);
    this.onDeleteCharacter.emit(id);
    


  }
}

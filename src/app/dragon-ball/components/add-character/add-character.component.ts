import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  
  //emisor de characters
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter():void{ 
    //emitimos el character
    this.onNewCharacter.emit(this.character);

    //reseteamos los campos del form
    this.character = {name:'', power: 0} ;
  
  }

}

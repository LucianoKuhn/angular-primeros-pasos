import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

    //def. un arreglo de personajes con 2 personajes
    public characters: Character[] = [{
      id: v4(), //v4 da el ID
      name: 'Krillin', 
      power: 1000
  },{
      id: v4(),
      name: 'Goku',
      power:9500
  }]; 

  //recibimos el character desde el add-character
  addCharacter(character:Character):void{

      
      const newCharacter: Character = {
        id: v4(),
        ...character //! lo que hice en esta linea es lo mismo que las 2 linas de abajo.
        //name: character.name,
        //power: character.power
      };
      this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string):void{
 
      //! regresamos un nuevo arreglo con los personajes que no coincidan con el id pasado.
      this.characters = this.characters.filter( character => character.id !== id)
  }


}

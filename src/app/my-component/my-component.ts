import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  pokemonList = [new Pokemon("1","Pikachu"),new Pokemon("2","Racaillou"),new Pokemon("3","Meowth"),new Pokemon("4","Psycoduck"),new Pokemon("5","Onix")];
  id: string = '';
  selectedPokemon: number = 0;

  GO(){
    console.log(this.selectedPokemon);
  }
}


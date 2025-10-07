import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiQuery } from '../api-query';
@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  constructor(private query: ApiQuery){}
  pokemonList = [new Pokemon("1","Pikachu"),new Pokemon("2","Racaillou"),new Pokemon("3","Meowth"),new Pokemon("4","Psycoduck"),new Pokemon("5","Onix")];
  id: string = '';
  selectedPokemon: number = 0;

  GO(){
    console.log(this.selectedPokemon);
    this.query.getPokemonFromId("1");
  }
}


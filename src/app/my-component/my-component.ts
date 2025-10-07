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
   pokemonList:Pokemon[] = [];
  id: string = '';
  selectedPokemonUrl: string = "";
  ngOnInit(){
   this.getPokemonList();
  }
  
  getPokemonList():void{
     this.query.getPokemonList().subscribe(_pokemonList => this.pokemonList = _pokemonList.results);
  }
  GO(){
    console.log(this.selectedPokemonUrl);
    this.query.getPokemonFromUrl(this.selectedPokemonUrl);
  }
}


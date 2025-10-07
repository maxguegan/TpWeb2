import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiQuery {
  constructor(private http: HttpClient){}

  getPokemonFromId(id:string) {
    this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/"+id).subscribe( pokemon => {console.log(pokemon.name)});
  }
}

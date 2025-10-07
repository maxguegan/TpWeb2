import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

interface AllPokemonQuery{
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiQuery {
  constructor(private http: HttpClient){}
  getPokemonList(){
    return this.http.get<AllPokemonQuery>("https://pokeapi.co/api/v2/pokemon");
  }

  getPokemonFromUrl(url :string) {
    this.http.get<Pokemon>(url).subscribe( pokemon => {console.log(pokemon)});
  }
}

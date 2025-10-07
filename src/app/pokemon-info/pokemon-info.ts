import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-info',
  standalone: false,
  templateUrl: './pokemon-info.html',
  styleUrl: './pokemon-info.css'
})
export class PokemonInfo {
  @Input() selectedPokemon?:Pokemon;
  ngOnChange(){
    this.render();
  }
  render(){
    if(this.selectedPokemon){
      
      return this.selectedPokemon.name
    }else{
      return "test1"
    }
  }
}

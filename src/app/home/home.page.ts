import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((data) => {
      console.log(data);
      this.pokemons = data;
    });
  }

  goToDetails(pokemonId: number) {
    console.log(pokemonId);
    this.router.navigate(['/pokemon-detail', pokemonId]);
  }
  
}

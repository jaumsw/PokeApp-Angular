import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any;
  pokemonId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonId = id ? +id : undefined;
    if (this.pokemonId !== undefined) {
      this.pokemonService.getPokemonDetail(this.pokemonId).subscribe((data: any) => {
        console.log(data);
        this.pokemon = data;
      });
    }
  }
}

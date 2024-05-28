import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((result: any) => {
        return result.results.map((pokemon: { name: any; }, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));
      })
    );
  }

  getPokemonDetail(id:number): Observable<any>{
    const data = `https://pokeapi.co/api/v2/pokemon/${id}`
    return this.http.get(data);
  }
}

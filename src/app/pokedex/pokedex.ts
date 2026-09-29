// src/app/pokedex/pokedex.ts
import { Component, inject, input, signal, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon';
import { PokemonDetail } from '../pokemon.model';

const ID_MINIMO = 1;
const ID_MAXIMO = 151; 

@Component({
  selector: 'app-pokedex',
  imports: [],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  private pokemonService = inject(PokemonService);
  private router = inject(Router);

  id = input.required<string>();

  pokemon = signal<PokemonDetail | null>(null);
  carregando = signal(true);

  idAtual = computed(() => Number(this.id()));
  pesoEmKg = computed(() => {
    const p = this.pokemon();
    return p ? p.weight / 10 : 0;
  });
  podeVoltar = computed(() => this.idAtual() > ID_MINIMO);
  podeAvancar = computed(() => this.idAtual() < ID_MAXIMO);

  constructor() {

    effect(() => {
      const idParaBuscar = this.idAtual();
      this.carregando.set(true);
      this.pokemonService.getDetalhePorId(idParaBuscar).subscribe((dados) => {
        this.pokemon.set(dados);
        this.carregando.set(false);
      });
    });
  }

  irParaAnterior(): void {
    if (this.podeVoltar()) {
      this.router.navigate(['/pokedex', this.idAtual() - 1]);
    }
  }

  irParaProximo(): void {
    if (this.podeAvancar()) {
      this.router.navigate(['/pokedex', this.idAtual() + 1]);
    }
  }
}
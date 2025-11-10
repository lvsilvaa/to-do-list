import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ItemLista } from "./ItemLista";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-lista-compras',
  imports: [
    FormsModule, 
    CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})

export class ListaCompras implements OnInit {
lista: ItemLista[] = [];
  produto: string = '';
  private readonly STORAGE_KEY = '_LISTA_COMPRAS';

  ngOnInit(): void {
    this.carregarLista();
  }

  adicionarItem() {
    if (!this.produto.trim()) return; // evita adicionar vazio

  const itemLista = new ItemLista();
  itemLista.id = this.lista.length + 1;
  itemLista.name = this.produto;
  itemLista.comprado = false;

  this.lista.push(itemLista);
  this.produto = '';
  this.salvarLista();
}
  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
    this.salvarLista();
  }

  removerItem(id: number) {
    this.lista = this.lista.filter(item => item.id !== id);
    this.salvarLista();
  }

  limparLista() {
    this.lista = [];
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private salvarLista() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.lista));
  }

  private carregarLista() {
    const storage = localStorage.getItem(this.STORAGE_KEY);
    if (storage) {
      this.lista = JSON.parse(storage);
    }
  }
}
import { AngularJSUrlCodec } from '@angular/common/upgrade';

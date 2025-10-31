import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ItemLista } from "./ItemLista";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})


export class ListaCompras {

  lista: ItemLista[] = [];
  item: string = '';

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.name = this.item;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
    this.item = '';
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
      
  }

  limparLista(){
    this.lista = [];
  }


}

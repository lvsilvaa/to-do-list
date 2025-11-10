import { Injectable } from "@angular/core";
import { produtos } from "./lista-compras/produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  static REPO_PRODUTOS = "_PRODUTOS";

  constructor() {}
  private obterStorage(): produtos[] {
    const storage = localStorage.getItem(ProdutoService.REPO_PRODUTOS);
    return storage ? JSON.parse(storage) as produtos[] : [];
  }

  adicionarItem(produto: produtos): void {
    const storage = this.obterStorage();
    storage.push(produto);
    localStorage.setItem(ProdutoService.REPO_PRODUTOS, JSON.stringify(storage));
  }
}
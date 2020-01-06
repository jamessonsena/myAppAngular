import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { ProdutoService } from 'src/app/services/produto.services';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) {

   }

  public produtos: Produto[];

  ngOnInit() {
  //Assim que o componente estiver pronto.
    this.produtoService.obterPets()
    .subscribe(//Ouvindo evento de retorno.
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }

}

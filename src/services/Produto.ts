export class Produto {

  public nomeProduto: string;
  public valor: number;

  constructor(nomeProduto: string, valor: number) {
    this.nomeProduto = nomeProduto;
    this.valor = valor;
  }

  aplicarDesconto(valorDesconto: number) {
    if(valorDesconto > this.valor) {
      this.valor = 0;
    } else {
      this.valor = this.valor - valorDesconto;
    }
    return this.valor;
  }

  aplicarAcrescimo(valorAcrescimo: number) {
    if(!(valorAcrescimo < 0)) {
      this.valor = this.valor + valorAcrescimo;
    }
    return this.valor;
  }

}

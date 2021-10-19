export class Produto {

  public nomeProduto: string;
  public valor: number;

  constructor(nomeProduto: string, valor: number) {
    this.nomeProduto = nomeProduto;
    this.valor = valor;
  }

  aplicarDesconto(valorDesconto: number) {
    if(valorDesconto > this.valor) {
      this.valor = -10;
    } else {
      this.valor = this.valor - valorDesconto;
    }
    return this.valor;
  }

}

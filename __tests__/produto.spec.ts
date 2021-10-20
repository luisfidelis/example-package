import { Produto } from "../src/services/Produto";


describe("Produto", () => {
  describe("aplicarDesconto", () => {

    it("Deve retornar o valor do produto com o desconto aplicado", () => {
      const produto = new Produto("Bola de futebol", 100);
      const novoValor = produto.aplicarDesconto(20);
      expect(novoValor).toBe(80);
    })

    it("Deve retornar 0 como valor do produto, caso o desconto seja maior que o seu valor", () => {
      const produto = new Produto("Bola de futebol", 100);
      const novoValor = produto.aplicarDesconto(120);
      expect(novoValor).toBe(0);
    })

  })

  describe("aplicarAcrescimo", () => {
    it("Deve retornar o valor do produto com o acrescimo aplicadp", () => {
      const produto = new Produto("Bola de futebol", 100);
      const novoValor = produto.aplicarAcrescimo(10);
      expect(novoValor).toBe(110);
    })

    it("Deve retornar o valor do produto  anterior, sem acrescimo, caso o acrescimo informado seja menor que 0", () => {
      const produto = new Produto("Bola de futebol", 100);
      const novoValor = produto.aplicarAcrescimo(-10);
      expect(novoValor).toBe(100);
    })

  })
})

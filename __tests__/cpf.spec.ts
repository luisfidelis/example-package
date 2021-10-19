import { validarCPF } from "../src/services/CPF";

describe("Testes do serviço CPF", () => {
  describe("validarCPF", () => {

    it("deve retornar falso se for passado um cpf nulo", () => {
      const cpfASerTestado : string = null;
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBe(false);
    })

    it("deve retornar falso se for passado um cpf com menos de 11 caracteres", () => {
      const cpfASerTestado = "12345678";
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })

    it("deve retornar falso se for passado um cpf com mais de 11 caracteres", () => {
      const cpfASerTestado = "12345678910123";
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })

  });
});

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

    it('deve retornar falso se for passado o cpf 00000000000',()=> {
      const cpfASerTestado = '00000000000';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 11111111111',()=> {
      const cpfASerTestado = '11111111111';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 22222222222',()=> {
      const cpfASerTestado = '22222222222';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 33333333333',()=> {
      const cpfASerTestado = '33333333333';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 44444444444',()=> {
      const cpfASerTestado = '44444444444';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 55555555555',()=> {
      const cpfASerTestado = '55555555555';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 66666666666',()=> {
      const cpfASerTestado = '66666666666';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 77777777777',()=> {
      const cpfASerTestado = '77777777777';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 88888888888',()=> {
      const cpfASerTestado = '88888888888';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })
    it('deve retornar falso se for passado o cpf 99999999999',()=> {
      const cpfASerTestado = '99999999999';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeFalsy();
    })

    it('deve retornar verdadeiro se for passado um cpf valido',()=> {
      const cpfASerTestado = '03561217044';
      const validacaoCPF = validarCPF(cpfASerTestado);
      expect(validacaoCPF).toBeTruthy();
    })

  });
});

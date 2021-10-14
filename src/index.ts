import * as CPFService from "./services/CPF";
import * as CNPJService from "./services/CNPJ";
import * as CEPService from "./services/CEP";

// --- CPF
export const validarCPF = CPFService.validarCPF;
export const gerarCPF = CPFService.gerarCPF;

// --- CNPJ
export const validarCNPJ = CNPJService.validarCNPJ;
export const gerarCNPJ = CNPJService.gerarCNPJ;

// --- CEP
export const buscaEnderecoPorCEP = CEPService.buscaEnderecoPorCEP;
export type Endereco = CEPService.Endereco;
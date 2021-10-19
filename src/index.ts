import * as CPFService from './services/CPF';
import * as CNPJService from './services/CNPJ';
import * as CEPService from './services/CEP';

// --- CPF
export const { validarCPF } = CPFService;
export const { gerarCPF } = CPFService;

// --- CNPJ
export const { validarCNPJ } = CNPJService;
export const { gerarCNPJ } = CNPJService;

// --- CEP
export const { buscaEnderecoPorCEP } = CEPService;
export type Endereco = CEPService.Endereco;

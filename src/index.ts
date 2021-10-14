import * as CPFService from "./services/CPF";
import * as CNPJService from "./services/CNPJ";

// --- CPF
export const validarCPF = CPFService.validarCPF;
export const gerarCPF = CPFService.gerarCPF;

// --- CNPJ
export const validarCNPJ = CNPJService.validarCNPJ;

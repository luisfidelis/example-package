import axios from 'axios';

export type Endereco = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export const buscaEnderecoPorCEP = async (cep: string): Promise<Endereco> => {
  const URL = 'https://viacep.com.br/ws/[CEP]/json/';
  const search = URL.replace('[CEP]', cep);
  const response = await axios.get<Endereco>(search);
  return response.data;
};

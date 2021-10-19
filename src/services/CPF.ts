
export const validarCPF = (cpf: string) : boolean => {
  if (cpf == null) {
    return false;
  }
  if (cpf.length != 11) {
    return false;
  }
  if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
    return false;
  }
  let numero: number = 0;
  let caracter: string = '';
  let numeros: string = '0123456789';
  let j: number = 10;
  let somatorio: number = 0;
  let resto: number = 0;
  let digito1: number = 0;
  let digito2: number = 0;
  let cpfAux: string = '';
  cpfAux = cpf.substring(0, 9);
  for (let i: number = 0; i < 9; i++) {
    caracter = cpfAux.charAt(i);
    if (numeros.search(caracter) == -1) {
      return false;
    }
    numero = Number(caracter);
    somatorio = somatorio + (numero * j);
    j--;
  }
  resto = somatorio % 11;
  digito1 = 11 - resto;
  if (digito1 > 9) {
    digito1 = 0;
  }
  j = 11;
  somatorio = 0;
  cpfAux = cpfAux + digito1;
  for (let i: number = 0; i < 10; i++) {
    caracter = cpfAux.charAt(i);
    numero = Number(caracter);
    somatorio = somatorio + (numero * j);
    j--;
  }
  resto = somatorio % 11;
  digito2 = 11 - resto;
  if (digito2 > 9) {
    digito2 = 0;
  }
  cpfAux = cpfAux + digito2;
  if (cpf != cpfAux) {
    return false;
  }
  else {
    return true;
  }
}

export const gerarCPF = (mascara?:boolean) : string => {
    const gera_random = (n: number) => {
        var ranNum = Math.round(Math.random()*n);
        return ranNum;
    }

    const mod = (dividendo: number, divisor: number) => {
        return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
    }

    const n = 9;
    const n1 = gera_random(n);
    const n2 = gera_random(n);
    const n3 = gera_random(n);
    const n4 = gera_random(n);
    const n5 = gera_random(n);
    const n6 = gera_random(n);
    const n7 = gera_random(n);
    const n8 = gera_random(n);
    const n9 = gera_random(n);
    let d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
    d1 = 11 - (mod(d1,11));
    if (d1>=10) d1 = 0;
    let d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
    d2 = 11 - (mod(d2,11));
    if (d2>=10) d2 = 0;

    if (mascara) {
        return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
    }
    return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
}

//Arrow Function
const subtracao2 = (a, b) => a - b;

const somar2Versao2 = (a) => a + 2;

const diaDoMesVersao2 = () => new Date().getDate();

console.log(subtracao2(6, 8));
console.log(somar2Versao2(6));
console.log(diaDoMesVersao2());

const superFuncaoVersao2 = (a, b) => {
  let subtracao = a - b;
  subtracao = subtracao - 2;
  let diaDoMes = new Date().getDate();
  return diaDoMes, subtracao;
};

console.log(superFuncaoVersao2(1, 2));

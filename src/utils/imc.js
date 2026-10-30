import function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

export function classificar(imc) {
    if (imc < 18.5) return {texto: "Abaixo do peso", classe: "abaixo"};
    if (imc < 25) return {texto: "Peso normal", classe: "normal"};
    if (imc < 30) return {texto: "Acima do peso", classe: "sobrepeso"};
    return {texto: "Obesidade", classe: "Obesidade"};
}
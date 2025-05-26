let num1 = 24
let num2 = 4
let comando = "divisao"
switch (comando) {
    case "soma":
        console.log("Resultado:", num1 + num2)
        break
    case "subtracao":
        console.log("Resultado:", num1 - num2)
        break
    case "multiplicacao":
        console.log("Resultado:", num1 * num2)
        break
    case "divisao":
        console.log("Resultado:", num1 / num2)
        break
    default:
        console.log("Comando inválido")
}

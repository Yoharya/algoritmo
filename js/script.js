
const saida = document.getElementById("saida");

function escrever(texto) {
  saida.textContent += texto + "\n";
}

function limpar() {
  saida.textContent = "";
}

function lerNumero(mensagem) {
  const entrada = prompt(mensagem);
  if (entrada === null) return null;
  return parseFloat(entrada.replace(",", "."));
}

// ---------- Exercício 1 ----------
function exercicio1() {
  limpar();
  let continuar = true;

  while (continuar) {
    let soma = 0;
    escrever("Nova operação de soma");

    for (let i = 1; i <= 3; i++) {
      let numero = lerNumero(`Informe o ${i}º número:`);

      if (numero === null) {
        escrever("Execução cancelada.");
        return;
      }
      if (isNaN(numero)) {
        escrever("Entrada inválida! O valor será considerado 0.");
        numero = 0;
      }
      soma += numero;
    }

    escrever(`Soma total dos três números: ${soma}\n`);
    continuar = confirm("Deseja fazer uma nova operação?");
  }

  escrever("Obrigado. Programa encerrado.");
}

// ---------- Exercício 2 ----------
function exercicio2() {
  limpar();
  let continuar = true;

  while (continuar) {
    escrever("ANÁLISE DE NÚMEROS");
    const quantidade = lerNumero("Quantos números você deseja analisar nesta rodada?");

    if (quantidade === null) {
      escrever("Execução cancelada.");
      return;
    }

    if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(quantidade)) {
      escrever("Por favor, insira um número inteiro maior que zero.\n");
    } else {
      let soma = 0;

      for (let i = 1; i <= quantidade; i++) {
        let numero = lerNumero(`Digite o ${i}º número:`);

        if (numero === null) {
          escrever("Execução cancelada.");
          return;
        }
        if (isNaN(numero)) {
          escrever("Valor inválido! Considerando como 0.");
          numero = 0;
        }
        soma += numero;
      }

      const media = soma / quantidade;
      escrever(`Soma total: ${soma}`);
      escrever(`Média dos valores: ${media.toFixed(2)}\n`);
    }

    continuar = confirm("Deseja fazer uma nova análise?");
  }

  escrever("Obrigado. Programa encerrado.");
}

// ---------- Exercício 3 (Difícil) ----------
function exercicio3() {
  limpar();
  let continuar = true;

  while (continuar) {
    escrever("ANÁLISE DE NÚMEROS");
    const quantidade = lerNumero("Quantos números você deseja analisar nesta rodada?");

    if (quantidade === null) {
      escrever("Execução cancelada.");
      return;
    }

    if (isNaN(quantidade) || quantidade <= 0 || !Number.isInteger(quantidade)) {
      escrever("Por favor, insira uma quantidade válida e maior que zero.\n");
      continue;
    }

    let soma = 0;
    let maior;
    let menor;

    for (let i = 1; i <= quantidade; i++) {
      let numero = lerNumero(`Digite o ${i}º número:`);

// Pergunta de novo enquanto o valor for inválido

      while (numero !== null && isNaN(numero)) {
        numero = lerNumero(`Valor inválido! Digite novamente o ${i}º número:`);
      }
      if (numero === null) {
        escrever("Execução cancelada.");
        return;
      }

      soma += numero;

      if (i === 1) {
        maior = numero;
        menor = numero;
      } else {
        if (numero > maior) maior = numero;
        if (numero < menor) menor = numero;
      }
    }

    const media = soma / quantidade;

    escrever("RESULTADOS DA ANÁLISE");
    escrever(`Quantidade lida : ${quantidade}`);
    escrever(`Soma dos valores: ${soma}`);
    escrever(`Média calculada : ${media.toFixed(2)}`);
    escrever(`Maior número    : ${maior}`);
    escrever(`Menor número    : ${menor}\n`);

    continuar = confirm("Deseja realizar uma nova análise?");
  }

  escrever("Programa encerrado. Obrigado!");
}

document.getElementById("btn1").addEventListener("click", exercicio1);
document.getElementById("btn2").addEventListener("click", exercicio2);
document.getElementById("btn3").addEventListener("click", exercicio3);
document.getElementById("limpar").addEventListener("click", limpar);

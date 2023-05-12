console.log('Aula de Strings');

// Testando a quebra de linha - \n
let frase = "Estou em uma linha \nEstou em outra linha"
console.log(frase);
// imprime no Console assim: 
// Estou em uma linha 
// Estou em outra linha

//Aqui abaixo um exemplo de Length, que nos diz quantos caracteres tem numa String, incluindo os espaços
let celularCidadePais = "+55 11 912348765"
console.log(celularCidadePais.length);

let numeroCep = "09182-050".length
console.log(numeroCep);
// no exemplo acima, vimos que é possível também aplicarmos a propriedade Length direto na variável, e depois é só dar um console.log pra imprimir o resultado.

// Abaixo um exemplo de UpperCase, que transforma todas as letras da String em maiúsculas   
let meuNomeMaiusculo = "leonardo canone"
console.log(meuNomeMaiusculo.toUpperCase());

let meuNomeMinusculo = "LEONARDO CANONE".toLowerCase()
console.log(meuNomeMaiusculo);
// Aqui acima mesma coisa, apliquei o método direto na variável, e depois chamei apenas o nome dela no console.log

// Aqui abaixo decidi aplicar dois métodos pra tratar uma única (mesma) variável de uma só vez, e apliquei no console.log primeiro o trim(), que retira os espaços antes e depois da string (não retira do meio), e em seguida padronizei também o email tudo em letras minúsculas utilizando o LowerCase logo na sequência do trim.
let seuEmail = "   LEONARDO@gmail.com    "
console.log(seuEmail.trim().toLowerCase())

// Agora a aula - Prática guiada

// let seuNome = prompt(`Qual é o seu nome?`)
// let corFavorita = prompt(`Qual é o sua cor favorita?`)

let seuNome = "Leonardo"
let corFavorita = "verde"
let citacaoFavorita = "Frase inicial. \"Citação favorita.\" Fim do teste!"

// na sequência abaixo temos os seguintes formatos de Strings: 
// 1 Concatenação, 1 Template Strings pura, 3x Aspas nas Aspas, 1 Quebra de linha.
console.log("A cor favorita do " + seuNome + " é " + corFavorita + "!");
console.log(`A cor favorita do ${seuNome} é ${corFavorita}!`);
console.log(`A cor favorita do "${seuNome}" é ${corFavorita}!`);
// na linha acima, no modelo Template String, podemos colocar Aspas duplas e elas aparecerão normalmente no Console. 
console.log(citacaoFavorita);
console.log('Testando as "aspas" dentro de aspas.');
console.log(`Nome: ${seuNome} \nCor favorita: ${corFavorita}`);

// fim da Prática guiada
// Agora Momento de réplica

console.log(seuNome.toUpperCase());
console.log(seuNome.length);
console.log(seuNome);
console.log('Tem a minúsculo?:',seuNome.includes("a"));
console.log('Tem x minúsculo?:',seuNome.includes("x"));
console.log('Tem A maiúsculo?:',seuNome.includes("A"));
console.log('Tem L maiúsculo?:',seuNome.includes("L"));
console.log('Tem l minúsculo?:',seuNome.includes("l"));
// é interessante que se eu colocar A maiúsculo no includes, vai dar false, pois ele considera maiúsculas e minúsculas como diferentes. Depois que entendi isso fiz ainda mais testes, e ficou bem mais claro de entender o exemplo apenas com o meu primeiro nome escrito assim - Leonardo.

// Agora Exercício de fixação

// Parte 1 - resolvi comentar os Prompts pois dá muito trabalho, me baseei direto nas variáveis
// let seuNome2 = prompt(`Qual é o seu nome?`)
// let seuEmail2 = prompt(`Qual é o seu email?`)

let seuNome2 = "Marco Antonio"
let seuEmail2 = "marcoantonio@gmail.com"
let caracteresNome = seuNome2.length

console.log(`O email ${seuEmail2} foi cadastrado com sucesso. Boas vindas, ${seuNome2}! Seu nome tem ${caracteresNome} caracteres.`);
// aqui acima fizemos a Parte 1 e 2 do exercício.

// Aqui na parte 3, pra fazer a letra a) tivemos que copiar a frase do console.log feita acima, e armazená-la em uma variável, conforme vemos abaixo.
let mensagem = `O email ${seuEmail2} foi cadastrado com sucesso. Boas vindas, ${seuNome2}! Seu nome tem ${caracteresNome} caracteres.`
// no meu caso, eu resolvi substituir as letras s minúsculas por x minúsculas, e fiz o mesmo com as maiúsculas.
//utilizei aquele mesmo esquema de colocar dois métodos na sequência, e deu certo.
let mensagemAlterada = mensagem.replaceAll("s","x").replaceAll("S","X")
console.log(mensagemAlterada);
// abaixo a resolução da letra b), e terminamos por aqui.
console.log("O email inserido possui @ ?",seuEmail2.includes("@"));

// abaixo, mais testes interessantes que pensei depois da aula

//aqui abaixo utilizei o replaceAll para eliminar todos os espaços da Srtring, tanto nas pontas, tarefa feita pelo método trim(), porém pelo replaceAll ele também remove os espaços do meio da string, como faríamos pela ferramenta substituir do Excel. 
let removerEspacos = "    fulano @ gma il. com".replaceAll(" ","") 
console.log(removerEspacos)

let usandoReplace = "A cor que mais gosto é verde, adoro a cor verde".replace("verde","azul")
console.log(usandoReplace);
// Uma informação importante após fazer esse teste, é que no console o replace altera primeiro a palavra verde da esquerda pra direita, então a frase fica assim: A cor que mais gosto é azul, adoro a cor verde.

let doisMetodosValeOultimo = "OiiiIIIeeEEeEeeeeEEeee".toLowerCase().toUpperCase()
console.log(doisMetodosValeOultimo);
// acima entendemos a ideia que o último método sobrepõe o primeiro, especialmente quando estamos fazendo comandos inversos, como neste caso do exemplo. Para os demais casos, fazer mais de um método acaba sendo apenas um ótimo complemento, seja métodos diferentes como combinar trim com com LowerCase, ou também utilizar dois replaceAll para fazer tratamentos diferentes em uma mesma String.


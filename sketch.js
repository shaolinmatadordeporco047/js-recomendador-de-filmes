// idade: 14 anos
// Comédia: Desencanto
//Ação: Vingadores
//Animação: Desencanto

// idade: 10 anos
// Comédia: ICarly
//Ação: Jovens Titãs
//Animação: Hora de Aentura

// idade: 18 anos
// Comédia: American Pei
//Ação: Deadpool
//Animação: Rick and Morty

// idade: livre
// Comedia: Scooby Doo
// Ação: Homem-Aranha: Através do Aranhaerso
//Animação: Peppa Pig

let campoIdade;
let campoComedia;
let campoAcao;
let campoAnimacao;

function setup() {
  createCanvas(600, 400);
  createElement('h1', 'Recomendador de Filmes e Series');
  createSpam('informe sua idade');
  campoIdade = CreateInput();
  campoComedia = createCheckbox('Comédia')
  campoAcao = createCheckbox('Ação')
  campoAnimacao = createCheckbox('Animação')
}

function draw() {
  background("blue");
  textAlign(CENTER, CENTER)
  textSize(40);
  fill("white");
  
  let idade = campoIdade.value();
  let comedia = campoComedia.checked()
  let acao = campoAcao.checked()
  let animacao = campoAnimacao.checked()
  
  let filme = geraRecomendacao(idade);
  
 text( filme , width/2, height/2);
}

function geraRecomendacao(idade, comedia, acao, animacao){
  
}
  if(idade >= 18){
    return "Deadpool"
  } else if(idade >= 14){
    return "Desencanto"
  } else if(idade>= 10){
    return "Icarly"
  } else{
    return "Peppa pig"
  }else{
}
   return 'Homem aranha: Através do Aranhaverso'
}

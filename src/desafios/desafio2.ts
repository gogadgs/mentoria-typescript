// Como podemos melhorar o esse código usando TS? 

type Gente={nome:string,idade:number,profissao:string}
enum Profissao{Padeiro,Atriz}


// sintaze usando type e tipando as propriedades do objeto //
let pessoa1 = {} as Gente;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"



let pessoa2 = {}as Gente;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

// enum como no sql para dar opções fechadas aos valores das propriedades do objeto//

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};

let pessoa4 = {
    nome : "carlos",
    idade : 19,
    profissao : Profissao.Padeiro
}
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// primeiro exemplo tipar propriedade do objeto //

let employee:{code:number,name:string} = {
    code:0,
    name:'john'
};
employee.code = 10;
employee.name = "John";

// segundo exemplo interface//
interface Employed2 {
    code: number;
    name: string;
}

let employed2:Employed2 =  {
    code: 1,
    name: "Douglas"
}

// inferencia de tipo //
const funcionarioGenaralizado = {
    codigo: 2,
    nome: 'Goga'
}

// alias para tipar dados como no sql //

const FuncionarioBancoDeDados = {} as Employed2;
FuncionarioBancoDeDados.code = 3;
FuncionarioBancoDeDados.name = 'Santos';



// outro tipo de chamada que é a logica e igual acima
const Employed3: Employed2 = {
    code: 4,
    name: 'Douglas G. dos Santos'
}

type Employed3= {code :number , name:string;}

const Employed4 : Employed3 = {
    code:5,
    name:'Agatha'
}
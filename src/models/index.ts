class Empresa {
    public readonly  nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string

    constructor(name: string, cnpj: string) {
        this.nome = name;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador):void {
        this.colaboradores.push(colaborador);
    }

    mostrarColoboradores():void {
        for(const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

class Colaborador {
    constructor(readonly nome: string, readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Banco do Brasil', '312321456456465');

const colaborador1 = new Colaborador('Davi', 'Bonfim');
empresa1.adicionaColaborador(colaborador1);
empresa1.mostrarColoboradores();

console.log(empresa1);
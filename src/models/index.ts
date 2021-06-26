class Empresa {
    private readonly colaboradores: Colaborador[] = [];
    public readonly  name: string;
    protected readonly cnpj: string

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }
}

class Colaborador {}

const empresa1 = new Empresa('Banco do Brasil', '312321456456465');

console.log(empresa1);
// import express from 'express';
//
// const server = express();
// server.use(express.json());
//
// server.get('/', (req, res) => {
//     res.json({ Message : 'Hello' });
// });
//
// const users: Object = [];
//
// server.get('/user', (req, res) => {
//     return res.json(users);
// });
//
// server.post('/user', (req, res) => {
//
// });
//
// server.listen(3333, () => {
//     console.log('Server is running!');
// });

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




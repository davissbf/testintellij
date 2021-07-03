export class ErrorParametroInvalido extends Error {
  constructor (paramNome: string) {
    super(`Ausência do parâmetro: ${paramNome}`)
    this.name = 'ErrorParametroInvalido'
  }
}

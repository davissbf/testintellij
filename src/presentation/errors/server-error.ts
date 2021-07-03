export class ServerError extends Error {
  constructor () {
    super('Error no servidor')
    this.name = 'ServerError'
  }
}

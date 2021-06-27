export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.nome) {
      return {
        statusCode: 400,
        body: new Error ('Esperado parâmetro: nome'),
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error ('Esperado parâmetro: email'),
      }
    }
  }
}

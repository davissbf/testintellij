import { HttpResponse, HttpRequest } from '../protocols/http';

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
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

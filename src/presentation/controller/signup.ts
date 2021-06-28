import { HttpResponse, HttpRequest } from '../protocols/http';
import { ErrorParametroAusente } from '../errors/error-parametro-ausente';

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.nome) {
      return {
        statusCode: 400,
        body: new ErrorParametroAusente('nome'),
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new ErrorParametroAusente('email'),
      }
    }
  }
}

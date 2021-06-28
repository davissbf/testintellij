import { HttpResponse, HttpRequest } from '../protocols/http';
import { ErrorParametroAusente } from '../errors/error-parametro-ausente';
import { requisicaoRuim } from '../helpers/http-helpers';

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.nome) {
      return requisicaoRuim(new ErrorParametroAusente('nome'));
    }
    if (!httpRequest.body.email) {
      return requisicaoRuim(new ErrorParametroAusente('email'));
    }
  }
}

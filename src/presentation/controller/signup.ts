import { HttpResponse, HttpRequest } from '../protocols/http';
import { ErrorParametroAusente } from '../errors/error-parametro-ausente';
import { requisicaoRuim } from '../helpers/http-helpers';

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const camposObrigatorios = ['nome', 'email', 'senha'];
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return requisicaoRuim(new ErrorParametroAusente(campo));
      }
    }
  }
}

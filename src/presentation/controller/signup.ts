import { HttpResponse, HttpRequest } from '../protocols/http';
import { ErrorParametroAusente } from '../errors/error-parametro-ausente';
import { requisicaoRuim } from '../helpers/http-helpers';
import { Controlador } from "../protocols/controller";

export class SignUpController implements Controlador{
  handle (httpRequest: HttpRequest): HttpResponse {
    const camposObrigatorios = ['nome', 'email', 'senha', 'confirmarSenha'];
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return requisicaoRuim(new ErrorParametroAusente(campo));
      }
    }
  }
}

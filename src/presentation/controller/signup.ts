import { HttpResponse, HttpRequest } from '../protocols/http';
import { ErrorParametroAusente } from '../errors/error-parametro-ausente';
import { ErrorParametroInvalido } from '../errors/error-parametro-invalido';
import { requisicaoRuim } from '../helpers/http-helpers';
import { Controlador } from "../protocols/controller";
import { ValidadorEmail } from '../protocols/validador-email';

export class SignUpController implements Controlador{
  private readonly validadorEmail: ValidadorEmail;

  constructor(validadorEmail: ValidadorEmail) {
    this.validadorEmail = validadorEmail;
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const camposObrigatorios = ['nome', 'email', 'senha', 'confirmarSenha'];

    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return requisicaoRuim(new ErrorParametroAusente(campo));
      }
    }

    const valido = this.validadorEmail.emailValido(httpRequest.body.email);

    if (!valido) {
      return requisicaoRuim(new ErrorParametroInvalido('email'));
    }
  }
}

import { HttpResponse, HttpRequest } from '../protocols/http'
import { ErrorParametroAusente } from '../errors/error-parametro-ausente'
import { ErrorParametroInvalido } from '../errors/error-parametro-invalido'
import { requisicaoRuim } from '../helpers/http-helpers'
import { Controlador } from '../protocols/controller'
import { ValidadorEmail } from '../protocols/validador-email'
import { ServerError } from '../errors/server-error'

export class SignUpController implements Controlador {
  private readonly validadorEmail: ValidadorEmail

  constructor (validadorEmail: ValidadorEmail) {
    this.validadorEmail = validadorEmail
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const camposObrigatorios = ['nome', 'email', 'senha', 'confirmarSenha']

      // camposObrigatorios.forEach((campo) => {
      //   if (!httpRequest.body[campo]) {
      //     console.log('TESTANDO CAMPO', typeof(campo));
      //     return requisicaoRuim(new ErrorParametroAusente(campo));
      //   }
      // });

      for (const campo of camposObrigatorios) {
        if (!httpRequest.body[campo]) {
          console.log('TESTANDO CAMPO', typeof (campo))
          return requisicaoRuim(new ErrorParametroAusente(campo))
        }
      }

      const valido = this.validadorEmail.emailValido(httpRequest.body.email)

      if (!valido) {
        console.log('Cheguei')
        return requisicaoRuim(new ErrorParametroInvalido('email'))
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}

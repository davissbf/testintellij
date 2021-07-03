import { SignUpController } from './signup'
import { ErrorParametroAusente } from '../errors/error-parametro-ausente'
import { ValidadorEmail } from '../protocols/validador-email'

interface SutTypes {
  sut: SignUpController
  validadorEmailStub: ValidadorEmail
}

const makeSut = (): SutTypes => {
  class ValidadorEmailStub implements ValidadorEmail {
    emailValido (email: string): boolean {
      return true
    }
  }

  const validadorEmailStub = new ValidadorEmailStub()
  const sut = new SignUpController(validadorEmailStub)
  return {
    sut,
    validadorEmailStub
  }
}

describe('SignUp Controller', () => {
  test('Retornar erro 400, se a senha não for enviada', () => {
    const { sut } = makeSut()
    const httpRequisicao = {
      body: {
        nome: 'qualquer_nome',
        email: 'qualquer_email@email.com',
        confirmarSenha: 'qualquer_password'
      }
    }

    const httpResposta = sut.handle(httpRequisicao)
    expect(httpResposta.statusCode).toBe(400)
    expect(httpResposta.body).toEqual(new ErrorParametroAusente('senha'))
  })
})

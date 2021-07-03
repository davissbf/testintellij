import { SignUpController } from './signup'
import { ErrorParametroAusente } from '../errors/error-parametro-ausente'
import { ValidadorEmail } from '../protocols/validador-email'
import { ErrorParametroInvalido } from '../errors/error-parametro-invalido'
import { ServerError } from '../errors/server-error'

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
  test('Retornar erro 400, se o email não for enviado', () => {
    const { sut } = makeSut()
    const httpRequisicao = {
      body: {
        nome: 'qualquer_nome',
        senha: 'qualquer_password',
        confirmarSenha: 'qualquer_password'
      }
    }

    const httpResposta = sut.handle(httpRequisicao)
    expect(httpResposta.statusCode).toBe(400)
    expect(httpResposta.body).toEqual(new ErrorParametroAusente('email'))
  })
  test('Retornar erro 400, se o email não for válido', () => {
    const { sut, validadorEmailStub } = makeSut()

    jest.spyOn(validadorEmailStub, 'emailValido').mockReturnValueOnce(false)

    const httpRequisicao = {
      body: {
        nome: 'qualquer_nome',
        email: 'ivalido_email@email.com',
        senha: 'qualquer_password',
        confirmarSenha: 'qualquer_password'
      }
    }

    const httpResposta = sut.handle(httpRequisicao)
    expect(httpResposta.statusCode).toBe(400)
    expect(httpResposta.body).toEqual(new ErrorParametroInvalido('email'))
  })
  test('Deve Mandar o email correto', () => {
    const { sut, validadorEmailStub } = makeSut()

    const spyValido = jest.spyOn(validadorEmailStub, 'emailValido')

    const httpRequisicao = {
      body: {
        nome: 'qualquer_nome',
        email: 'qualquer_email@email.com',
        senha: 'qualquer_password',
        confirmarSenha: 'qualquer_password'
      }
    }

    sut.handle(httpRequisicao)
    expect(spyValido).toHaveBeenCalledWith('qualquer_email@email.com')
  })
  test('Retornar 500, se acontecer alguma exceção', () => {
    class ValidadorEmailStub implements ValidadorEmail {
      emailValido (email: string): boolean {
        throw new Error()
      }
    }

    const validaorEmailStub = new ValidadorEmailStub()
    const sut = new SignUpController(validaorEmailStub)
    const httpRequisicao = {
      body: {
        nome: 'qualquer_nome',
        email: 'qualquer_email@email.com',
        senha: 'qualquer_password',
        confirmarSenha: 'qualquer_password'
      }
    }

    const httpResposta = sut.handle(httpRequisicao)
    expect(httpResposta.statusCode).toBe(500)
    expect(httpResposta.body).toEqual(new ServerError())
  })
})

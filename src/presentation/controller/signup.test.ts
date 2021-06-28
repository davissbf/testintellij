import { SignUpController } from "./signup";
import { ErrorParametroAusente } from '../errors/error-parametro-ausente';

const makeSut = (): SignUpController => {
  return new SignUpController();
}

describe('SignUp Controller', () => {
  test('Retornar erro 400, se o nome não for enviado', () => {
    const sut = makeSut();
    const httpRequisicao = {
      body: {
        email: 'any_email@email.com',
        senha: 'any_password',
        confirmarSenha: 'any_password',
      }
    }
    const httpResposta = sut.handle(httpRequisicao);
    expect(httpResposta.statusCode).toBe(400);
    expect(httpResposta.body).toEqual(new ErrorParametroAusente('nome'));
  });
});

test('Retornar erro 400, se o email não for enviado', () => {
  const sut = makeSut();
  const httpRequisicao = {
    body: {
      nome: 'any_nome',
      senha: 'any_password',
      confirmarSenha: 'any_password',
    }
  }
  const httpResposta = sut.handle(httpRequisicao);
  expect(httpResposta.statusCode).toBe(400);
  expect(httpResposta.body).toEqual(new ErrorParametroAusente('email'));
});

test('Retornar erro 400, se a senha não for enviada', () => {
  const sut = makeSut();
  const httpRequisicao = {
    body: {
      nome: 'any_nome',
      email: 'any_email@email.com',
      confirmarSenha: 'any_password',
    }
  }
  const httpResposta = sut.handle(httpRequisicao);
  expect(httpResposta.statusCode).toBe(400);
  expect(httpResposta.body).toEqual(new ErrorParametroAusente('senha'));
});

test('Retornar erro 400, se o consfirmar senha não for enviado', () => {
  const sut = makeSut();
  const httpRequisicao = {
    body: {
      nome: 'any_nome',
      email: 'any_email@email.com',
      senha: 'any_password',
    }
  }
  const httpResposta = sut.handle(httpRequisicao);
  expect(httpResposta.statusCode).toBe(400);
  expect(httpResposta.body).toEqual(new ErrorParametroAusente('confirmarSenha'));
});

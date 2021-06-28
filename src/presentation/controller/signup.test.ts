import { SignUpController } from "./signup";
import { ErrorParametroAusente } from '../errors/error-parametro-ausente';

describe('SignUp Controller', () => {
  test('Retornar erro 400, se o nome não for enviado', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        senha: 'any_password',
        confirmarSenha: 'any_password',
      }
    }
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new ErrorParametroAusente('nome'));
  });
});

test('Retornar erro 400, se o email não for enviado', () => {
  const sut = new SignUpController();
  const httpRequest = {
    body: {
      nome: 'any_nome',
      senha: 'any_password',
      confirmarSenha: 'any_password',
    }
  }
  const httpResponse = sut.handle(httpRequest);
  expect(httpResponse.statusCode).toBe(400);
  expect(httpResponse.body).toEqual(new ErrorParametroAusente('email'));
});

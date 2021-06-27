import { SignUpController } from "./signup";

describe('SignUp Controller', () => {
  test('Retornar erro 400, se o nome não for enviado', () => {
    const sut = new SignUpController();
    const httpRequest = {
      email: 'any_email@email.com',
      password: 'any_password',
      passwordConfirmation: 'any_password',
    }
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  })
})

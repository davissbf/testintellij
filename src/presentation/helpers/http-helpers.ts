import { HttpResponse } from "../protocols/http";

export const requisicaoRuim = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
})

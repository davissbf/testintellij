import {HttpRequest, HttpResponse} from "./http";

export interface Controlador {
  handle (httpRequest: HttpRequest): HttpResponse;
}

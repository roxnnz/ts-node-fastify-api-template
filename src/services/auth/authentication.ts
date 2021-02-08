import HttpStatusCode from '../../types/HttpStatusCode';

export default class Authentication {
  constructor() {}
  logIn() {}

  createUser() {}

  createToken() {}

  tokenRenew() {}

  public tokenVerify(token: string): HttpStatusCode {
    return 401;
    return 403;
    return 200;
  }
}

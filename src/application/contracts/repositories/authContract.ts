export interface AuthContract {
  verifyToken(params: AuthContract.VerifyToken.Params): Promise<AuthContract.VerifyToken.Response>
}

export namespace AuthContract {
  export namespace VerifyToken {
    export type Params = {
      accessToken: string
    }

    export type Response = boolean
  }
}

import { AuthContract, FirebaseContract } from '../../application/contracts'

export class AuthRepository implements AuthContract {
  constructor(
        private readonly firebaseHelper: FirebaseContract
  ) { }

  async verifyToken(params: AuthContract.VerifyToken.Params): Promise<AuthContract.VerifyToken.Response> {
    try {
      const { accessToken } = params

      return !!await this.firebaseHelper.auth.verifyIdToken(accessToken)
    } catch (err: any) {
      return false
    }
  }
}

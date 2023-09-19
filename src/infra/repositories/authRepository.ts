import { AuthContract, FirebaseRepositoryContract } from '../../application/contracts'

export class AuthRepository implements AuthContract {
  constructor(
    private readonly firebaseRepository: FirebaseRepositoryContract
  ) { }

  async verifyToken(params: AuthContract.VerifyToken.Params): Promise<AuthContract.VerifyToken.Response> {
    try {
      const { accessToken } = params

      return !!await this.firebaseRepository.auth.verifyIdToken(accessToken)
    } catch (err: any) {
      return false
    }
  }
}

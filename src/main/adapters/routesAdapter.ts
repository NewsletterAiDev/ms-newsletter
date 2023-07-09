import { cors } from '../config'
import { HttpResponse, HttpMethods, methodNotAllowed } from '../../presentation/helpers'

import { https, Request, Response, HttpsFunction } from 'firebase-functions'

export type Endpoint = {
    [key in HttpMethods]?: (request: any) => Promise<HttpResponse>
}

export function defineEndpoint(endpoint: Endpoint): HttpsFunction {
  return https.onRequest(
    async (req: Request, res: Response) => {
      cors(req, res, async () => {
        let response: HttpResponse
        const request = req.method === 'GET' ? req.query : req.body

        switch (req.method) {
        case 'POST':
          response = endpoint?.post ? await endpoint.post(request) : methodNotAllowed()
          break
        case 'GET':
          response = endpoint?.get ? await endpoint.get(request) : methodNotAllowed()
          break
        case 'PUT':
          response = endpoint?.put ? await endpoint.put(request) : methodNotAllowed()
          break
        case 'DELETE':
          response = endpoint?.delete ? await endpoint.delete(request) : methodNotAllowed()
          break
        default:
          response = methodNotAllowed()
          break
        }

        const isValid = !!(response.statusCode >= 200 && response.statusCode <= 299)
        const data = (isValid) ? response.data : { error: response.data.message }

        res.status(response.statusCode).send(data)
      })
    }
  )
}

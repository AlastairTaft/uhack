export default function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {}
    } = action

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }

    if (!shouldCallAPI(getState())) {
      return
    }

    const [ requestType, successType, failureType ] = types

    dispatch(Object.assign({}, payload, {
      type: requestType
    }))

    return callAPI()
    .then(response => {

      const handler = json => {

        // If the status code is 200 then lets assume everything was successful
        if (response.status == 200 || response.status == undefined)
          return dispatch(Object.assign({}, payload, {
            response: json,
            type: successType,
            statusCode: response.status,
          }))

        return dispatch(Object.assign({}, payload, {
          response: json,
          type: failureType,
          statusCode: response.status,
        }))
      }

      return response.json().then(handler)
    })
    .catch(error => {
      console.error(error)
      throw error
    })
  }
}
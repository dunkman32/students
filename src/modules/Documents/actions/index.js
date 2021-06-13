import {constants} from '../index'
import {getAction as action} from '../../../helpers'

export const listById = ({
    request: (id, status) => action(constants.LIST_BY_ID_REQUESTED, {id, status}),
    success: (response) =>
        action(constants.LIST_BY_ID_SUCCEEDED, {response}),
    failure: (response, message) =>
        action(constants.LIST_BY_ID_FAILED, {
            response,
            message
        })
})

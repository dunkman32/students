import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {constants} from '../index'
import {getProp} from '../../../helpers'

export const initialState = {
    statuses: {
        isStarted: false,
        isPending: false,
        isFinished: false,
        isFailed: false,
        isSucceed: false
    },
    error: {
        message: ''
    },
    data: []
}

const reducer =
    (state = initialState, action) => {
        switch (action.type) {
            case constants.LIST_BY_ID_REQUESTED:
                return {
                    ...state,
                    statuses: {
                        ...state.statuses,
                        isStarted: true,
                        isPending: true,
                    },
                }
            case constants.LIST_BY_ID_SUCCEEDED:
                return {
                    ...state,
                    statuses: {
                        isStarted: false,
                        isPending: false,
                        isFinished: true,
                        isSucceed: true
                    },
                    data: getProp(() => action.payload.response.data, [])
                }
            case constants.LIST_BY_ID_FAILED:
                return {
                    ...initialState,
                    statuses: {
                        isPending: false,
                        isFinished: true,
                        isFailed: true,
                        isSucceed: false
                    },
                    error: {
                        message: getProp(() => action.payload.message, '')
                    }
                }
            default:
                return state
        }
    }
const conf = {
    key: 'list.of.documents.by.id',
    storage
}

const persistentReducer = persistReducer(conf, reducer)

export default persistentReducer

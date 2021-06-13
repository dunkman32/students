import {call, put, takeLatest} from 'redux-saga/effects'
import {actions, constants} from '../index'
import {takeDocumentsWithFilters} from '../../../adapters/documents'

export function* getListById(action) {
    try {
        const querySnapshot = yield call(takeDocumentsWithFilters, action.payload.id, action.payload.status)
        const data = []
        querySnapshot.forEach((snapshot) => {
            data.push(snapshot.data())
        })
        yield put(actions.listById.success({
            data
        }))
    } catch (e) {
        const {response, message} = e
        yield put(actions.listById.failure(response, message))
    }
}


export default function* () {
    yield takeLatest(constants.LIST_BY_ID_REQUESTED, getListById)
}


import { createSelector } from 'reselect'
import { moduleName } from '../index'

export const mainSelector = createSelector(
  (state) => state[moduleName],
  (data) => data
)
export const selectList = createSelector(
  (state) => state[moduleName],
  (data) => data.listById
)

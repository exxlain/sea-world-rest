import { createLogic } from 'redux-logic'
import {
  SYNC_MAP,
  SYNC_CANCEL_MAP,
} from '../constants/map'
import {
  updateMap,
  syncFailed,
} from '../actions/map'
import { fetchMap } from '../api/fetchMap'

const fetchMapLogic = createLogic({
  type: SYNC_MAP,
  cancelType: SYNC_CANCEL_MAP,

  process({ action }, dispatch, done) {
      fetchMap(1)
        .then((response) => {
          console.log(response, 'response')
         // const { data } = response
        //  dispatch(updateMap(interval))
          done()
        }).catch((error) => {
      dispatch(syncFailed(error))
      return false
    })
  },
})

export default fetchMapLogic

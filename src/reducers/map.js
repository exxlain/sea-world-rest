import * as type from '../constants/map'

const initialState = {
  data: [
    [null, null, null, null, null, null, null, null, null, null],
    [ null, 'penguin', 'orca', null, 'penguin', 'orca', null, 'penguin', 'orca', null],
    ['penguin', 'orca',  'orca', null, 'penguin', 'orca', null, 'penguin', 'orca', null],
    ['penguin', 'orca', null, 'penguin', 'orca', 'orca', null, 'penguin', 'orca', null],
    ['penguin', 'orca', null, 'penguin', 'penguin', 'orca', null, 'penguin', 'orca', null],
  ],
  errorMessage: '',
}

const map = (state = initialState, action) => {
  switch (action.type) {
  case type.UPDATE_MAP:
    return {
      ...state,
      data: action.data,
    }
  case type.SYNC_FAILED_MAP:
    return { ...state, errorMessage: action.message }
  default:
    return state
  }
}

export default map

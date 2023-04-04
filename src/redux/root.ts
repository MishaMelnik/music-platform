import { combineReducers } from 'redux'
// Stores
import { playerReducer } from '@/redux/player-service/reducer'
import { trackReducer } from '@/redux/track-service/reducer'

// Libs
import { HYDRATE } from 'next-redux-wrapper'

const rootReducer = combineReducers({
  player: playerReducer,
  track: trackReducer,
})

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.count) nextState.count = state.count
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export type RootState = ReturnType<typeof rootReducer>

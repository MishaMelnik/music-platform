// Types
import { IPlayerState, PlayerAction } from '@/redux/player-service/interfaces'
// Enums
import { PlayerActionTypes } from '@/core/enums/player-action-types.enum'

const initialState: IPlayerState = {
  active: null,
  duration: 0,
  currentTime: 0,
  volume: 50,
  pause: true,
}
export const playerReducer = (state = initialState, action: PlayerAction): IPlayerState => {
  switch (action.type) {
    case PlayerActionTypes.PLAY:
      return { ...state, pause: false }

    case PlayerActionTypes.PAUSE:
      return { ...state, pause: true }
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload }
    case PlayerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload }
    case PlayerActionTypes.SET_DURATION:
      return { ...state, duration: action.payload }
    case PlayerActionTypes.SET_ACTIVE:
      return { ...state, active: action.payload, duration: 0, currentTime: 0 }

    default:
      return state
  }
}

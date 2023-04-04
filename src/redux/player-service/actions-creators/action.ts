// Interfaces
import { PlayerAction } from '@/redux/player-service/interfaces'
// Enums
import { PlayerActionTypes } from '@/core/enums/player-action-types.enum'
// Types
import { ITrack } from '@/core/types/track.type'

export const playTrack = (): PlayerAction => {
  return { type: PlayerActionTypes.PLAY }
}
export const pauseTrack = (): PlayerAction => {
  return { type: PlayerActionTypes.PAUSE }
}
export const setDuration = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_DURATION, payload }
}
export const setVolume = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_VOLUME, payload }
}
export const setCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload }
}
export const setActiveTrack = (payload: ITrack): PlayerAction => {
  return { type: PlayerActionTypes.SET_ACTIVE, payload }
}

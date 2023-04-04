import { ITrack } from '@/core/types/track.type'
// Enums
import { PlayerActionTypes } from '@/core/enums/player-action-types.enum'

export interface IPlayerState {
  active: ITrack | null
  volume: number
  duration: number
  currentTime: number
  pause: boolean
}

interface IPlayAction {
  type: PlayerActionTypes.PLAY
}
interface IPauseAction {
  type: PlayerActionTypes.PAUSE
}
interface ISetActiveAction {
  type: PlayerActionTypes.SET_ACTIVE
  payload: ITrack
}
interface ISetDurationAction {
  type: PlayerActionTypes.SET_DURATION
  payload: number
}
interface ISetVolumeAction {
  type: PlayerActionTypes.SET_VOLUME
  payload: number
}
interface ISetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME
  payload: number
}

export type PlayerAction = IPlayAction | IPauseAction | ISetActiveAction | ISetDurationAction | ISetVolumeAction | ISetCurrentTimeAction

import { ITrack } from '@/core/types/track.type'
// Enums
import { TrackActionTypes } from '@/core/enums/track-action-types.enum'

export interface ITrackState {
  tracks: ITrack[]
  error: string
}

interface IFetchTracksAction {
  type: TrackActionTypes.FETCH_TRACKS
  payload: ITrack[]
}
interface IFetchTracksErrorAction {
  type: TrackActionTypes.FETCH_TRACKS_ERROR
  payload: string
}

export type TrackAction = IFetchTracksAction | IFetchTracksErrorAction

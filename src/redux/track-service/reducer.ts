// Types
// Enums

import { ITrackState, TrackAction } from '@/redux/track-service/interfaces'
import { TrackActionTypes } from '@/core/enums/track-action-types.enum'

const initialState: ITrackState = {
  tracks: [],
  error: '',
}
export const trackReducer = (state = initialState, action: TrackAction): ITrackState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS:
      return { error: '', tracks: action.payload }

    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}

import { Dispatch } from 'react'
// Libs
import axios from 'axios'
// Interfaces
import { TrackAction } from '@/redux/track-service/interfaces'
// Enums
import { TrackActionTypes } from '@/core/enums/track-action-types.enum'

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const res = await axios.get('http://localhost:8080/tracks')
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: res.data })
    } catch (e) {
      dispatch({ type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'An error occurred while loading tracks' })
    }
  }
}

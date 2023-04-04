import React, { FC } from 'react'
// Components
import TrackItem from '@/components/TrackItem'
// Libs
import { Box, Grid } from '@mui/material'
// Types
import { ITrack } from '@/core/types/track.type'
interface ITrackListProps {
  tracks: ITrack[]
}
const TrackList: FC<ITrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  )
}

export default TrackList

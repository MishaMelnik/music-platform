import React, { FC } from 'react'
// Libs
import { Card, Grid, IconButton } from '@mui/material'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
// Hooks
import { useRouter } from 'next/router'
import { useActions } from '@/core/hooks/useActions'
// Types
import { ITrack } from '@/core/types/track.type'
// Styles
import styles from '../../styles/Track/TrackItem.module.scss'

interface ITrackItemProps {
  track: ITrack
  active?: boolean
}
const TrackItem: FC<ITrackItemProps> = ({ track, active = false }) => {
  const router = useRouter()
  const { playTrack, setActiveTrack } = useActions()
  const play = (e: any) => {
    e.stopPropagation()
    setActiveTrack(track)
    playTrack()
  }
  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
      <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img className={styles.track_img} src={'http://localhost:8080/' + track.picture} />
      <Grid container direction="column" className={styles.container}>
        <div>{track.name}</div>
        <div className={styles.container_artist}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton
        onClick={(e) => {
          e.stopPropagation()
        }}
        sx={{ marginLeft: 'auto' }}
      >
        <Delete />
      </IconButton>
    </Card>
  )
}

export default TrackItem

import React, { ChangeEvent, FC, useEffect } from 'react'
// Libs
import { Box, Grid, IconButton } from '@mui/material'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
// Components
import TrackProgress from '@/components/TrackProgress'
// Hooks
import { useTypedSelector } from '@/core/hooks/useTypedSelector'
import { useActions } from '@/core/hooks/useActions'
// Styles
import styles from '../../styles/Player/Player.module.scss'

let audio: any
const Player: FC = () => {
  const { pause, volume, active, duration, currentTime } = useTypedSelector((state) => state.player)
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions()

  useEffect(() => {
    if (!audio) {
      audio = new Audio()
    } else {
      setAudio()
      play()
    }
  }, [active])
  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:8080/' + active?.audio
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }
      audio.timeupdate = () => {
        setDuration(Math.ceil(audio.currentTime))
      }
    }
  }
  const play = () => {
    if (!pause) {
      playTrack()
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      audio.play
    } else {
      pauseTrack()
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      audio.pause
    }
  }
  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }
  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }
  if (!active) {
    return null
  }

  return (
    <Box className={styles.player}>
      <IconButton onClick={play}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
      <Grid container direction="column" className={styles.container}>
        <div>{active?.name}</div>
        <div className={styles.container_artist}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
      <VolumeUp sx={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </Box>
  )
}

export default Player

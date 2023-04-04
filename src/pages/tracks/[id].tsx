import React, { FC, useState } from 'react'
// Libs
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Box, Button, Grid, TextField } from '@mui/material'
// Components
import MainLayout from '@/layouts/MainLayout'
// Hooks
import { useRouter } from 'next/router'
import { useInput } from '@/core/hooks/useInput'
// Styles
import styles from '../../styles/Track/TrackPage.module.scss'
// Types
import { ITrack } from '@/core/types/track.type'

interface ITrackPageProps {
  serverTrack: ITrack
}
const TrackPage: FC<ITrackPageProps> = ({ serverTrack }) => {
  const router = useRouter()
  const [track, setTrack] = useState(serverTrack)
  const username = useInput('')
  const text = useInput('')

  const addComment = async () => {
    try {
      const res = await axios.post('http://localhost:8080/tracks/comment', {
        username: username.value,
        text: text.value,
        trackId: track._id,
      })
      setTrack({ ...track, comments: [...track.comments, res.data] })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <MainLayout title={'Music Platform' + track.name + ' - ' + track.artist}>
      <Button variant="outlined" className={styles.page_button} onClick={() => router.push('/tracks')}>
        To the list
      </Button>
      <Grid container className={styles.page_content}>
        <img src={`http://localhost:8080/${track.picture}`} className={styles.container_img} />
        <Box className={styles.container_inform}>
          <h1>Track name - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Listens - {track.listens}</h1>
        </Box>
      </Grid>
      <h1>Lyrics to the track</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField {...username} label="Your name" fullWidth />
        <TextField {...text} label="Comment" fullWidth multiline rows={4} />
        <Button onClick={addComment} variant="outlined">
          Send
        </Button>
      </Grid>
      <Box>
        {track.comments.map((comment) => (
          <Box key={comment._id}>
            <Box>{comment.username}</Box>
            <Box>{comment.text}</Box>
          </Box>
        ))}
      </Box>
    </MainLayout>
  )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const res = await axios.get(`http://localhost:8080/tracks/${params?.id}`)
  return {
    props: {
      serverTrack: res.data,
    },
  }
}

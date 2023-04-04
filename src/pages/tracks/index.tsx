import React, { FC } from 'react'
// Components
import MainLayout from '@/layouts/MainLayout'
import TrackList from '@/components/TrackList'
// Hooks
import { useTypedSelector } from '@/core/hooks/useTypedSelector'
// Libs
import { Box, Button, Card, Grid } from '@mui/material'
// Hooks
import { useRouter } from 'next/router'
import { NextThunkDispatch, wrapper } from '@/redux/next-wrapper'
import { fetchTracks } from '@/redux/track-service/actions-creators/action'

const Tracks: FC = () => {
  const router = useRouter()
  const { tracks, error } = useTypedSelector((state) => state.track)
  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    )
  }
  return (
    <MainLayout title="Track List - Music Platform">
      <Grid container justifyContent="center">
        <Card sx={{ width: '900px' }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track list</h1>
              <Button onClick={() => router.push('tracks/create')}>Download</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Tracks

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const getServerSideProps = wrapper.getServerSideProps(async ({ dispatch }) => {
  const dispatchThunks = dispatch as NextThunkDispatch
  await dispatchThunks(fetchTracks())
})

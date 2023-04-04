import React, { ChangeEvent, FC } from 'react'
// Libs
import { Box } from '@mui/material'
// Styles
import styles from '../../styles/Track/TrackProgress.module.scss'

interface ITrackProgressProps {
  left: number
  right: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const TrackProgress: FC<ITrackProgressProps> = ({ left, right, onChange }) => {
  return (
    <Box className={styles.progress}>
      <input type="range" min={0} max={right} value={left} onChange={onChange} />
      <div>
        {left} / {right}
      </div>
    </Box>
  )
}

export default TrackProgress

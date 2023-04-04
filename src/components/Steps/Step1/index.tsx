import React, { FC } from 'react'
// Libs
import { Grid, TextField } from '@mui/material'
// Styles
import styles from '../../../styles/Steps/Step1.module.scss'

interface IStep1Props {
  name: any
  artist: any
  text: any
}
const Step1: FC<IStep1Props> = ({ name, artist, text }) => {
  return (
    <Grid container className={styles.container}>
      <TextField {...name} className={styles.container_textField} label="Track Name" />
      <TextField {...artist} className={styles.container_textField} label="Artist Name" />
      <TextField {...text} className={styles.container_textField} label="Lyrics To The Track" />
    </Grid>
  )
}

export default Step1

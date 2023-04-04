import React, { FC, useState } from 'react'
// Components
import MainLayout from '@/layouts/MainLayout'
import StepWrapper from '@/components/Steps/StepWrapper'
import Step1 from '@/components/Steps/Step1'
import Step2 from '@/components/Steps/Step2'
import Step3 from '@/components/Steps/Step3'
// Libs
import axios from 'axios'
import { Button, Grid } from '@mui/material'
// Hooks
import { useInput } from '@/core/hooks/useInput'
import { useRouter } from 'next/router'

const Create: FC = () => {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState('')
  const [audio, setAudio] = useState('')
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prevState) => prevState + 1)
    } else {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('artist', artist.value)
      formData.append('text', text.value)
      formData.append('picture', picture)
      formData.append('audio', audio)
      void axios
        .post('http://localhost:8080/tracks', formData)
        .then((res) => router.push('/tracks'))
        .catch((e) => {
          console.log(e)
        })
    }
  }
  const back = () => {
    setActiveStep((prevState) => prevState - 1)
  }
  return (
    <MainLayout>
      <StepWrapper activateStep={activeStep}>
        {activeStep === 0 && <Step1 name={name} artist={artist} text={text} />}
        {activeStep === 1 && <Step2 setPicture={setPicture} />}
        {activeStep === 2 && <Step3 setAudio={setAudio} />}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  )
}

export default Create

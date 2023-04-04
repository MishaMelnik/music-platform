import React, { FC, ReactNode } from 'react'
// Libs
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material'
// Styles
import styles from '../../../styles/Steps/StepWrapper.module.scss'

interface IStepWrapperProps {
  activateStep: number
  children: ReactNode
}
const steps = ['Inform About Track', 'Upload Picture', 'Upload Track']
const StepWrapper: FC<IStepWrapperProps> = ({ activateStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activateStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activateStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container className={styles.container}>
        <Card className={styles.container_card}>{children}</Card>
      </Grid>
    </Container>
  )
}

export default StepWrapper

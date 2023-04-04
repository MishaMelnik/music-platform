import React, { Dispatch, FC, SetStateAction } from 'react'
// Components
import FileUpload from '@/shared/components/FileUpload'
// Libs
import { Button } from '@mui/material'
// Styles
import styles from '../../../styles/Steps/StepWrapper.module.scss'

interface IStep3Props {
  setAudio: Dispatch<SetStateAction<any>>
}
const Step3: FC<IStep3Props> = ({ setAudio }) => {
  return (
    <FileUpload setFile={setAudio} accept="audio/*">
      <Button>Upload Audio</Button>
    </FileUpload>
  )
}

export default Step3

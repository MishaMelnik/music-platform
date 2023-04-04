import React, { Dispatch, FC, SetStateAction } from 'react'
// Components
import FileUpload from '@/shared/components/FileUpload'
// Libs
import { Button } from '@mui/material'
// Styles
import styles from '../../../styles/Steps/StepWrapper.module.scss'

interface IStep2Props {
  setPicture: Dispatch<SetStateAction<any>>
}
const Step2: FC<IStep2Props> = ({ setPicture }) => {
  return (
    <FileUpload setFile={setPicture} accept="image/*">
      <Button>Upload Image</Button>
    </FileUpload>
  )
}

export default Step2

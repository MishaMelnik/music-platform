import React, { ChangeEvent, Dispatch, FC, ReactNode, SetStateAction, useRef } from 'react'

interface IFileUploadProps {
  accept: string
  children: ReactNode
  setFile: Dispatch<SetStateAction<any>>
}

const FileUpload: FC<IFileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setFile(e.target.files[0])
  }
  return (
    <div onClick={() => ref.current?.click()}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <input type="file" accept={accept} ref={ref} style={{ display: 'none' }} onChange={onChange} />
      {children}
    </div>
  )
}

export default FileUpload

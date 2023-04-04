import React, { FC, ReactNode } from 'react'
// Components
import Player from '@/components/Player'
import Navbar from '@/components/Navbar'
// Libs
import Head from 'next/head'
import { Container } from '@mui/material'

interface IMainLayoutProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string
}
const MainLayout: FC<IMainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'Music Platform'}</title>
        <meta name="description" content={'Music Platform' + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Music, Tracks, Artists'} />
      </Head>
      <Navbar />
      <Container sx={{ marginTop: '90px' }}>{children}</Container>
      <Player />
    </>
  )
}

export default MainLayout

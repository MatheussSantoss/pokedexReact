import { Container, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonsCard: React.FC = () => {

  return (
    <Container maxWidth={false} sx={{display: 'flex', flexDirection: 'column', gap: '1em', marginTop: '1em'}}>
      <Container sx={{display: 'flex', gap: '1em'}} maxWidth={false}>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
      </Container>
      
      <Container sx={{display: 'flex', gap: '1em'}} maxWidth={false}>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
      </Container>

      <Container sx={{display: 'flex', gap: '1em'}} maxWidth={false}>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
        <Skeleton variant='rounded' width="100%" height={300}/>
      </Container>
    </Container>
  )
}

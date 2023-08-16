import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Box, Chip, Container, Divider, Paper, Typography } from '@mui/material'
import { Pokemon } from './Home'
import { PokemonInfoTable } from '../components/PokemonInfoTable'
import { useNavigate } from 'react-router-dom'

export const Profile: React.FC<{pokemonData: Pokemon['data']}> = ({pokemonData}) => {
    const navigate = useNavigate();
    
    useEffect(() => {
      if (!pokemonData) {
        navigate('/');
      }
    });

  return (
    <>
      <Navbar hideSearch='true'/>
      <Container maxWidth='md'>
        <Paper elevation={3}>
          <Box display='flex' flexDirection='column' alignItems='center' p={5}>
            <Typography variant='h4'>{pokemonData.name}</Typography>
            <Box display='flex' m={2} width='100%' alignItems={'center'} justifyContent={'space-around'}>
              <Box component='img' src={pokemonData.sprites.front_default} width='50%' height='100%' />
              <PokemonInfoTable pokemonData={pokemonData}/>
            </Box>
            <Divider sx={{width: '100%', marginTop: '1rem'}}>Variations</Divider>
            <Box width='100%' display='flex' justifyContent={'space-around'}>
              <Box component='img' src={pokemonData.sprites.front_female} width='30%' height='30%' />
              <Box component='img' src={pokemonData.sprites.front_shiny} width='30%' height='30%' />
              <Box component='img' src={pokemonData.sprites.front_shiny_female} width='30%' height='30%' />
            </Box>
            <Divider sx={{width: '100%', marginBottom: '1rem'}}>Attacks</Divider>
            <Box textAlign={'center'}>
              {pokemonData.moves.map((moveData, key) => (
                <Chip key={key} sx={{m: '.375rem'}} label={moveData.move.name}></Chip>
                ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}

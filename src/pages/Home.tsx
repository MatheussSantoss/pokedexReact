import { useEffect, useState } from 'react'
import { PokemonCard } from '../components/PokemonCard';
import { Box, Container, Grid } from '@mui/material'
import { Navbar } from '../components/Navbar';
import axios from 'axios';
import { SkeletonsCard } from '../components/Skeletons/Cards';
import { useNavigate } from 'react-router-dom';

export interface Pokemon {
  data: {
    name: string;
    height: string;
    weight: string;
    sprites: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    }
    moves: MovesPokemon[];
    types: TypePokemon[];
  }
}

export interface TypePokemon {
  type: {
    name: string;
  }
}

export interface MovesPokemon {
  move: {
    name: string;
  }
}

const POKEMON_COUNT: number = 152;

export const Home: React.FC<{setPokemonData: any}> = ({setPokemonData}) => {
  const [basePokemon, setBasePokemon] = useState<Pokemon[]>([]);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const navigate = useNavigate();

  const getPokemons = () => {
    let detailsPokemons: string[] = [];

    for (let i = 1; i < POKEMON_COUNT; i++) {
      detailsPokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios.all(detailsPokemons.map(pokemon => axios.get(pokemon))).      
    then((response: any) => {
      setBasePokemon(response);
      setPokemons(response);
    }).
    catch((err: string) => console.error(err));
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const pokemonFilter = (filter: string) => {
    if (filter) {
      setPokemons(basePokemon.filter(pk => pk.data.name.includes(filter)));
    } else {
      setPokemons(basePokemon);
    }
  }

  const selectPokemon = (pokemon: Pokemon["data"]) => {
    setPokemonData(pokemon);

    navigate("/profile");
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          { !pokemons.length ? (
          <SkeletonsCard />
          ) : (
          pokemons.map((pokemon: Pokemon, key: number) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <Box onClick={() => selectPokemon(pokemon.data)}>
                <PokemonCard name={pokemon.data.name} 
                           image={pokemon.data.sprites.front_default} 
                           types={pokemon.data.types} />
              </Box>
            </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  )
}

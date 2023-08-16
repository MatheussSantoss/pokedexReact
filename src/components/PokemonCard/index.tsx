import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { TypePokemon } from '../../pages/Home';
import { checkType } from '../../utils';

export const PokemonCard: React.FC<{name: string, image: string, types: TypePokemon[]}> = ({name, image, types}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt={name + ' image'}/>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">          
            <Typography gutterBottom variant="h5" component="div">
              { name }
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              { checkType(types) }
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

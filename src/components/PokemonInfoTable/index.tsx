import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pokemon } from '../../pages/Home';
import { checkType } from '../../utils';

export const PokemonInfoTable: React.FC<{pokemonData: Pokemon['data']}> = ({pokemonData}) =>  {
  return (
    <TableContainer component={Paper} sx={{height: 'fit-content', maxWidth: '12.5rem', boxShadow: 'null'}}>
      <Table aria-label="a dense table">
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>Height</TableCell>
            <TableCell>{pokemonData.height}cm</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>Weight</TableCell>
            <TableCell>{pokemonData.weight}g</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{pokemonData.types.length > 1 ? 'Types' : 'Type'}</TableCell>
            <TableCell>{checkType(pokemonData.types)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

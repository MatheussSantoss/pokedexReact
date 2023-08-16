import { TypePokemon } from "../pages/Home";

export const checkType = (types: TypePokemon[]) => {
  if (types[1]) {
    return `${types[0].type.name} | ${types[1].type.name}`
  }

  return types[0].type.name;
}
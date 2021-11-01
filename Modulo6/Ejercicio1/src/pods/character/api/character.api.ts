import { Character } from './character.api-model';
import { Lookup } from 'common/models';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if(response.ok)
  {
    return await response.json();
  }
  else
  {
    throw Error(response.statusText);
  }
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};

import { CharacterCollection } from './character-collection.api-model';

let characterCollection = [];

export const getCharacterCollection = async (): Promise<CharacterCollection> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  if(response.ok)
  {
    return await response.json();
  }
  else
  {
    throw Error(response.statusText);
  }
};


export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};

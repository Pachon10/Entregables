import { Character, CharacterCollection } from './character-collection.api-model';

const url = 'api/characters';

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

export const getCharacterLocalCollection = async (): Promise<Character[]> => {
  const response = await fetch(url);
  if(response.ok)
  {
    return await response.json();
  }
  else
  {
    throw Error(response.statusText);
  }
};

export const SaveInitialCollection = async (characters: Character[]): Promise<void> => {

  characters.forEach(async character => {
    character.bestSentences = "";
    await fetch(url,
      {
        method: "POST",
        headers:
          {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(character)
      });
  });
};


export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`,
    {
      method: "DELETE"
    });

  return response.ok;
};

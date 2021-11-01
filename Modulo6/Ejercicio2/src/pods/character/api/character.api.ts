import { Character } from './character.api-model';

const url = 'api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${url}/${id}`);
  if(response.ok)
  {
    return await response.json();
  }
  else
  {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {

  if(character.id == 0 )
  {
    const response = await fetch(`${url}`,
      {
        method: "POST",
        headers:
          {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(character)
      });

      return response.ok;
  }
  else if (character.id > 0)
  {
    const response = await fetch(`${url}/${character.id}`,
      {
        method: "PUT",
        headers:
          {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(character)
      });

      return response.ok;
  }

  return false;
};

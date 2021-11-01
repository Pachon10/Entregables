import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, getCharacterLocalCollection, SaveInitialCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );


  const loadCharacterCollection = () => {
    getCharacterLocalCollection().then((result) =>
    {
      if(result == null || result.length == 0)
      {
        getCharacterCollection().then(async (result) =>{
          await SaveInitialCollection(result.results);
          setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))
          }
         );
      }
      else
      {
        setCharacterCollection(mapToCollection(result, mapFromApiToVm))
      }
    });

    // getCharacterCollection().then((result) =>
    //   setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))
    // );
  };

  return { characterCollection, loadCharacterCollection };
};

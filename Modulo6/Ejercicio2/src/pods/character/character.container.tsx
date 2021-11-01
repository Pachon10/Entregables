import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setcharacter] = React.useState<Character>(createEmptyCharacter());
  //const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  // const handleLoadCityCollection = async () => {
  //   const apiCities = await api.getCities();
  //   setCities(apiCities);
  // };

  const handleLoadCharacter = async () => {
    const apicharacter = await api.getCharacter(id);
    setcharacter(mapCharacterFromApiToVm(apicharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    //handleLoadCityCollection();
  }, []);

  const handleSave = async (character: Character) => {
    console.log(character);
    const apicharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apicharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};

import * as apiModel from "./api/character-collection.api-model";
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  characterCollection: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: characterCollection.id.toString(),
  image: `${characterCollection.image}`,
  name: characterCollection.name,
  species: characterCollection.species,
  type: characterCollection.type,
  gender: characterCollection.gender,
  created: characterCollection.created
});

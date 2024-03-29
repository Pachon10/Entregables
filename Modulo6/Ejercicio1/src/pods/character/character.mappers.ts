import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  type: character.type,
  species: character.species,
  status: character.status,
  gender: character.gender,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    type: character.type,
    species: character.species,
    status: character.status,
    gender: character.gender,
  } as unknown) as apiModel.Character);

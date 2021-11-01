import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  pageCharacters: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  editCharacter: '/characters/:id',
  pageCharacters: '/characters/page/:page'
};

type NavigationFunction = (id: string) => string;
type NavigationPageFunction = (page: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editcharacter: NavigationFunction;
}

interface LinkRoutes extends Omit<SwitchRoutes, 'pageCharacters'> {
  pagecharacters: NavigationPageFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editcharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  pagecharacters: (page) => generatePath(switchRoutes.pageCharacters, { page }),
};



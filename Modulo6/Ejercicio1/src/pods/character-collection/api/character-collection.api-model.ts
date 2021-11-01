export interface Character {
  id: string,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  url: string,
  image: string,
  episode: string[],
  created: Date
}


export interface CharacterCollection {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: Character[]
}

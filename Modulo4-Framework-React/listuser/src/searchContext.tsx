import React from "react";

interface Search{
    org : string;
}

interface Context extends Search {
    setOrg: (search: Search) => void;
  }
  
  
export const SearchContext = React.createContext<Context>({
    org: "lemoncode",
    setOrg: () => { console.warn(`New value`)}
});

export const SearchProvider = (props) => {
      const [searchContext, setOrg] = React.useState<Search>({org:"lemoncode"});

      return (
          <SearchContext.Provider value={{org: searchContext.org, setOrg}}>
              {props.children}
          </SearchContext.Provider>
      )
}


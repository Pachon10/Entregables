import React from "react";
import { Link, generatePath } from "react-router-dom";
import { SearchProvider, SearchContext } from "./searchContext"
import { Input, Button } from '@material-ui/core';
import StickyHeadTable, { Data } from "./component/table";
import MenuApp from "./component/Menu";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const GetListOrgs = () => {

  const [members, setMembers] = React.useState<Data[]>([]);
  const {org, setOrg} = React.useContext(SearchContext);
  console.log(org);

  console.log(org);

  const loadMembers = () => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }

  return {loadMembers, org, setOrg, members}
}

export const ListPage: React.FC = () => {
  
  const {loadMembers, org, setOrg, members} = GetListOrgs();

  const search = () => {
    loadMembers();
  };

  React.useEffect(() => {
    loadMembers();
  }, []);

  return (
    <SearchProvider>
      <MenuApp/>
      <h2>Hello from List page</h2>
      <Input value={org} onChange={(e) => setOrg({org: e.target.value})} />
      <Button onClick={search} color="primary" variant="contained">Search</Button>
      <StickyHeadTable rows={members} />
    </SearchProvider>
  );
};

import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Query = gql`
  {
    chefs {
      id
      name
      Resturants {
        name
      }
    }
  }
`;

const Chefs = () => {
  const { data, loading, error } = useQuery(Query);

  if (error) {
    return <div>{JSON.stringify(error, null, 2)}</div>;
  }
  if (data) {
    return <div> {JSON.stringify(data, null, 2)}</div>;
  } else {
    return <div></div>;
  }
};

export default Chefs;

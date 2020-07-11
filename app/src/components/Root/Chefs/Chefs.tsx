import * as React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Querydata } from "./interface";
import styled from "styled-components";
import AddRestaurant from "./AddRest";
import AddChef from "./AddChef";
const Query = gql`
  {
    chefs {
      id
      name
      Resturants {
        name
        id
      }
    }
  }
`;

const Mutation = gql`
  mutation($chefid: ID!, $name: String!) {
    createResturant(chefid: $chefid, name: $name) {
      id
      name
    }
  }
`;
const createChefMutation = gql`
  mutation($name: String!) {
    createChef(name: $name) {
      id
      name
    }
  }
`;

const Wrapper = styled.div``;
const Chefo = styled.div`
  margin-bottom: 1rem;
`;
const Chefname = styled.strong`
  font-size: 1.5rem;
`;
const Restaurant = styled.span`
  background-color: #eeeeee;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.25em;
  margin: 0.25rem 0.5rem 0.25rem 0;
`;

const Restaurants = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.5rem;
`;

const Chefs = () => {
  const { data, loading, error, refetch } = useQuery<Querydata>(Query);
  const [createRestaurant] = useMutation(Mutation);
  const [createChef] = useMutation(createChefMutation);

  if (loading)
    return (
      <div>
        {" "}
        <p>"loading...."</p>{" "}
      </div>
    );

  return (
    <Wrapper>
      {data &&
        data?.chefs.map((chef) => (
          <Chefo key={chef.id}>
            <Chefname>{chef.name}</Chefname>
            <Restaurants>
              {chef.Resturants.map((res) => (
                <Restaurant key={res.id}> {res.name} </Restaurant>
              ))}
              <AddRestaurant
                onAddRestaurant={async ({ name }) => {
                  await createRestaurant({
                    variables: {
                      chefid: chef.id,
                      name: name,
                    },
                  });
                  refetch();
                }}
              />
            </Restaurants>
          </Chefo>
        ))}
      <AddChef
        onAddChef={async ({ name }) => {
          await createChef({ variables: { name } });
          refetch();
        }}
      />
    </Wrapper>
  );
};

export default Chefs;

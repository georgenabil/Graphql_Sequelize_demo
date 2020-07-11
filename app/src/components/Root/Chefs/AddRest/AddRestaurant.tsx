import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useForm, Field } from "react-hook-form";

interface AddRestaurantProps {
  onAddRestaurant: ({ name }: { name: string }) => Promise<void>;
}

const AddRestaurantButton = styled.button`
  border: 1px dashed #aaaaaa;
  color: #555555;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.25em;
  :hover {
    cursor: pointer;
  }
`;

const TextField = styled.input`
  border: 0;
  border-bottom: 0.125rem solid #cccccc;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.25em;
  :focus {
    border-bottom-color: #aaaaaa;
    outline: none;
  }
`;
const Wrapper = styled.div`
  margin: 0.25rem 0;
`;

const AddRestaurant = ({
  onAddRestaurant: pushAddRestaurant,
}: AddRestaurantProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const {
    formState: { isValid, isSubmitting },
    register,
    handleSubmit,
    errors,
    reset,
  } = useForm({ mode: "onChange" });

  const onsubmit = handleSubmit(async ({ name }) => {
    await pushAddRestaurant({ name });
    reset();
    setIsAdding(false);
  });

  if (!isAdding) {
    return (
      <Wrapper>
        <AddRestaurantButton onClick={() => setIsAdding(true)}>
          +add Resturant
        </AddRestaurantButton>
      </Wrapper>
    );
  }

  return (
    <form onSubmit={onsubmit}>
      <TextField
        autoFocus
        disabled={isSubmitting}
        name="name"
        type="text"
        ref={register({ required: true })}
      />
      <button disabled={isSubmitting || !isValid}> add</button>
    </form>
  );
};

export default AddRestaurant;

import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  width: 350px;
  font-weight: 600;

  @media (max-width: 400px) {
    width: 200px;
  }
`;

export { Input };

import styled from "styled-components";

const Button = styled.button`
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: none;
  background: none;
  border-radius: 20px;
  padding: 7px 15px;
  margin: 10px 0;
  transition: all 0.3s linear;
  background-color: ${(props) =>
    props.isSelected ? "#76323f" : "transparent"};
  color: ${({ $isSelected }) =>
    $isSelected ? "#fff" : "var(--secondaryColor)"};

  &:hover {
    background-color: var(--secondaryColor) !important;
    color: white !important;
    cursor: pointer;
  }

  & > * {
    color: ${(props) => (props.isSelected ? "#fff" : "var(--secondaryColor)")};
  }

  &:hover > * {
    color: white !important;
  }
`;

export { Button };

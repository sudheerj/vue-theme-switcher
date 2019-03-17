import styled from 'vue-styled-components';

const themeProps = { color: String };

const CustomButton = styled('button', themeProps)`
  background-color: ${props => props.color};
  color: white;
  width: 5em;
  height: 3em;
  margin-top: 2em;
  margin-left: 30em;
  border-radius: 25px;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    background-color: green;
  }
`;

export default CustomButton;

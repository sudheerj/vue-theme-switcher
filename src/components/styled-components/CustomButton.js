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
`;

export default CustomButton;

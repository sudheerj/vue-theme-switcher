import styled from 'vue-styled-components';

const customProps = { color: String };

const CustomTitle = styled('div', customProps)`
  background: ${props => props.color};
  padding: 5px;
  border-radius: 25px;
`;

export default CustomTitle;

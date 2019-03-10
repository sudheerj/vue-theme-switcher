import styled from 'vue-styled-components';

const customProps = { color: String };

const CustomHeader = styled('div', customProps)`
  background: ${props => props.color};
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1em;
  font-weight: 1em;
  font-size: 30px;
`;

export default CustomHeader;

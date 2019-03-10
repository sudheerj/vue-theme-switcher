import styled from 'vue-styled-components';

const customProps = { color: String };

const CustomFooter = styled('div', customProps)`
  background: ${props => props.color};
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 5em;
`;

export default CustomFooter;

import styled from 'vue-styled-components';

const customProps = { color: String };

const Wrapper = styled('div', customProps)`
  position: relative;
  top: 200px;
  left: 35%;
  color: white;
  border-radius: 25px;
  border: 2px solid #73AD21;
  width: 500px;
  height: 350px; 
`;

export default Wrapper;

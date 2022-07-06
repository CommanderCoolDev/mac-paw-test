import { BounceLoader } from 'react-spinners';
import styled from 'styled-components';

const Preloader = () => {
  return (
    <Section>
      <BounceLoader color="#FF868E" />
    </Section>
  );
};
export default Preloader;

//==========styled=========//
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 80px 0;
`;

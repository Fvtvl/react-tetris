import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: ${(props) => props.color}, 0.1;
  border-right-color: ${(props) => props.color}, 1;
  border-left-color: ${(props) => props.color}, 0.3;
  border-top-color: ${(props) => props.color}, 1;
`;

import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  background: ${lighten(0.2, '#2A4797')};
  height: 56px;
  border-radius: 40px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 60%;
  font-weight: 500;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: #2A4797;
  }
`;

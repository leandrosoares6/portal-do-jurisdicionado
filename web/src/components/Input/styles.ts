import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  containsError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #EDEEFF;
  border-radius: 6px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;

  border: 2px solid #fff;
  color: ${lighten(0.2, '#2A4797')};

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.containsError === true &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused === true &&
    css`
      color: ${lighten(0.2, '#2A4797')};
      border-color: ${lighten(0.2, '#2A4797')};
    `}

  ${(props) =>
    props.isFilled === true &&
    css`
      color: ${lighten(0.2, '#2A4797')};
    `}


  input {
    width: 180px;
    flex: 1;
    background: transparent;
    border: 0;
    color: #2A4797;

    &::placeholder {
      color: ${lighten(0.2, '#2A4797')};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

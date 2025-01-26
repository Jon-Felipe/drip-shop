import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLinkWrapper = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

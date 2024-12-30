import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  font-family: 'Funnel Display', sans-serif;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search {
    display: none;
  }

  .user-links {
    display: flex;
    align-items: center;
    column-gap: 18px;
  }

  .navbar-links {
    display: flex;
    align-items: center;
    column-gap: 25px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    .title a {
      font-size: 24px;
    }

    .search {
      display: block;
      flex: 1;
      justify-items: center;
    }
  }
`;

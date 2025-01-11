import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: block;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    max-width: 1170px;
    margin: 0 auto;

    .title a {
      font-size: 24px;
      font-weight: 700;
    }

    .search {
      display: none;
    }

    .user-links {
      display: flex;
      align-items: center;
      column-gap: 14px;
    }
  }

  .navbar-links {
    margin-top: 5px;
    background-color: rgb(243 244 244);

    .links {
      display: flex;
      align-items: center;
      column-gap: 20px;
      max-width: 1170px;
      padding: 15px;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    .header {
      .title a {
        font-size: 28px;
      }

      .search {
        display: inline-block;
        flex: 1;
        max-width: 350px;
        margin: 0 auto;
      }
    }

    .navbar-links {
      column-gap: 30px;
    }
  }

  @media (min-width: 1024px) {
    .header {
      .search {
        max-width: unset;
        justify-items: center;
      }
    }
  }
`;

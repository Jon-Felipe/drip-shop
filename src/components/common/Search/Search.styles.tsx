import styled from 'styled-components';

export const SearchWrapper = styled.form`
  display: block;
  width: 100%;
  max-width: 500px;

  .relative {
    position: relative;
  }

  .label {
    display: block;
    font-size: 18px;
    font-family: 'Funnel Display', sans-serif;
    margin-bottom: 6px;
    margin-left: 2px;
  }

  .input {
    display: block;
    padding: 1rem;
    background-color: rgb(249 250 251);
    border: 1px solid rgb(209 213 219);
    border-radius: 8px;
    width: 100%;

    &::placeholder {
      font-size: 16px;
    }
  }

  .search-btn {
    position: absolute;
    bottom: 0.45rem;
    inset-inline-end: 0.45rem;
  }
`;
import styled from 'styled-components';

export const AlertWrapper = styled.div<{
  $severityColour?: string;
  $severityBgClass?: string;
  $bordered?: boolean;
}>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  color: ${(props) => props.$severityColour};
  background-color: ${(props) => props.$severityBgClass};
  border: ${(props) =>
    props.$bordered ? `1px solid ${props.$severityColour}` : '0px'};
  border-radius: 0.5rem;

  .text {
    font-size: 14px;
    font-family: 'Funnel Display', sans-serif;
    margin: 0;

    span {
      text-transform: capitalize;
      font-weight: 500;
    }
  }

  .icon {
    margin-right: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      color: ${(props) => props.$severityColour};
    }
  }
`;

export const StoryAlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

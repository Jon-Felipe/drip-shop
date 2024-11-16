import styled from 'styled-components';

export const SpinnerWrapper = styled.div<{ $colour?: string; $size?: string }>`
  border: 6px solid rgb(231 229 228);
  border-top: ${(props) => `6px solid ${props.$colour}`};
  border-radius: 50%;
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StorySpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

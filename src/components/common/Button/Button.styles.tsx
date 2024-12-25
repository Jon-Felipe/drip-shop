import React from 'react';
import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
  $variant?: string;
  $colour?: string;
  $size?: string;
  $pill?: boolean;
  $icon?: React.ReactNode;
  $disabled?: boolean;
}>`
  display: ${(props) => (props.$icon ? 'flex' : 'inline-block')};
  align-items: center;
  text-align: center;
  width: 100%;
  padding: ${(props) =>
    props.$size === 'small'
      ? '10px 12px'
      : props.$size === 'medium'
      ? '12px 14px'
      : props.$size === 'large' && '14px 16px'};
  font-size: ${(props) =>
    props.$size === 'small'
      ? '12px'
      : props.$size === 'medium'
      ? '14px'
      : props.$size === 'large' && '16px'};
  font-family: 'Funnel Display', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  color: ${(props) =>
    props.$variant === 'contained' ? '#fff' : props.$colour};
  background-color: ${(props) =>
    props.$variant === 'contained' ? props.$colour : '#fff'};
  border: ${(props) =>
    props.$variant === 'outlined' ? `1px solid ${props.$colour}` : 'none'};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${(props) => (props.$pill ? '20px' : '8px')};

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'outlined' ? props.$colour : ''};
    color: ${(props) => (props.$variant === 'outlined' ? '#fff' : '')};
    opacity: ${(props) => (props.$variant !== 'outlined' ? '0.9' : '1')};
  }

  .icon {
    display: flex;
    align-items: center;
    margin-right: 6px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const StoryButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`;

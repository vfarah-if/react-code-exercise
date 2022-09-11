import React from 'react';
import styled from 'styled-components';

const GREY_2 = '#bfc1c3';
const TEXT_COLOUR = 'rgb(11, 12, 12)';

export const FONT_SIZE = {
  SIZE_14: '14px',
  SIZE_16: '16px',
  SIZE_19: '19px',
  SIZE_24: '24px',
  SIZE_27: '27px',
};

interface BadgeProps {
  label: string;
  borderColour?: string;
  textColour?: string;
  fontSize?: string;
  children?: React.ReactNode;
}

const StyledBadge = styled('span')`
  border: ${({ borderColour }: BadgeProps) => `2px solid ${borderColour}`};
  border-radius: 4px;
  padding: 2px 4px;
  font-size: ${props => (props.fontSize ? props.fontSize : FONT_SIZE.SIZE_14)};
  white-space: nowrap;
  color: ${props => (props.textColour ? props.textColour : TEXT_COLOUR)};
`;

const Badge: React.FC<BadgeProps> = ({
  label,
  borderColour = GREY_2,
  textColour = TEXT_COLOUR,
  fontSize = FONT_SIZE.SIZE_14,
  children,
}) => (
  <StyledBadge
    data-test='badge'
    borderColour={borderColour}
    textColour={textColour}
    fontSize={fontSize}
    label={label}
  >
    {label}
    {children}
  </StyledBadge>
);

export default Badge;

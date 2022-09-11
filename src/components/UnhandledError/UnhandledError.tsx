import React from 'react';
import styled from 'styled-components';
import Badge from '../Badge';
import { FONT_SIZE } from '../Badge/Badge';
import Button from '../Button';
import failImage from './error-100x100.png';
import { FallbackProps } from 'react-error-boundary';

const RESPONSIVE_4 = {
  mobile: 15,
  tablet: 20,
};

const BORDER_WIDTH_MOBILE = '4px';
const MEDIA_QUERIES: {
  LARGESCREEN: string;
  TABLET: string;
} = {
  LARGESCREEN: `@media only screen and (min-width: 641px)`,
  TABLET: `@media only screen and (min-width: 641px)`,
};

const StyledRoot = styled.div({
  textAlign: 'center',
  width: '97%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: RESPONSIVE_4.mobile,
  marginBottom: RESPONSIVE_4.mobile,
  color: 'black',
  background: 'white',
  padding: RESPONSIVE_4.mobile,
  border: `${BORDER_WIDTH_MOBILE} solid #d4351c`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: RESPONSIVE_4.tablet,
    border: `5px solid #d4351c`,
  },
});

const ImageText = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FormActions = styled('div')`${MEDIA_QUERIES.TABLET} {
    * {
      vertical-align: baseline;
    }

    * + * {
      margin-left: 20px;
    }`;

export interface UnhandledErrorProps extends FallbackProps {
  displayMessage?: string;
}

const UnhandledError: React.FunctionComponent<UnhandledErrorProps> = ({
  error,
  resetErrorBoundary,
  displayMessage = 'Oops, something unexpected happened.',
}) => {
  return (
    <StyledRoot data-test='error-message'>
      <h2>
        <span>
          <ImageText>
            <img src={failImage} alt='Unhandled Error occured' />
            <span>{displayMessage}</span>
          </ImageText>
        </span>
        {error && (
          <p>
            <Badge
              borderColour='red'
              label={error?.message}
              fontSize={FONT_SIZE.SIZE_19}
            />
          </p>
        )}
      </h2>
      {resetErrorBoundary && (
        <FormActions>
          <Button
            label='Retry'
            size='large'
            primary
            onClick={resetErrorBoundary}
          />
        </FormActions>
      )}
    </StyledRoot>
  );
};

export default UnhandledError;

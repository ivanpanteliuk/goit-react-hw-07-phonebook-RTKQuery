import PropTypes from 'prop-types';
import { ErrorContainer, ErrorHeading, ErrorText } from './ErrorMessage.styled';

export default function ErrorMessage({ message }) {
  return (
    <ErrorContainer>
      <ErrorHeading>Oops, something went wrong...</ErrorHeading>
      <ErrorText>Error: {message}</ErrorText>
      <ErrorText>Press "ESC" button or reload page, please</ErrorText>
    </ErrorContainer>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { ErrorContainer, ErrorHeading, ErrorText } from './ErrorMessage.styled';

export default function ErrorMessage({ message }) {
  return (
    <ErrorContainer>
      <ErrorHeading className="error-heading">
        Oops, something went wrong...
      </ErrorHeading>
      <ErrorText className="error-message">{message}</ErrorText>
    </ErrorContainer>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

import styled from '@emotion/styled';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

export const ErrorHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: red;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  color: red;
  margin-top: 16px;
`;

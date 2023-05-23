import styled from '@emotion/styled';

export const Input = styled.input`
  background-color: #292929;
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
`;

export const Label = styled.label`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 20px;

  background: rgb(217, 176, 94);
  background: linear-gradient(
    90deg,
    rgba(217, 176, 94, 1) 0%,
    rgba(71, 43, 1, 1) 100%
  );
  box-shadow: 0 0 5px rgba(255, 125, 0, 0.6) inset,
    0 0 10px 2px rgba(255, 175, 0, 0.5) inset,
    0 0 15px 4px rgba(255, 225, 0, 0.4) inset, 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

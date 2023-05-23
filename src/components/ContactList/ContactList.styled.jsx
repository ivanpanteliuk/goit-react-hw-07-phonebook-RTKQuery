import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 30px;
  width: 440px;
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

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #292929;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #cf2e2e;
  }
`;

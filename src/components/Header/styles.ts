import styled from "styled-components/native";

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
  font-size: 16px;
`;
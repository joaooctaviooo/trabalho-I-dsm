import styled from "styled-components/native";

export const ModalContent = styled.View`
  width: 100%;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: bold;

  margin-top: 24px;
  margin-bottom: 36px;
`;

export const ContentRow = styled.View`
  align-items: center;
  margin-bottom: 36px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.infoLabel};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.info};
  font-size: 16px;
  max-width: 80%;
  text-align: center;
  line-height: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  
  padding: 10px 18px;
  border-radius: 6px;
  width: 60%;

  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
  font-size: 14px;
`;


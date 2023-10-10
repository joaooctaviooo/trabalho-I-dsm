import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { theme } from "../../global/styles";

export const SearchBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 16px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.infoLabel
})`
  width: 85%;
  background-color: ${({ theme }) => theme.colors.accentComplement};
  border-radius: 6px;
  font-size: 14px;
  padding: 8px 12px;
  color:  ${({ theme }) => theme.colors.inputText};
  height: ${Dimensions.get("window").width * 0.1}px;
`;

export const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  width: ${Dimensions.get("window").width * 0.1}px;
  height: ${Dimensions.get("window").width * 0.1}px;
`;

export const FullCenteredContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 80%;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 28,
  color: theme.colors.primary
})``;

export const ErrorMessage = styled.Text`
   color: ${({ theme }) => theme.colors.info};
  font-size: 14px;
`;
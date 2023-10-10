import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid  ${({ theme }) => theme.colors.accentComplement};

  margin-bottom: 16px;
`;

export const CardMarker = styled.View`
  width: 4px;
  height: 100%;
  width: 1%;
  background-color: ${({ theme }) => theme.colors.primary};

  margin-right: 12px;
  border-radius: 6px;
`;

export const CardBody = styled.View`
  position: relative;
  width: 99%;
`;

export const BookInfoContainer = styled.View`
  flex-direction: row;
  padding: 12px 0px;
`;

export const BookDescription = styled.View`
  margin-left: 16px;
`;

export const BookInfoRow = styled.View`
  flex-direction: row;
  max-width: 85%;
`;

export const BookTitle = styled.Text`
  max-width: 85%;
  
  color: ${({ theme }) => theme.colors.info};
  font-size: 16px;

  margin-bottom: 8px;
`;

export const BookSecondaryInfos = styled.View``;

export const BookInfoLabel = styled.Text`
  color: ${({ theme }) => theme.colors.infoLabel};
  font-size: 14px;
  font-weight: bold;
`;

export const BookInfo = styled.Text`
  color: ${({ theme }) => theme.colors.info};
  font-size: 14px;
  margin-left: 4px;
`;

export const LineSeparator = styled.View`
  width: 94%;
  height: 2px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.accentComplement};
  margin-bottom: 16px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 94%;
  padding-bottom: 8px;
`;

export const GiveRateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const GiveRateLabel = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: bold;
`;

export const NoRatingLabel = styled.Text`
  color: ${({ theme }) => theme.colors.info};
`;
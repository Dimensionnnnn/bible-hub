import styled from 'styled-components/native';

interface Props {
  color?: string;
}

export function UIColorMark({color}: Props) {
  return <StyledColorMark color={color} />;
}

const StyledColorMark = styled.View<{color?: string}>`
  background-color: ${({color}) => color};
  max-width: 24px;
  width: 100%;
  height: 47px;
  border-radius: 10px;
`;

import styled from "styled-components";

const ContainerCard = styled.div`
  padding: 16px 16px;
  display: flex;
  flex-wrap: wrap;
  width: auto;
`;

const Card = styled.div`
  height: 400px;
  padding: 20px 20px 20px 20px;
  margin: 20px 20px 20px 20px;
`;

const ContainerImg = styled.img`
  margin: 20px;
`;

const Img = styled.img`
  border-radius: 5px 5px 0 0;
  width: 200px;
  height: 200px;
`;

export { ContainerCard, Card, ContainerImg, Img };

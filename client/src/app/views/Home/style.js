import styled from "styled-components";

export const HomeContainer = styled.section`
  height: calc(100vh - 80px);
  width: 100%;
  background-color: #3e6669;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeDiv = styled.div.attrs(props => ({
  flex: props.flex,
  background: props.background || 'none'
}))`
  height: inherit;
  flex: ${props => props.flex};
  background-color: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Scenery = styled.div`
  width: 90%;
  position: relative;
  max-height: 80%;
  padding-top: 52.25%;
  background-color: #affefe;
  box-shadow: 0px 0px 15px 0px #222;

  svg {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .image{
    width: 180px;
    height: 180px;
    background-image: url("https://images.vexels.com/media/users/3/145137/isolated/preview/e6a965902c88e80552d448aa33cab165-icone-de-raios-nitidos-de-sol.png");
    background-size: cover;
    position: absolute;
    top: 16px;
    left: 16px;
  }

`;

export const ScroolItensArea = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ItemArea = styled.div`
  width: 100%;
  height: 90px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

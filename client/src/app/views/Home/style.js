import styled from "styled-components";
import matrix from '../../../assets/matrix.png';

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
  height: 80%;
  background-color: #affefe;
  box-shadow: 0px 0px 15px 0px #222;
  background-image: url(${matrix});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  h2 {
    font-size: 40px;
    text-shadow: 0px 0px 8px #000;
    margin: 20px;
  }

  p {
    margin: 30px;
    text-align: center;
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

export const ItemArea = styled.div.attrs(props => ({
  url: props.url || ''
}))`
  width: 100%;
  height: 126px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;

  .img {
    height: 120px;
    width: 120px;
    border-radius: 10px;
    margin-left: 3px;
    background-size: cover;
    background-position: center;
  }
  .item-desc {
    margin: auto;
  }
`;

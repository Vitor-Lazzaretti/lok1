import React from "react";
import styled from "styled-components";
import banner from '../../../../assets/banner.png'

export const TerminalSection = styled.section`
  height: 100vh;
  width: 100%;
  /* background-image: url(${banner}); */
  
  background-image: url("https://pranx.com/hacker/green-back.jpg");
  /* background-image: radial-gradient(circle at 56.16% -20.44%, #fc49df 0, #e843e6 16.67%, #d13fec 33.33%, #b53cf2 50%, #933cf8 66.67%, #673ffd 83.33%, #0043ff 100%); */
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TerminalContainer = styled.div`
  width: min(65%, 754px);
  height: min(72%, 450px);
  background-color: #000;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #000;
  box-shadow: 0px 0px 10px #444444;
  margin-top: 35px;
`;

export const TerminalHeader = styled.div`
  width: 100%;
  height: 27px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  
  .button-area {
    margin-left: 10px;
    display: flex;
    gap: 7px
  }
`;


const HeaderButton = styled.div.attrs(props => ({
  color: props.color || false,
}))`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00000060;
  }

`;

export const TerminalHeaderButton = ({ color, run }) => {
  return (
    <HeaderButton color={color}>
      {run && <div></div>}
    </HeaderButton>
  )
}

export const TerminalBody = styled.div`
  font-family: 'Chakra Petch', Arial, Helvetica, sans-serif;
  padding: 10px;
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 25px;
  color: #5efc03;
  user-select: none;
  text-shadow: 1px 1px 1px #61fc08;
  display: inline-flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: inherit;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    /* border: 1px solid #5efc03;  creates padding around scroll thumb */
  }

  span {
    margin: auto;
    display: block;
  };

  hr {
    width: 100%;
    border-color: #5efc03;
    border-style: dashed;
  };

  p {
    padding: 0;
    margin: 0;
    margin-left: 8px;
  }
  input {
    border: 0;
    outline: 0;
    padding: 2px;
    width: 64px;
    border-bottom: #5efc03 2px solid;
    margin: auto;
    background-color: inherit;
    font-family: inherit;
    color: inherit;
    text-shadow: inherit;
    letter-spacing: inherit;
  }
`;

export const Item = ( {onClick, id, children }) => {
  return (
    <div onClick={() => onClick()} style={{ marginLeft: 8 }}> [{id}] {'>'} {children} </div>
  )
}







const teste = styled.div`
  /* Avermelhado para amarelo */
  background-image: radial-gradient(circle at 50% -20.71%, #d7c35d 0, #deba54 8.33%, #e4b04d 16.67%, #e9a546 25%, #ed9841 33.33%, #f0893e 41.67%, #f2793c 50%, #f3673d 58.33%, #f35542 66.67%, #f34249 75%, #f22b52 83.33%, #f0065d 91.67%, #ec0069 100%);

  /* Verde Água para verde claro */
  background-image: radial-gradient(circle at 50% -20.71%, #fff56b 0, #fff866 6.25%, #fdfa63 12.5%, #e7fb61 18.75%, #d0fb62 25%, #b5fa65 31.25%, #97f86a 37.5%, #73f670 43.75%, #3cf278 50%, #00ee82 56.25%, #00ea8f 62.5%, #00e69d 68.75%, #00e2ad 75%, #00dfbe 81.25%, #00dbd1 87.5%, #00d8e3 93.75%, #00d6f6 100%);

  /* Roxo para Rosa */
  background-image: radial-gradient(circle at 56.16% -20.44%, #fc49df 0, #e843e6 16.67%, #d13fec 33.33%, #b53cf2 50%, #933cf8 66.67%, #673ffd 83.33%, #0043ff 100%);

  /* BrancoRosado para BrancoAzulado */
  background-image: radial-gradient(circle at 50% -20.71%, #abd9f4 0, #b0d8f6 6.25%, #b5d6f8 12.5%, #bbd5f8 18.75%, #c1d3f8 25%, #c8d2f8 31.25%, #ced0f6 37.5%, #d4cff4 43.75%, #dacdf2 50%, #e0cbef 56.25%, #e5caec 62.5%, #eac9e8 68.75%, #eec8e3 75%, #f2c7df 81.25%, #f5c6da 87.5%, #f8c6d5 93.75%, #f9c6d0 100%);

  /*
    https://fonts.google.com/specimen/Source+Code+Pro?preview.text=Current%20User:%20Vagner%20Lazzaretti&preview.size=23&preview.text_type=custom
    https://fonts.google.com/specimen/Chakra+Petch?preview.text=Current%20User:%20Vagner%20Lazzaretti&preview.size=23&preview.text_type=custom
  
  */
`;

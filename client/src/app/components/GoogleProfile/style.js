import styled from "styled-components";

export const ImageProfile = styled.div.attrs(props => ({
  size: props.size || "36px",
  url: props.url || ""
}))`
  width: ${props => props.size};
  height:  ${props => props.size};
  border-radius: 50%;
  background-image: url("${props => props.url}");
  background-size: cover;

  div {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: #99999944;
    transition: all 150ms linear;
    opacity: 0;

    &:hover {
      opacity: 1;
      outline: 3px solid #99999999;
    }
  }

`;
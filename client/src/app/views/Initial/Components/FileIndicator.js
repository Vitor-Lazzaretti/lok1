import styled from "styled-components";

const TextHeader = styled.div`
  margin: auto;
  font-size: 15px;
  margin-top: 6px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  user-select: none;
`;


const FileIndicator = ({ children }) => {
    return (
      <TextHeader>
        {children}
      </TextHeader>
    )
}

export default FileIndicator;
import styled from "styled-components";

export const WrapperSearch = styled.div`
  height: 100%;
  overflow: auto;
  user-select: none;
  &::-webkit-scrollbar {
    height: 5px;
    width: 10px;
    overflow-y: auto;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(89, 89, 89, 0.2);
    background: #939392;
  }
`;

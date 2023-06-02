import styled from "styled-components";

export const WrapperBodyPlaylist = styled.div`
  height: 100%;
  background: linear-gradient(to top, ${(props) => `${props.bgColor}`});
  &&>.title {
    padding: 20px 50px;
    display: flex;
    img {
      width: 232px;
      height: 232px;
      object-fit: cover;
      margin-right: 20px;
    }
    .title_content {
      height: 232px;
      font-family: "Circular Font";
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .isPublic {
        font-weight: 700;
      }
      .name {
        font-size: 3rem;
        font-weight: 900;
      }
      .info {
        display: flex;
        align-items: end;
      }
    }
  }
  .container {
    isolation: isolate;
    min-height: calc(100% - 272px);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 1)
    );
    .play {
      padding: 20px 50px;
      height: 104px;
      .playIcon {
        border-radius: 50%;
        background-color: "#1ED760";
        border: none;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

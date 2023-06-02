import styled from "styled-components";

export const DashboardWrapper = styled.div`
  color: white;
  background-color: #000000;
  .site-layout {
    height: calc(100vh - 80px);
    background-color: #000000;
    .sider {
      height: 100%;
      color: #b3b3b3;
      margin: 4px;
      border-radius: 10px;
      background-color: #121212;
      .logo {
        padding: 10%;
        max-width: 100%;
      }
      .ant-menu-dark:not(.ant-menu-horizontal)
        .ant-menu-item:not(.ant-menu-item-selected):active {
        background-color: #121212;
      }

      .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
        .ant-menu-item-selected {
        background-color: #232323;
      }
      .siderBar {
      }
      .hr {
        height: 8px;
        background-color: #000000;
      }
      .playlists {
        max-height: calc(100% - 192px);
        position: relative;
        overflow: auto;
        box-sizing: content-box;
        &::-webkit-scrollbar {
          width: 8px;
        }
        &:hover {
          &::-webkit-scrollbar {
            width: 8px;
            height: 5px;
          }
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            background: #939392;
            -webkit-box-shadow: inset 0 0 5px rgba(89, 89, 89, 0.2);
          }
        }
      }
    }
    .body {
      height: 100%;
      background-color: #121212;
      border-radius: 10px;
      margin: 4px;
      .header {
        background-color: #121212;
        background: transparent;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        .search {
          max-width: 364px;
          min-width: 259px;
          display: flex;
          align-items: center;
          .ant-input-affix-wrapper {
            height: 48px;
            border-radius: 30px;
            background-color: #242424;
            color: white;
            border-color: #242424;
            .ant-input {
              color: #fff;
              padding-left: 10px;
              font-weight: 400;
              background-color: #242424;
              &::placeholder {
                color: #fff;
                opacity: 0.4;
              }
            }
          }
          .ant-input-affix-wrapper-focused {
            border-color: white;
            opacity: 1;
          }
          .ant-input-clear-icon {
            color: white;
          }
        }
        .user {
          height: 48px;
          width: 48px;
          border-radius: 50%;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }
        }
      }
      .content {
        height: calc(100% - 64px);
        overflow: auto;
        box-sizing: content-box;
        border-radius: 10px;
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
        .text-content {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .footer {
    background-color: #000000;
    padding: 4px;
  }
`;

import styled from "styled-components";

export const TrackSearchResultWrapper = styled.div`
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background-color: #5a595a;
  }
  /* .ant-table-body .ant-table-row-hover {
    background: #5a595a;
    color: #fff;
  }
  .ant-table-body .ant-table-row-hover > td {
    background: #5a595a;
    color: #fff;
  } */

  .ant-table-wrapper .ant-table-thead > tr > th {
    border-bottom: 1px solid #fff;
  }

  .ant-table-wrapper .ant-table-sticky-holder {
    background-color: #121212;
  }
  .ant-table {
    padding: 10px;
    background-color: #121212;
    color: #fff;
    .ant-table-cell {
      background-color: #121212;
      color: #fff;
    }
  }
  .ant-table-body {
    &::-webkit-scrollbar {
      height: 5px;
      width: 10px;
      overflow-y: auto;
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(89, 89, 89, 0.2);
        background: #939392;
      }
    }
  }
  .ant-table-wrapper .ant-table-tbody > tr > td {
    border: none;
  }

  /* class */
  .trackTitle {
    display: flex;
    align-items: center;
    .albumText {
      height: 64px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .title {
        flex: 1;
        font-weight: 700;
        font-size: 16px;
        max-width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .artist {
        flex: 1;
        color: rgba(255, 255, 255, 0.7);
        line-height: 32px;
        max-width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  .album {
    color: rgba(255, 255, 255, 0.7);
  }
  .ant-table-tbody > tr:hover {
    background-color: #5a595a;
    .album {
      color: rgba(255, 255, 255, 1);
    }
    .artist {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

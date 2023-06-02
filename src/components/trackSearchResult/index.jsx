import React, { memo, useEffect, useState } from 'react'
import { Table } from 'antd';
import { FieldTimeOutlined } from "@ant-design/icons"

import { handleTimeChange } from '../../utils/musicTimeChange';

import { TrackSearchResultWrapper } from './style'

const columns = [
  {
    title: "#",
    dataIndex: "Index",
    width: 80
  },
  {
    title: "标题",
    dataIndex: "album",
    minWidth: 300,
    ellipsis: true,
    render: (_, record) => (
      <div className='trackTitle'>
        <img src={record.albumUrl} alt="" />
        <div className="albumText">
          <div className='title'>{record.title}</div>
          <div className='artist'>{record.artist}</div>
        </div>
      </div>
    )
  },
  {
    title: "专辑",
    dataIndex: "album",
    ellipsis: true,
    render: (text) => (
      <div className="album">{text}</div>
    )
  },
  {
    title: () => (<FieldTimeOutlined style={{ color: "#fff" }} />),
    dataIndex: "time",
    width: 150,
    render: (text) => (
      <div className="time">{handleTimeChange(text)}</div>
    )
  }
]

const TrackSearchResult = memo(({ tracks, chooseTrack }) => {
  const [allTracks, setAllTracks] = useState([]);

  useEffect(() => {
    const newTracks = tracks.map((item, index) => {
      return { ...item, Index: index + 1 }
    })
    setAllTracks(newTracks)
  }, [tracks])

  function handlePlay(record) {
    chooseTrack(record)
  }

  return (
    <TrackSearchResultWrapper>
      <Table rowKey={(record) => record.Index} columns={columns} dataSource={allTracks} sticky pagination={false}
        onRow={(record) => {
          return {
            onClick: (event) => { }, // 点击行
            onDoubleClick: (event) => { handlePlay(record) },
          };
        }}
      />

    </TrackSearchResultWrapper>
  )
})

export default TrackSearchResult
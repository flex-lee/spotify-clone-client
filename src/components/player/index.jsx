import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { PlayerWrapper } from './style'

import { message } from "antd"
import SpotifyPlayer, { spotifyApi } from "react-spotify-web-playback"
import { setCurrentSongLyricAction } from '@/store/features/play'
import { getCurrentLyrics } from '@/services'

const Player = memo(({ accessToken }) => {
  const [play, setPlay] = useState(false);
  const [songInfo, setSongInfo] = useState(null);
  const { playingTracks } = useSelector((state) => ({ playingTracks: state.play.playingTracks }))
  const dispatch = useDispatch()

  // 搜索歌词
  useEffect(() => {
    if (!songInfo) return
    getCurrentLyrics({
      track: songInfo.track.name,
      artist: songInfo.track.artists.map(item=>item.name).join(",")
    }).then(res => {
      dispatch(setCurrentSongLyricAction(res.data[0].lyrics))
    }).catch((error) => {
      console.error(error)
      message.error(error.message);
    })

  }, [songInfo, dispatch])

  // 歌曲变化开始自动播放
  useEffect(() => {
    console.log(playingTracks)
    setPlay(true)
  }, [playingTracks]);

  // // 获取设备id
  // useEffect(() => {
  //   spotifyApi.getDevices(accessToken).then(res => {
  //     console.log(res)
  //   })
  // }, [accessToken])

  if (!accessToken) return null
  return (
    <PlayerWrapper>
      <SpotifyPlayer
        name='spotify web clone'
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false)
          setSongInfo(state)
          console.log(state)
        }}
        play={play}
        hideAttribution
        uris={playingTracks}
        syncExternalDevice={true}
        styles={{
          activeColor: '#1cb954',
          bgColor: '#000',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#1cb954',
          sliderHandleColor: "#fff",
          trackArtistColor: '#ccc',
          trackNameColor: '#fff',
        }}
      />
    </PlayerWrapper>
  )
})

export default Player
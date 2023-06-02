import React, { memo } from 'react'
import { PlayCircleFilled } from "@ant-design/icons"

import { WrapperBodyPlaylist } from './style'

import { usePalette } from "color-thief-react"
import TrackSearchResult from '../trackSearchResult'
import { tracksTransform } from '../../utils/tracksTransform'
import { useDispatch } from 'react-redux'
import { setPlayingTracksAction } from '@/store/features/play'


const BodyPlaylist = memo(({ playlistInfo, chooseTrack }) => {
    const { data } = usePalette(playlistInfo?.images[0]?.url, 3, "hex", { crossOrigin: 'anonymous', })
    console.log(playlistInfo)

    const dispatch = useDispatch()
    function handlePlayAll() {
        const tracks = playlistInfo.tracks.items.map(item => item.track.uri)
        dispatch(setPlayingTracksAction(tracks))
    }

    return (
        <WrapperBodyPlaylist bgColor={data}>
            <div className="title">
                <img src={playlistInfo?.images[0]?.url || require('@/assets/image/music.png')} alt="" />
                <div className="title_content">
                    <div className="isPublic">{playlistInfo?.public ? "公开歌单" : "私人歌单"}</div>
                    <div className="name">{playlistInfo?.name}</div>
                    {
                        playlistInfo.description && <div className="desc">{playlistInfo?.description}</div>
                    }
                    <div className="info">
                        <div className="createUser">{playlistInfo?.owner?.display_name}</div>
                        <div className="total">· {playlistInfo?.tracks?.total}首歌曲</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="play">
                    <PlayCircleFilled className='playIcon' style={{ fontSize: "56px", color: "#1ED760" }} onClick={handlePlayAll} />
                </div>
                <div className="infoList">
                    <TrackSearchResult chooseTrack={chooseTrack} tracks={tracksTransform(playlistInfo.tracks.items.map(item => item.track))} />
                </div>
            </div>

        </WrapperBodyPlaylist>
    )
})

export default BodyPlaylist
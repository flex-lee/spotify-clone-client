import React, { memo, useEffect, useState } from 'react'

import { WrapperPlaylist } from './style'
import BodyPlaylist from '@/components/body_playlist'
import { useParams } from 'react-router-dom'
import useSpotify from '@/hooks/useSpotify'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { setPlayingTracksAction } from '@/store/features/play'


const Playlist = memo(() => {
    const { accessToken } = useSelector((state) => ({ accessToken: state.user.accessToken }), shallowEqual)
    const [playlistInfo, setPlaylistInfo] = useState(null);
    const spotifyApi = useSpotify(accessToken)

    const params = useParams()
    const dispatch = useDispatch()
    // 获取歌单详情
    useEffect(() => {
        spotifyApi.getPlaylist(params.id).then(data => {
            setPlaylistInfo(data.body)
        })
    }, [params, spotifyApi])

    function chooseTrack(track) {
        console.log(track)
        dispatch(setPlayingTracksAction(track.uri))
    }
    return (
        <WrapperPlaylist>
            {
                playlistInfo && <BodyPlaylist playlistInfo={playlistInfo} chooseTrack={chooseTrack} />
            }

        </WrapperPlaylist>
    )
})

export default Playlist
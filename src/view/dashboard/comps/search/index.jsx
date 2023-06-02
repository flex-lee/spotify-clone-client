import React, { memo, useState, useEffect, useRef } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { WrapperSearch } from './style'
import { setPlayingTracksAction } from '@/store/features/play';

import TrackSearchResult from '@/components/trackSearchResult';
import { debounce } from '@/utils/tools';
import { tracksTransform } from "@/utils/tracksTransform"
import useSpotify from '@/hooks/useSpotify';

const Search = memo(() => {
    const [tracks, setTracks] = useState([]);
    const [offset, setOffset] = useState(0);
    const { accessToken, searchValue } = useSelector((state) => ({ searchValue: state.search.searchValue, accessToken: state.user.accessToken }), shallowEqual)
    const spotifyApi = useSpotify(accessToken)
    const tableRef = useRef()


    const dispatch = useDispatch()


    // 获取每次搜索的前50首歌曲
    useEffect(() => {
        let cancel = false
        if (!searchValue) {
            setTracks([])
            setOffset(0)
            return
        }
        if (!accessToken) return

        setOffset(0)
        spotifyApi.searchTracks(searchValue, { limit: 50, offset: 1 }).then(res => {
            if (cancel) return;
            setTracks(tracksTransform(res.body.tracks.items))
        })
        return () => {
            cancel = true
        }
    }, [accessToken, searchValue, spotifyApi])

    useEffect(() => {
        let cancel = false
        if (!searchValue) {
            setTracks([])
            setOffset(0)
            return
        }
        if (offset >= 1) {
            spotifyApi.searchTracks(searchValue, { limit: 50, offset: offset * 50 }).then(res => {
                if (cancel) return;
                // prevTracks指的是上一个useState的状态，用来解决内存溢出
                setTracks(prevTracks => [...prevTracks, ...tracksTransform(res.body.tracks.items)])
            })
        }
        return () => {
            cancel = true
        }
    }, [offset, searchValue, spotifyApi])


    // 选择当前播放的歌曲
    function chooseTrack(track) {
        dispatch(setPlayingTracksAction(track?.uri))
    }

    // 滚动监听
    function handleScroll() {
        const tableBodyEl = document.querySelector(".ant-table-body")
        const tableBodyTotalHeight = tableBodyEl.clientHeight
        const tableBodyHeight = tableRef.current.clientHeight - 55
        const scrollHeight = tableRef.current.scrollTop
        if (tableBodyHeight + scrollHeight > tableBodyTotalHeight - 800) {
            setOffset(offset + 1)
        }
    }
    return (
        <WrapperSearch ref={tableRef} onScrollCapture={debounce(handleScroll, 1000)}>
            <TrackSearchResult tracks={tracks} chooseTrack={chooseTrack} />
        </WrapperSearch>
    )
})

export default Search
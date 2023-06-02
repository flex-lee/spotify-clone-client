import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiderPlaylistsWrapper } from './style'
import { Menu } from "antd"

const SiderPlaylists = memo(({ playlists, selectMenu, changeMenu }) => {
    const [playlist, setPlaylist] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        console.log("获取用户的歌单列表", playlists)
        const items = playlists.map(item => {
            return getItem(item.name, item.id, item?.images[0]?.url, "ItemType")
        })
        setPlaylist(items)
    }, [playlists])

    function getItem(label, key, icon, type) {
        return {
            key,
            icon: (icon ? <img src={icon} alt="" /> : <img src={require("../../assets/image/music.png")} alt="" />),
            label,
            type,
            title: label
        }
    }

    // 点击事件
    function handleClick(item) {
        changeMenu(item.key)
    }

    return (
        <SiderPlaylistsWrapper>
            <Menu
                style={{ background: "#121212" }}
                theme='dark'
                triggerSubMenuAction="click"
                mode="inline"
                selectedKeys={selectMenu}
                items={playlist}
                onClick={(item) => handleClick(item)}
            />
        </SiderPlaylistsWrapper>
    )
})

export default SiderPlaylists
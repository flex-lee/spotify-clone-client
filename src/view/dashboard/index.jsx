import React, { memo, useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { DashboardWrapper } from './style'
import { SearchOutlined } from '@ant-design/icons'
import { Layout, Input, Tooltip } from "antd"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'

import SiderPlaylists from '../../components/sider_playlists'
import SiderBar from '../../components/sider_bar'
import SiderMusicLab from '../../components/sider_musicLab'
import Player from '../../components/player'

import {  setSearchValueAction } from '@/store/features/search'
import useSpotify from '@/hooks/useSpotify'
import { setAccessTokenAction } from '@/store/features/user'

const { Header, Footer, Sider, Content } = Layout

const code = new URLSearchParams(window.location.search).get("code");

const Dashboard = memo(() => {
    const accessToken = useAuth(code)
    const spotifyApi = useSpotify(accessToken)
    const [collapsed, setCollapsed] = useState(false);
    const [search, setSearch] = useState("")
    const [user, setUser] = useState(null);
    const [userPlaylist, setUserPlaylist] = useState([]);
    // 选中的菜单
    const [selectMenu, setSelectMenu] = useState(["1"]);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // 使用spotifyApi之前需要进行token验证
    useEffect(() => {
        if (!accessToken) return
        dispatch(setAccessTokenAction(accessToken))
        spotifyApi.getMe().then(data => {
            setUser(data.body)
            console.log(data.body)
        })
    }, [accessToken, dispatch, spotifyApi]);
    // 获取用户的歌单
    useEffect(() => {
        if (!user) return
        spotifyApi.getUserPlaylists(user.id).then((data) => {
            setUserPlaylist(data.body.items)
        })
    }, [user, spotifyApi])
    // 搜索歌曲触发
    useEffect(() => {
        dispatch(setSearchValueAction(search))
    }, [search, accessToken, dispatch]);



    // 根据侧边栏的选择改变当前内容区域的路由地址
    useEffect(() => {
        if (selectMenu[0] === "1") {
            navigate("/dashboard/home")
        } else if (selectMenu[0] === "2") {
            navigate("/dashboard/search")
        } else {
            navigate("/dashboard/playlist/" + selectMenu[0])
        }
    }, [selectMenu, navigate])
    // 改变siderBar状态
    function handleChangeSiderBar(status) {
        setCollapsed(status)
    }
    // 监控search内容
    function clearSearch(e) {
        const searchValue = e.target.value
        setSearch(searchValue)
    }
    // 改变选中的菜单
    function handleSelectMenu(key) {
        setSelectMenu([key])
    }

    return (
        <DashboardWrapper>
            <Layout style={{ height: "100vh" }}>
                <Layout className="site-layout">
                    <Sider className='sider' width={"200px"} trigger={null} collapsedWidth="100" collapsible collapsed={collapsed}
                    >
                        <div className='siderBar'>
                            <SiderBar selectMenu={selectMenu} changeMenu={handleSelectMenu} />
                        </div>
                        <div className='hr'></div>
                        <div className='playlists'>
                            <SiderMusicLab collapsed={collapsed} changeCollapse={((status) => { handleChangeSiderBar(status) })} />
                            <SiderPlaylists selectMenu={selectMenu} playlists={userPlaylist} changeMenu={handleSelectMenu} />
                        </div>
                    </Sider>
                    <Layout className='body'>
                        <Header className='header'>
                            {
                                selectMenu[0] === "2" ? <div className="search">
                                    <Input
                                        placeholder="想听什么?"
                                        prefix={<SearchOutlined />}
                                        allowClear onChange={clearSearch}
                                        value={search}
                                    />
                                </div> : <div className="search"></div>
                            }
                            <div className="user">
                                <Tooltip placement="top" title={user?.display_name}>
                                    {
                                        user ? <img src={user?.images[0]?.url} alt={user?.display_name} /> : ""
                                    }
                                </Tooltip>
                            </div>
                        </Header>
                        <Content className='content'>
                            <Outlet />
                            {/* 歌词 */}
                            {/* {
                                <div className="text-content" style={{ whiteSpace: "pre-wrap" }}>
                                    {lyrics}
                                </div>
                            } */}
                        </Content>
                    </Layout>
                </Layout>
                <Footer className='footer'>
                    <Player accessToken={accessToken} />
                </Footer>
            </Layout>
        </DashboardWrapper>

    )
})

export default Dashboard
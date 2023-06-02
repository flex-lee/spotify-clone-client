import React, { memo, useEffect } from 'react'
import { SiderBarWrapper } from './style'
import { Menu } from "antd"
import { HomeFilled, SearchOutlined } from "@ant-design/icons"

const SiderBar = memo(({ selectMenu, changeMenu }) => {
    return (
        <SiderBarWrapper>
            <img className='logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="LOGO" />
            <Menu
                style={{ background: "#121212" }}
                theme='dark'
                mode="inline"
                selectedKeys={selectMenu}
                onClick={(item) => changeMenu(item.key)}
                items={[
                    {
                        key: '1',
                        icon: <HomeFilled />,
                        label: '主页',
                    },
                    {
                        key: "2",
                        icon: <SearchOutlined />,
                        label: '搜索',
                    }
                ]}
            />
        </SiderBarWrapper>
    )
})

export default SiderBar
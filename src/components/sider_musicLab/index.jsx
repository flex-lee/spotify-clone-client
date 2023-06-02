import React, { memo, useState } from 'react'
import { SiderMusicLabWrapper } from './style'
import { Menu } from "antd"
import { AlignCenterOutlined } from "@ant-design/icons"

const SiderMusicLab = memo((props) => {
    const { changeCollapse, collapsed } = props

    const [isSelect, setIsSelect] = useState(collapsed);
    // 选择是否开启折叠
    function handleSelect(isSelect) {
        changeCollapse(isSelect)
        setIsSelect(isSelect)
    }
    // 默认音乐库图标
    const item = [
        {
            key: "3",
            title: isSelect ? "展开音乐库" : "折叠音乐库",
            icon: <AlignCenterOutlined />,
            label: '音乐库',
        },
    ]
    return (
        <SiderMusicLabWrapper>
            <Menu
                style={{ background: "#121212" }}
                theme='dark'
                triggerSubMenuAction="click"
                mode="inline"
                multiple="true"
                onSelect={() => { handleSelect(true) }}
                onDeselect={() => { handleSelect(false) }}
                items={item}
            />
        </SiderMusicLabWrapper>
    )
})

export default SiderMusicLab
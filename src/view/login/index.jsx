import React, { memo } from 'react'
import { LoginWrapper } from './style'
import { Button } from 'antd'


const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = memo(() => {
    return (
        <LoginWrapper>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify login" />
            <Button className='login_btn' type="ghost" shape="round" size='large' href={AUTH_URL}>
                LOGIN WITH SPOTIFY
            </Button>
        </LoginWrapper >
    )
})

export default Login 
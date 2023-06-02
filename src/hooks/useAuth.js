import { useState, useEffect } from "react";
import { getAuthorization, refreshAccessToken } from "@/services";
import { message } from "antd";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    getAuthorization(code)
      .then((res) => {
        setAccessToken(res.data[0].accessToken);
        setRefreshToken(res.data[0].refreshToken);
        setExpiresIn(res.data[0].expiresIn);
        window.history.pushState({}, null, "/");
        // localStorage.setItem("refreshToken", res.data[0].refreshToken);
        // localStorage.setItem(
        //   "expiresTime",
        //   Date.now() + res.data[0].expiresIn * 1000
        // );
      })
      .catch((error) => {
        message.error(error.message, () => {
          window.location = "/login";
        });
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const timer = setInterval(() => {
      refreshAccessToken(refreshToken)
        .then((res) => {
          setAccessToken(res.data[0].accessToken);
          setExpiresIn(res.data[0].expiresIn);
          // localStorage.setItem(
          //   "expiresTime",
          //   Date.now() + res.data[0].expiresIn * 1000
          // );
        })
        .catch((error) => {
          message.error(error.message, 2, () => {
            window.location = "/";
          });
        });
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(timer);
  }, [refreshToken, expiresIn]);

  return accessToken;
}

import sqRequest from "../request";
import qs from "qs";

export function getAuthorization(code) {
  return sqRequest.post({
    url: "/login",
    data: qs.stringify({ code: code }),
  });
}

export function refreshAccessToken(refreshToken) {
  console.log(refreshToken)
  return sqRequest.post({
    url: "/refresh",
    data: qs.stringify({ refreshToken: refreshToken }),
  });
}

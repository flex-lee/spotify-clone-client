import sqRequest from "../request";

export function getCurrentLyrics(params) {
  console.log(params)
  return sqRequest.get({
    url: "/search/lyrics",
    params,
  });
}

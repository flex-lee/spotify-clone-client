import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "fabde88ab9b44125bef090c6299787e4",
});
export default function useSpotify(accessToken) {
  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return spotifyApi;
}

export function tracksTransform(origin) {
  return origin.map((item) => {
    // 获取最小专辑 uri
    const smallestAlbumImage = item.album.images.reduce((smallest, image) => {
      if (image.height < smallest.height) return image;
      return smallest;
    }, item.album.images[0]);
    return {
      artist:
        item.artists.length > 1
          ? item.artists.map((artist) => artist.name).join(",")
          : item.artists[0].name,
      title: item.name,
      time: item.duration_ms,
      album: item.album.name,
      albumUrl: smallestAlbumImage.url,
      uri: item.uri,
    };
  });
}

export const resizeImage = (url, size) => {
    const image = url.match(/media/) && url.replace('/media/games', `/media/resize/${size}/-/games`)
    return image
}
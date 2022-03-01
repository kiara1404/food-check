import { videoEl } from './startScanner.js'

export async function stopScanner() {
    // code van joeri
    const tracks = videoEl.srcObject.getTracks()
    tracks.forEach(function (track) {
        track.stop();
    });
    videoEl.srcObject = null
    for (let i = 1; i < 99999; i++)
        window.clearInterval(i);
}
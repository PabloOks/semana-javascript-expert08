import VideoProcessor from "./videoProcessor.js";
import MP4Demuxer from "./mp4Demuxer.js";
import CanvasRenderer from "./canvasRenderer.js";

const qvgaConstraints = {
    width: 320,
    height: 240,
}
const vgaConstraints = {
    width: 640,
    height: 480,
}
const hdConstraints = {
    width: 1280,
    height: 720,
}

/**
 * @link Registros Webcodecs: https://www.w3.org/TR/webcodecs-codec-registry/
 */
const encoderConfig = {
    ...qvgaConstraints,
    bitrate: 10e6,
    // WEBM
    codec: 'vp09.00.10.08',
    pt: 4,
    hardwareAcceleration: 'prefer-software',

    // MP4
    // codec: 'avc1.42002A',
    // pt: 1,
    // hardwareAcceleration: 'prefer-hardware',
    // avc: { format: 'annexb' },
}

const mp4Demuxer = new MP4Demuxer()
const videoProcessor = new VideoProcessor({ mp4Demuxer })



onmessage = async ({ data }) => {
    const renderFrame = CanvasRenderer.getRenderer(data.canvas)

    await videoProcessor.start({
        file: data.file,
        renderFrame,
        encoderConfig,
    })
    
    self.postMessage({ status: 'done' })
}
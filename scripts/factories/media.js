function mediaFactory(data) {
    function video() {
        console.log("video")
    }
    function img() {
        console.log("img")
    }
    function getMedia() {
        data.image ? img() : video()
    }
    return { getMedia }
}
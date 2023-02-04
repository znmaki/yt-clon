import { useEffect } from "react"

export const fetchHome = ({ getVideosC, changeHidden, hidden }: any) => {
    window.scroll(0, 0)
    useEffect(() => {
        getVideosC('トモシビ')
        if (hidden) {
            changeHidden()
        }
    }, [])
}

export const fechtSearch = ({ getVideosC, query, changeHidden, hidden, videos }: any) => {
    window.scroll(0, 0)
    useEffect(() => {
        getVideosC(query)
        if (hidden) {
            changeHidden()
        }
    }, [query])

    if (query) {
        document.title = query;
    }
}

export const fetchChanel = ({ getChanelDetailC, getVideoChanelC, id, changeHidden, hidden }: any) => {
    window.scroll(0, 0)
    useEffect(() => {
        getChanelDetailC(id)
        getVideoChanelC(id)
        if (hidden === true) {
            changeHidden()
        }
    }, [id])
}

export const fetchWatchVideo = ({ getVideoSelectC, getVideoDetailC, id, changeHidden, hidden, videoD }: any) => {
    useEffect(() => {
        window.scroll(0, 0)
        getVideoSelectC(`${id}`)
        setTimeout(() => {
            getVideoDetailC(`${id}`)
        }, 1000);

        if (hidden === false) {
            changeHidden()
        }
    }, [id])

    if (videoD) {
        document.title = videoD.snippet.title
    }
}
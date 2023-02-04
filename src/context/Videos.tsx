import { IComments, IGetMainVideo, IGetVideoSelect, ISuggest, IVideoDetail, VideoContextProps } from "@/models";
import { createContext, useState } from "react";
import { getVideos, getVideoDetail, getChanelDetail, getCommentsVideo, getSuggestVideo, getVideoChanel } from '@/services'
export const VideoContext = createContext(
    {} as VideoContextProps
);

const VideosProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [loading, setLoading] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [videos, setVideos] = useState<any>([]) //videos
    const [videoD, setVideoD] = useState<IVideoDetail>() //detalle del video seleccionado
    const [chanel, setChanel] = useState<any>([]) //info del canal
    const [chanelVideo, setChanelVideo] = useState<any>([]) //info del canal
    const [comments, setComments] = useState<IComments[]>()
    const [suggest, setSuggest] = useState<ISuggest[]>()

    const changeHidden = () => {
        setHidden(!hidden)
    }

    const getMainVideo = async ({ q, videoId, chanelId }: IGetMainVideo) => {
        setLoading(true);
        await Promise.all([
            getVideos(`search?q=${q}`),
            getVideoDetail(`videos?id=${videoId}`),
            getChanelDetail(`channels?id=${chanelId}`)
        ]).then((data) => {
            console.log(data)
        }).finally(() => {
            setLoading(false)
        })
    }

    const getVideosC = async (query: string) => {
        setLoading(true);
        await getVideos(`search?q=${query}`)
            .then((data) => setVideos(data.data.items && data.data.items))
            .finally(() => { setLoading(false) })
    }

    const getVideoDetailC = async (query: string) => {
        setLoading(true);
        await getVideoDetail(`videos?id=${query}`)
            .then((data) => setVideoD(data.data.items && data.data.items[0]))
            .finally(() => { setLoading(false) })
    }

    const getChanelDetailC = async (query: string) => {
        setLoading(true);
        await getChanelDetail(`channels?id=${query}`)
            .then((data) => setChanel(data.data.items && data.data.items[0]))
            .finally(() => { setLoading(false) })
    }

    const getVideoChanelC = async (chanel: string) => {
        setLoading(true);
        await getVideoChanel(`search?channelId=${chanel}`)
            .then((data) => setChanelVideo(data.data.items && data.data.items))
            .finally(() => { setLoading(false) })
    }

    //ASDDDDDDDDDDDDDDDDDDDDDDDDD


    const getVideoSelectC = async (videoId: string) => {
        setLoading(true);
        await Promise.all([
            getCommentsVideo(`commentThreads?videoId=${videoId}`),
            getSuggestVideo(`search?relatedToVideoId=${videoId}`)
        ]).then((data) => {
            setComments(data[0].data.items)
            setSuggest(data[1].data.items)
            console.log(data[0].data.items)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <VideoContext.Provider value={{
            hidden,
            loading,
            videos,
            videoD,
            comments,
            suggest,
            chanel,
            chanelVideo,

            getMainVideo,
            getVideoDetailC,
            getVideosC,
            getVideoSelectC,
            getChanelDetailC,
            getVideoChanelC,

            changeHidden
        }}>
            {children}
        </VideoContext.Provider>
    )
}

export default VideosProvider
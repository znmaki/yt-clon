import { IComments } from "./comments.interface";
import { ISuggest } from "./suggest.interface";
import { IVideo3 } from "./videos3.interface";

export interface IOptions {
    name?: string;
    Icon?: ({ style }: { style?: string | undefined; }) => JSX.Element;
    type?: string;
    divider?: boolean
}

export interface IOptionSuggestion {
    name: string
}

export interface IGetMainVideo {
    q: string;
    videoId: string;
    chanelId: string;
}

export interface IGetVideoSelect {
    videoId: string
}

export interface VideoContextProps {
    hidden: boolean;
    changeHidden: () => void;
    videos: any;
    chanel: any;
    loading: boolean;
    videoD?: any;
    suggest: ISuggest[] | undefined;
    comments: IComments[] | undefined;
    chanelVideo: any;
    
    getMainVideo: ({ q, videoId, chanelId }: IGetMainVideo) => void;
    getVideoDetailC: (query: string) => Promise<void>;
    getVideosC: (query: any) => Promise<void>;
    getChanelDetailC: (query: string) => Promise<void>;
    getVideoSelectC: (videoId: string) => Promise<void>;
    getVideoChanelC: (chanel: string) => Promise<void>;
}
export interface IVideo3 {
    kind: string;
    nextPageToken?: string;
    regionCode?: string;
    snippet?: SnippetV;
    id?: Id;
    pageInfo?: PageInfoV;
    items?: ItemV[];
}

export interface ItemV {
    kind: string;
    id: Id;
    snippet: SnippetV;
}

export interface SnippetV {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailsV;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

export interface ThumbnailsV {
    default: DefaultV;
    medium: DefaultV;
    high: DefaultV;
}

export interface DefaultV {
    url: string;
    width?: number;
    height?: number;
}

export interface Id {
    kind: string;
    videoId?: string;
    channelId?: string;
}

export interface PageInfoV {
    totalResults: number;
    resultsPerPage: number;
}
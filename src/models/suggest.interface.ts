export interface ISuggest {
	[x: string]: any;
    snippet: SnippetSU;
    kind: string;
    items: ItemSU[] | any;
    id: IdSU;
}

export interface ItemSU {
    kind: string;
    id: IdSU;
    snippet: SnippetSU;
}

export interface SnippetSU {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailsSU;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
}

export interface ThumbnailsSU {
    default: DefaultSU;
    medium: DefaultSU;
    high: DefaultSU;
    standard?: DefaultSU;
    maxres?: DefaultSU;
}

export interface DefaultSU {
    url: string;
    width: number;
    height: number;
}

export interface IdSU {
    kind: string;
    videoId: string;
}
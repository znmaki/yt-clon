export interface IVideoDetail {
    kind: string;
    items?: ItemVD[];
    pageInfo?: PageInfoVD;    
}

export interface PageInfoVD {
    totalResults: number;
    resultsPerPage: number;
}

export interface ItemVD {
    kind: string;
    id: string;
    snippet: SnippetVD;
    contentDetails: ContentDetailsVD;
    statistics: StatisticsVD;
}

export interface StatisticsVD {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
}

export interface ContentDetailsVD {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: RegionRestriction;
    contentRating: ContentRating;
    projection: string;
}

export interface ContentRating {
}

export interface RegionRestriction {
    blocked: string[];
}

export interface SnippetVD {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailsVD;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: LocalizedVD;
}

export interface LocalizedVD {
    title: string;
    description: string;
}

export interface ThumbnailsVD {
    default: DefaultVD;
    medium: DefaultVD;
    high: DefaultVD;
    standard: DefaultVD;
    maxres: DefaultVD;
}

export interface DefaultVD {
    url: string;
    width: number;
    height: number;
}
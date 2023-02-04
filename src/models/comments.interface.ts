export interface IComments {
	[x: string]: any;
	snippet: Snippet2CO;
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfoCO;
    items: ItemCO[] | any;
}

export interface ItemCO {
    kind: string;
    id: string;
    snippet: Snippet2CO;
}

export interface Snippet2CO {
    videoId: string;
    topLevelComment: TopLevelCommentCO;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
}

export interface TopLevelCommentCO {
    kind: string;
    id: string;
    snippet: SnippetCO;
}

export interface SnippetCO {
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: AuthorChannelIdCO;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    publishedAt: string;
    updatedAt: string;
}

export interface AuthorChannelIdCO {
    value: string;
}

export interface PageInfoCO {
    totalResults: number;
    resultsPerPage: number;
}
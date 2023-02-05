import { IChanelDetail, IComments, ISuggest, IVideo3, IVideoDetail } from "@/models";

import axios from "axios";

const optionsVideos = {
    params: { part: 'snippet,id', regionCode: 'JP', maxResults: '20' },
    headers: {
        'X-RapidAPI-Key': '48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};

const optionsVideoDetail = {
    params: { part: 'contentDetails,snippet,statistics' },
    headers: {
        'X-RapidAPI-Key': '48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const optionsChanelDetail = {
    params: { part: 'snippet,statistics' },
    headers: {
        'X-RapidAPI-Key': '48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const oCommentsVideo = {
    params: { part: 'snippet', maxResults: '100' },
    headers: {
        'X-RapidAPI-Key': '48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const oSuggetsVideo = {
    params: { part: 'id,snippet', type: 'video', maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': '48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const oVideoChanel = {
    params: {
        part: 'snippet,id',
        order: 'date',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url: any) => {
    const { data } = await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`, optionsVideos)
    return data;
}

export const getVideos = (url: any) => {
    return axios.get<IVideo3>(`https://youtube-v31.p.rapidapi.com/${url}`, optionsVideos)
}

export const getVideoDetail = (url: any) => {
    return axios.get<IVideoDetail>(`https://youtube-v31.p.rapidapi.com/${url}`, optionsVideoDetail)
}

export const getChanelDetail = (url: any) => {
    return axios.get<IChanelDetail>(`https://youtube-v31.p.rapidapi.com/${url}`, optionsChanelDetail)
}

export const getCommentsVideo = (url: any) => {
    return axios.get<IComments>(`https://youtube-v31.p.rapidapi.com/${url}`, oCommentsVideo)
}

export const getSuggestVideo = (url: any) => {
    return axios.get<ISuggest>(`https://youtube-v31.p.rapidapi.com/${url}`, oSuggetsVideo)
}

export const getVideoChanel = (chanel: any) => {
    return axios.get(`https://youtube-v31.p.rapidapi.com/${chanel}`, oVideoChanel)
}

//​https://youtube-v31.p.rapidapi.com/search?channelId=UCirXo4PJYfDZ1nTnGD-jz3g
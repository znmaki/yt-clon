import { IChanelDetail, IComments, ISuggest, IVideo3, IVideoDetail } from "@/models";

import axios from "axios";

const optionsVideos = {
    params: { part: 'snippet,id', regionCode: 'jp', maxResults: '20' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const optionsVideoDetail = {
    params: { part: 'contentDetails,snippet,statistics' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const optionsChanelDetail = {
    params: { part: 'snippet,statistics' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const oCommentsVideo = {
    params: { part: 'snippet', maxResults: '100' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const oSuggetsVideo = {
    params: { part: 'id,snippet', type: 'video', maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
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
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url: any) => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/${url}`, optionsVideos)
    return data;
}

export const getVideos = (url: any) => {
    return axios.get<IVideo3>(`${import.meta.env.VITE_BASE_URL}/${url}`, optionsVideos)
}

export const getVideoDetail = (url: any) => {
    return axios.get<IVideoDetail>(`${import.meta.env.VITE_BASE_URL}/${url}`, optionsVideoDetail)
}

export const getChanelDetail = (url: any) => {
    return axios.get<IChanelDetail>(`${import.meta.env.VITE_BASE_URL}/${url}`, optionsChanelDetail)
}

export const getCommentsVideo = (url: any) => {
    return axios.get<IComments>(`${import.meta.env.VITE_BASE_URL}/${url}`, oCommentsVideo)
}

export const getSuggestVideo = (url: any) => {
    return axios.get<ISuggest>(`${import.meta.env.VITE_BASE_URL}/${url}`, oSuggetsVideo)
}

export const getVideoChanel = (chanel: any) => {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/${chanel}`, oVideoChanel)
}

//​${import.meta.env.VITE_BASE_URL}/search?channelId=UCirXo4PJYfDZ1nTnGD-jz3g
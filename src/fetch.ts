import axios from "axios";

const options = {
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '48b940a4e1msh4bcba91b0e1213ap1cf5ddjsn3f810053818c',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchAPI = async (url: any) => {
    const { data } = await axios.get(`https://youtube138.p.rapidapi.com/${url}`, options)

    return data;
}
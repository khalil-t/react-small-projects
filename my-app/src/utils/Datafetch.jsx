import axios  from "axios";
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': 'b9a9fef24emsh0b0c0145450ec9bp10afffjsnea521976c7c5',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
}
};
export const fetchdata = async (url)=>{


const data = axios.get(`${BASE_URL}/${url}`, options);


return data
}
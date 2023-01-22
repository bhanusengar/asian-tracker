import axios from "axios";

const api = axios.create({
  baseURL:'https://express.digitemtech.com/api',
  headers:{
    'Content-Type':'application/json'
  }
})

export const login = async (data)=>api.post('/login',data);

export const userRegister = async (data)=>api.post('/signup',data);

// get all menu cotegory
export const menuCategory = async ()=>api.get('/category/all');

export const menuCountry = async ()=>api.get('/country/all');

// get all content

export const allContent = async ()=>api.get('/acontent/all');

export const multipleVideo = async (data)=>api.post('/video/multiple',data);
export const singleVideoById = async (data)=>api.post('/video/single',data);
export const AllOpinion = async (data)=>api.post('/opinion/multiple',data);
export const singleOpinion = async (data)=>api.post('/opinion/single',data);
export const allImage = async (data)=>api.post('/image/multiple',data);
export const singleImage = async (data)=>api.post('/image/single',data);
export const allPodcast = async (data)=>api.post('/podcast/multiple',data);
export const singlePodcast = async (data)=>api.post('/podcast/single',data);
export const allNews = async (data)=>api.post('/news/multiple',data);
export const singleNews = async (data)=>api.post('/news/single',data);
export const allMustSee = async (data)=>api.post('/article/mustsee/multiple',data);
export const allStory = async (data)=>api.post('/article/story/multiple',data);
export const allFeatured = async (data)=>api.post('/article/featured/multiple',data);
export const updateArticle = async (data)=>api.post('/article/edit/view',data);



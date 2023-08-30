import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {fetchArticles , addArticle , deleteArticle , editArticle , fetchArticleById} from "../services/ArticleService"

export const getArticles = createAsyncThunk(//l backend
    "article/getArticles",
    async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
    const res = await fetchArticles();//l base de données
    return res.data;
}
    catch (error) {
    return rejectWithValue(error.message);
    }
    }
);

export const createArticle = createAsyncThunk(
    "article/createArticle",
    async (article, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await addArticle(article);
    return res.data
    }
    catch (error) {
    return rejectWithValue(error.message);
    }
    }
    );

export const delArticle = createAsyncThunk(
    "article/delArticle",
    async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    await deleteArticle(id);
    return id ;
    }
    catch (error) {
    return rejectWithValue(error.message);
    }
    });

export const updateArticle = createAsyncThunk(
    "article/updateArticle",
    async (article, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res= await editArticle(article);
    return res.data
    }
    catch (error) {
    return rejectWithValue(error.message);
    }
    }
    );

export const findArticleByID = createAsyncThunk(
    "article/findArticleByID",
    async (id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const res = await fetchArticleById(id);
    return res.data;
    }
    catch (error) {
    return rejectWithValue(error.message);
    }
    });

export const articleSlice = createSlice({//lel state
        name: 'article',
        initialState:{
        articles:[],
        article:{},
        isLoading: false,
        success:null,
        error:null,
        },
        extraReducers: (builder) => {
            //get articles
            builder
            .addCase(getArticles.pending, (state, action) => {
            state.isLoading=true;
            state.error=null;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
            state.isLoading=false;
            state.error = null;
            state.articles=action.payload;
            })
            .addCase(getArticles.rejected, (state, action) => {
            state.isLoading=false;
            state.error=action.payload;
            console.log("impossible de se connecter au serveur")
            })
            //insertion article
            .addCase(createArticle.pending, (state, action) => {
                state.isLoading=true;
                state.error=null;
                state.success=null;
            })
            .addCase(createArticle.fulfilled, (state, action) => {
            state.articles.push(action.payload);
            state.isLoading=false;
            state.error=null;
            state.success=action.payload;
            })
            .addCase(createArticle.rejected, (state, action) => {
            state.isLoading=false;
            state.error=action.payload;
            state.success=null;
            })
        }
    }
    )
export default articleSlice.reducer;
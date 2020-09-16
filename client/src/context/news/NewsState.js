import React, { useReducer } from 'react';
import NewsContext from './newsContext';
import newsReducer from './newsReducer';
import axios from 'axios';
import {
  GET_ARTICLES,
  GET_SOURCES,
  GET_QUOTE,
  SET_CURRENT,
  FILTER_NEWS,
  ERROR
} from '../types';

const NewsState = (props) => {
  const initialState = {
    articles: null,
    sources: null,
    quote: null,
    current: null,
    error: null,
    filtered: false,
    loading: true
  };

  const [state, dispatch] = useReducer(newsReducer, initialState);

  // Get Articles
  const getArticles = async (source) => {
    try {
      delete axios.defaults.headers.common['x-auth-token'];
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
      );
      dispatch({ type: GET_ARTICLES, payload: res.data.articles });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response });
    }
  };

  // Get Sources
  const getSources = async () => {
    try {
      delete axios.defaults.headers.common['x-auth-token'];
      const res = await axios.get(
        `https://newsapi.org/v2/sources?language=en&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
      );
      dispatch({ type: GET_SOURCES, payload: res.data.sources });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  const getQuote = async () => {
    try {
      delete axios.defaults.headers.common['x-auth-token'];
      const res = await axios.get(`https://api.quotable.io/random`);
      dispatch({ type: GET_QUOTE, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.statusMessage });
    }
  };

  const setCurrent = (source) => {
    dispatch({ type: SET_CURRENT, payload: source });
  };

  const filterNews = async (text) => {
    try {
      delete axios.defaults.headers.common['x-auth-token'];
      const res = await axios.get(
        `https://newsapi.org/v2/everything?language=en&sortBy=recent&q=${text}&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
      );
      dispatch({ type: FILTER_NEWS, payload: res.data.articles });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  return (
    <NewsContext.Provider
      value={{
        articles: state.articles,
        sources: state.sources,
        quote: state.quote,
        current: state.current,
        loading: state.loading,
        filtered: state.filtered,
        error: state.error,
        getArticles,
        getSources,
        getQuote,
        setCurrent,
        filterNews
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;

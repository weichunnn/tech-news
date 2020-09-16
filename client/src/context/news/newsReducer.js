import {
  GET_ARTICLES,
  GET_SOURCES,
  GET_QUOTE,
  SET_CURRENT,
  FILTER_NEWS,
  ERROR
} from '../types';

export default (state, action) => {
  const selectedSources = [
    'BBC News',
    'CBS News',
    'CNN',
    'Fortune',
    'Google News',
    'NBC News',
    'Politico',
    'Reuters',
    'Time',
    'The Wall Street Journal',
    'The Verge',
    'Wired'
  ];

  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
    case GET_SOURCES:
      return {
        ...state,
        sources: action.payload.filter((source) =>
          selectedSources.includes(source.name)
        )
      };
    case GET_QUOTE:
      return {
        ...state,
        quote: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        filtered: false
      };
    case FILTER_NEWS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
        filtered: true
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

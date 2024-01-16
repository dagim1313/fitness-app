export const exerciseOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '5daef38f3emsh717b3218df38857p1215a2jsnc1f199ccb45d',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5daef38f3emsh717b3218df38857p1215a2jsnc1f199ccb45d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fechData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
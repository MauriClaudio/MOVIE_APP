const URL_LIST_NIGHTMARE = 
    "http://www.omdbapi.com/?apikey=96fcfbd7&s=nightmare";
const URL_LIST_NIGHTMARE_SERIES = 
    "http://www.omdbapi.com/?apikey=96fcfbd7&s=nightmare&&type=series";

export const listNightmare = () => {
    fetch(URL_LIST_NIGHTMARE)
        .then((response) => response.json())
        .then((results) => {
            const movies = results.Search;
            console.log(movies);
        });
};

export const listNightmareSeries = () => {
    fetch(URL_LIST_NIGHTMARE_SERIES)
        .then((response) => response.json())
        .then((results) => {
            const movies = results.Search;
            console.log(movies);
        });
};
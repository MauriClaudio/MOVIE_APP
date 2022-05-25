const URL_LIST_NIGHTMARE = 
    "http://www.omdbapi.com/?apikey=96fcfbd7&s=nightmare";

export const listNightmare = () => {
    fetch(URL_LIST_NIGHTMARE)
        .then((response) => response.json())
        .then((results) => {
            const movies = results.Search;
            console.log(movies);
        });
};
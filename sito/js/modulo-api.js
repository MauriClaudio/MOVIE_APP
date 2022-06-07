import {BASE_URL} from "./config.js";

/**
 * Chiamate api per elenchi di film, serie, etc
 * @param {*} url la URL da chiamre con la fetch
 */
export const apilist = (s, type) => {
    const url = BASE_URL +  `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            viewItems(items);
    });
};

const viewItems = (item) => {
    const element = document.getElementById("movies");
    item.map((item) => {
        element.appendChild(createHTMLMovie(item));
    });
};

const createHTMLMovie = (movie) => {
    const para = document.createElement("p");
    const node = document.createTextNode(movie.Title);
    para.appendChild(node);
    return para;
}
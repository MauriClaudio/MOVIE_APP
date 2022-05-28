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
    item.map((item) => {
        console.group(item.Title);
        console.log(item.Year);
        console.log(item.Type);
        console.log(item.Poster);
        console.groupEnd();
    });
}
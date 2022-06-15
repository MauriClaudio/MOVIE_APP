

export function Search(){
    document.getElementById("movies").innerHTML="";
    const url="http://www.omdbapi.com/?apikey=96fcfbd7&s="+document.getElementById("titolo").value+
              "&type="+document.getElementById("tipo").value;
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
    const node = document.createElement("a");
    //node.onclick = pagina(movie.title);
    node.style = "margin: 10px;border-radius: 10px 10px 10px 10px;width:280px;padding: 50px;display:inline-block;text-transform:uppercase; color: white;background:rgba(0, 0, 0, 0.5); ";
    const img = document.createElement("img");
    img.src = movie.Poster;
    const textnode = document.createTextNode(movie.Title);
    node.appendChild(img);
    node.appendChild(textnode);
    return node;
};
/*
prove per creare una pagina in base al film cliccato

const pagina = (title) => {
    window.var=title;
    location.href="./film.html";
}
*/
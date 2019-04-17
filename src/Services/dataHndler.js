





export function getData(query = 'Game of') {
    return fetch('http://api.tvmaze.com/search/shows?q=' + query)
        .then(respons => respons.json())
        .then(data => validateData(data));
}

function validateData(data) {
    //console.log(data);
    data.forEach((item) => {
        console.log((item.show.image === null));
        if (!item.show.image) item.show.image = { medium: "https://via.placeholder.com/220X295?text=O" }
        if (!item.show.network) item.show.network = { name: "No data" };
        if (!item.show.rating) item.show.rating = { average: "No data" };
        if (!item.show.rating.average) item.show.rating = { average: "-" };
        if (!item.show.genres) item.show.genres = ["No data" ];
    })
    return data;
}




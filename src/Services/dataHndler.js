
import C from './constants';


class DataHandler{//get data from the api retrn a promise with the data after validation
    getData(query = 'Game of') {
        return fetch(C.apiStart + query)
            .then(respons => respons.json())
            .then(data => this.validateData(data));
    }

    validateData(data) { //validation for the data and corrctions if needed
        //console.log(data);
        data.forEach((item) => {
            console.log((item.show.image === null));
            if (!item.show.image) item.show.image = { medium: C.placeholder }
            if (!item.show.network) item.show.network = { name: "No data" };
            if (!item.show.rating) item.show.rating = { average: "No data" };
            if (!item.show.rating.average) item.show.rating = { average: "-" };
            if (!item.show.genres) item.show.genres = ["No data" ];
        })
        return data;
    }
}

const dataHandler = new DataHandler();

export default dataHandler; 




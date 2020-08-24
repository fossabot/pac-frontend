import axios from "axios";

const JSON_VALUE = "json";

class Rest {
    doGet(url, params = {}) {
        const requestOptions = {
            url: url,
            responseType: JSON_VALUE,
            method: "GET",
            params: params
        };
        return axios(requestOptions);
    }

    doPost(url, data = {}, params = {}) {
        const requestOptions = {
            url: url,
            responseType: JSON_VALUE,
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            data: data,
            params: params,
        };
        return axios(requestOptions);
    }

    doPut(url, data = {}, params = {}) {
        const requestOptions = {
            url: url,
            responseType: JSON_VALUE,
            method: "PUT",
            data: data,
            params: params
        };
        return axios(requestOptions);
    }
}

export default new Rest();
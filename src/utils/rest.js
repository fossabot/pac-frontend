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

    doPost(url, data = {}, params = {}, headers = {}) {
        const requestOptions = {
            url: url,
            responseType: JSON_VALUE,
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                ...headers
            },
            data: data,
            params: params,
        };
        return axios(requestOptions);
    }

    doPut(url, data = {}, params = {}, headers = {}) {
        const requestOptions = {
            url: url,
            responseType: JSON_VALUE,
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                ...headers
            },
            data: data,
            params: params
        };
        return axios(requestOptions);
    }
}

export default new Rest();
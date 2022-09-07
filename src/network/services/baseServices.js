import { API_URL } from "../env/config"



export const baseService = {

    get: async (url) => {
        let response = []
        await fetch(API_URL + url)
            .then(response => response.json())
            .then(data => response = data)
        return response
    },

    delete: async (url) => {
        let response = {}

        const requestOption = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        await fetch(API_URL + url, requestOption)
            .then(response => response.json())
            .then(data => response = data)
        return response;
    },

    post: async (url, data) => {
        let response = {}
        const requestOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        await fetch(API_URL + url, requestOption)
            .then(response => response.json())
            .then(data => response = data)
        return response;
    },

    put: async (url, item) => {
        let response = {}

        const requestOption = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)

        }
        await fetch(API_URL + url, requestOption)
            .then(response => response.json())
            .then(data => response = data)

        return response;
    }
}
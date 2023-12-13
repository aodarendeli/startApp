import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    console.log('ozgur')
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key]);
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            router.navigate('/server-error', { state: { error: data } });
            // toast.error(data.title);
            break;
        default:
            break;
    }
    return Promise.reject(error.response)
})

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
    put: (url: string, body: object) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Deneme = {
    get: () => request.get('todos/1'),
}

// const TestError = {
//     get400Error: () => request.get('BuggyContoller/bad-request'),
//     get401Error: () => request.get('BuggyContoller/unauthorised'),
//     get404Error: () => request.get('BuggyContoller/not-found'),
//     get500Error: () => request.get('BuggyContoller/server-error'),
//     getValidationError: () => request.get('BuggyContoller/validation-error'),
// }
const api = {
    Deneme,
}

export default api;
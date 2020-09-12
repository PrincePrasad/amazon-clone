import axios from "axios";

const instance = axios.create({
	baseURL: 'http://localhost:5001/clone-2139e/us-central1/api' //the api url
});

export default instance;
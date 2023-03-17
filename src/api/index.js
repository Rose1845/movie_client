import axios from "axios";

const BaseUrl="http://localhost:8080/api/v1/movies";

export default axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-type": "application/json"
    }
});
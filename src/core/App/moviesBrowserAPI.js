import axios from "axios";
import { APIKey, APIPath } from "../../API";

export const getGenres = () =>
    axios.get(`${APIPath}genre/movie/list?${APIKey}&language=en-US`)
        .then(response => response.data);
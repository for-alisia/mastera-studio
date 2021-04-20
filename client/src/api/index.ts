/** Dependencies */
import axios from 'axios';

/** Models */
import { Review } from '../models/Review.model';

const axiosInst = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_LOCAL_HTTP
      : process.env.REACT_APP_PROD_HTTP,
});

const API = {
  getReviews(page: number, postsPerPage: number) {
    return axiosInst.get<Review[]>(`/reviews?_start=${page * postsPerPage}&_limit=${postsPerPage}`);
  },
};

export default API;

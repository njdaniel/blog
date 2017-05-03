/**
 * Created by nicholas on 5/2/17.
 */
import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1337sheep';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
      type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
      type: CREATE_POST,
        payload: request
    };
}
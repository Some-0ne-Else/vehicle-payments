import { PostRequestParams, RequestParams } from '@/types/api';

const API = {
  get({ url, token }: RequestParams) {
    return fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .catch((err) => console.log(err));
  },
  post({ url, token, data }: PostRequestParams) {
    return fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      },
    )
      .then((res) => (res.ok && res.status === 200 ? res.json() : Promise.reject(res.statusText)))
      .catch((err) => console.log(err));
  },
  delete({ url, token }: RequestParams) {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .catch((err) => console.log(err));
  },
};

export default API;

export interface RequestParams {
  url: string,
  token: string,
}

export interface PostRequestParams extends RequestParams {
  data: { [key: string]: unknown}
}

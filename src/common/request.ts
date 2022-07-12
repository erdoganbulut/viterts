const apiBase = import.meta.env.VITE_API_BASE_URL;

const defaultHeaders: HeadersInit = {
  'Content-Type': 'application/json;charset=UTF-8',
};

const fetchRequest = <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> =>
  fetch(`${apiBase}${url}`, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);

const request = {
  get: <TResponse>(url: string) =>
    fetchRequest<TResponse>(url, { method: 'GET', headers: defaultHeaders }),

  delete: <TResponse>(url: string) =>
    fetchRequest<TResponse>(url, { method: 'DELETE', headers: defaultHeaders }),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    fetchRequest<TResponse>(url, { method: 'POST', body, headers: defaultHeaders }),

  put: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    fetchRequest<TResponse>(url, { method: 'PUT', body, headers: defaultHeaders }),
};

export enum ERequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export default request;

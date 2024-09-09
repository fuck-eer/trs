import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { v4 as uuidv4 } from "uuid";
export type APIReturnType<DataType> = {
	status: number;
	statusText: string;
	data: DataType;
};
export type APIErrorType = {
	isError: true;
	status: number;
	statusText: string;
	error: unknown;
};

export const responseIsError = (
	resp: APIReturnType<unknown> | APIErrorType
): resp is APIErrorType => {
	return "error" in resp && resp.isError;
};

const middlewareInstance = axios.create({});

//* will create interceptor will that adds the CSRF token to every request
// middlewareInstance.interceptors.request.use(
// 	(config) => {
// 		const token = uuidv4();
// 		if (global.window && token) {
// 			config.headers["csrf-token"] = token;
// 			return config;
// 		}
// 		throw new axios.Cancel("CSRF token not found");
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

export const getAPI = async <ResponseType>(
	url: string,
	config?: AxiosRequestConfig //can send signals too for request cancellation, etc.
): Promise<APIReturnType<ResponseType>> => {
	const searchParam = url;
	return await middlewareInstance
		.get<ResponseType>(searchParam, config)
		.then((response) => {
			return response;
		})
		.catch((error: Error | AxiosError) => {
			if (axios.isAxiosError(error) && error.response) {
				return Promise.reject({
					isError: true,
					status: error.response.status,
					statusText: error.response.statusText,
					error: error.response,
				});
			}

			//Need to decide on default error message
			return Promise.reject({
				isError: true,
				status: 500,
				statusText: "Server Error",
				error: "Something went wrong",
			});
		});
};
export const postAPI = async <ResponseType, RequestType>(
	url: string,
	data?: RequestType,
	config?: AxiosRequestConfig
): Promise<APIReturnType<ResponseType>> => {
	return await middlewareInstance
		.post<ResponseType>(url, data, config)
		.then((response) => {
			return response;
		})
		.catch((error: Error | AxiosError) => {
			if (axios.isAxiosError(error) && error.response) {
				return Promise.reject({
					isError: true,
					status: error.response.status,
					statusText: error.response.statusText,
					error: error.response,
				});
			}
			//Need to decide on default error message
			return Promise.reject({
				isError: true,
				status: 500,
				statusText: "Server Error",
				error: "Something went wrong",
			});
		});
};

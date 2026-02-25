export interface IHandlerResponse {
  message?: string;
  data?: any;
  error?: string;
}

export interface IFetchAPIResponse<dataType> {
  data: dataType;
  total: {
    [key: string]: any;
  }[];
}

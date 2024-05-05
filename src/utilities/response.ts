import { Response } from "express";

type TMeta = {
  total: number;
  limit: number;
  page: number;
};

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: TMeta;
  data?: T;
};

const response = <T>(res: Response, data: TResponse<T>) => {
  return res.status(data.statusCode).json({
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    meta: data.meta,
    data: data.data,
  });
};

export default response;

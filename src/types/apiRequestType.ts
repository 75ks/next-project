type ApiRequestType<T = unknown> = {
  action: string | string[];
  data?: T;
};

export default ApiRequestType;

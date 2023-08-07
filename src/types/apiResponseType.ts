type ApiResponceType<T, V> = {
  status: number;
  data?: T;
  option?: V;
  messages?: string[];
  error?: string;
};

export default ApiResponceType;

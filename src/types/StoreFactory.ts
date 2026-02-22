export type StoreFactory<T> = {
  data: T;
  setData: (value: T) => void;
};

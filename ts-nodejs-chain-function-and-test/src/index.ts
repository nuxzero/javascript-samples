const account = {
  get: (): Promise<string> => {
    return Promise.resolve("John Doe");
  },
};

const orders = {
  get: (): Promise<string[]> => {
    return Promise.resolve(["order1", "order2"]);
  },
  create: (order: string): Promise<string> => {
    return Promise.resolve(order);
  },
};

export type APIClient = typeof api;

export function api() {
  return {
    account,
    orders,
  };
}

api()
  .account.get()
  .then((res) => {
    console.log(res);
  });

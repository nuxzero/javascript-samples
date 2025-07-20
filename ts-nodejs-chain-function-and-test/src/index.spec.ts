import { afterEach, describe, expect, test, vi } from "vitest";
import { APIClient } from "./index";

describe("foo", () => {
  const mockAccount = { get: vi.fn() };
  const mockOrders = { get: vi.fn(), create: vi.fn() };
  const mockApi: APIClient = () => {
    return {
      account: mockAccount,
      orders: mockOrders,
    };
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should return account name", async () => {
    mockAccount.get.mockResolvedValue("John Doe");

    const result = await mockApi().account.get();

    expect(result).toBe("John Doe");
  });

  test("should return a list of orders", async () => {
    mockOrders.get.mockResolvedValue(["order1", "order2"]);

    const result = await mockApi().orders.get();

    expect(result).toEqual(["order1", "order2"]);
  });
});

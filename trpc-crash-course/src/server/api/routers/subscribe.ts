import { publicProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";

export const subscribeRouter = createTRPCRouter({
  sub: publicProcedure
    .input(
      z.object({
        text: z
          .string()
          .min(5, { message: "Must be at least 5 characters long." }),
      })
    )
    .query(({ input }) => {
      return {
        pleaseSub: `Please do subscribe to: ${input?.text}`,
      };
    }),
});

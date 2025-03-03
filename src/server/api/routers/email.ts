import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { EmailTemplate } from "~/components/email-template";
import resend from "~/lib/resend";



export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(z.object({
      name: z.string(),
      phone: z.string(),
      email: z.string().email(),
      address: z.string(),
      company: z.string(),
      node: z.string(),
    }))
    .mutation(async ({ input }) => {
      const email = await EmailTemplate({
        name: input.name,
        phone: input.phone,
        email: input.email,
        address: input.address,
        company: input.company,
        node: input.node,
      })
      
      const { data, error } = await resend.emails.send({
        from: "官网渠道 <site@mg.lifec.dev>",
        to: [
          "aicmortal@gmail.com",
        ],
        subject: "官网新增客户登记",
        react: email
      });
  

      return {
        data,
        error,
      };
    }),
});

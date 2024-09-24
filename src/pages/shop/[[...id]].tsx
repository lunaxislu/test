import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
const BASE_PATH = "/shop";
const DynamicPages = ({ url }: { url: string }) => {
  const router = useRouter();
  const { asPath, query } = router;

  return (
    <div className="text-yellow-600">
      {BASE_PATH === asPath ? (
        <div>
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
        </div>
      ) : (
        <div>
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
          <Calendar />
        </div>
      )}
    </div>
  );
};

export default DynamicPages;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log(ctx.req.url);
  return {
    props: {
      url: ctx.req.url,
    },
  };
};

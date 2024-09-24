/* eslint-disable @typescript-eslint/no-unused-vars */
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
const BASE_PATH = "/shop";
const DynamicPageCompare = ({ url }: { url: string }) => {
  const router = useRouter();
  const { asPath, query } = router;

  return (
    <div className="text-yellow-600">
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
  );
};

export default DynamicPageCompare;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log(ctx.req.url);
  return {
    props: {
      url: ctx.req.url,
    },
  };
};

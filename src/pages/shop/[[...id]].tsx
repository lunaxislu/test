/* eslint-disable @typescript-eslint/no-unused-vars */
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
const BASE_PATH = "/shop";
const DynamicPages = ({ url }: { url: string | undefined }) => {
  const router = useRouter();
  const [state, setState] = useState<string>("");

  return (
    <div className="text-yellow-600">
      {state}
      <ul className="p-4 flex gap-5 bg-orange-500 text-gray-50">
        <Link href={"/shop"}>shop</Link>
        <Link href={"/shop/1"} shallow={true}>
          shop/1
        </Link>
        <Link href={"/shop/2"} shallow={true}>
          shop/2
        </Link>
        <Link href={"/shop/3"} shallow={true}>
          shop/3
        </Link>
        <Link href={"/shop/4"} shallow={true}>
          shop/4
        </Link>
        <Link href={"/shop/5"} shallow={true}>
          shop/5
        </Link>
        <Link href={"/shop/a/1"} shallow={true}>
          shop/a/1
        </Link>
        <Link href={"/shop/a/2"} shallow={true}>
          shop/a/2
        </Link>
        <Link href={"/shop/a/3"} shallow={true}>
          shop/a/3
        </Link>
        <Link href={"/shop/a/4"} shallow={true}>
          shop/a/4
        </Link>
        <Link href={"/shop/a/5"} shallow={true}>
          shop/a/5
        </Link>
      </ul>
      {BASE_PATH === router.asPath ? (
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
  return {
    props: {
      url: ctx.req.url,
    },
  };
};

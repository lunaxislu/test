/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const BASE_PATH = "/shop";
const DynamicPageCompare = ({ url }: { url: string | undefined }) => {
  const router = useRouter();
  const [state, setState] = useState<string>("");

  useEffect(() => {
    setState(router.asPath);
  }, [router.asPath]);
  return (
    <div className="text-yellow-600">
      {state}

      <ul className="p-4 flex gap-5 bg-orange-500 text-gray-50">
        <Link href={"/test"}>test</Link>
        <Link href={"/test/1"} shallow={true}>
          test/1
        </Link>
        <Link href={"/test/2"} shallow={true}>
          test/2
        </Link>
        <Link href={"/test/3"} shallow={true}>
          test/3
        </Link>
        <Link href={"/test/4"} shallow={true}>
          test/4
        </Link>
        <Link href={"/test/5"} shallow={true}>
          test/5
        </Link>
        <Link href={"/test/a/1"} shallow={true}>
          test/a/1
        </Link>
        <Link href={"/test/a/2"} shallow={true}>
          test/a/2
        </Link>
        <Link href={"/test/a/3"} shallow={true}>
          test/a/3
        </Link>
        <Link href={"/test/a/4"} shallow={true}>
          test/a/4
        </Link>
        <Link href={"/test/a/5"} shallow={true}>
          test/a/5
        </Link>
      </ul>
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
  return {
    props: {
      url: ctx.req.url,
      isSSR: true,
    },
  };
};

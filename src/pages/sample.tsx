/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPropsContext } from "next";
import React from "react";
const SamplePage = ({ test }: { test: string }) => {
  return <div> {test}</div>;
};

export default SamplePage;

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      test: "test",
    },
  };
};

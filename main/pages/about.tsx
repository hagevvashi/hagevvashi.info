import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";
import { Header } from "@hagevvashi-info/components";
import { CommonMeta } from "../components/CommonMeta";

export default function About() {
  return (
    <>
      <Head>
        <title>hagevvashi.info | about</title>
        <meta name="description" content="abount hagevvashi" />
        <CommonMeta />
      </Head>
      <Header />
      <Box>
        <Heading>Hi! I'm hagevvashi</Heading>
      </Box>
    </>
  );
}

import React from "react";
import Paragraph from "@/components/global/Paragraph";
import Layout from "@/components/layout";

const Home = () => {
  return (
    <Layout>
      <Paragraph>
        <strong className="strong">기</strong>
        <strong className="strong">술</strong>
        <span>{"과 "}</span>
        <strong className="strong">사</strong>
        <strong className="strong">람</strong>
        <span>{"을 "}</span>
        <strong className="font-bold">사</strong>
        <strong className="font-bold">랑</strong>
        <span>{"하"}</span>
        <span>{"는\n"}</span>
        <strong className="font-bold">사</strong>
        <strong className="font-bold">람</strong>
        <strong className="font-bold">들</strong>
        <span>입</span>
        <span>니</span>
        <span>다</span>
        <span>.</span>
      </Paragraph>
    </Layout>
  );
};

export default Home;

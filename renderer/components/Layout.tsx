import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeadComponent from "./Head";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div>
    <HeadComponent />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

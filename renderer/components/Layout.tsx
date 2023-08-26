import React, { ReactNode } from "react";
import { productName } from "../../package.json";

import Header from "./Header";
import Footer from "./Footer";
import HeadComponent from "./Head";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = productName }: Props) => (
  <div>
    <HeadComponent title={title} />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

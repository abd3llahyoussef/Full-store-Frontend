import React from "react";
import Banner from "../navigation/Banner";
import Categories from "../navigation/Categories";
import ContactForm from "../navigation/Contact";
import Footer from "../navigation/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Banner />
      <Categories />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

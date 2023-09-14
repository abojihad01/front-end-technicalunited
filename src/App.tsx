import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import {
  Services,
  Contact,
  Home,
  Blogs,
  BlogDetails,
  Details,
  Careers,
  Products,
  AboutUs,
  Coverage,
  ServedSectors,
  ProductDetails,
} from "./Pages";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components";
const HomeLazy = lazy(() => import("./Pages/Home"));
const ContactLazy = lazy(() => import("./Pages/Contact"));
const AboutUsLazy = lazy(() => import("./Pages/AboutUs"));
const CareersLazy = lazy(() => import("./Pages/Careers"));
const CoverageLazy = lazy(() => import("./Pages/Coverage"));
const ServedSectorsLazy = lazy(() => import("./Pages/ServedSectors"));
const DetailsLazy = lazy(() => import("./Pages/details"));
const ServicesLazy = lazy(() => import("./Pages/services"));
const BlogsLazy = lazy(() => import("./Pages/blogs"));
const BlogDetailsLazy = lazy(() => import("./Pages/blog-details"));
const ProductsLazy = lazy(() => import("./Pages/Products"));
const ProductDetailsLazy = lazy(() => import("./Pages/Product-Details"));
const ResultSearchLazy = lazy(() => import("./Pages/ResultSearch"));

function App() {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <ScrollToTop />
        <Routes>
          <Route path="/" Component={HomeLazy} />
          <Route path="/contact" Component={ContactLazy} />
          <Route path="/about" Component={AboutUsLazy} />
          <Route path="/careers" Component={CareersLazy} />
          <Route path="/coverage" Component={CoverageLazy} />
          <Route path="servedsectors" Component={ServedSectorsLazy} />
          <Route path="resultsearch" Component={ResultSearchLazy} />
          <Route path="/services">
            <Route index element={<ServicesLazy />} />
            <Route path=":id" element={<DetailsLazy />} />
          </Route>
          <Route path="/blogs">
            <Route index element={<BlogsLazy />} />
            <Route path=":blogId" element={<BlogDetailsLazy />} />
          </Route>
          <Route path="/products">
            <Route index element={<ProductsLazy />} />
            <Route path=":id" element={<ProductDetailsLazy />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

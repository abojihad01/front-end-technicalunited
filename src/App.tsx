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
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components";
const HomeLazy = lazy(() => import("./pages/Home"));
const ContactLazy = lazy(() => import("./pages/Contact"));
const AboutUsLazy = lazy(() => import("./pages/AboutUs"));
const CareersLazy = lazy(() => import("./pages/Careers"));
const CoverageLazy = lazy(() => import("./pages/Coverage"));
const ServedSectorsLazy = lazy(() => import("./pages/ServedSectors"));
const DetailsLazy = lazy(() => import("./pages/details"));
const ServicesLazy = lazy(() => import("./pages/services"));
const BlogsLazy = lazy(() => import("./pages/blogs"));
const BlogDetailsLazy = lazy(() => import("./pages/blog-details"));
const ProductsLazy = lazy(() => import("./pages/Products"));
const ProductDetailsLazy = lazy(() => import("./pages/Product-Details"));
const ResultSearchLazy = lazy(() => import("./pages/ResultSearch"));

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

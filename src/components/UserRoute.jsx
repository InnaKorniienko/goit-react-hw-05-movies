import Movies from "pages/Movies/Movies";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";

// import Home from "pages/Home/Home"
// import NotFound from "pages/NotFound/NotFound";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import Cast from "pages/Cast/Cast";
// import Reviews from "pages/Reviews/Reviews";
// import SharedLayout from "pages/SharedLayout/SharedLayout";

const Home = lazy(() => import("pages/Home/Home"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/Cast/Cast"));
const Reviews = lazy(() => import("pages/Reviews/Reviews"));
const SharedLayout = lazy(() => import("pages/SharedLayout/SharedLayout"));


export default function UserRoute() {
  return (
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
      </Suspense>
  );
};
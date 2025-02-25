import { fetchFromDatoAPI } from "../../helpers/cms";
import Navbar from "../components/Navbar";
import Watchlist from "./content";
import Cars from "./content";
import { allBlogPostsQuery } from "../../graphql/queries";

export default async function () {
  const { allBlogPosts } = await fetchFromDatoAPI(allBlogPostsQuery);

  return <Cars allBlogPosts={allBlogPosts} />;
}

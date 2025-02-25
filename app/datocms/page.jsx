import { fetchFromDatoAPI } from "../../helpers/cms";
import Navbar from "../components/Navbar";
import Watchlist from "./content";
import { homepageQuery } from "../../graphql/queries";

export default async function () {
  const { homepage } = await fetchFromDatoAPI(homepageQuery);

  return <Watchlist homepage={homepage} />;
}

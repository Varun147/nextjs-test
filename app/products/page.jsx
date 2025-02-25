import { allCardsQuery } from "../../graphql/queries"
import { fetchFromDatoAPI } from "../../helpers/cms"
import Products from "./content"

export default async function () {
  const { allCards } = await fetchFromDatoAPI(allCardsQuery)

  return <Products allCards={allCards} />
}

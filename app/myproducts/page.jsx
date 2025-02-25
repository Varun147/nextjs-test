import { allCardsQuery } from "../../graphql/queries"
import { fetchFromDatoAPI } from "../../helpers/cms"
import MyProducts from "./content"

export default async function () {
  const { allCards: allProducts } = await fetchFromDatoAPI(allCardsQuery)

  return <MyProducts allProducts={allProducts} />
}

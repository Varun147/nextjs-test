import { fetchFromDatoAPI } from "../../../helpers/cms"
import { allCardsQuery } from "../../../graphql/queries"
import Navbar from "../../components/Navbar"

export const generateStaticParams = async () => {
  // Fetch the specific blog post
  const { allCards } = await fetchFromDatoAPI(allCardsQuery)

  const slugs = allCards.map((card) => ({
    slug: card.slug,
  }))

  // array of slug =  [ { slug: 1 }]

  return slugs
}

export default async function ProductDetails({ params }) {
  const { slug } = await params
  const { allCards } = await fetchFromDatoAPI(allCardsQuery)

  const product = allCards.find((prod) => prod.slug === slug)
  console.log(product.title)
  // const slugs = allCards.category.images.map((prod) => ({
  // slug: prod.id,
  // }));
  // return slugs;

  if (!product)
    return <h1 className="text-center mt-20 text-2xl">Product Not Found</h1>

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
        {product.images.map((item) => (
          <img
            className="w-full h-96 object-contain"
            key={item.id}
            src={item.url}
            alt={product.title}
          />
        ))}

        <h1 className="text-3xl font-bold mt-4">{product.slug}</h1>
      </div>
    </div>
  )
}

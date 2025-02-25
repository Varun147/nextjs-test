const isProduction = process.env.NODE_ENV === "production"

const DATO_CMS_TOKEN = "0b01698124d9b69b5e57c7ff7a1112"
const DATO_CMS_GRAPHQL_ENDPOINT = "https://graphql.datocms.com/"

export const fetchFromDatoAPI = async (query) => {
  if (!DATO_CMS_TOKEN || !DATO_CMS_GRAPHQL_ENDPOINT)
    throw new Error("Missing DatoCMS API token or endpoint")

  const result = await fetch(DATO_CMS_GRAPHQL_ENDPOINT, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${DATO_CMS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error(error))

  if (!result.data) {
    console.error(result)
  }

  return result.data
}

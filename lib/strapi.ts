// This file would handle Strapi API integration

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337"
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || ""

/**
 * Fetches data from Strapi API
 */
export async function fetchFromStrapi(endpoint: string, params = {}) {
  const queryString = new URLSearchParams(params as Record<string, string>).toString()
  const url = `${STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ""}`

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch from Strapi: ${response.statusText}`)
  }

  return await response.json()
}

/**
 * Posts data to Strapi API
 */
export async function postToStrapi(endpoint: string, data: any) {
  const url = `${STRAPI_URL}/api/${endpoint}`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  })

  if (!response.ok) {
    throw new Error(`Failed to post to Strapi: ${response.statusText}`)
  }

  return await response.json()
}

/**
 * Fetches education articles from Strapi
 */
export async function getEducationArticles() {
  return fetchFromStrapi("articles", {
    populate: "*",
    sort: "publishedAt:desc",
  })
}

/**
 * Fetches UMKM products from Strapi
 */
export async function getUMKMProducts() {
  return fetchFromStrapi("umkm-products", {
    populate: "*",
  })
}

/**
 * Fetches wishlist items from Strapi
 */
export async function getWishlistItems() {
  return fetchFromStrapi("wishlist-items", {
    populate: "*",
  })
}

/**
 * Fetches stories from Strapi
 */
export async function getStories() {
  return fetchFromStrapi("stories", {
    populate: "*",
    sort: "publishedAt:desc",
  })
}

/**
 * Submits an aid request to Strapi
 */
export async function submitAidRequest(data: any) {
  return postToStrapi("aid-requests", data)
}

/**
 * Submits a donation confirmation to Strapi
 */
export async function submitDonation(data: any) {
  return postToStrapi("donations", data)
}

/**
 * Submits a volunteer registration to Strapi
 */
export async function submitVolunteerRegistration(data: any) {
  return postToStrapi("volunteers", data)
}

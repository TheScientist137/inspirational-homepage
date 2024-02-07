// const applicationId = '531974'
const API_KEY = 'nkoFvIYpT_RSp7_4w-NFL25lP88F0kNU7DQlM_-rkGw'
// const secretKey = 'N2Oxo5zdKakPgPuqyZzyD9s3r5ovTJdj9JOd1hj_1mk'
const API_URL = `https://api.unsplash.com/search/photos?query=cosmos&client_id=${API_KEY}`
 
export const getImage = async () => {
  const response = await fetch(API_URL)
  const json = await response.json()

  const images = json.results.map(result => result.urls.full)

  return images
}

const unsplashApi = {
  getImage
}

export default unsplashApi

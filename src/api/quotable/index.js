const API_URL = 'https://api.quotable.io/random'

export const getQuote = async () => {
 const response = await fetch(API_URL)
 const json = await response.json()

 return json
}

const quotableApi = {
 getQuote
}

export default quotableApi
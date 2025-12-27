
const PROJECT_ID = '0g3j5g3v';
const DATASET = 'production';
const API_VERSION = 'v2021-10-21';

export const fetchFromSanity = async (query: string) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://${PROJECT_ID}.api.sanity.io/${API_VERSION}/data/query/${DATASET}?query=${encodedQuery}`;
  
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result.result;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return null;
  }
};

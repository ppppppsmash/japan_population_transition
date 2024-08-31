const BASE_URL = 'https://opendata.resas-portal.go.jp';
const RESAS_API_KEY = import.meta.env.VITE_RESAS_API_KEY;

export const fetchPrefectures = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/prefectures`, {
    headers: {
      'X-API-KEY': RESAS_API_KEY,
    },
  });

  try {
    const data = await response.json();
    const prefectures = data.result;

    return prefectures;
  } catch (error) {
    console.error('failed to fetch prefectures information', error);

    throw error;
  }
};

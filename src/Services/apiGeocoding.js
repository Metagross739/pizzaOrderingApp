export default async function getAddress({ latitude, longitude }) {
  const baseUrl = import.meta.env.VITE_GEOLOCATION_API_URL;
  const GEO_URL = `${baseUrl}?latitude=${latitude}&longitude=${longitude}`;
  const res = await fetch(GEO_URL);
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

export const info = {
  name: "Sant Jhoan'e",
  alternateName: ["Sant Joan", "San Joan"],
  url: "https://restaurantesantjhoane.com",
  telephone: "+34960151265",
  priceRange: "€€",
  servesCuisine: ["Ecuatoriana", "Latina"],
  keywords:
    "Sant Jhoan'e, Sant Joan, San Joan, restaurante ecuatoriano en Valencia, comida latina Valencia, Zapadores, Ruzafa, menú diario",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Zapadores, 45",
    postalCode: "46006",
    addressLocality: "Valencia",
    addressRegion: "Valencia",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.45698,
    longitude: -0.36755,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:15",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday, PublicHolidays",
      opens: "09:00",
      closes: "19:15",
    },
  ],
};

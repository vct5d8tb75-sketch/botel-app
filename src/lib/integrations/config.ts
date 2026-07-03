export const integrationConfig = {
  previo: {
    apiUrl: process.env.PREVIO_API_URL,
    apiKey: process.env.PREVIO_API_KEY,
    enabled: Boolean(process.env.PREVIO_API_URL && process.env.PREVIO_API_KEY)
  },
  dotykacka: {
    apiUrl: process.env.DOTYKACKA_API_URL,
    apiKey: process.env.DOTYKACKA_API_KEY,
    enabled: Boolean(process.env.DOTYKACKA_API_URL && process.env.DOTYKACKA_API_KEY)
  },
  moneyS3: {
    apiUrl: process.env.MONEY_S3_API_URL,
    apiKey: process.env.MONEY_S3_API_KEY,
    enabled: Boolean(process.env.MONEY_S3_API_URL && process.env.MONEY_S3_API_KEY)
  },
  pohoda: {
    apiUrl: process.env.POHODA_API_URL,
    apiKey: process.env.POHODA_API_KEY,
    enabled: Boolean(process.env.POHODA_API_URL && process.env.POHODA_API_KEY)
  }
} as const;

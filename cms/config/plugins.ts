export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCP_BUCKET_NAME"),
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      playgroundAlways: true,
    },
  },
  "import-export-entries": {
    enabled: true,
  },
});

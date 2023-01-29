module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("dwz4buven"),
        api_key: env("153753836994526"),
        api_secret: env("ZGqLJ2VDCirIU599RY5zsfeeE48"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});

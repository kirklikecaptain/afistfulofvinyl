/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/imageLoader.ts",
  },
};

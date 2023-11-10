/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./src/libs/contentful/image-loader.ts",
  },
};

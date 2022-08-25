/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

/* {
  type: 'query',
  key: 'page',
  // the page value will not be available in the
  // destination since value is provided and doesn't
  // use a named capture group e.g. (?<page>home)
  value: 'home',
}, */

/* 
{
        source: "/",
        has: [
          {
            type: "cookie",
            key: "redirect",
            value: "false",
          },
        ],
        permanent: false,
        destination: "/intro",
      },
*/

module.exports = nextConfig;

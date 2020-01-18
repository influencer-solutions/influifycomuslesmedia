module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatbsy + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
        /*
   * Gatsby's data processing layer begins with “source”
   * plugins. Here the site sources its data from Shopify.
   */
  {
    resolve: "gatsby-source-shopify",
    options: {
      // The domain name of your Shopify shop. This is required.
      // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
      // 'gatsby-source-shopify-test-shop.myshopify.com'.
      // If you are running your shop on a custom domain, you need to use that
      // as the shop name, without a trailing slash, for example:
      // shopName: "gatsby-shop.com",
      shopName: "musles-enterprise",

      // An API access token to your Shopify shop. This is required.
      // You can generate an access token in the "Manage private apps" section
      // of your shop's Apps settings. In the Storefront API section, be sure
      // to select "Allow this app to access your storefront data using the
      // Storefront API".
      // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
      accessToken: "7d380b6c2736f57dde861be1f1bf4517",

      // Set verbose to true to display a verbose output on `npm run develop`
      // or `npm run build`. This prints which nodes are being fetched and how
      // much time was required to fetch and process the data.
      // Defaults to true.
      verbose: true,

      // Number of records to fetch on each request when building the cache
      // at startup. If your application encounters timeout errors during
      // startup, try decreasing this number.
      paginationSize: 250,

      // List of collections you want to fetch.
      // Possible values are: 'shop' and 'content'.
      // Defaults to ['shop', 'content'].
      includeCollections: ["shop", "content"],
      },
    },
  ],
};

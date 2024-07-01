module.exports = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "graph.facebook.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
  async redirects() {
    return [
      // {
      //   source: `/a/profiles/:id`,
      //   destination: `/a/profiles/:id/about`,
      //   permanent: true,
      // },
    ];
  },
};

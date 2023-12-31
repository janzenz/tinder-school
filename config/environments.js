const PORT = process.env.PORT || 80

// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
export default {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development: (config) => ({
    server_host : 'localhost', // use string 'localhost' to prevent exposure on local network
    server_protocol : 'http',
    server_port : PORT,
    compiler_public_path: `http://localhost:${PORT}/`,
    proxy: {
      enabled: false,
      options: {
        host: 'https://localhost:8000',
        match: /^\/api\/.*/
      }
    }
  })
};

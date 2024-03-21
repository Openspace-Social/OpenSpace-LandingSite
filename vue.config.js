const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin-next')

module.exports = {
    configureWebpack: {
      plugins: [
        new PrerenderSPAPlugin({
          // Required - Routes to render.
          routes: [
            '/',
            '/general/contact-us/',
            '/general/about-us/',
            '/general/thanks/',
            '/general/why-us/',
            '/roadmap/whats-next/',
            '/roadmap/os-support/',
            '/contribute/contribute/',
            '/contribute/donate/'
          ],
        })
      ]
    }
}

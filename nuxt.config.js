export default {
  head: {
    titleTemplate: '%s - Mini Projet TI106 2k21',
    title: 'NextSchool',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '@/assets/main.scss'
  ],

  plugins: [
    '@/plugins/apex.client'
  ],

  components: true,

  serverMiddleware: [
      '~/api/server.js'
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },

  build: {},
}

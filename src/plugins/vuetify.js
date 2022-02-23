import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5f249f',
        success: '#046a38',
        warning: '#f1c400',
        keas: '#e57200',
        cubs: '#f1c400',
        scouts: '#046a38',
        venturers: '#862633',
        rovers: '#d22730',
      },
    },
  },
})

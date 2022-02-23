<template>
  <v-app>
    <TopLinks />

    <Header />

    <ItemList />
  </v-app>
</template>

<style>
@font-face {
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('./assets/fonts/FuturaPTBook.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTBook.woff') format('woff'),
    url('./assets/fonts/FuturaPTBook.otf') format('opentype');
}
@font-face {
  font-family: 'Futura PT';
  font-style: italic;
  font-weight: 400;
  font-display: block;
  src: url('./assets/fonts/FuturaPTBookOblique.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTBookOblique.woff') format('woff'),
    url('./assets/fonts/FuturaPTBookOblique.otf') format('opentype');
}
@font-face {
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-display: block;
  src: url('./assets/fonts/FuturaPTMedium.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTMedium.woff') format('woff'),
    url('./assets/fonts/FuturaPTMedium.otf') format('opentype');
}
@font-face {
  font-family: 'Futura PT';
  font-style: italic;
  font-weight: 500;
  font-display: block;
  src: url('./assets/fonts/FuturaPTMediumOblique.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTMediumOblique.woff') format('woff'),
    url('./assets/fonts/FuturaPTMediumOblique.otf') format('opentype');
}
@font-face {
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 600;
  font-display: block;
  src: url('./assets/fonts/FuturaPTDemi.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTDemi.woff') format('woff'),
    url('./assets/fonts/FuturaPTDemi.otf') format('opentype');
}
@font-face {
  font-family: 'Futura PT';
  font-style: italic;
  font-weight: 600;
  font-display: block;
  src: url('./assets/fonts/FuturaPTDemiOblique.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTDemiOblique.woff') format('woff'),
    url('./assets/fonts/FuturaPTDemiOblique.otf') format('opentype');
}
@font-face {
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: url('./assets/fonts/FuturaPTHeavy.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTHeavy.woff') format('woff'),
    url('./assets/fonts/FuturaPTHeavy.otf') format('opentype');
}
@font-face {
  font-family: 'Futura PT';
  font-style: italic;
  font-weight: 700;
  font-display: block;
  src: url('./assets/fonts/FuturaPTHeavyOblique.woff2') format('woff2'),
    url('./assets/fonts/FuturaPTHeavyOblique.woff') format('woff'),
    url('./assets/fonts/FuturaPTHeavyOblique.otf') format('opentype');
}

html {
  overflow: auto;
}
</style>

<script>
import TopLinks from '@/components/TopLinks'
import Header from '@/components/Header'
import ItemList from '@/components/ItemList'

export default {
  name: 'App',

  components: {
    TopLinks,
    Header,
    ItemList,
  },
}
</script>

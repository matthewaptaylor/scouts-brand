<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-sheet outlined rounded class="pa-1"> <v-img src="./preview.png" /> </v-sheet>
    </v-col>

    <v-col>
      <p>
        This brand guide will help you use the Scouts Aotearoa brand consistently and correctly.
        While it's important to follow these guidelines closely, don't forget to have fun and be
        creative.
      </p>

      <v-btn
        color="primary"
        href="./Scouts Aotearoa Brand Guidelines 2021 Version 1-2.pdf"
        download
      >
        <v-icon left> mdi-download </v-icon>
        Download
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BrandGuidelines',
}
</script>

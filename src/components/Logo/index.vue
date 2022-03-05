<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-sheet
        outlined
        rounded
        class="text-center pa-1"
        :style="{
          backgroundImage: `url(${require('./transparent.png')})`,
          backgroundSize: '16px 16px',
          backgroundRepeat: 'repeat',
        }"
      >
        <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>

        <div ref="preview" class="d-flex justify-center"></div>
      </v-sheet>
    </v-col>

    <v-col>
      <p>
        The logo is available in a domestic version (Scouts Aotearoa) and an international version
        (Scouts Aotearoa New Zealand).
      </p>

      <v-select
        v-model="selectedVersion"
        :items="version"
        item-text="text"
        item-value="value"
        :menu-props="{ offsetY: true }"
        label="Version"
      />

      <v-select
        v-model="selectedColour"
        :items="colour"
        item-text="text"
        item-value="value"
        :menu-props="{ offsetY: true }"
        label="Colour"
      />

      <v-select
        v-model="selectedFormat"
        :items="format"
        :menu-props="{ offsetY: true }"
        label="File type"
      />

      <v-btn color="primary" class="mt-4" @click="download">
        <v-icon left> mdi-download </v-icon>
        Download
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { SVG } from '@svgdotjs/svg.js'
import { svg2png } from 'svg-png-converter'

export default {
  name: 'BrandGuidelines',

  data: () => ({
    loading: true,

    // Options
    version: [
      { text: 'Scouts Aotearoa', value: 'domestic' },
      { text: 'Scouts Aotearoa New Zealand', value: 'international' },
    ],
    colour: [
      {
        text: 'White on Purple',
        value: {
          bg: '#5f249f',
          fg: '#ffffff',
        },
      },
      {
        text: 'White on Blank',
        value: {
          bg: 'none',
          fg: '#ffffff',
        },
      },
      {
        text: 'Purple on Blank',
        value: {
          bg: 'none',
          fg: '#5f249f',
        },
      },
      {
        text: 'White on Black',
        value: {
          bg: '#000000',
          fg: '#ffffff',
        },
      },
      {
        text: 'Black on Blank',
        value: {
          bg: 'none',
          fg: '#000000',
        },
      },
    ],
    format: ['SVG', 'PNG'],

    // Selected options
    selectedVersion: 'domestic',
    selectedColour: {
      bg: '#5f249f',
      fg: '#ffffff',
    },
    selectedFormat: 'SVG',

    // Store images
    domestic: null,
    international: null,
    draw: null, // Store svg object
  }),

  watch: {
    // Update preview
    selectedVersion() {
      this.loadPreview()
    },

    selectedColour() {
      this.loadPreview()
    },
  },

  mounted() {
    this.loadPreview()
  },

  methods: {
    async loadPreview() {
      // Get correct svg file
      if (
        (this.selectedVersion === 'domestic' && this.domestic === null) ||
        (this.selectedVersion === 'international' && this.international === null)
      ) {
        // File doesn't exist, load it
        const file = await fetch(require(`./${this.selectedVersion}.svg`))
        this[this.selectedVersion] = await file.text()

        this.loading = false
      }

      this.$refs.preview.innerHTML = ''
      this.draw = SVG().addTo(this.$refs.preview).size(181.6, 57.1)

      this.draw.svg(this[this.selectedVersion]) // Add logo
      this.draw.style('.st1', { fill: this.selectedColour.bg }) // Background colour
      this.draw.style('.st2, .st3', { fill: this.selectedColour.fg }) // Logo colour
    },

    // Download the image
    download() {
      if (this.selectedFormat === 'SVG') {
        // Download SVG
        var blob = new Blob([this.$refs.preview.innerHTML], {
          type: 'image/svg+xml',
        })

        var link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `${
          this.version.filter((item) => item.value === this.selectedVersion)[0].text
        } - ${
          this.colour.filter(
            (item) =>
              item.value.bg === this.selectedColour.bg && item.value.fg === this.selectedColour.fg
          )[0].text
        }`
        link.click()
      } else {
        // Download PNG
        svg2png({
          input: this.draw.svg().trim(),
          encoding: 'dataURL',
          format: 'png',
          multiplier: 10,
        }).then((data) => {
          var link = document.createElement('a')
          link.href = data
          link.download = `${
            this.version.filter((item) => item.value === this.selectedVersion)[0].text
          } - ${
            this.colour.filter(
              (item) =>
                item.value.bg === this.selectedColour.bg && item.value.fg === this.selectedColour.fg
            )[0].text
          }`
          link.click()
        })
      }
    },
  },
}
</script>

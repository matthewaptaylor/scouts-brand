<template>
  <v-dialog
    v-model="dialog"
    persistent
    no-click-animation
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title v-text="item ? item.title : ''" />
      </v-toolbar>

      <v-container>
        <component :is="item ? item.component : ''" />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ItemDialog',

  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    item: {
      type: Object,
      default: undefined,
    },
  },
}
</script>

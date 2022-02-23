<template>
  <v-col cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card style="overflow: hidden" @click="$emit('open')">
      <v-img :src="image" aspect-ratio="2" cover></v-img>

      <div class="pa-2">
        <h2 class="text-h6 text-truncate" v-text="title" />

        <v-chip v-for="tag in tags" :key="tag" class="mr-2" small v-text="tag" />
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ItemCard',

  props: {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

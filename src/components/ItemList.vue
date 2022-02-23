<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="8" lg="6" xl="8">
        <v-text-field v-model="search" label="Search" hide-details solo dense />
      </v-col>

      <v-col class="d-flex align-center">
        <v-autocomplete
          v-model="selectedTags"
          :items="tags"
          chips
          label="Tags"
          hide-details
          multiple
          solo
          small-chips
          dense
        ></v-autocomplete>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="primary"
              class="ml-2"
              v-bind="attrs"
              v-on="on"
              @click="
                () => {
                  search = ''
                  selectedTags = []
                }
              "
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>

          <span>Clear</span>
        </v-tooltip>
      </v-col>
    </v-row>

    <v-row v-if="filteredItems.length">
      <ItemCard
        v-for="(item, index) in filteredItems"
        :key="item.title"
        :title="item.title"
        :tags="item.tags"
        :image="item.image"
        @open="openDialog(index)"
      />
    </v-row>

    <v-row v-else>
      <v-col class="d-flex flex-column justify-center align-center">
        <v-icon class="mb-2">mdi-map-search</v-icon>
        We searched all over, but there's nothing here...
      </v-col>
    </v-row>

    <ItemDialog :dialog="dialog" :item="items[selected]" @close="dialog = false" />
  </v-container>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import ItemDialog from '@/components/ItemDialog'
import BrandGuidelines from '@/components/Items/BrandGuidelines'

export default {
  name: 'ItemList',

  components: {
    ItemCard,
    ItemDialog,
  },

  data: () => ({
    // Brand items
    items: [
      {
        title: 'Brand Guidelines',
        tags: ['Generic'],
        image: '/previews/BrandGuidelines.png',
        component: BrandGuidelines,
      },
      { title: 'Letterhead', tags: ['Customisable'], image: 'https://picsum.photos/id/11/500/300' },
      { title: 'Section Header', tags: ['Generic'], image: 'https://picsum.photos/id/11/500/300' },
      { title: 'Footer', tags: ['Generic'], image: 'https://picsum.photos/id/11/500/300' },
      {
        title: 'Poster/Pamphlet',
        tags: ['Customisable'],
        image: 'https://picsum.photos/id/11/500/300',
      },
      {
        title: 'Tri-Fold Pamphlet Background',
        tags: ['Customisable'],
        image: 'https://picsum.photos/id/11/500/300',
      },
      {
        title: 'Business Card',
        tags: ['Customisable'],
        image: 'https://picsum.photos/id/11/500/300',
      },
      { title: 'Sign', tags: ['Customisable'], image: 'https://picsum.photos/id/11/500/300' },
      {
        title: 'Cover Photo',
        tags: ['Customisable'],
        image: 'https://picsum.photos/id/11/500/300',
      },
      { title: 'Cover Pattern', tags: ['Generic'], image: 'https://picsum.photos/id/11/500/300' },
    ],

    // Filter functionality
    search: '',
    selectedTags: [],

    // Dialog functionality
    dialog: false,
    selected: undefined,
  }),

  computed: {
    // Generate list of available tags
    tags() {
      return this.items.reduce((tags, item) => {
        item.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag)
          }
        })
        return tags
      }, [])
    },

    // Compute filtered list of items
    filteredItems() {
      return this.items.filter(
        (item) =>
          item.title.toLowerCase().includes(this.search.toLowerCase()) &&
          this.selectedTags.every((tag) => item.tags.includes(tag))
      )
    },
  },

  methods: {
    // Open dialog
    openDialog(item) {
      this.selected = item
      this.dialog = true
    },
  },
}
</script>

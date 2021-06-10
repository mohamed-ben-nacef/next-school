<template>
  <v-row>
    <v-col cols="6">
      <p class="text-left my-4" style="font-size: 14px; color: rgba(0,0,0,0.4);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices dictum mauris ut blandit. <a href="">Voir la documentation</a></p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="12">
      <h2 class="my-4"><v-icon color="black">mdi-home</v-icon> <v-icon color="black">mdi-chevron-right</v-icon> Gestion les matières</h2>
    </v-col>
    <v-col cols="8">
      <v-data-table></v-data-table>
    </v-col>
    <v-col cols="4">
      Form
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: 'dashboard-administrator'
}
</script>
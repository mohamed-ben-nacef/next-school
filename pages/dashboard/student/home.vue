<template>
  <div>
    <v-row>
      <v-col cols="6">
        <p class="text-left my-4" style="font-size: 14px; color: rgba(0,0,0,0.4);">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices dictum mauris ut blandit. <a href="">Voir la documentation</a></p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12">
        <h2 class="my-4"><v-icon color="black">mdi-home</v-icon> Tableau de bord</h2>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="4">
            <v-card class="dashboard-card" color="white" min-height="250px">
              <v-carousel
                :continuous="false"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="300"
                light
              >
                <v-carousel-item
                  v-for="(slide, i) in 3"
                  :key="i"
                >
                    <v-row
                      align="end"
                      style="height: 100%;"
                    >
                      <v-col>
                        <h1 color="primary">7</h1><h3>Nouveaux inscrits dans la classe "1ère Année TI"</h3>
                      </v-col>
                    </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="dashboard-card" color="transparent" flat min-height="250px">
              <h3>Formations</h3>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="dashboard-card" color="white" min-height="250px">
              <h3>Matières</h3>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">sss</v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: 'dashboard-student'
}
</script>
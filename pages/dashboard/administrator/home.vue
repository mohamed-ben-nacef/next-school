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
          <v-col cols="2">
            <v-card class="dashboard-card pa-0" color="transparent" flat>
              <h3>Gestion</h3>
            </v-card>
            <v-card class="dashboard-card my-5" color="white">
              <v-row align="center" justify="center">
                <v-col cols="12">
                  <v-img width="64" class="mx-auto" src="https://img-premium.flaticon.com/png/512/4298/4298288.png?token=exp=1622552074~hmac=07f5345d24e46c7d2ca1dbd5bcba8419" />
                </v-col>
                <v-col>
                  <h3 class="text-center">Formations</h3>
                </v-col>
              </v-row>
            </v-card>
            <v-card class="dashboard-card" color="white">
              <v-row align="center" justify="center">
                <v-col cols="12">
                  <v-img width="64" class="mx-auto" src="https://img-premium.flaticon.com/png/512/2702/2702069.png?token=exp=1622586695~hmac=7fed9cc48b4e23a30ff839c7ad933698" />
                </v-col>
                <v-col>
                  <h3 class="text-center">Matières</h3>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="2">
            
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">sss</v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: 'dashboard-administrator'
}
</script>
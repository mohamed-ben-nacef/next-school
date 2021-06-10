<template>
  <div class="homepage">
    <v-container>
      <v-app-bar
        color="white"
        light
      >
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>

        <v-toolbar-title>Next<strong>School</strong></v-toolbar-title>
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-spacer></v-spacer>
          <v-text-field filled rounded hide-details dense placeholder="Vous cherchez quelque chose?">
            <template slot="append">
              <v-icon>mdi-magnify</v-icon>
            </template>
          </v-text-field>
          <v-spacer></v-spacer>
          <v-btn small :ripple="false" text>
            Accueil
          </v-btn>

          <v-btn small :ripple="false" text>
            Etablissement
          </v-btn>

          
          <v-menu
            left
            bottom
            offset-y
            open-on-hover
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" small :ripple="false" text>
                Formations / Diplômes
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="n in 5"
                :key="n"
                @click="() => {}"
              >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


          <v-btn small :ripple="false" text>
            Contact
          </v-btn>
        </template>
        <v-spacer></v-spacer>
        <v-tooltip right>
          <template v-slot:activator="{on, attrs}">
            <v-btn class="login-btn"  v-bind="attrs" v-on="on" to="/dashboard/login" :ripple="false" icon dark>
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <span>Accès Utilisateurs</span>
        </v-tooltip>
      </v-app-bar>
    </v-container>
    <v-main>
      <v-row style="min-height: 65vh;">
        <v-col cols="6" justify-center align-self="center">
          <div style="float: right; max-width: 85%; display: block;">
          <h1 style="font-weight: 800; line-height: 1.2; font-size: 48px;">Étudier Ce Que Vous Voulez, Où Vous Voulez, Et De N'importe Quel Appareil</h1>
          
          <p class="mt-5">Des formations en ligne avec certificat homologué en Tunisie. Avec l'encadrement des tuteurs qualifiés dans leurs spécialités, vous aurez une expérience educative impressionnante.</p>
          <p>Inscrivez-vous dans notre Newsletter pour vous notifier à l'ouverture de l'inscription</p>
          </div>
        </v-col>
        <v-col cols="6">
          <v-img :src="require('~/assets/images/homepage_image.svg')" />
        </v-col>
      </v-row>
      <v-row style="background: #eee;">
        <v-col cols="12">
          <v-container class="text-center">
            <h2 style="text-transform:capitalize;">nos formations</h2>
            <br/>
              <v-carousel
                cycle
                height="auto"
                hide-delimiter-background
              >
                <v-carousel-item
                  style="padding: 45px;"
                  v-for="(slide, i) in 3"
                  :key="i"
                >
                  <v-row>
                    <v-col cols="12" md="3">
                      <div class="d-flex align-center justify-center" style="position: relative; z-index: 10; top: 15px;"><v-img :src="require('~/assets/images/it.png')" style="box-shadow: 0 15px 30px rgba(0,0,0,0.07)!important;" max-width="40px" /></div>
                      <v-card class="formation-card"> 
                        <h4>BTP en informatique</h4>
                        <small>Développement web</small>
                        <div class="d-flex">
                          <v-btn class="plus-info ma-4" small dark>Plus d'info</v-btn>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                      <div class="d-flex align-center justify-center" style="position: relative; z-index: 10; top: 15px;"><v-img :src="require('~/assets/images/de.png')" style="box-shadow: 0 15px 30px rgba(0,0,0,0.07)!important;" max-width="40px" /></div>
                      <v-card class="formation-card"> 
                        <h4>BTP en informatique</h4>
                        <small>Développement web</small>
                        <div class="d-flex">
                          <v-btn class="plus-info ma-4" small dark>Plus d'info</v-btn>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                      <div class="d-flex align-center justify-center" style="position: relative; z-index: 10; top: 15px;"><v-img :src="require('~/assets/images/ge.png')" style="box-shadow: 0 15px 30px rgba(0,0,0,0.07)!important;" max-width="40px" /></div>
                      <v-card class="formation-card"> 
                        <h4>BTP en informatique</h4>
                        <small>Développement web</small>
                        <div class="d-flex">
                          <v-btn class="plus-info ma-4" small dark>Plus d'info</v-btn>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                      <div class="d-flex align-center justify-center" style="position: relative; z-index: 10; top: 15px;"><v-img :src="require('~/assets/images/it.png')" style="box-shadow: 0 15px 30px rgba(0,0,0,0.07)!important;" max-width="40px" /></div>
                      <v-card class="formation-card"> 
                        <h4>BTP en informatique</h4>
                        <small>Développement web</small>
                        <div class="d-flex">
                          <v-btn class="plus-info ma-4" small dark>Plus d'info</v-btn>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
          </v-container>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.homepage::v-deep{
  .v-app-bar{
    box-shadow: 0 15px 30px rgba(0,0,0,0.1)!important;
  }
  .login-btn{
    background: $main-gradient !important;
    border-radius: 10px !important;
    box-shadow: 0 15px 30px rgba(0,0,0,0.07)!important;
  }
  .formation-card{
    border-radius: 10px !important;
    box-shadow: 0 15px 30px rgba(0,0,0,0.07)!important;
    padding-top: 25px !important;
  }
  .plus-info{
    background: $main-gradient !important;
    border-radius: 10px !important;
    box-shadow: 0 15px 30px rgba(0,0,0,0.07)!important;
  }
}
</style>
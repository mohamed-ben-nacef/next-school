<template>
  <v-app>
    <v-container fluid>
    <v-app-bar :prominent="$vuetify.breakpoint.lgAndDown" absolute app class="ma-2 my-4" color="transparent" flat>
      <v-toolbar-title style="font-weight: 600;">Espace Administrateur</v-toolbar-title>
      <v-app-bar-nav-icon class="menu-btn" @click="menu = !menu"></v-app-bar-nav-icon>
      <template v-slot:extension>
        <v-expand-transition v-if="$vuetify.breakpoint.lgAndDown">
          <v-row :style="'margin-top:-20px;'" class="main-menu" v-if="menu">
            <v-col cols="12" sm="12" md="auto" v-for="(item, key) in mainMenu" :key="key">
              <v-menu
                open-on-hover
                bottom
                offset-y
                content-class="main-submenu"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="black"
                    dark
                    rounded
                    v-bind="attrs"
                    text
                    v-on="on"
                  >
                    {{item.text}}
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title>Créer</v-list-item-title>
                  </v-list-item>
                  <v-list-item :to="item.path">
                    <v-list-item-title>Gérer</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-expand-transition>
      </template>
      <v-expand-transition v-if="$vuetify.breakpoint.xlOnly">
        <v-row class="main-menu" style="margin-left: 15px !important;" v-if="menu">
          <v-col v-for="(item, key) in mainMenu" :key="key">
            <v-menu
              open-on-hover
              bottom
              offset-y
              content-class="main-submenu"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="black"
                  dark
                  rounded
                  v-bind="attrs"
                  text
                  v-on="on"
                >
                  {{item.text}}
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>Créer</v-list-item-title>
                </v-list-item>
                <v-list-item exact nuxt :to="item.path">
                  <v-list-item-title>Gérer</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-expand-transition>
      <v-spacer></v-spacer>
      <v-row justify="end">
        <v-col cols="auto">
          <v-avatar><v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img></v-avatar>
        </v-col>
        <v-col cols="auto" style="font-size: 14px;">
          Bienvenue <span style="font-weight: 600;">Hamidoo</span><br/>
          <small>Compte Administrateur</small>
        </v-col>
        
      </v-row>
    </v-app-bar>
    <v-main class="ma-2" app>
      <nuxt />
    </v-main>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'dashboard-administrator',
  data() {
    return {
      menu: true,
      mainMenu: [
        {
          path: { name: 'dashboard-administrator-home' },
          text: 'Tableau de bord'
        },
        {
          path: { name: 'dashboard-administrator-manage-formations' },
          text: 'Formations'
        },
        {
          path: '/',
          text: 'Matières'
        },
        {
          path: '/',
          text: 'Classes'
        },
        {
          path: '/',
          text: 'Utilisateurs'
        },
        {
          path: '/',
          text: 'Paramètres'
        },
        {
          path: '/',
          text: 'Mon compte'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.v-toolbar__extension {
  height: auto !important;
}
.v-toolbar__content > *{
  align-self: center !important;
}
.main-menu{
  background: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 15px;
  box-shadow: 0 15px 25px rgba(0,0,0,0.1);
  .v-btn__content{
    text-transform: capitalize !important;
    letter-spacing: 0 !important;
  }
}
.menu-btn{
  background: $main-gradient;
  border-radius: 15px !important;
  box-shadow: 0 25px 25px rgb(0 0 0 / 10%);
  margin: 0 15px;
  color: white !important;
}
.main-submenu{
  box-shadow: 0 25px 25px rgb(0 0 0 / 10%) !important;
  border-radius: 15px !important;
  min-width: 250px !important;
  .v-list-item{
    transition: all .4s ease-in-out;
    &:hover{
      cursor: pointer;
      background: $main-gradient !important;
      * {
        color: white !important;
      }
    }
    margin: 5px 10px;
    border-radius: 10px;
  }
}
</style>
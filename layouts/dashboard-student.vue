<template>
  <v-app class="dashboard-student-layout">
    <v-container fluid>
    <v-app-bar :prominent="$vuetify.breakpoint.lgAndDown" absolute app class="mx-2" color="transparent" flat>
      <v-toolbar-title style="font-weight: 600;">Espace étudiant</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row justify="end" style="width: fit-content;">
        <v-col cols="auto">
          
          <div>
          <v-badge
            bordered
            color="error"
            content="2"
            overlap
          >
            <v-icon color="#7E84A3">mdi-bell-outline</v-icon>
          </v-badge>
          </div>
        </v-col>
        <v-col cols="auto">
          <div>
          <v-badge
            bordered
            color="error"
            content="6"
            overlap
          >
            <v-icon color="#7E84A3">mdi-message-outline</v-icon>
          </v-badge>
          </div>
        </v-col>
        <v-col cols="auto">
          <v-avatar><v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img></v-avatar>
        </v-col>
        <v-col cols="auto" style="font-size: 14px;">
          Bienvenue <span style="font-weight: 600;">Hamidoo</span><br/>
          <small>Etudiant</small>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer style="background: white !important; border-radius: 0 25px 25px 0px !important;overflow: hidden;" app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="font-size: 18px;" class="my-6">
            Next<b>School</b>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in mainMenu"
          :key="item.text"
          link
          :to="item.path"
          exact
        >

          <v-list-item-content>
            <v-list-item-title>
              <v-btn icon>
              <v-icon class="icons">{{ item.icon }}</v-icon>
              </v-btn>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="ma-2" app>
      <nuxt />
    </v-main>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'dashboard-student',
  data() {
    return {
      menu: true,
      mainMenu: [
        {
          path: { name: 'dashboard-student' },
          text: 'Tableau de bord',
          icon: 'mdi-folder-home'
        },
        {
          path: { name: 'dashboard-student-formations' },
          text: 'Formations',
          icon: 'mdi-apps'
        },
        {
          path: '/',
          text: 'Cours',
          icon: 'mdi-notebook-multiple'
        },
        {
          path: '/',
          text: 'Messages',
          icon: 'mdi-message-outline'
        },
        {
          path: '/',
          text: 'Mon Compte',
          icon: 'mdi-account'
        },
        {
          path: '/',
          text: 'Paramètres',
          icon: 'mdi-cog-outline'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard-student-layout::v-deep {

  background-color: #EAF2FF !important;
  .v-navigation-drawer__border{
    display: none!important;
  }
  .div{
    color: aliceblue;
  }
  .card{
    font-size: 11px;
    color: white;
    padding: 5px 10px 15px 20px;
    border-radius: 15px !important;
  }
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
}
</style>
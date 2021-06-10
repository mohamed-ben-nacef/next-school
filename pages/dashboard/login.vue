<template>
  <v-row style="height: 100%;" class="pa-0 ma-0">
    <v-col cols="12" sm="12" md="6" class="pa-5 justify-center" style="height: 100%; background: white; border-radius: 0px 25px 25px 0px;">
      <v-row align="center" style="height: 100%;">
        <v-col cols="12">
          <div class="my-8">
            <span style="font-size: 28px;">Next<strong>School</strong></span>
          </div>
          <v-form>
            <v-row>
              <v-col cols="12">
                  <v-text-field hide-details dense rounded filled label="Nom d'utilisateur" />
              </v-col>
              <v-col cols="12">
                  <v-text-field hide-details dense rounded filled label="Mot de passe" />
              </v-col>
              <v-col cols="auto">
                <v-switch color="primary" label=" Rester connecté?" inset></v-switch>
              </v-col>
              <v-col>
                <p>Vous utilisez un appareil public ou partagé ? <br />Désélectionnez cette option pour protéger votre compte.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-btn to="/dashboard/administrator" class="login-btn" dark>
                  Connexion Administrateur
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn to="/dashboard/student" class="login-btn-student" dark>
                  Connexion Etudiant
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
            
        </v-col>
      </v-row>
    </v-col>
    <v-col md="6" v-if="$vuetify.breakpoint.mdAndUp" sm="12" cols="12" style="height: 100%;" >
      <v-row align="end" style="height: 100%;">
        <v-col cols="12">
          <v-img :src="require('~/assets/images/login.svg')" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default{

}
</script>
<style lang="scss">
.login-btn {
  background: $main-gradient !important;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
  border-radius: 10px !important;
}
.login-btn-student {
  background: linear-gradient(90deg, #8743FF 0%, #4136F1 100%) !important;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
  border-radius: 10px !important;
}
</style>
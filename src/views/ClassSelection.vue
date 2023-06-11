<script setup lang="ts">
import ClassCard from '@/components/ClassCard.vue'
</script>

<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters>
      <v-col cols="12">
        <class-card jobClassName="Orphan" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="c10-c10">
        <class-card jobClassName="Thief" />
      </v-col>
      <v-col class="c10-c4">
        <v-row>
          <v-col cols="12"> <class-card jobClassName="Assassin" /> </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Blade Dancer" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="Night Raven" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Shinobi" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="Satsujin" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Executioner" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="Grave Keeper" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Scoundrel" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="Black Plague" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="c10-c1" align-self="stretch">
        <class-card jobClassName="Shadowseer" />
      </v-col>
      <v-col class="c10-c1">
        <class-card jobClassName="Prowler" />
      </v-col>
      <v-col class="c10-c4">
        <v-row>
          <v-col cols="12">
            <class-card jobClassName="Rogue" />
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Mystic" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="Arcane Master" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Duelist" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="King Slayer" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Deadeye" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="Sinner" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            <v-row>
              <v-col cols="12">
                <class-card jobClassName="Saboteur" />
              </v-col>
              <v-col cols="12">
                <class-card jobClassName="Blast Juggler" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.c10 {
  &-c1 {
    flex: 0 0 10%;
    max-width: 10%;
  }
  &-c4 {
    flex: 0 0 40%;
    max-width: 40%;
  }
  &-c10 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>

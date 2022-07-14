<template>
  <div class="home">
    <v-list>
      <v-list-item: key="index" v-for="(sheet, index) in sheets">
      <div>
        <br>
        <h1>{{ sheet.name }}</h1>
      </div>
      </v-list-item:>
    </v-list>>
      

  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import { sheetApi } from "@/api/getsheet";
import Sheets from "@/interface/sheet"
export default class Sheet extends Vue {
  sheets: Sheets[] = [];
  async mounted(): Promise<void> {
   this.sheets = await sheetApi.getAllsheets();
  }
}
</script>

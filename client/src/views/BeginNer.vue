<template>
  <div class="home">
     <div v-for="sheet in sheets"  v-bind:key="sheet.id">
       <div className="all-post">
      <h3>{{sheet.name}}</h3>
      <img :src=sheet.img />
    </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { sheetApi } from "../api/beginnerSheet";
import Sheets from "../interface/sheet";
export default class Sheet extends Vue {
  sheets: Sheets[] = [];
  async mounted(): Promise<void> {
   this.sheets = await sheetApi.findMany();
  }
}
</script>

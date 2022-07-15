<template>
  <div class="home">
 <ul>
    <li v-for="sheet in sheets"  v-bind:key="sheet.id">
      <div className="all-post">
      {{sheet.name}} <img :src=sheet.img /> 
      </div>
      </li>
  </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { sheetApi } from "../api/getsheet";
import Sheets from "../interface/sheet";
export default class Sheet extends Vue {
  sheets: Sheets[] = [];
  async mounted(): Promise<void> {
   this.sheets = await sheetApi.findMany();
  }
}
</script>
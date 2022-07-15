<template>
  <div class="home">
 <ul>
    <li v-for="sheet in sheets"  v-bind:key="sheet.id">
      <h3>{{sheet.name}}</h3>
      <img :src=sheet.img />
      </li>
  </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { sheetApi } from "../api/masterSheet";
import Sheets from "../interface/sheet";
export default class Sheet extends Vue {
  sheets: Sheets[] = [];
  async mounted(): Promise<void> {
   this.sheets = await sheetApi.findMany();
  }
}
</script>

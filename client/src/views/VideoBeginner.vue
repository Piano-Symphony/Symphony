<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4> Beginner Level </h4>
      </div>
    </div>  
    <div class="row">
      <div v-for="sheet in sheets"  v-bind:key="sheet.id" class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
       <div class="card h-100 w-100">
        
          <iframe width="560" height="315" :src=sheet.videoURL title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <div class="card-body">
        <h5 class="card-title">{{sheet.name}}</h5>
            <router-link to=""><button class="btn btn-success" style='margin-right:140px'>Done</button></router-link>
            <router-link to=""><button class="btn btn-outline-danger">Not Done</button></router-link>
       </div>
       </div>
      </div>
    </div> 
  </div>

</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { sheetApi } from "../api/beginnerSheet";
import Sheets from "../interface/sheet";
import { videoApi } from "../api/videoById";

export default class Sheet extends Vue {
  sheets: Sheets[] = [];
  async mounted(): Promise<void> {
   this.sheets = await sheetApi.findMany();
  }
    videos: Sheets[] = [];
  async method(id:any): Promise<void> {
    this.videos = await videoApi.findUnique(id);
  }
}
</script>

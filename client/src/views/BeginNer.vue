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
        <div class="embed-responsive embed-responsive-16by9">
          <img 
          class="card-img-top embed-responsive-item"
          :src=sheet.img 
          />
        </div>
       <div class="card-body">
        <h5 class="card-title">{{sheet.name}}</h5>
            <button class="btn btn-outline-danger" style='margin-right:30px'>Like</button>
            <button class="btn btn-success" style='margin-right:30px' v-on:click="download(sheet.videoURL)">Watch</button>
            <button class="btn btn-primary"  v-on:click="download(sheet.pdf)"> Download </button>
       </div>
       </div>
       
       
       
       
       <!-- {{sheet.name}} -->

      <!-- <img :src=sheet.img /> -->
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
  download(link:any){
    window.open(link)
  }
  videos: Sheets[] = [];
  async method(id:any): Promise<void> {
  this.videos = await videoApi.findUnique(id);
  }
}
</script>

<template>
  <div class="home">
    <ul>
      <li v-list-sheets :key="index"  v-for="(sheet ,index) in sheets">
        {{sheet.name}}
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
export default {
  data():any{
    return {
      sheets:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/sheet/').then(response => response.json()).then(result => {
      console.log(result)
      // to work on 
    })
  }
}
</script>

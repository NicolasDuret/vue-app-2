<template>
  <listeVoiture></listeVoiture>
</template>

<script>
import ListeVoitureVue from '../components/ListeVoiture.vue'


export default {
  name: 'ListeVoiture',
  components:{
         'listeVoiture':ListeVoitureVue
     },
  
  
  }
</script>

<style>

table{
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 40px;
}


  input{
    margin: 0 auto;
    text-align: center;
    align-items: center;
  }

  .fin{
      width:100px !important
  }

  #button_Add{
      margin-bottom: 20px;
  }
#total{
    padding-bottom: 20px;
}

#modifier{
    margin-right: 10px;
}
.ligne{
    height: 30px !important;
}

</style>
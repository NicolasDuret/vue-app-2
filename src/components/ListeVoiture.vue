<template>
  <div class="container mt-4">
      <my-header></my-header>
    
    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr >
          <th width="1">Index</th>
          <th width="10%">Modèle</th>
          <th width="10%">Marque</th>
          <th width="10%">Année</th>
          <th width="10%">Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" style="height: 30px !important;">
          <td>{{ index + 1 }}</td>
          <td>
            <span v-if="editIndex !== index">{{ item.nom }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.nom">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.Marque }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.Marque">
            </span>
          </td>
          
          <td>
            <span v-if="editIndex !== index">{{ item.Année }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model.number="item.Année">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.Prix }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" type="number" v-model.number="item.Prix">
            </span>
          </td>
          <td class="fin">
            <span v-if="editIndex !== index">
              <button @click="edit(item, index)" id="modifier" class="btn">Modifier</button>
              <button @click="remove(item, index)" class="btn ">Supprimer</button>
            </span>
            <span v-else>
              <button class="btn btn-sm btn-outline-secondary mr-2" id="modifier" @click="cancel(item)">Annuler</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="save(item)">Ajouter</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div id="button_Add" class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Ajouter une Voiture</button>
    </div>

    <div class="col-3 offset-9">
      <div class="input-group input-group-lg mb-3">
        <div class="input-group-prepend">
          <span id="total" class="input-group-text">TOTAL :   </span><input class="form-control form-control-sm text-right" disabled :value="this.total | money">
        </div>
        
      </div>

    </div>
<my-footer></my-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ListeVoiture',
  components:{
         'my-header':Header,
         'my-footer':Footer
     },
  data() {
    return {
      editIndex: null,
      originalData: null,
      items: [
        {  nom: 'Huracan', Marque: 'Lamborghini', Année: 2018, Prix: 350000 },
        {  nom: '458', Marque: 'Ferrari', Année: 2017, Prix: 200000 },
        {  nom: 'Classe A', Marque: 'Mercedes', Année: 2020, Prix: 35000 },
        {  nom: '207', Marque: 'Peugeot', Année: 2010, Prix: 3500 },
        {  nom: 'Capture', Marque: 'Renault', Année: 2019, Prix: 20000 },
        {  nom: 'Leon', Marque: 'Seat', Année: 2017, Prix: 19000 },
        {  nom: 'DB11', Marque: 'Aston Martin', Année: 2016, Prix: 1850000 },
      ],
    }
  },
  methods: {
    add() {
      this.originalData = null
      this.items.push({ nom: '', Marque: '', Année: 2020, Prix: 1000 })
      this.editIndex = this.items.length - 1
    },
    edit(item, index) {
      this.originalData = Object.assign({}, item)
      this.editIndex = index
    },
    cancel(item) {
      this.editIndex = null
      if (!this.originalData) {
        this.items.splice(this.items.indexOf(item), 1)
        return
      }
      Object.assign(item, this.originalData)
      this.originalData = null
    },
    remove(item, index) {
      this.items.splice(index, 1)
    },
    save(item) {
      this.originalData = null
      this.editIndex = null
    },
    subtotal(item) {
      return item.Prix
    }
  },
  computed: {
    allSubTotal() {
      return this.items
        .map(item => this.subtotal(item))
        .reduce((a, b) => a + b, 0)
    },
    total() {
      return this.allSubTotal
    }
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
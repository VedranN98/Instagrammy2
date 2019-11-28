<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-7">
          <compPost/>
      </div>
      <div class="col-3">
        <div id="Prica-desno"  class="col-12">
          <h5>Priče</h5>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>
          <KomponentaPrica/>

        </div>
        <div id="PrijedlogDesno" class="col-12">
          <h5>Prijedlozi</h5>
          <KomponentaPrijedlog/>
          <KomponentaPrijedlog/>
          <KomponentaPrijedlog/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import KomponentaPrica from '@/components/Priče.vue'
import KomponentaPrijedlog from '@/components/Prijedlozi.vue'


export default {
  name: "home",
  components: {
    KomponentaPrica,
    KomponentaPrijedlog
  }
};
</script>

<style lang="css" scoped>
.row{
  margin:0;
}
#Prica-desno,#PrijedlogDesno{
  height: 30%;
  max-height: 30%;
  overflow: auto;
  background-color:white;
  border-radius: 5px;
  border: 1px rgb(235, 235, 235) solid;
  
}
#Prica-desno{
  margin-bottom: 10px;
}




</style>

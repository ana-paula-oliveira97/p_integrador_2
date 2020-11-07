<template>
<form id="formExemplo" data-toggle="validator" role="form">	
  <div class="form">
    <div class="navegacao">
      <p>
        
      </p>
    </div>
  <div class="form">
      <label for="validationCustom01" >Nome:</label>
      <b-form-input 
          id = "input-2" 
          v-model = " form.name " 
          required 
          placeholder = " Digite o nome " 
        > </b-form-input > 
        </div>
    <div class="form">
      <label for="validationCustom02">Quantidade de Pessoas:</label>
       <b-form-input 
          id = "input-1" 
          v-model = " form.qtdade " 
          required 
          placeholder = " Digite a quantidade  " 
        > </b-form-input > 
       </div>

     <b-form-group  id = "input-group-3"  label = "filme:"  label-for = "input-3" > 
        <b-form-select 
          id = "input-3" 
          v-model = "formulário .filme " 
          : options = " filmes " 
          required 
        > </b-form-select > 
      </b-form-group >

      <b-form-group  id = "input-group-4" > 
        <b-form-checkbox-group  v-model = "form.checked"  id = "checkboxes-4" > 
          <b-form-checkbox  value = " yes " > Sim </b-form-checkbox > 
          <b-form-checkbox  value = " not " > Não </b-form-checkbox > 
        </b-form-checkbox-group > 
      </b-form-group >
    </div>
    <b-button type="submit" variant="primary">Enviar</b-button>
  
</form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        qtdade: "",
        filme: null,
        checked: [],
      },
      filmes: [
        { text: "Selecione", value: null },
        "Escolhida",
        "Morte Súbita 2",
        "A Gangue: Uma noite de sangue",
        "Sangue de Pelicano",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.qtdade = "";
      this.form.filme = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
}; 
</script>



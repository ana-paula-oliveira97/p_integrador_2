<template>
<form id="formExemplo" data-toggle="validator" role="form">	
  <div class="form">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> > Reserve seu lugar
      </p>
    </div>
  <div class="form">
      <label for="validationCustom01">Nome:</label>
      <input type="text" class="form-control" id="validationCustom01" required>
        </div>
    <div class="form">
      <label for="validationCustom02">Quantidade de Pessoas:</label>
      <input type="text" class="form-control" id="validationCustom02" required>
       </div>
    <div class="form">
   <select class="custom-select">
  <option selected>Selecione um Filme:</option>
  <option value="1">Escolhida</option>
  <option value="2">Morte Súbita 2</option>
  <option value="3">A Gangue: Uma noite de sangue</option>
  <option value="4">Sangue Pelicano</option>
</select>
      </div>
  <div class="form">
    <b-form-group id="input-group-4" label="Deseja assitir em 3D:" label-for="input-4">
      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
        
      </b-form-checkbox-group>
      <label>	        
        <input type="checkbox" data-error="Você deve marcar este campo!" required> Sim</label>
        <input type="checkbox" data-error="Você deve marcar este campo!" required><label> Não </label>

    </b-form-group>
    </div>
    <b-button type="submit" variant="primary">Enviar</b-button>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
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
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
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
<<<<<<< HEAD


=======
>>>>>>> parent of 2c0040c4... tickets.vue

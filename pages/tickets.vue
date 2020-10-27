<template>
  <div class="form">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> > Reserve seu lugar
      </p>
    </div>
    <b-form-group id="input-group-1" label="Nome:" label-for="input-2">
      <b-form-input id="input-1" v-model="form.name" required></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-2"
      label="Quantidade de Pessoas:"
      label-for="input-2"
    >
      <b-form-input id="input-2" v-model="form.name" required></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Filmes:" label-for="input-3">
      <b-form-select
        id="input-3"
        v-model="form.food"
        :options="foods"
        required
      ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-4" label="Filme em 3D:" label-for="input-4">
      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
        <b-form-checkbox value="me">Sim</b-form-checkbox>
        <b-form-checkbox value="that">Não</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Enviar</b-button>
    <b-button type="reset" variant="danger">Cancelar</b-button>
  </div>
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
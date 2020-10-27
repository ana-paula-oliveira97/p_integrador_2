<template>
  <div>
    <div class="navegacao">
      <p><NuxtLink class="navegacao" to="/">Início</NuxtLink> > Blog</p>
    </div>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="~/assets/img/254.png"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body
              title=" Assassin's Creed ganha novo filme dessa vez na Netflix"
            >
              <b-card-text>
                A Netflix Brasil posta em seu twitter um video de apenas 10
                segundos anunciando a nova serie original que entrara
                futuramente em seu catálogo.
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-button class="btn" variant="Primary"
            ><NuxtLink to="/noticia-netflix">Ver mais </NuxtLink></b-button
          >
        </b-row>
      </b-card>
    </div>
  </div>
</template>

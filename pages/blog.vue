<template>
  <div>
    <div class="navegacao">
      <p><NuxtLink class="navegacao" to="/">Início</NuxtLink> > Blog</p>
    </div>

    <div class="card">
      <b-card-group deck>
        <b-card
          title="Assassin's Creed ganha novo filme dessa vez na Netflix"
          img-src="~/assets/img/254.png"
          img-alt="Foto da logo da futura serie da netflix, com o logo do jogo Assassin's creed em vemelho e uma letra N no meio."
          img-top
        >
          <b-card-text>
            A Netflix Brasil posta em seu twitter um vídeo de apenas 10 segundos
            anunciando a nova série original que entrara futuramente em seu
            catálogo.
          </b-card-text>
          <b-button class="btn" variant="Primary"
            ><NuxtLink to="/noticia-netflix">Ver mais </NuxtLink></b-button
          >
        </b-card>

        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <b-button class="btn" variant="Primary"
            ><NuxtLink to="/">Ver mais </NuxtLink></b-button
          >
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

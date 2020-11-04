<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        class="fonte"
        caption="Cinemac"
        text="Seja Bem vindo ao nosso cinema."
        img-src="~/assets/img/cine.jpg"
        img-alt="Banner, foto de ticket de cinema antigo, Seja bem vindo."
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        class="fonte"
        text="Na compra de 2 ingresos ganhe um balde de pipoca."
        img-src="~/assets/img/pipoca.jpg"
        img-alt="foto de pipoca "
      >
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        class="fonte"
        caption="Promoção de halloween"
        text="venha fantasiado e ganhe 50% de desconto na entrada"
        img-src="~/assets/img/halloween arvore.jpg"
        img-alt="foto de uma arvore assustadora  "
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>


 Slide with blank fluid image to maintain slide aspect ratio 
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>-->
    </b-carousel>
    <p></p>

    <div class="card">
      <b-card-group deck>
        <b-card
          class="1"
          title="Escolhida"
          img-src="~/assets/img/Escolhida.jpg"
          img-alt="Capa do Filme Escolhida ,Sinopse: Veronica é uma autora bem sucedida que se encontra presa em dois diferentes períodos: Os dias atuais e o Antebellum, a era das plantações no sul. Imersa nesta horrorizante realidade, ela deve descobrir o mistério por trás desse acontecimentos e fugir, antes que seja tarde demais."
          img-top
        >
          <b-card-text>
            Veronica é uma autora bem sucedida que se encontra presa em dois
            diferentes períodos: Os dias atuais e o Antebellum, a era das
            plantações no sul. Imersa nesta horrorizante realidade, ela deve
            descobrir o mistério por trás desse acontecimentos e fugir, antes
            que seja tarde demais.
          </b-card-text>
          <template v-slot:footer>
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/tickets">Reserve seu lugar</NuxtLink>
            </b-button>
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/escolhida">Ver mais </NuxtLink></b-button
            >
          </template>
        </b-card>

        <b-card
          class="2"
          title="Morte Súbita 2"
          img-src="~/assets/img/Morte Súbita 2.jpg"
          img-alt="Capa do Filme Morte Súbita 2, Sinopse: Jesse Freeman é um ex-oficial das forças especiais e especialista em explosivos agora trabalhando regularmente como segurança em uma arena de basquete de última geração."
          img-top
        >
          <b-card-text>
            Jesse Freeman é um ex-oficial das forças especiais e especialista em
            explosivos agora trabalhando regularmente como segurança em uma
            arena de basquete de última geração. Problemas irromperem quando um
            grupo de terroristas sequestra o dono da equipe e a filha de Jesse
            durante a noite de estreia
          </b-card-text>
          <template v-slot:footer>
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/tickets">Reserve seu lugar </NuxtLink></b-button
            >
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/morte_subita_2">Ver mais</NuxtLink>
            </b-button>
          </template>
        </b-card>

        <b-card
          class="3"
          title="A Gangue: Uma Noite de Sangue"
          img-src="~/assets/img/A Gangue.jpg"
          img-alt="Capa do Filme A Gangue: Uma Noite de Sangue, Sinopse: A Wright Firm tem sinal verde para seu maior empreendimento até hoje: ‘O Projeto Grove Street’. Ao transformar um bairro atingido por crimes e pobreza por anos em um ambiente seguro e limpo, a empresa espera receber apoio e compreensão. "
          img-top
        >
          <b-card-text>
            A Wright Firm tem sinal verde para seu maior empreendimento até
            hoje: ‘O Projeto Grove Street’. Ao transformar um bairro atingido
            por crimes e pobreza por anos em um ambiente seguro e limpo, a
            empresa espera receber apoio e compreensão.
          </b-card-text>
          <template v-slot:footer>
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/tickets">Reserve seu lugar </NuxtLink>
            </b-button>
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/a_gangue">Ver mais </NuxtLink></b-button
            >
          </template>
        </b-card>

        <b-card
          class="4"
          title="Sangue de Pelicano"
          img-src="~/assets/img/Sangue de Pelicano.jpg"
          img-alt="Capa do Filme Sangue de Pelicano, Uma mulher que treina cavalos policiais quer mais um filho e então adota uma criança, uma menina de 5 anos gravemente traumatizada. Quando a menina mostra comportamento violento e antissocial, sua nova mãe fica determinada a ajudá-la. "
          img-top
        >
          <b-card-text>
            Uma mulher que treina cavalos policiais quer mais um filho e então
            adota uma criança, uma menina de 5 anos gravemente traumatizada.
            Quando a menina mostra comportamento violento e antissocial, sua
            nova mãe fica determinada a ajudá-la.
          </b-card-text>
          <template v-slot:footer>
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/tickets">Reserve seu lugar</NuxtLink>
            </b-button>
            <b-button class="botao" variant="Primary"
              ><NuxtLink to="/sangue_de_pelicano">Ver mais </NuxtLink>
            </b-button>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

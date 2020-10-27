<template>
  <div class="card">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> > Filmes em cartaz
      </p>
    </div>
    <b-card-group deck>
      <b-card
        title="Escolhida"
        img-src="~/assets/img/Escolhida.jpg"
        img-alt="Capa do Filme Escolhida ,Sinopse: Veronica é uma autora bem sucedida que se encontra presa em dois diferentes períodos: Os dias atuais e o Antebellum, a era das plantações no sul. Imersa nesta horrorizante realidade, ela deve descobrir o mistério por trás desse acontecimentos e fugir, antes que seja tarde demais."
        img-top
      >
        <b-card-text>
          Veronica é uma autora bem sucedida que se encontra presa em dois
          diferentes períodos: Os dias atuais e o Antebellum, a era das
          plantações no sul. Imersa nesta horrorizante realidade, ela deve
          descobrir o mistério por trás desse acontecimentos e fugir, antes que
          seja tarde demais.
        </b-card-text>
        <template v-slot:footer>
          <b-button class="botao" variant="Primary"
            ><NuxtLink to="/escolhida">Ver mais </NuxtLink></b-button
          >
        </template>
      </b-card>

      <b-card
        title="Morte Súbita 2"
        img-src="~/assets/img/Morte Súbita 2.jpg"
        img-alt="Capa do Filme Morte Súbita 2, Sinopse: Jesse Freeman é um ex-oficial das forças especiais e especialista em explosivos agora trabalhando regularmente como segurança em uma arena de basquete de última geração."
        img-top
      >
        <b-card-text>
          Jesse Freeman é um ex-oficial das forças especiais e especialista em
          explosivos agora trabalhando regularmente como segurança em uma arena
          de basquete de última geração. Problemas irromperem quando um grupo de
          terroristas sequestra o dono da equipe e a filha de Jesse durante a
          noite de estreia
        </b-card-text>
        <template v-slot:footer>
          <b-button class="botao" variant="Primary"
            ><NuxtLink to="/morte_subita_2">Ver mais </NuxtLink></b-button
          >
        </template>
      </b-card>

      <b-card
        title="A Gangue: Uma Noite de Sangue"
        img-src="~/assets/img/A Gangue.jpg"
        img-alt="Capa do Filme A Gangue: Uma Noite de Sangue, Sinopse: A Wright Firm tem sinal verde para seu maior empreendimento até hoje: ‘O Projeto Grove Street’. Ao transformar um bairro atingido por crimes e pobreza por anos em um ambiente seguro e limpo, a empresa espera receber apoio e compreensão. "
        img-top
      >
        <b-card-text>
          A Wright Firm tem sinal verde para seu maior empreendimento até hoje:
          ‘O Projeto Grove Street’. Ao transformar um bairro atingido por crimes
          e pobreza por anos em um ambiente seguro e limpo, a empresa espera
          receber apoio e compreensão.
        </b-card-text>
        <template v-slot:footer>
          <b-button class="botao" variant="Primary"
            ><NuxtLink to="/a_gangue">Ver mais </NuxtLink>
          </b-button>
        </template>
      </b-card>

      <b-card
        title="Sangue de Pelicano"
        img-src="~/assets/img/Sangue de Pelicano.jpg"
        img-alt="Capa do Filme Sangue de Pelicano, Uma mulher que treina cavalos policiais quer mais um filho e então adota uma criança, uma menina de 5 anos gravemente traumatizada. Quando a menina mostra comportamento violento e antissocial, sua nova mãe fica determinada a ajudá-la. "
        img-top
      >
        <b-card-text>
          Uma mulher que treina cavalos policiais quer mais um filho e então
          adota uma criança, uma menina de 5 anos gravemente traumatizada.
          Quando a menina mostra comportamento violento e antissocial, sua nova
          mãe fica determinada a ajudá-la.
        </b-card-text>
        <template v-slot:footer>
          <b-button class="botao" variant="Primary"
            ><NuxtLink to="/sangue_de_pelicano">Ver mais </NuxtLink></b-button
          >
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>
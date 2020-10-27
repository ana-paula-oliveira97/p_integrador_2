<template>
  <div class="filme">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> >
        <NuxtLink class="navegacao" to="/poster">Filmes em cartaz</NuxtLink> >
        Escolhida
      </p>
    </div>
    <img
      class="capa"
      src="~/assets/img/Escolhida.jpg"
      alt="Capa do Filme Escolhida ,Sinopse: Veronica é uma autora bem sucedida que se encontra presa em dois diferentes períodos: Os dias atuais e o Antebellum, a era das plantações no sul. Imersa nesta horrorizante realidade, ela deve descobrir o mistério por trás desse acontecimentos e fugir, antes que seja tarde demais."
    />
    <h1>Título original: Antebellum</h1>
    <p>
      <strong>Direção:</strong> Gerard Bush, Christopher Renz <br />
      <strong> Gênero:</strong> Terror Lançamento: 2020 <br />
      <strong>Duração:</strong> 105 min.
    </p>
    <p>
      <strong>Sinopse:</strong> Veronica é uma autora bem sucedida que se
      encontra presa em dois diferentes períodos: Os dias atuais e o Antebellum,
      a era das plantações no sul. Imersa nesta horrorizante realidade, ela deve
      descobrir o mistério por trás desse acontecimentos e fugir, antes que seja
      tarde demais.
    </p>
    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/beLkVB_T3uw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="atores">
      <p>Alguns atores e atrizes:</p>
      <div>
        <img class="fotos" src="~/assets/img/janelle monáe.jpg" alt="" />
        <p>Janelle Monáe - Veronica</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/marque richardson.png" alt="" />
        <p>Marque Richardson - Nick Jobe</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/jack huston.jpg" alt="" />
        <p>Jack Huston - Captain Jasper</p>
      </div>
    </div>
  </div>
</template>
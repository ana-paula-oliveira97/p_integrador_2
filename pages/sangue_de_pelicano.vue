<template>
  <div class="filme">
    <div class="navegacao">
      <p>
        <NuxtLink class="navegacao" to="/">Início</NuxtLink> >
        <NuxtLink class="navegacao" to="/poster">Filmes em cartaz</NuxtLink> >
        Sangue de Pelicano
      </p>
    </div>
    <img
      class="capa"
      src="~/assets/img/Sangue de Pelicano.jpg"
      alt="Capa do Filme Sangue de Pelicano, Uma mulher que treina cavalos policiais quer mais um filho e então adota uma criança, uma menina de 5 anos gravemente traumatizada. Quando a menina mostra comportamento violento e antissocial, sua nova mãe fica determinada a ajudá-la."
    />
    <h1>Título original: Pelikanblut</h1>

    <p>
      <strong>Direção:</strong> Katrin Gebbe<br />
      <strong>Gênero:</strong> Drama, Terror<br />
      <strong> Lançamento:</strong> 2020<br />
      <strong> Duração:</strong> 120 min.<br />

      <strong> Prêmios:</strong> 2 vitórias e 7 indicações.
    </p>

    <p>
      <strong>Sinopse:</strong> Uma mulher que treina cavalos policiais quer
      mais um filho e então adota uma criança, uma menina de 5 anos gravemente
      traumatizada. Quando a menina mostra comportamento violento e antissocial,
      sua nova mãe fica determinada a ajudá-la.
    </p>
    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/e4meyS4SIpk?start=35"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="atores">
      <p>Alguns atores e atrizes:</p>
      <div>
        <img class="fotos" src="~/assets/img/Nina Hoss.jpg" alt="" />
        <p>Nina Hoss - Wiebke</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/yana marinova.jpg" alt="" />
        <p>Yana Marinova - Sigrid</p>
      </div>
      <div>
        <img class="fotos" src="~/assets/img/dimitar banenkin.jpg" alt="" />
        <p>Dimitar Banenkin - Hagen</p>
      </div>
    </div>
  </div>
</template>
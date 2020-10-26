<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <NuxtLink class="logo-inicio" to="/"
            >Cinemac
          </NuxtLink></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="fonte-menu">
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/">Início</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/about">Sobre</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/poster"
                >Filmes em Cartaz
              </NuxtLink></b-nav-item
            >
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/blog">Blog</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink class="fonte-menu" to="/tickets"
                >Reserve seu lugar</NuxtLink
              ></b-nav-item
            >
          </b-navbar-nav>

          <!--parte de pesquisa e cadastro do menu  -->

          <!-- Right aligned nav items 
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown right>
               Using 'button-content' slot 
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>-->
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<template>
  <div id="app">
    
    <div class="jumbotron">
      <h1 class="display-4">Vue</h1>
      <p class="lead">Vue + Vue Router + Vuex.</p>
    </div>

    <div class="container">

      <router-link 
        to="/" 
        class="btn btn-info mb-4 mr-2"
        exact>
          Home
      </router-link>
      <router-link 
        to="/employees" 
        class="btn btn-info mb-4 mr-2">
          Funcionários
      </router-link>

      <router-view></router-view>

    </div>
    
  </div>
</template>
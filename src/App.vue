<template>
  <nav class="navbar"  style="background-color: #95C8D8;font-family: 'Merriweather', serif;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" > Happy birthday!!!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"  @click="$router.push('/')" >Главная</a>
        <a class="nav-link" @click="$router.push('/Nastya')" href="#">Настюша</a>
        <a class="nav-link" @click="$router.push('/Maks')" href="#">Максюша</a>
      </div>
    </div>
  </div>
</nav>
  <router-view/>
  <div id="ending"><span>Created by @danonishe</span></div>
</template>

<style lang="scss">
  @import './assets/layout/index.scss';
  body {
    background-color: black;
}

#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #95C8D8;
  a {
    font-weight: bold;
    color: #797979;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
#ending
  {
    width: 100%;
    padding: 5%;
    background: #95C8D8;
  }
</style>

<template>
  <div id="app" class="outer-container">
    <div class="inner-container">
      <img class="godega-logo" src="static/svg/godega-logo-256px.svg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

$global-lineheight: 148%;
$global-letterspacing: 0.02rem;

.outer-container {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    line-height: $global-lineheight;
    letter-spacing: $global-letterspacing;
  }
}

.inner-container {
  height: auto;
  max-width: 375px;
}

.godega-logo {
  width: 100px;
  height: 100px;
}

</style>

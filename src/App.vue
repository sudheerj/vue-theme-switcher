<template>
  <div id="app">
    <custom-header>VueJS Theme Switcher<theme-picker><span>Change Theme: </span><el-color-picker :value="themeColor" @change="setThemeColor"></el-color-picker></theme-picker></custom-header>

    <wrapper>
      <custom-title>Welcome to VueJS Styled Components</custom-title>
      <img src="./assets/logo.png" height="100px">
      <el-form ref="form" label-width="100px">
        <el-form-item label="Username">
          <el-input placeholder="Enter UserName" :value="username" size="mini" @input="setUsername"></el-input>
      </el-form-item>
        <el-form-item label="Password">
          <el-input placeholder="Enter Password" :value="password" size="mini" @input="setPassword"></el-input>
        </el-form-item>
      </el-form>
      <custom-button @click.native="redirectToPage">Login</custom-button>
    </wrapper>
    <custom-footer>Copyright@2019</custom-footer>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import { injectGlobal } from 'vue-styled-components';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'themeColor',
      'username',
      'password'
    ]),
  },
  methods: {
    ...mapMutations([
      'setThemeColor',
      'setUsername',
      'setPassword'
    ]),
    redirectToPage: () => {
      window.location.href='https://github.com/styled-components/vue-styled-components';
    }
  },
}

// Create a global style
injectGlobal`
      body {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          text-align: center;
          margin: 0px;
      }
    `;
</script>


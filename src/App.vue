<template>
  <div id="app">
    <custom-header>VueJS Theme Switcher</custom-header>
    <theme-picker>Change Theme:<el-color-picker :value="themeColor" @change="setThemeColor"></el-color-picker></theme-picker>
    <wrapper>
      <custom-title>Welcome to VueJS Styled Components</custom-title>
      <img src="./assets/logo.png" height="100px">
      <el-form ref="form" label-width="100px">
        <el-form-item label="Username">
          <el-input placeholder="Enter UserName" :value="username" size="mini" @change="setUsername($event.target.value)"></el-input>
      </el-form-item>
        <el-form-item label="Password">
          <el-input placeholder="Enter Password" :value="password" size="mini" @change="setPassword($event.target.value)"></el-input>
        </el-form-item>
      </el-form>
      <custom-button>Login</custom-button>
    </wrapper>
    <custom-footer>Copyright by Sudheer Jonna</custom-footer>
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
  },
}

// Create a global style
injectGlobal`
      body {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          text-align: center;
          margin-top: 30px;
      }
    `;
</script>


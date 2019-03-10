import Vue from 'vue';

import CustomButton from './CustomButton';
import CustomTitle from './CustomTitle';
import Wrapper from './Wrapper';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';
import ThemePicker from './ThemePicker';

export const customHeader = Vue.component('custom-header', {
  components: { CustomHeader },
  template: `<CustomHeader :color="$store.getters['themeColor']"><slot></slot></CustomHeader>`,
});

export const wrapper = Vue.component('wrapper', {
  components: { Wrapper },
  template: `<Wrapper :color="$store.getters['themeColor']"><slot></slot></Wrapper>`,
});

export const  customButton = Vue.component('custom-button', {
  components: { CustomButton },
  template: `<CustomButton class="button" :color="$store.getters['themeColor']"><slot></slot></CustomButton>`,
});

export const  themePicker = Vue.component('theme-picker', {
  components: { ThemePicker },
  template: `<ThemePicker><slot></slot></ThemePicker>`,
});

export const customTitle = Vue.component('custom-title', {
  components: { CustomTitle },
  template: `<CustomTitle :color="$store.getters['themeColor']"><slot></slot></CustomTitle>`,
});

export const customFooter = Vue.component('custom-footer', {
  components: { CustomFooter },
  template: `<CustomFooter :color="$store.getters['themeColor']"><slot></slot></CustomFooter>`,
});

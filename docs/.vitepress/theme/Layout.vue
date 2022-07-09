<template>
  <Layout>
      <template #doc-before>
        <p v-if="canGoBack" class="back-btn"><a href="#" @click="goBack">⇠ back</a></p>
      </template>
      <template #home-features-after>
        <div id="features"></div>
      </template>
      <Content />
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vitepress";
let canGoBack = ref(true)
const route = useRoute();
const { Layout } = DefaultTheme;
const isHome = ref(false);
let crumbs = ref([]);
const goBack = () => {
  window.history.go(-1);
};

onMounted(()=>{
  console.log(history.length)
    if(history.length <= 3){
    canGoBack.value = false;
     history.replaceState(null, null, '/');
  }
})

watch(() => route.path, ()=>{
  if(history.length > 3){
    canGoBack.value = true;
  }
  isHome.value = route.path === "/";
});

</script>

<style>
html {
  scroll-behavior: smooth;
}

:root {
    --vp-home-hero-name-color: #00aaff;
    --vp-button-brand-border:#0095df;
    --vp-button-brand-text:#ffffff;
    --vp-button-brand-bg:#00aaff;
    --vp-button-brand-active-border:#00cbea;
    --vp-button-brand-active-bg:#00cbea;
    --vp-button-brand-hover-border:#009cea;
    --vp-button-brand-hover-bg:#009cea;
    --vp-c-brand:#00aaff;
    --vp-c-brand-dark:#009cea;
}

.VPFeatures .items .item a{
    color:var(--vp-home-hero-name-color);
}
.logo{
    height:48px !important;
}

.VPButton.brand:hover {
    border-color: var(--vp-button-brand-hover-border);
    color: var(--vp-button-brand-hover-text);
    background-color: var(--vp-button-brand-hover-bg);
}

.container{
  max-width:1200px !important;
}

ul.breadcrumbs li{
    display:inline-block;
    margin-right:20px;
    position:relative;
}

ul.breadcrumbs li::after{
    width:4px;
    height:4px;
    position:absolute;
    background:#ddd;
    content:'';
    bottom:6px;
    right:-10px;
}
ul.breadcrumbs li:last-child::after{
   display:none;
}
.back-btn{
  margin-bottom:20px;
}
</style>
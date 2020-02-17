<template>
  <section>
    <h1 class="title">About Page</h1>
    <p class="text">this is the about page.</p>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/typography.scss';

.title {
  font-size: $typoTitle;
  color: $titleColor;
}

.text {
  font-size: $typoText;
}
</style>
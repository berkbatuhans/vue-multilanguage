<template>
  <div id="app">
  <div class="container">
    <div class="form-group">

<select v-model="locale" >
      <option value="tr">{{ $t("locale.tr") }}</option>
      <option value="en">{{ $t("locale.en") }}</option>
    </select>
    </div>

  </div>
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">{{ $t("headerLink.home") }}</button>
  <button type="button" class="btn btn-secondary">{{ $t("headerLink.about") }}</button>
  <button type="button" class="btn btn-secondary">{{ $t("headerLink.contact") }}</button>
</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() { return { locale: 'en' }},
  watch: {
    locale(val){
      this.$i18n.locale = val
    }
  }
}
</script>
<template>
  <div class="section">
    <div class="img-container">
      <img v-bind:src="item.CoverImg" width="100" height="130" />
    </div>
    <div
      class="title"
      :style="[
        item.Status == 'Gällande'
          ? { background: '#87BDC9' }
          : item.Status == 'Remiss'
          ? { background: '#E9A15F' }
          : item.Status == 'Under framtagande'
          ? { background: '#5F8C9A' }
          : { background: '#C45941' },
      ]"
    >
      <span class="labelTitle">
        {{ item.Label }}
      </span>
      <div class="type">
        <span>{{ item.Documenttype }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props: ["doclist"],
}
  
</script>
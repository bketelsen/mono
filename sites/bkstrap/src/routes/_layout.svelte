<script>
  import Header from '../components/Header.svelte';
  export let segment;
</script>

<style></style>

  <Header {segment}/>

	<div class="main-wrapper">
    <slot></slot>
  </div>


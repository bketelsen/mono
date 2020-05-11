{#if show}
  <nav transition:fly={{x: -250, opacity: 1}}>
    <a href="#" on:click={() => show = !show}>Toggle Sidebar</a>
  <a class='{segment === undefined ? "selected" : ""}' href='.'>home</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>about</a>
  <a rel=prefetch class='{segment === "videos" ? "selected" : ""}' href='videos'>videos</a>
  <a rel=prefetch class='{segment === "projects" ? "selected" : ""}' href='projects'>projects</a>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
  </nav>


{/if}

<button on:click={() => show = !show}>Toggle Sidebar</button>

<script>
import { fly } from 'svelte/transition';

export let show = false;
export let segment;
let modal_show = false;
</script>
		
<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  border-left: 1px solid #aaa;
  background: #fff;
  overflow-y: auto;
	width: 10rem;
}
nav>a {
    display: block;
    white-space: pre-line;
}
</style>
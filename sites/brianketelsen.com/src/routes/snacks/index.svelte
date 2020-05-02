<script context="module">
  export function preload({ params, query }) {
    
    return this.fetch(`snacks.json`)
      .then(r => r.json())
      .then(categories => {
        return { categories };
      }).catch(e => console.error(e));
  }
</script>

<script>
  import { SNACKS_BASE_PATH } from "../../conf";
  import { getSiteName } from "../../services/lang";
  import Index from "../../components/Index.svelte";
  import Entry from "../../components/Entry.svelte";
  
  export let categories;
</script>

<style>
</style>

<svelte:head>
  <title>{getSiteName()} - Snacks</title>
  <meta name="description" content="Quick bites of knowledge on specific topics" />
</svelte:head>

<h1>Snacks - Quick bytes</h1>
<Index>
  {#each categories as [slug, name]}
    <Entry>
      <a rel="prefetch" href="{SNACKS_BASE_PATH}/{slug}">
      {name}
      </a>
    </Entry>
  {/each}
</Index>

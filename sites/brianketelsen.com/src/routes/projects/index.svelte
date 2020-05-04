<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`projects.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import { PROJECTS_BASE_PATH } from "../../conf";
  import { getSiteName } from "../../services/lang";
  import Index from "../../components/Index.svelte";
  import Entry from "../../components/Entry.svelte";
  
  export let posts
</script>

<style>
</style>

<svelte:head>
  <title>{getSiteName()} - Projects</title>
  <meta name="description" content="Quick bites of knowledge on specific topics" />
</svelte:head>

<h1>Projects</h1>
<Index>
  {#each posts as {slug, title}}
    <Entry>
      <a rel="prefetch" href="{PROJECTS_BASE_PATH}/{slug}">
      {title}
      </a>
    </Entry>
  {/each}
</Index>

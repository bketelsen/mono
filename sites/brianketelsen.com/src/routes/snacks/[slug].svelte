<script context="module">
  import { SNACKS_BASE_PATH, BLOG_BASE_PATH } from "../../conf";

  export async function preload({ params, query }) {
    const res = await this.fetch(
      `${SNACKS_BASE_PATH}/${params.slug}.json`
    );
    const data = await res.json();

    if (res.status === 200) {
      return data;
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import { snackPath } from "../../services/models";
  import { getIsoDateStr } from "../../services/dates";
  import Index from "../../components/snacks/Index.svelte";

  export let category;
  export let posts;
</script>

<style></style>

<svelte:head>
  <title>{category}</title>
  <meta name="description" content={`${category}`} />
</svelte:head>
<h1>{`${category}`} Snacks</h1>

<Index {posts}/>

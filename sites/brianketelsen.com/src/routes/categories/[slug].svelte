<script context="module">
  import { CATEGORIES_BASE_PATH, BLOG_BASE_PATH } from "../../conf";

  export async function preload({ params, query }) {
    const res = await this.fetch(
      `${CATEGORIES_BASE_PATH}/${params.slug}.json`
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
  import { path } from "../../services/models";
  import { getIsoDateStr } from "../../services/dates";
  import Index from "../../components/posts/Index.svelte";

  export let category;
  export let posts;
</script>

<style></style>

<svelte:head>
  <title>{category}</title>
  <meta name="description" content={`${category}`} />
</svelte:head>
<h1>{`${category}`}</h1>

<Index {posts}/>

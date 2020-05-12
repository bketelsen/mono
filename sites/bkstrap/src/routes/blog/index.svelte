<script context="module">

  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>

import CTA from '../../components/CTA.svelte';
import BlogList from '../../components/BlogList.svelte';
  export let posts;
</script>

<style></style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<CTA />
<BlogList posts={posts}/>

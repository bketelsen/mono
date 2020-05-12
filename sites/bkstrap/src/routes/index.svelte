<script context="module">

  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((data) => {
        const posts = data.slice(0,3);
        return { posts };
      });
  }
</script>



<script>
  import Footer from "../components/Footer.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  import WhatIDo from "../components/WhatIDo.svelte";
  import Testimonials from "../components/Testimonials.svelte";
  import Featured from "../components/Featured.svelte";
  import LatestBlog from "../components/LatestBlog.svelte";
  export let posts;
</script>

<style>

</style>

<svelte:head>
  <title>Brian Ketelsen</title>
</svelte:head>

<AboutMe />

<LatestBlog {posts}/>
<div class="container">
  <hr />
</div>
<Testimonials />
<div class="container">
  <hr />
</div>
<WhatIDo />
<div class="container">
  <hr />
</div>


<Featured />



<Footer />

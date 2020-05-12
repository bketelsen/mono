<script>
  import Footer from "../components/Footer.svelte";
  import AboutMe from "../components/AboutMe.svelte";
  import WhatIDo from "../components/WhatIDo.svelte";
  import Testimonials from "../components/Testimonials.svelte";
  import Featured from "../components/Featured.svelte";
  import LatestBlog from "../components/LatestBlog.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>Brian Ketelsen</title>
</svelte:head>

<AboutMe />

<WhatIDo />
<div class="container">
  <hr />
</div>
<Testimonials />
<div class="container">
  <hr />
</div>

<Featured />

<div class="container">
  <hr />
</div>

<LatestBlog />

<Footer />

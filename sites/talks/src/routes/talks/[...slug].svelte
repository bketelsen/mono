<script context="module">
  import { talkPath } from "../../services/models";

  export async function preload({ params, query }) {
    const [slug, lang] = params.slug;
    const res = await this.fetch(talkPath(slug, lang) + ".json");
    const data = await res.json();

    if (res.status === 200) {
      return { talk: data };
    } else {
      this.error(res.status, data.message);
    }
  }
  // TODO add canonical link to translations
</script>

<script>
  import { onMount } from "svelte";
  import { url } from "../../services/models";
  import { getIsoDateStr } from "../../services/dates";
  import Share from "../../components/Share.svelte";

  import HeaderImage from "../../components/HeaderImage.svelte";

  export let talk;
  export let slides = [];
  export let current_slide = 0;
  export let slide_count = 0;
  // TODO remove workaround for this issue https://github.com/sveltejs/sapper/issues/904
  onMount(async () => {
    [...document.querySelectorAll('a[href^="#"]')].map(
      x => (x.href = document.location + new URL(x.href).hash)
    );
    const mdata = await talk;
    const doc = JSON.parse(mdata);
    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(doc.html, "text/html");
    slides = parsedHtml.getElementsByClassName("sect1");
    slide_count = slides.length;
  });
  const changeSlide = event => {
    if (event.keyCode === 37) {
      if (current_side > 0 ) {
        --current_slide;
      }
    }
    if (event.keyCode === 39) {

      if (current_slide < slide_count) {
      ++current_slide;
      }
    }
  };
</script>

<style>
  .sect1 {
    display: none;
  }
  .hidden {
    display: none;
  }
</style>

<svelte:window on:keyup={changeSlide} />

{#each slides as slide, index}
  {#if index == current_slide}
    {@html slide.innerHTML}
  {/if}
{/each}
{current_slide + 1} of {slide_count}
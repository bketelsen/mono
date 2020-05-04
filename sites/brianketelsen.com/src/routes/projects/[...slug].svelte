<script context="module">
  import { projectPath } from "../../services/models";

  export async function preload({ params, query }) {
    const slug = params.slug;
    const res = await this.fetch(projectPath(slug) + ".json");
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else if (res.status === 301) {
      return { post: data, isCanonical: true };
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

  // TODO remove workaround for this issue https://github.com/sveltejs/sapper/issues/904
  onMount(async () => {
    [...document.querySelectorAll('a[href^="#"]')].map(
      x => (x.href = document.location + new URL(x.href).hash)
    );
  });

  export let post;
  export let isCanonical = false;
</script>

<style>
  h1 {
    font-size: 2em;
    display: flex;
    justify-content: space-between;
  }

  .share {
    font-size: 0.5em;
  }

  header {
    border-bottom: #e9e9e9 solid 1px;
    padding-bottom: 0.4em;
    margin-bottom: 1.2em;
  }

  .description {
    margin: 0 0;
    color: #644d4d;
    
  }

  .content :global(h2) {
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 1.2em;
    vertical-align: middle;
  }

  .content :global(h2::before, h3::before, h4::before, h5::before, h6::before) {
    content: "# ";
    color: #bbb;
    font-weight: lighter;
  }

  .content
    :global(h2:hover::before, h3:hover::before, h4:hover::before, h5:hover::before, h6:hover::before) {
    color: #666;
  }
  .content :global(h3::before) {
    content: "## ";
  }

  .content :global(h4::before) {
    content: "### ";
  }

  .content :global(h5::before) {
    content: "#### "
  }

  .content :global(h6::before) {
    content: "##### ";
  }

  .content :global(h3) {
    font-size: 1.4rem;
    margin-top: 1em;
  }

  .content :global(h4) {
    font-size: 1.2rem;
    margin-top: 0.8em;
  }

  .content :global(h5) {
    font-size: 1rem;
    margin-top: 0.6em;
  }

  .content :global(h6) {
    font-size: 0.8rem;
    margin-top: 0.4em;
  }
  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .content :global(dt) {
    font-weight: bold;
  }

  .content :global(.footnote) {
    font-size: smaller;
  }

  .content :global(.admonitionblock) {
    background: #e9e9e9;
    padding: 1em 0.5em;
    border-radius: 0.2em;
    margin: 1em 0;
  }

  .content :global(.admonitionblock td.icon) {
    font-size: 3em;
    cursor: default;
    text-align: center;
    padding-right: 0.4em;
    padding-left: 0.3em;
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .content :global(.admonitionblock .icon > .title) {
    font-size: small;
    font-weight: lighter;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .content :global(.admonitionblock.note .icon::before) {
    color: #19407c;
    content: "\e900";
  }
  .content :global(.admonitionblock.tip .icon::before) {
    color: rgb(6, 143, 148);
    content: "\e904";
  }
  .content :global(.admonitionblock.warning .icon::before) {
    content: "\e906";
    color: #bf6900;
  }
  .content :global(.admonitionblock.caution .icon::before) {
    content: "\e906";
    color: #bf3400;
  }
  .content :global(.admonitionblock.important .icon::before) {
    content: "\e902";
    color: rgb(26, 180, 218);
  }

  .content :global(.center) {
    text-align: center;
  }

  .content :global(.hdlist td, .hdlist p) {
    vertical-align: top;
  }
  .content :global(.hdlist p) {
    display: table-cell;
  }
  .content :global(.hdlist .hdlist1) {
    font-weight: bold;
  }
  .content :global(.toc) {
    font-size: 1.2em;
  }
  .content :global(span.image){
    width: auto;
    text-align: center;
    padding: 0.5em;
  }

  .content :global(span.image img){
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0.5em;
  }

  .content :global(.content img){
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0.5em;
  }

</style>

<svelte:head>
  <title>{post.title}</title>
  <meta name="date" content={getIsoDateStr(post.date)} scheme="YYYY-MM-DD" />
  <meta name="description" content={post.summary} />
  {#if isCanonical}
    <link rel="canonical" href={projectPath(post.slug)} />
  {/if}
  <link
    rel="preload"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/vs.min.css"
    as="style"
    onload="this.onload=null;this.rel='stylesheet'" />
  <noscript>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/vs.min.css" />
  </noscript>
</svelte:head>

{#if post.image_url}
<HeaderImage image_url={post.image_url} image_credit={post.image_credit} />
{/if}
<header>
  <h1>{post.title}
    <span class='share'>
    <Share
      title={post.title}
      keywords={post.keywords}
      text={post.description}
      url={url(post.slug, post.lang)} />
    </span>
  </h1>
  <p class="description">{post.description} </p>
  
</header>

<div class="content">
  {@html post.html}
</div>

<div class="content">
  <a href={post.github}> Github </a>
</div>
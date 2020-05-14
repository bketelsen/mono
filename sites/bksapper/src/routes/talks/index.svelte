<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`talks.json`).then(r => r.json()).then(talks => {
      return { talks };
    });
  }
</script>

<script>
  export let talks;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>

<svelte:head>
  <title>Talks</title>
</svelte:head>

<div class="container">
  <h1>Talks</h1>
  {#each talks as project , index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='talk/{project.slug}.html'>{project.title}</a>
      </h2>
      <div class="post-item-footer">
        <span class="post-item-date">— Added {project.printDate}</span>
      </div>
    </div>
  {/each}
</div>

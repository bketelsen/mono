<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`snacks.json`).then(r => r.json()).then(snacks => {
      return { snacks };
    });
  }
</script>

<script>
  export let snacks;
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
  <title>Snacks</title>
</svelte:head>

<div class="container">
  <h1>Snacks</h1>
  {#each snacks as project , index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='snacks/{project.slug}'>{project.title}</a>
      </h2>
      <p>{project.description}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— Added {project.printDate}</span>
      </div>
    </div>
  {/each}
</div>

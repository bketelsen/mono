<script>
  import { talkPath } from "../../services/models";
  import Entry from "../Entry.svelte";
  export let post;


</script>

<style>
  .summary {
    color: #676767;
  }
  .lang {
    padding-right: 0.2em;
    padding-left: 0.2em;
    color: #333;
  }
  .lang:not(:last-child)::after {
    content: ", ";
  }
  .description {
    display: flex;
  }

  .description > .content {
    flex-grow: 1;
    width: 0;
  }

  .subtitle {
    font-size: small;
    font-family: 'Courier New', Courier, monospace;
  }

  .date::after {
    content: " - ";
  }

  .title {
    font-size: 1.2em;
  }
  
</style>

{#if post}
  <Entry>
    <div class="container">
      <a rel="prefetch" href={talkPath(post.slug)} class="title">{post.title}</a>
      <div class='subtitle'>
        <span class="date">{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div class="description">
        <div class="content">
          {#if post.summary}
            <span class="summary">{post.summary}.</span>
          {/if}
        </div>
      </div>
    </div>
  </Entry>
{/if}

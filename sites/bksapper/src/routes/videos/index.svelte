<script context="module">
  export async function preload(page) {
    return this.fetch("/youtube-recent.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        return { videos: data };
      });
  }
</script>

<script>

import moment from 'moment';
  export let videos;
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

  img {
    width: 100%;
    max-width: 400px;
  }

</style>

<svelte:head>
  <title>Videos :: Brian Ketelsen</title>
</svelte:head>

<div class="container">
  <h1>Videos</h1>
    <div class="post-item">
      <h2>
        <a  href="https://youtube.com/bketelsen">YouTube Channel</a>
      </h2>
     <p><a  href="https://youtube.com/bketelsen"><img alt="Youtube Link" src='/icons/undraw_videographer_nnc7.png'  /></a></p>
    </div>
    <hr />
    <div class="post-item">
      <h2>
        <a  href="https://twitch.tv/bketelsen">Twitch Stream</a>
      </h2>
     <p><a  href="https://twitch.tv/bketelsen"><img alt="Twitch Link" src='/icons/undraw_video_files_fu10.png'  /></a></p>
    </div>

    <hr />
  {#each videos as video, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a  href="{video.url}">{video.title}</a>
      </h2>
     <p><a  href="{video.url}"><img alt={video.title} src={video.thumbnail.url}  /></a></p>
     
      <div class="post-item-footer">
        <span class="post-item-date">— {moment(video.date).format('MMMM Do, YYYY')}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }

  figure img {
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <h1>About</h1>
  <figure>
    <img src='rsz_florian-klauer-489-unsplash.jpg' alt='Image of a vintage typewriter.'>
    <figcaption>Photo by <a href="https://unsplash.com/@florianklauer" target="_blank">Florian Klauer</a> on Unsplash</figcaption>
  </figure>
  <p>I'm a cloud developer advocate working for Azure.</p>
  <p>I've been programming since modems had acoustic couplers. I've done backend, frontend, database administration, system administration, data warehouse consulting, and a dozen other interesting jobs.</p>
  <p>I've had the pleasure of working for big corporations like Microsoft, IBM, and MCI/Worldcom as well as tiny startups.</p>
  <p>My favorite thing to do is connect things that were previously unconnected. I love to explore and ask "what if?".</p>
</div>

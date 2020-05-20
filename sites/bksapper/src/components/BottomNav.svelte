<script>
  export let segment;
</script>

<style>
  .bottomnav {
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #6b87e8;
  }
</style>

<div class="bottomnav">
  <a
    rel="prefetch"
    class={segment === 'snacks' ? 'selected' : ''}
    href="snacks">
    snacks
  </a>
  <a
    rel="prefetch"
    class={segment === 'projects' ? 'selected' : ''}
    href="projects">
    projects
  </a>
</div>

<script>
  export let segment;
</script>

<style>
  nav {
    font-family: Rubik, sans-serif;
    font-weight: 700;
   /* justify-content: flex-end; */
    text-transform: uppercase;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #6B87E8;
  }

 /* Style the topnav links */
nav a {
  float: left;
  display: block;
 /* color: #f2f2f2; */
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
} 
  @media screen and (max-width: 600px) {
  nav a {
    float: none;
    width: 100%;
  }
}
</style>

<nav>
  <a class='{segment === undefined ? "selected" : ""}' href='.'>home</a>
  <a class='{segment === "about" ? "selected" : ""}' href='about'>about</a>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
  <a rel=prefetch class='{segment === "videos" ? "selected" : ""}' href='videos'>videos</a>
  <a rel=prefetch class='{segment === "projects" ? "selected" : ""}' href='projects'>projects</a>
  <a rel=prefetch class='{segment === "snacks" ? "selected" : ""}' href='snacks'>snacks</a>
  <a rel=prefetch class='{segment === "talks" ? "selected" : ""}' href='talks'>talks</a>
</nav>

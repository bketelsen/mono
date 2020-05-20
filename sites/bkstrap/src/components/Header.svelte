<script>

  export let segment;

  export let collapse = true;
  function toggleCollapse(){
	  collapse = !collapse;
  }

	function navigate(event) {
		console.log("Hash changed",event);
	}
</script>

<style>
</style>
<svelte:window on:hashchange={navigate}/>

	<header class="header text-center">	    
		<div class="force-overflow">
			<h1 class="blog-name pt-lg-4 mb-0"><a href="index.html">Brian Ketelsen</a></h1>
			
			<nav class="navbar navbar-expand-lg navbar-dark" >
				
				<button class="navbar-toggler" type="button" on:click={toggleCollapse} data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				
				<div id="navigation" class="{collapse ? 'collapse' : ''} navbar-collapse flex-column" >
					<div class="profile-section pt-3 pt-lg-0">
						<img class="profile-image mb-3 rounded-circle mx-auto" src="brian.jpeg" alt="It's me, Brian." >			
						
						<div class="bio mb-3">Hi, my name is Brian and I'm a senior software engineer. Welcome to my personal website!</div><!--//bio-->
						<ul class="social-list list-inline py-2 mx-auto">
							<li class="list-inline-item"><a href="https://twitter.com/bketelsen"><i class="fab fa-twitter fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="https://github.com/bketelsen"><i class="fab fa-github-alt fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="https://youtube.com/bketelsen"><i class="fab fa-youtube fa-fw"></i></a></li>
							<li class="list-inline-item"><a href="https://twitch.tv/bketelsen"><i class="fab fa-twitch fa-fw"></i></a></li>
						</ul><!--//social-list-->
						<hr> 
					</div><!--//profile-section-->
					
					<ul class="navbar-nav flex-column text-left">
						<li class="nav-item {segment === undefined ? 'active' : ''}">
							<a class="nav-link" href="/"><i class="fas fa-user fa-fw mr-2"></i>Home<span class="sr-only">(current)</span></a>
						</li>

						<li class="nav-item {segment === 'about' ? 'active' : ''}">
							<a class="nav-link" href="/about"><i class="fas fa-question-circle fa-fw mr-2"></i>About</a>
						</li>
						<li class="nav-item {segment === 'blog' ? 'active' : ''}">
							<a class="nav-link" href="/blog"><i class="fas fa-blog fa-fw mr-2"></i>Blog</a>
						</li>
						<li class="nav-item {segment === 'projects' ? 'active' : ''}">
							<a class="nav-link" href="/projects"><i class="fas fa-laptop-code fa-fw mr-2"></i>Projects</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/snacks"><i class="fas fa-cookie-bite fa-fw mr-2"></i>Snacks</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/videos"><i class="fas fa-play-circle fa-fw mr-2"></i>Videos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="contact.html"><i class="fas fa-envelope-open-text fa-fw mr-2"></i>Contact</a>
						</li>
					</ul>
					
					<div class="my-2">
						<a class="btn btn-primary" href="contact.html" target="_blank"><i class="fas fa-paper-plane mr-2"></i>Hire Me</a>
					</div>
					
	
					<div class="dark-mode-toggle text-center w-100">
						<hr class="mb-4">
					    <h4 class="toggle-name mb-3 "><i class="fas fa-adjust mr-1"></i>Dark Mode</h4>
					    
					    <input class="toggle" id="darkmode" type="checkbox">
					    <label class="toggle-btn mx-auto mb-0" for="darkmode"></label>
					    
					</div><!--//dark-mode-toggle-->
					
				</div>
			</nav>
		</div><!--//force-overflow-->
	</header>
	

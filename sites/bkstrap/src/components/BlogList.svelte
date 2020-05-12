<script>
    import BlogCard from './BlogCard.svelte';

    export let posts;
    export let page = 1;
    export let perpage = 6;
    export let shownav = false;
</script>
        
        
        <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">
			    <div class="row">
                {#each posts as post,index}
                    <BlogCard {post}/>
                {/each}
				</div><!--//row-->
			    
			   {#if shownav} 
			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded" href="#">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
			{/if}	
		    </div>
	    </section>
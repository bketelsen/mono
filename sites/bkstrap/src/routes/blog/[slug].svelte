<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>

	import moment from 'moment';

  export let post;
</script>

<style>
img {
    vertical-align: middle;
    border-style: none;
    width: 80%;
}
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

	    
	    <article class="blog-post px-3 py-5 p-md-5">
		    <div class="container single-col-max-width">
			    <header class="blog-post-header">
				    <h2 class="title mb-2">{post.title}</h2>
				    <div class="meta mb-3"><span class="date">Published {moment(post.date).fromNow()}</span><span class="time">5 min read</span></div>
			    </header>
			    
			    <div class="blog-post-body">
				    <figure class="blog-banner">
				       <img class="img-fluid" src="{post.image_url}" alt="{post.title}">
				        <figcaption class="mt-2 text-center image-caption">Image Credit: <a href="{post.image_credit_url}" target="_blank">{post.image_credit}</a></figcaption>
				    </figure>

            {@html post.html} 
			    </div>
				    

				
		    </div><!--//container-->
	    </article>
	 
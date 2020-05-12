<script>
	import moment from 'moment';
    export let post;
</script>
                    
                    <div class="col-md-4 mb-3">
						<div class="card blog-post-card">
							<img class="card-img-top" src="{post.image_url}" alt="{post.title}">
							<div class="card-body">
								<h5 class="card-title"><a class="theme-link" href="blog/{post.slug}">{post.title}</a></h5>
								<p class="card-text">{post.summary}</p>
								<p class="mb-0"><a class="more-link" href="blog/{post.slug}">Read more &rarr;</a></p>
								
							</div>
							<div class="card-footer">
								<small class="text-muted">Published {moment(post.date).fromNow()}</small>
							</div>
						</div><!--//card-->
					</div><!--//col-->
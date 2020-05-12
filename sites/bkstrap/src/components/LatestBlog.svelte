<script>
  import BlogCard from "./BlogCard.svelte";

  export let posts;
  export let page = 1;
  export let perpage = 6;
  export let shownav = false;
</script>

<section class="latest-blog-section p-3 p-lg-5">
  <div class="container">
    <h2 class="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
    <div class="row">
      {#each posts as post, index}
      <div class="col-md-4 mb-5">
        <div class="card blog-post-card">
          <img
            class="card-img-top"
            src="{post.image_url}"
            alt="{post.title}" />
          <div class="card-body">
            <h5 class="card-title">
              <a class="theme-link" href="blog-post.html">{post.title}</a>
            </h5>
            <p class="card-text">{post.summary}</p>
            <p class="mb-0">
              <a class="more-link" href="blog/{post.slug}">Read more &rarr;</a>
            </p>

          </div>
          <div class="card-footer">
            <small class="text-muted">Published 2 days ago</small>
          </div>
        </div>
        <!--//card-->
      </div>
      <!--//col-->
      {/each}
    </div>
    <!--//row-->
    <div class="text-center py-3">
      <a href="/blog" class="btn btn-primary">
        <i class="fas fa-arrow-alt-circle-right mr-2" />
        View Blog
      </a>
    </div>
  </div>
  <!--//container-->

</section>
<!--//latest-blog-section-->
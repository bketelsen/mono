<script>
  export let image_url;
  export let image_credit;
  export let image_credit_url;

$: image_source = 'https://content.brian.dev' + image_url;

</script>

<style>
  .headerimage {
    width: auto;
    text-align: center;
    padding: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>

<div class="headerimage">
  <p id="my-image">
    <img
      src={image_source} alt={image_credit} />
  </p>
</div>

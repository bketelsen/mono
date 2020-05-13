<style>
  .subscribe {
    text-align: center;
  }
  .icon {
    float: left;
    width: 50%;
  }
  .ctaform {
    float: right;
    width: 50%;
  }

  input[type="text"] {
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0;
  }
  input[type="email"] {
    padding: 10px;
    margin: 5px 0;
    border-radius: 10px;
  }
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
  }
  input[type="submit"] {
    /* remove default behavior */
    appearance: none;
    -webkit-appearance: none;

    /* usual styles */
    padding: 10px;
    border: none;
    background-color: #3f51b5;
    color: #fff;
    font-weight: 600;
    border-radius: 10px;
    width: 100%;
  }
</style>

<div class="subscribe">
    <h3>Newsletter</h3>
    Sign up to get the latest content delivered to your inbox.
  <div class="icon">
    <img
      src="/icons/undraw_newsletter_vovu.png"
      alt="Subscribe to newsletter" />
  </div>
  <div class="ctaform">
    <form
      action="https://list.brian.dev/subscribe"
      method="POST"
      accept-charset="utf-8">
      <input placeholder="Name" type="text" name="name" id="name" />
      <input placeholder="you@email.com" type="email" name="email" id="email" />
      <br />
      <div style="display:none;">
        <label for="hp">HP</label>
        <br />
        <input type="text" name="hp" id="hp" />
      </div>
      <input type="hidden" name="list" value="3wkd5xPx9X8922fuqb2fgJYQ" />
      <input type="hidden" name="subform" value="yes" />
      <input type="submit" name="submit" id="submit" />
    </form>
  </div>
</div>

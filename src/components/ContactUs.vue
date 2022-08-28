<template>
  <div class="contact-us" id="contact-us">
    <div class="container">
      <h3 class="title">تواصل معنا</h3>
      <p class="description m-0 mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia
        quisquam molestiae officia quasi suscipit dolore temporibus,
        reprehenderit eaque enim velit modi nisi corrupti omnis, inventore sequi
        obcaecati voluptatibus soluta!
      </p>
      <div class="form mt-5">
        <form @submit.prevent>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input
                  type="phone"
                  class="form-control"
                  placeholder="Enter Your Phone"
                />
              </div>
            </div>
            <div class="col-12 mt-3">
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contact-us {
  background: fixed url('@/assets/gray-bg.jpg');
  background-position: center center;
  background-size: cover;
  padding: 100px 0;
  .container {
    h3.title {
      margin-bottom: 30px !important;
    }
    & > p.description {
      font-size: 18px;
      font-weight: 600;
      max-width: 750px;
      margin: 0 auto;
    }
  }
  .form {
    background: #fff;
    padding: 30px;
    max-width: 750px;
    margin: auto;
  }
  .form-group {
    margin-bottom: 1rem;
    input {
    }
    input,
    textarea {
      border: none;
      box-shadow: none;
      border-bottom: 2px solid #1b6096;
      border-radius: 0;
      background: transparent;
      transition: 0.3s;
      padding: 10px 20px;
      margin-bottom: 24px;
      &:hover {
        border-color: #f8ac19;
      }
    }
  }
  button.btn-primary {
    border-radius: 50px !important;
    margin-top: 25px;
    padding: 15px 45px !important;
    text-transform: uppercase !important;
    font-size: 14px !important;
    display: inline-block !important;
  }
}
</style>

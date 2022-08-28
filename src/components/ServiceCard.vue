<template>
  <a href="#" target="_blank" class="service">
    <div class="img-holder">
      <img src="@/assets/logo.png" class="img-fluid" alt="service" />
    </div>
    <div class="text">
      <h2>Rwad crm</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        aperiam, non porro ut nemo quae illum. Explicabo quibusdam libero sequi
        aperiam minus ullam iste ipsam architecto iusto qui, id enim.
      </p>
    </div>
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss">
.service {
  display: block;
  padding: 40px;
  background: #1b6096;
  margin-bottom: 15px;
  position: relative;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  .img-holder {
    margin: 0 auto 20px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    img {
      width: 120px;
    }
  }
  .text {
    text-align: center;
    color: #fff;
    h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }
    p {
      font-size: 18px;
      overflow: hidden;
      margin-bottom: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #f8ac19;
    height: 4px;
    width: 0;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    &::before {
      width: 100%;
    }
    transform: translateY(-10px);
  }
}
</style>

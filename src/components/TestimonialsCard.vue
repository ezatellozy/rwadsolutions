<template>
  <div class="testimonial">
    <div class="message">
      <i class="fa-solid fa-quote-left top-left"></i>
      <i class="fa-solid fa-quote-right bottom-right"></i>
      <p>
        {{ item.description }}
      </p>
    </div>
    <div class="client info">
      <div class="row align-items-center">
        <div class="col-3 img-container">
          <img v-if="item.image" :src="item.image" alt="client-img" />
        </div>
        <div class="col-9">
          <h3 class="name">{{ item.name }}</h3>
          <h6 class="job">{{ item.job }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss">
.testimonial {
  .message {
    min-height: 200px;
    background: #1b6096;
    padding: 30px;
    position: relative;
    p {
      color: #fff;
      font-size: 17px;
      margin: 0;
      position: relative;
      font-weight: 500;
    }
    i {
      font-weight: 900;
      position: absolute;
      line-height: 1;
      font-size: 60px;
      color: #fff;
      opacity: 0.1;
      font-family: 'Font Awesome 6 Free';
      font-weight: 900;
      &.top-left {
        top: 10px;

        left: 10px;
      }
      &.bottom-right {
        bottom: 10px;
        right: 10px;
      }
    }
    &::before {
      position: absolute;
      content: '';
      bottom: -15px;
      width: 0;
      right: 45px;
      height: 0;
      border-style: solid;
      border-width: 15px 15px 0 15px;
      border-color: #1b6096 transparent transparent transparent;
    }
  }
  .info {
    padding: 30px;
    .img-container {
      border: 2px solid #1b6096;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-content: center;
      img {
        width: 85px;
      }
    }
  }
  h3.name {
    color: #1b6096;
    font-size: 20px;
    margin: 0;
  }
  h6.job {
    margin-bottom: 7px;
  }
}
</style>

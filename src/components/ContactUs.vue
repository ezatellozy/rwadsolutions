<template>
  <div class="contact-us" id="contact-us">
    <div class="container">
      <h3 class="title">تواصل معنا</h3>
      <p class="description m-0 mx-auto text-center">
        نرجو ان تتواصل معنا بأي اقتراح او استفسار او افكار حاول التعاون والعمل
        معنا وسوف نقوم بالتواصل معك في اسرع وقت ممكن
      </p>
      <div class="form mt-5">
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="frmData.name"
                  placeholder="الاسم"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  v-model="frmData.email"
                  placeholder="الايميل"
                  required
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input
                  type="phone"
                  class="form-control"
                  v-model="frmData.phone"
                  placeholder="الموبايل"
                  required
                />
              </div>
            </div>
            <div class="col-12 mt-3">
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="4"
                  v-model="frmData.message"
                  placeholder="الرسالة"
                  required
                ></textarea>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                <span>ارسال</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import { createToaster } from '@meforma/vue-toaster'

const toaster = createToaster({ position: 'bottom' })

const frmData = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

function submit() {
  axios.post('send-contact', frmData).then((data) => {
    if (data.data.status == 1) {
      toaster.success(data.data.message)
      frmData.name = ''
      frmData.email = ''
      frmData.phone = ''
      frmData.message = ''
    } else {
      toaster.error(data.data.message)
    }
  })

  return {
    submit,
    frmData,
  }
}
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
      &:focus,
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

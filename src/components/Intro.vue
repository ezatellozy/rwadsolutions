<template>
  <div class="intro">
    <section class="intro-content content">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 info">
            <h1>مرحبا بك في حلول رواد</h1>
            <h2>رواد CRM - برنامج ادارة علاقات العملاء</h2>
            <p>
              سوف يساعدك رواد CRM في تسجيل وحفظ بيانات العملاء بشكل منظم وتفصيلي
              وتسهيل عملية شراء بشكل احترافي وسرعة التواصل معهم وبالتالي زيادة
              المبيعات. حيث يعمل نظام رواد CRM على تصنيف كل مرحلة من مراحل البيع
              حسب احتياج العميل مع تواجد خدمة عملاء ليسجلوا ماذا يحدث مع العميل
              بالتفصيل. وبامكانك ايضا امكانية ربط النظام عن طريق تطبيقات
              للاندرويد والايفون ليسهل على المستخدمين امكانية الحصول على
              احتياجهم في اي وقت واي مكان بحيث يتوافر عضوية لكل مسئول على حسب
              الوظيفة الخاصة به في الشركة.
            </p>
          </div>
          <div class="col-lg-6 image">
            <img src="@/assets/follow.png" class="img-fluid" alt="rwad-intro" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Header from './Header.vue'
// export default { components: { Header } }
</script>

<style lang="scss">
.intro {
  position: relative;
  height: 100vh;
  background-color: #1b6096;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    border-right: 100vw solid #fff;
    border-top: 200px solid transparent;
    width: 100%;
    z-index: 0;
  }
  .intro-content {
    padding-top: 80px;
    .info {
      text-align: center;
      color: #fff;
      padding: 30px;
      h1 {
        font-size: 24px;
        margin-bottom: 25px;
      }
      h2 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      p {
        line-height: 1.5;
        margin-bottom: 0;
      }
    }
    .image {
      padding: 30px;
      img {
        position: relative;
        z-index: 2;
      }
    }
    @media (min-width: 992px) {
      .info {
        text-align: start;
        h2 {
          font-size: 40px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>

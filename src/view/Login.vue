<template>

  <div class="stretched">

    <div id="wrapper" class="clearfix">

      <!-- Header
          ============================================= -->
      <Head/>

      <!-- Page Title
          ============================================= -->
      <section id="page-title">

        <div class="container clearfix">
          <h1>我的账户</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">主页</a></li>
            <li class="breadcrumb-item active" aria-current="page">登陆</li>
          </ol>
        </div>

      </section><!-- #page-title end -->

      <!-- Content
          ============================================= -->
      <section id="content">

        <div class="content-wrap">

          <div class="container clearfix">

            <div class="accordion accordion-lg divcenter nobottommargin clearfix" style="max-width: 550px;">

              <div class="acctitle"><i class="acc-closed icon-lock3"></i><i class="acc-open icon-unlock"></i>登陆到您到账户</div>
              <div class="acc_content clearfix">
                <form id="login-form" name="login-form" class="nobottommargin" action="#" method="post">
                  <div class="col_full">
                    <label for="login-form-username">用户名:</label>
                    <input type="text" id="login-form-username" name="login-form-username" value="" class="form-control" />
                  </div>

                  <div class="col_full">
                    <label for="login-form-password">密码:</label>
                    <input type="password" id="login-form-password" name="login-form-password" value="" class="form-control" />
                  </div>

                  <div class="col_full nobottommargin">
                    <button class="button button-3d button-black nomargin" id="login-form-submit" name="login-form-submit" value="login">登陆</button>
                    <a href="#" class="fright">忘记密码？</a>
                  </div>
                </form>
              </div>

              <div class="acctitle"><i class="acc-closed icon-user4"></i><i class="acc-open icon-ok-sign"></i>新用户？注册一个账号</div>
              <div class="acc_content clearfix">
                <form id="register-form" name="register-form" class="nobottommargin" action="#" method="post">
                  <div class="col_full">
                    <label for="register-form-name">用户名:</label>
                    <input type="text" id="register-form-name" name="register-form-name" value="" class="form-control" />
                  </div>

                  <div class="col_full">
                    <label for="register-form-email">邮箱:</label>
                    <input type="text" id="register-form-email" name="register-form-email" value="" class="form-control" />
                  </div>

                  <div class="col_full">
                    <label for="register-form-username">手机号:</label>
                    <input type="text" id="register-form-username" name="register-form-username" value="" class="form-control" />
                  </div>

                  <div class="col_full">
                    <label for="register-form-phone">手机号:</label>
                    <input type="text" id="register-form-phone" name="register-form-phone" value="" class="form-control" />
                  </div>

                  <div class="col_full">
                    <label for="register-form-password">密码:</label>
                    <input type="password" id="register-form-password" name="register-form-password" value="" class="form-control" />
                  </div>

                  <div class="col_full">
                    <label for="register-form-repassword">重复密码:</label>
                    <input type="password" id="register-form-repassword" name="register-form-repassword" value="" class="form-control" />
                  </div>

                  <div class="col_full nobottommargin">
                    <button class="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register">立即注册</button>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>

      </section><!-- #content end -->

      <Foot/>

    </div>

    <div id="gotoTop" class="icon-angle-up"></div>

  </div>

</template>

<script>
  import Head from '@/components/common/Head'
  import Foot from '@/components/common/Foot'
  export default {
      name: "",
    mounted() {
        this.utils.loadBaseJs()
    },
    components:{
      Head,
      Foot
    }
  }
</script>

<style scoped>

</style>

<template>
  <header id="header" class="static-sticky full-header clearfix">

    <div id="header-wrap">

      <div class="container-fluid clearfix">

        <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>

        <div id="logo">
          <a href="#" class="d-none d-lg-block">Sign In <i class="icon-line-arrow-right"></i></a>
<!--          <a href="demo-car.html" class="standard-logo"><img src="http://mycanvas.oss-cn-shanghai.aliyuncs.com/HTML/demos/car/images/logo.png" alt="Canvas Logo"></a>-->
        </div><!-- #logo end -->

        <nav id="primary-menu" class="with-arrows clearfix">
          <ul>
            <li class="current"><a href="#"><div>Home</div></a></li>
            <!-- Mega Menu -->
            <li class="mega-menu"><a href="demos/car/car-single.html"><div>Models</div></a>
              <div class="mega-menu-content style-2 clearfix">
                <ul class="mega-menu-column col-lg-12">
                  <li>
                    <div class="widget center clearfix">

                      <h3 class="nobottommargin">Featured Models</h3>
                      <a href="#" class="button button-small button-rounded button-border button-dark button-black font-primary" style="margin: 10px 0 40px">Show all Cars</a>

                      <!-- Mega Menu Cars Carousel -->
                      <div class="owl-carousel customjs image-carousel carousel-widget" data-margin="20" data-nav="false" data-pagi="true" data-items-xs="1" data-items-sm="2" data-items-md="4" data-items-lg="6" data-items-xl="6">
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/1.png" alt="Car">BMW 1 Series ActiveE</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/4.png" alt="Car">Mercedes-Benz S-Class</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/5.png" alt="Car">Gran Turismo</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/6.png" alt="Car">Mclaren 675LT SPIDER</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/7.png" alt="Car">Honda City</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/8.png" alt="Car">Toyota Qualis</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/9.png" alt="Car">Honda WR-V</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/10.png" alt="Car">Suzuki Breeza</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/2.png" alt="Car">Chevrolet Spark</a></div>
                        <div class="oc-item center"><a href="demos/car/car-single.html"><img src="demos/car/images/mega-menu/3.png" alt="Car">Honda JaZZ</a></div>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="demos/car/car-listing.html"><div>Car Listing</div></a></li>
            <li><a href="demos/car/car-dealers.html"><div>Dealers</div></a></li>
            <li><a href="demos/car/car-accessories.html"><div>Accessories</div></a></li>
            <li><a href="demos/car/car-interiors.html"><div>Interiors</div></a></li>
            <li><a href="demos/car/car-faqs.html"><div>FAQs</div></a></li>
            <li><a href="demos/car/car-blog.html"><div>Blog</div></a></li>
            <li><a href="demos/car/car-contact.html"><div>Contacts</div></a></li>
          </ul>
        </nav>

<!--        <div id="side-panel-trigger" class="side-panel-trigger">-->
<!--          <a href="#" class="d-block d-lg-none"><i class="icon-line-lock"></i></a>-->
<!--         -->
<!--        </div>-->

      </div>

    </div>

    <div id="header-trigger"><i class="icon-line-menu"></i><i class="icon-line-cross"></i></div>

  </header>
</template>

<script>
export default {
  data(){
    return{
      aaa:0
    }
  },
  methods:{
    toHelp(){
      this.$router.push({name:"Help"});
    }
  },
  mounted() {
  },
  computed:{

  },

}
</script>

<style scoped>

</style>

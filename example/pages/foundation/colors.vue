<template>
  <div class="container">
    <page-title>
      <p>{{ $t('views.foundation.name') }}</p>
      <h2>{{ $t('views.foundation-colors.name') }}</h2>
    </page-title>
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">
        <section class="section">
          <div class="row">
            <h3 class="col-xs-12">{{ $t('views.foundation-colors.accent-colors') }}</h3>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="blue-100" classes="color--primary-white background-color--blue-100"/>
              <color-sample name="blue-60" classes="color--primary-white background-color--blue-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="blue-80" classes="color--primary-white background-color--blue-80"/>
              <color-sample name="blue-20" classes="color--primary-black background-color--blue-20"/>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h3 class="col-xs-12">{{ $t('views.foundation-colors.primary-colors') }}</h3>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="primary-black" classes="color--primary-white background-color--primary-black"/>
              <color-sample name="primary-darkgray" classes="color--primary-white background-color--primary-darkgray"/>
              <color-sample name="primary-silver" classes="color--primary-black background-color--primary-silver"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="primary-nickel" classes="color--primary-white background-color--primary-nickel"/>
              <color-sample name="primary-gray" classes="color--primary-white background-color--primary-gray"/>
              <color-sample name="primary-lightgray"
                  classes="color--primary-black background-color--primary-lightgray"/>
            </div>
            <div class="col-xs-12">
              <color-sample name="primary-white"
                  classes="color--primary-black background-color--primary-white border--black"/>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h3 class="col-xs-12">{{ $t('views.foundation-colors.secondary-colors') }}</h3>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.orange-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="orange-100" classes="color--primary-white background-color--orange-100"/>
              <color-sample name="orange-60" classes="color--primary-white background-color--orange-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="orange-80" classes="color--primary-white background-color--orange-80"/>
              <color-sample name="orange-20" classes="color--primary-black background-color--orange-20"/>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.bright-yellow-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="bright-yellow-100"
                  classes="color--primary-white background-color--bright-yellow-100"/>
              <color-sample name="bright-yellow-60" classes="color--primary-white background-color--bright-yellow-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="bright-yellow-80" classes="color--primary-white background-color--bright-yellow-80"/>
              <color-sample name="bright-yellow-20" classes="color--primary-black background-color--bright-yellow-20"/>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.light-green-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="light-green-100" classes="color--primary-white background-color--light-green-100"/>
              <color-sample name="light-green-60" classes="color--primary-white background-color--light-green-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="light-green-80" classes="color--primary-white background-color--light-green-80"/>
              <color-sample name="light-green-20" classes="color--primary-black background-color--light-green-20"/>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.light-blue-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="light-blue-100" classes="color--primary-white background-color--light-blue-100"/>
              <color-sample name="light-blue-60" classes="color--primary-white background-color--light-blue-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="light-blue-80" classes="color--primary-white background-color--light-blue-80"/>
              <color-sample name="light-blue-20" classes="color--primary-black background-color--light-blue-20"/>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.dark-blue-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="dark-blue-100" classes="color--primary-white background-color--dark-blue-100"/>
              <color-sample name="dark-blue-60" classes="color--primary-white background-color--dark-blue-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="dark-blue-80" classes="color--primary-white background-color--dark-blue-80"/>
              <color-sample name="dark-blue-20" classes="color--primary-black background-color--dark-blue-20"/>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.pink-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="pink-100" classes="color--primary-white background-color--pink-100"/>
              <color-sample name="pink-60" classes="color--primary-white background-color--pink-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="pink-80" classes="color--primary-white background-color--pink-80"/>
              <color-sample name="pink-20" classes="color--primary-black background-color--pink-20"/>
            </div>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.purple-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="purple-100" classes="color--primary-white background-color--purple-100"/>
              <color-sample name="purple-60" classes="color--primary-white background-color--purple-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="purple-80" classes="color--primary-white background-color--purple-80"/>
              <color-sample name="purple-20" classes="color--primary-black background-color--purple-20"/>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="row">
            <h3 class="col-xs-12">{{ $t('views.foundation-colors.notification-colors') }}</h3>
          </div>
          <div class="row">
            <h5 class="col-xs-12">{{ $t('views.foundation-colors.red-colors') }}</h5>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="red-100" classes="color--primary-white background-color--red-100"/>
              <color-sample name="red-60" classes="color--primary-white background-color--red-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="red-80" classes="color--primary-white background-color--red-80"/>
              <color-sample name="red-20" classes="color--primary-black background-color--red-20"/>
            </div>
          </div>
          <h5 class="col-xs-12">{{ $t('views.foundation-colors.yellow-colors') }}</h5>
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <color-sample name="yellow-100" classes="color--primary-white background-color--yellow-100"/>
              <color-sample name="yellow-60" classes="color--primary-white background-color--yellow-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="yellow-80" classes="color--primary-white background-color--yellow-80"/>
              <color-sample name="yellow-20" classes="color--primary-black background-color--yellow-20"/>
            </div>
          </div>
          <h5 class="col-xs-12">{{ $t('views.foundation-colors.green-colors') }}</h5>
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <color-sample name="green-100" classes="color--primary-white background-color--green-100"/>
              <color-sample name="green-60" classes="color--primary-white background-color--green-60"/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <color-sample name="green-80" classes="color--primary-white background-color--green-80"/>
              <color-sample name="green-20" classes="color--primary-black background-color--green-20"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import colorSample from '~/components/colors/color-sample';

export default {
  components: {
    colorSample
  }
};
</script>

<template>
  <div class="container">
    <page-title>
      <p>{{ $t('views.components.name') }}</p>
      <h2>{{ $t('views.components-tiles.name') }}</h2>
    </page-title>
    <section class="section">
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-lg-3"
            v-for="shoe in shoes"
            :key="shoe.title">
          <tile :title="shoe.title"
              :image="shoe.image"
              :type="shoe.type"
              :flag="shoe.flag">
            <div class="tile__footer__subheader__text">
              {{ shoe.description }}
            </div>
          </tile>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Tile from '~/components/tile/default';

export default {
  data() {
    return {
      shoes: [
        {
          title: 'ultraboost st parley',
          description: 'HIGH-PERFORMANCE STABILITY RUNNING SHOES MADE WITH RECYCLED MATERIALS.',
          image: 'https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/3bc4558765284abda0bea8bf0108873e_9366/Zapatilla_Ultraboost_ST_Parley_Azul_AC8207_01_standard.jpg',
          type: 'running',
          flag: 'footwear'
        }, {
          title: 'Gazelle',
          description: 'A ONE-TO-ONE REISSUE OF THE \'91 GAZELLES.',
          image: 'https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/7e9680514ef94bdeb1a0a92600cbb241_9366/Zapatilla_Gazelle_Azul_B41654_01_standard.jpg',
          type: 'originals',
          flag: 'footwear'
        }, {
          title: 'SST Track Jacket',
          description: 'A TRACK JACKET INSPIRED BY HERITAGE SPORT STYLE.',
          image: 'https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/9388b0fc4be241679864a8c000c092d2_9366/SST_Track_Jacket_Green_DH3166_21_model.jpg',
          type: 'originals',
          flag: 'apparel'
        }, {
          title: 'Trefoil backpack',
          description: 'A BACKPACK WITH CLASSIC TREFOIL STYLE.',
          image: 'https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/192a53d878c7465fa770a88100fc5730_9366/Trefoil_Backpack_Black_DJ2170_01_standard.jpg',
          type: 'hardware'
        }, {
          title: 'ID Climaheat Beanie',
          description: 'A SOFT KNIT HAT WITH BUILT-IN INSULATION.',
          image: 'https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/a27eaf6bf6104a09a199a88f00cdbbfc_9366/ID_Climaheat_Beanie_Orange_DJ1214_01_standard.jpg',
          type: 'hardware'
        }, {
          title: 'All Blacks Ball',
          description: 'A HARD-WEARING RUGBY BALL WITH THE MARK OF CHAMPIONS.',
          image: 'https://assets.adidas.com/images/w_2000,h_2000,f_auto,q_90,fl_lossy/527dcdf8581143098c07a8870123f599_9366/All_Blacks_Ball_Grey_CW9596_01_standard.jpg',
          type: 'hardware',
          flag: 'synthetic'
        }
      ]
    };
  },
  components: {
    Tile
  }
}
</script>

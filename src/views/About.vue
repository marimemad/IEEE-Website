<template>
  <div class="about">
    <div class="container">
      <div class="paragraph">
        <h2>IEEE ZSB HISTORY</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat ut modi maxime quae quia optio ipsum laborum illum ratione. Dicta et accusamus voluptates dolore natus quod illo? Quia, praesentium iusto inventore debitis molestias labore fuga quam nihil corrupti distinctio, assumenda totam! Suscipit fugit asperiores reiciendis consequuntur laboriosam dolor sed culpa dolores fugiat nulla, nihil possimus consequatur! Itaque, cumque iusto.</p>
      </div>

      <div class="paragraph">
        <h2>WHAT WE PROVIDE?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat ut modi maxime quae quia optio ipsum laborum illum ratione. Dicta et accusamus voluptates dolore natus quod illo? Quia, praesentium iusto inventore debitis molestias labore fuga quam nihil corrupti distinctio, assumenda totam! Suscipit fugit asperiores reiciendis consequuntur laboriosam dolor sed culpa dolores fugiat nulla, nihil possimus consequatur! Itaque, cumque iusto.</p>
      </div>

      <div class="paragraph">
        <h2>RAS AND CS ACHIEVEMENT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat ut modi maxime quae quia optio ipsum laborum illum ratione. Dicta et accusamus voluptates dolore natus quod illo? Quia, praesentium iusto inventore debitis molestias labore fuga quam nihil corrupti distinctio, assumenda totam! Suscipit fugit asperiores reiciendis consequuntur laboriosam dolor sed culpa dolores fugiat nulla, nihil possimus consequatur! Itaque, cumque iusto.</p>
      </div>

      <div class="board">
        <div class="paragraph">
          PLACE HOLDER FOR LEADER BOARD
        </div>
        <!-- INSERT BOARD -->
      </div>
    </div>
    <home-footer/>
  </div>
</template>

<script>
import HomeFooter from '@/components/HomeFooter.vue'

export default {
  name: 'About',
  components: {
    HomeFooter,
  }
}
</script>

<style scoped>
.about {
  width: 100%;
  text-align: center;
}

.container {
  max-width: 1000px;
  font-size: 1.5em;
  padding: 0 1em 5em 1em;
}

.paragraph{
  padding-top: 5em;
}
</style>

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="item active">
        <img src="imgs/img2.jpg" class="d-block img-fluid" />

        <div class="caption">
          <h5>How To Make A Website</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="imgs/img3.jpg" class="d-block img-fluid" />
        <div class="caption">
          <h5>Create Responsive Website</h5>
        </div>
      </div>
      <div class="item">
        <img src="imgs/img4.jpg" class="d-block img-fluid" />
        <div class="caption">
          <h5>Business Website Diesign</h5>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
#slider {
  width: 100%;
}

.caption {
  top: 60%;
  transform: translate(1%);
  bottom: initial !important;
}

.caption h5 {
  color: rgba(15, 220, 247, 0.945);
  font-size: 42px;
}
</style>
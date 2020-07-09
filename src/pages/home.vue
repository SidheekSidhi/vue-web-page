<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="img/img2.jpg" class="d-block img-fluid" />

        <div class="carousel-caption">
          <h5>How To Make A Website</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/img3.jpg" class="d-block img-fluid" />
        <div class="carousel-caption">
          <h5>Create Responsive Website</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="img/img4.jpg" class="d-block img-fluid" />
        <div class="carousel-caption">
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

.carousel-caption {
  top: 60%;
  transform: translate(1%);
  bottom: initial !important;
}

.carousel-caption h5 {
  color: rgba(0, 0, 0, 0.664);
  font-size: 32px;
}
</style>
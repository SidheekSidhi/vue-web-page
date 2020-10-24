<template>
  <div class="container-about">
    <div class="row">
      <div class="col-md-6">
        <h2>About Us</h2>
        <div
          class="about-content"
        >CodeinWP stands for all-things-WordPress. From web design to freelancing and from development to business, your questions are covered.</div>
        <button type="button" class="btn btn-primary">Read More>></button>
      </div>
      <div class="col-md-6" skills-bar>
        <p>Adobe photoshop</p>
        <div class="progress">
          <div class="progress-bar" style="width: 80%;">80%</div>
        </div>
        <p>UI design</p>
        <div class="progress">
          <div class="progress-bar" style="width: 85%;">85%</div>
        </div>
        <p>Wordpress</p>
        <div class="progress">
          <div class="progress-bar" style="width: 75%;">75%</div>
        </div>
        <p>Graphics design</p>
        <div class="progress">
          <div class="progress-bar" style="width: 50%;">50%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-about{
  width: 1000px;
  margin-left: 25%;
  padding-top: 50px;
}
#about {
  padding-bottom: 50px;
  color: #555;
}

#about .btn {
  margin-top: 20px;
  margin-bottom: 30px;
}

.about-content {
  padding-top: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.skills-bar {
  margin-bottom: 6px;
  font-weight: 600;
}

.progress-bar {
  border-radius: 20px;
}

.progress {
  border-radius: 16px !important;
  margin-bottom: 20px;
}
</style>

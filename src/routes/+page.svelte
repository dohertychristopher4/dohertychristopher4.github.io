<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="card-container">
  <h1>About Me</h1>
  <div class="card about-card">
    <!-- <h2>{$cvData.personalDetails.name}</h2> -->
    <p>{$cvData.personalDetails.about}</p>
    <!-- <p>{$cvData.personalDetails.about2}</p> -->
  </div>
</div>

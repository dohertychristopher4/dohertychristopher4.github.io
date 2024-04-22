<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="card-container">
  <h1>About Me</h1>
  <h2>{$cvData.personalDetails.name}</h2>
  <div class="card">
    <p>{$cvData.personalDetails.address}</p>
    <p>{$cvData.personalDetails.email}</p>
    <p>{$cvData.personalDetails.about}</p>
  </div>
</div>

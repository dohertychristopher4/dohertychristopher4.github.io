<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="card-container">
  <h1>Contact Me</h1>
  <div class="card">
    <p>Email: {$cvData.personalDetails.email}</p>
    <p>Phone: {$cvData.personalDetails.telephone}</p>
    <p>Address: {$cvData.personalDetails.address}</p>
  </div>
</div>

<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="card-container">
  <h1>Contact Me</h1>
  <div class="card">
    <p><span>Email:</span> {$cvData.personalDetails.email}</p>
    <p><span>Phone:</span> {$cvData.personalDetails.telephone}</p>
    <p><span>Address:</span> {$cvData.personalDetails.address}</p>
  </div>
</div>

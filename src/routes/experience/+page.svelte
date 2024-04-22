<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="card-container">
  <h1>Experience</h1>
  {#each $cvData.employmentHistory as job}
    <div class="card">
      <h2>{job.position} - {job.organization}</h2>
      <p>{job.dates}</p>
    </div>
  {/each}
</div>

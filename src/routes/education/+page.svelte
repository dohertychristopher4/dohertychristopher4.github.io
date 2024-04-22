<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="card-container">
  <h1>Education</h1>
  <div class="card">
    <h2>{$cvData.education.degree}</h2>
    <p>{$cvData.education.fieldOfStudy}</p>
    <p>{$cvData.education.institution}</p>
    <p class="years">{$cvData.education.yearsAttended}</p>
    <p>Grade: {$cvData.education.grade}</p>
  </div>
</div>

  <script>
    import { cvData } from '$lib/stores.js';
  </script>

  <div class="personal-section">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img id="profiler" src="/images/profile.png" alt="Profile image" />
    <div class="text-overlay">
      <h1>{$cvData.personalDetails.name}</h1>
      <p>{$cvData.personalDetails.position}</p>
      <div class="social-links">
        <a href="{$cvData.links['github']}" target="_blank" title="GitHub">
          <img src="/svgs/github.svg" alt="GitHub"/>
        </a>
        <a href="{$cvData.links['linkedin']}" target="_blank" title="LinkedIn">
          <img src="/svgs/linkedin.svg" alt="LinkedIn"/>
        </a>
      </div>
    </div>
  </div>


<style>
  .personal-section {
  background-color: blue;
  height: 100%;
}

#profiler {
/* .personal-section img { */
  margin-top: -3em;
  width: 100%;
  height: 110%;
  box-shadow: 0 8px 16px #727272;
  z-index: -1;
}

.personal-section .text-overlay {
  margin-bottom: -2rem;
  text-align: center;
}

.social-links {
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 1;
}

</style>
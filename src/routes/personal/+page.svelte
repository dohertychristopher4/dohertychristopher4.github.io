<script>
  import { cvData } from '$lib/stores.js';
</script>

<div class="personal-section">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img id="profiler" src="/images/profile.png" alt="Profile image" />
  <div class="text-overlay">
    <h1>{$cvData.personalDetails.displayName}</h1>
    <h3>{$cvData.personalDetails.position}</h3>
    <div class="social-links">
      <a href="{$cvData.links['github']}" target="_blank" title="GitHub">
        <img class="icon" id='githubIcon' src="/svgs/github.svg" alt="GitHub"/>
      </a>
      <a href="{$cvData.links['linkedin']}" target="_blank" title="LinkedIn">
        <img class="icon" id='linkedinIcon' src="/svgs/linkedin.svg" alt="LinkedIn"/>
      </a>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const githubIcon = document.getElementById('githubIcon');
      const linkedinIcon = document.getElementById('linkedinIcon');
      if(githubIcon && linkedinIcon) {
        githubIcon.addEventListener('mouseover', () => { githubIcon.src = '/svgs/github-hover.svg'; });
        linkedinIcon.addEventListener('mouseover', () => { linkedinIcon.src = '/svgs/linkedin-hover.svg'; });
        githubIcon.addEventListener('mouseout', () => { githubIcon.src = '/svgs/github.svg'; });
        linkedinIcon.addEventListener('mouseout', () => { linkedinIcon.src = '/svgs/linkedin.svg'; });
      };
    });
  </script>

</div>

<style>
.personal-section {
  /* background-color: blue; */
  height: 100%;
  width: 47vh;
}

#profiler {
/* .personal-section img { */
  margin-top: -3em;
  width: 100%;
  height: 110%;
  box-shadow: 0 0.75rem 1.5rem #727272;
  z-index: -1;
}

.text-overlay {
  /* bottom: 20rem;
  left: 23rem;
  position: absolute; */
  /* display: flex; */
  margin-top: -11.8rem;
  position: sticky;
  text-align: center;
  justify-content: center;
}

.icon {
  position: sticky;
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 2rem;
}

h1 {
  font-size: 2.8rem;
  color: #E2E5DE;
}

h3 {
  margin-top: 1rem;
  color: #E2E5D9;
}

img:hover {
  color: pink;
}

@media (max-width: 768px) {
  .personal-section{
    display: none;
  }
}
</style>
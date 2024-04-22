<script>
    export let details = {};
  </script>
  
  <footer>
    <div class="footer-content">
      <p>Contact me via email at <a href="mailto:{details.email}">{details.email}</a></p>
      <p>© 2024 {details.name}. All Rights Reserved.</p>
    </div>
  
    <style>
      footer {
        padding: 20px;
        background-color: #333;
        color: white;
        text-align: center;
        margin-top: 20px;
      }
      a {
        color: #0af;
      }
    </style>
  </footer>
  
<script>
    export let type;
    export let caption;

</script>

<style>
    button {
      font: inherit;
      border: 1px solid #3e4ab8;
      background: #3e4ab8;
      padding: 0.5rem 1rem;
      color: white;
      border-radius: 5px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
      cursor: pointer;
      text-decoration: none;
    }
  
    button:focus {
      outline: none;
    }
  
    button:hover, button:active {
      background: #323fb4;
      border-color: #323fb4;
      box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
    }
  
    button:disabled,
    button:disabled:hover,
    button:disabled:active {
      background: #ccc;
      border-color: #ccc;
      color: #959595;
      box-shadow: none;
      cursor: not-allowed;
    }
  </style>

<button type={type} on:click>{caption}</button>
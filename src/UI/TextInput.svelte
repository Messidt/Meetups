<script>
    export let id;
    export let label;
    export let rows = 0;
    export let type;
    export let value = '';
    export let valid = true;
    export let validationMessage = '';
    let touched = false;
</script>
<style>
    input,
    textarea {
      display: block;
      width: 100%;
      font: inherit;
      border: none;
      border-bottom: 2px solid #ccc;
      border-radius: 3px 3px 0 0;
      background: white;
      padding: 0.15rem 0.25rem;
      transition: border-color 0.1s ease-out;
    }
  
    input:focus,
    textarea:focus {
      border-color: #3e4ab8;
      outline: none;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
      width: 100%;
    }
  
    .form-control {
      padding: 0.5rem 0;
      width: 100%;
      margin: 0.25rem 0;
    }
  
    .invalid {
      border-color: red;
      background: #fde3e3;
    }
  
    .error-message {
      color: red;
      margin: 0.25rem 0;
    }
  </style>
<div class='form-control'>
    <label for="{id}">{label}</label>
    {#if type === 'text' || type === 'email'}
        <input type="{type}" id="{id}" value={value} on:input class:invalid={!valid && touched} on:blur={() => touched = true}>
    {:else}
        <textarea id="{id}" rows="{rows}" value={value} on:input class:invalid={!valid && touched} on:blur={() => touched = true}></textarea>
    {/if}
    {#if !valid && validationMessage && touched}
        <p class="error-message">{validationMessage}</p>
    {/if}
</div>
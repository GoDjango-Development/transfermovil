# Transfermovil Utility
## What is this
This is an utility which allows you present information about a receiver, for example a QR image with all transfermovil's needed data, and labels... 
Also for the sake of the verification allows input from the final user that can be used to identifate him manually later.
## What this is not
This is not a payment processor utility, which means this does not allows to process a payment without the transfermovil APK ... Manual intervention is needed if you use this... 
## How to use
NOTE: You have an html example in the public folder...
Once downloaded the release file you must uncompress it and if you are not setting the file under static/ path you must go into each file and exchange each occurrence of static/ with your path for example if the path is static/transfermovil/ you must set each occurrence of static/ to static/transfermovil/ , Last but not least if you want to rename each file you must search inside of each file and rename it inside of it too...
In the top of your template (no matter if it is blade, blazor or django-templates) you must set.
```html
<script defer="defer" src="/static_path/js/main.2f8541c5.js"></script>
<link href="/static_path/css/main.57e42911.css" rel="stylesheet">
```
Previous snippet will give you a design and also the functionalities like on click copy functionality.

### Django
```html
<div class="transfermovil" bank="{{ cfg.user_bank }}" card="{{ cfg.user_debitcard }}" mobile="{{ cfg.confirmation_number }}" color="red">
</div>
```
You must set also a controller that receives the POST data from frontend.

### Set Up
* If you want a different design or a different functionality notice that you can override the next elements by its class names or ids:
QR ClassName = tm-qr
Top Element ClassName= tm-main
Labels ClassName = tm-label
TextArea ClassName = tm-tarea
TextArea ID = tm_tarea

* If you wants to add a new input do it as follows:
```html
<div class="transfermovil" bank="{{ cfg.user_bank }}" card="{{ cfg.user_debitcard }}" mobile="{{ cfg.confirmation_number }}" color="red">
  <input id="your_custom_id_here" value="another input"></input>
  <input type="submit" id="my_submit_button" value="another input"></input>
</div>
```
NOTE: Notice that transfermovil html element is not a form element so you must use js in an input element with type submit or whatever type you like with the submit event on it.. For example:
```js
document.getElementByClassName("my_submit_button")[0].onclick = (event)=>{
  fetch("your_url/here", {
    method:"POST",
    body: JSON.stringify({
      "tfm_message": document.getElementById("tm_tarea").value,
      "your_other_inputs_ids_here": document.getElementById("your_custom_id_here").value
    })
  })
}
```

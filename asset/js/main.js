console.log("main.js loaded");

$(document).ready(function() {
  console.log("Document ready");

  if ($('.typed-text-output').length == 1) {
    console.log("Element found: .typed-text-output");

    var typed = new Typed('#element-typed', {
      strings: ['FullStack Developer'],
      typeSpeed: 80,
      backDelay: 5000,
      backSpeed: 100,
      smartBackspace: true,
      loop: true
    });

    console.log("Typed initialized");
  } else {
    console.log("Element not found: .typed-text-output");
  }
});

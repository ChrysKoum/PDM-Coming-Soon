(function ($) {
  "use strict";

  const inputElements = $(".validate-input .input100");

  $(".validate-form").on("submit", function (event) {
    let isValid = true;

    inputElements.each(function (index, input) {
      if (!validate(input)) {
        showValidate(input);
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });

  $(".validate-form .input100").on("focus", function () {
    hideValidate(this);
  });

  function validate(input) {
    const value = $(input).val().trim();
    if (
      $(input).attr("type") === "email" ||
      $(input).attr("name") === "email"
    ) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(value);
    } else {
      return value !== "";
    }
  }

  function showValidate(input) {
    $(input).parent().addClass("alert-validate");
  }

  function hideValidate(input) {
    $(input).parent().removeClass("alert-validate");
  }
})(jQuery);

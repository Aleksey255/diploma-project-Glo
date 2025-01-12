export const phoneMask = () => {
  const feedbackInput = document.querySelectorAll(".feedback__input-input");
  const feedbackBlockPhone = document.querySelectorAll(
    ".feedback-block__form-input_phone"
  );

  const phoneMask = (e) => {
    let input = e.target;
    let inputValue = input.value;

    inputValue = inputValue.replace(/\D/g, "");

    let formattedValue = "+7 (";

    if (inputValue.length > 0) {
      formattedValue += inputValue.substring(1, 4);
    }

    if (inputValue.length >= 3) {
      formattedValue += ") " + inputValue.substring(4, 7);
    }

    if (inputValue.length >= 7) {
      formattedValue += "-" + inputValue.substring(7, 9);
    }

    if (inputValue.length >= 9) {
      formattedValue += "-" + inputValue.substring(9, 11);
    }

    input.value = formattedValue;
  };

  feedbackInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      phoneMask(e);
    });
  });
  feedbackBlockPhone.forEach((input) => {
    input.addEventListener("input", (e) => {
      phoneMask(e);
    });
  });
};

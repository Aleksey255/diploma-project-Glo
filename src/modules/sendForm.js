export const sendForm = (idForm, idChekbox) => {
  const form = document.getElementById(idForm);
  const input = form.querySelectorAll("input");
  const checkbox = document.getElementById(idChekbox);

  const validate = (checkbox) => {
    let success = true;

    if (!checkbox) {
      success = false;
    }

    return success;
  };

  const sendData = async (data) => {
    return await fetch("http://localhost:3000/number", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  const submitForm = async () => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(checkbox.checked)) {
      await sendData(formBody)
        .then((data) => {
          input.forEach((input) => {
            input.value = "";
          });

          checkbox.checked = false;

          console.log(data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("Согласитесь с политикой конфиденциальности");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

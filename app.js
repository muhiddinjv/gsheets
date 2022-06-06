// GLOBAL VARIABLES
const nameInput = document.getElementById("name-input");
const descriptionInput = document.getElementById("description-input");
const dateInput = document.getElementById("date-input");
const allInputs = [nameInput, descriptionInput, dateInput];

const valNameElem = document.querySelector(".name");
const valDescElem = document.querySelector(".description");
const valDateElem = document.querySelector(".date");
const validationElems = [valNameElem, valDescElem, valDateElem];

// HELPER FUNCTION
const validateInput = (inputValue) => {
  if (inputValue === "" || !inputValue) {
    return false;
  } else {
    return true;
  }
};

validationElems.map((valElem) => {
  const foundInput = allInputs.find(
    (input) => input.name === valElem.className
  );

  // (A) VALIDATE EACH INPUT
  foundInput.addEventListener("input", (e) => {
    if (!validateInput(e.target.value)) {
      valElem.style.display = "block";
      valElem.textContent = `${valElem.className} is required`;
      return false;
    } else {
      valElem.textContent = "";
      valElem.style.display = "none";
    }
  });
});

function sendData() {
  validationElems.map((valElem) => {
    const found = allInputs.find((input) => input.name === valElem.className);

    // (A) VALIDATE ALL INPUTS
    if (!validateInput(found.value)) {
      valElem.style.display = "block";
      valElem.textContent = `${valElem.className} is required`;
      return false;
    } else {
      valElem.textContent = "";
      valElem.style.display = "none";

      // (B) GET FORM DATA
      let data = new FormData();
      data.append("name", nameInput.value);
      data.append("description", descriptionInput.value);
      data.append("date", dateInput.value);

      // (C) INIT FETCH POST

      // Check "webhook" and replace the link below with your new link
      const URL = "https://bright-rabbit-17.hooks.n8n.cloud/webhook-test/endpoint";
        // "http://localhost:5678/webhook-test/497618f4-05b7-4d59-ba60-470ca7ade4df";             

      fetch(URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      })
        // (D) RETURN SERVER RESPONSE AS TEXT
        .then((result) => {
          if (result.status != 200) {
            throw new Error("Bad Server Response");
          }
          return result.text();
        })

        // (E) SERVER RESPONSE
        .then((response) => {
          console.log(response);
        })

        // (F) HANDLE ERRORS
        .catch((error) => {
          console.log(error);
        });
    }
  });
  // (F) PREVENT FORM SUBMIT
  return false;
}

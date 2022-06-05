function sendData() {
  // (A) GET FORM DATA
  let data = new FormData();
  data.append("name", document.getElementById("name").value);
  data.append("description", document.getElementById("description").value);
  data.append("date", document.getElementById("date").value);

  // (B) INIT FETCH POST
  const URL =
  "http://localhost:5678/webhook-test/497618f4-05b7-4d59-ba60-470ca7ade4df";

  fetch(URL, {
    method: "POST",
    mode: "no-cors",
    body: data,
  })
    // (C) RETURN SERVER RESPONSE AS TEXT
    .then((result) => {
      if (result.status != 200) {
        throw new Error("Bad Server Response");
      }
      return result.text();
    })

    // (D) SERVER RESPONSE
    .then((response) => {
      console.log(response);
    })

    // (E) HANDLE ERRORS
    .catch((error) => {
      console.log(error);
    });

  // (F) PREVENT FORM SUBMIT
  return false;
}

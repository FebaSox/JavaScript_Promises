/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
let error = document.querySelector("#error");
let list = document.querySelectorAll("#list");
let arr = ["Bilbo", "Frodo", "Sam", "Merry", "Pippin"];

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(arr);
      }
    }, 10);
  });
}

getList()
  .then((pass) => {
    for (let i = 0; i < list.length; i++) {
      let li = document.createElement("li");
      li.textcontent = arr[i];
      ul.appendChild
           
    }
  })

  .catch((fail) => {
   error.textcontent = error.message;
  });

  
// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)

function validateForm() {
  const form = document.forms["registerform"];

if (username === "") {
  console.log("Username required.");
  console.log("Failed to submit");
  return false;
} else if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
  console.log("Letters and numbers required for Username.");
  console.log("Failed to submit");
  return false;
}

  if (email === "") {
      console.log("Email cannot be empty.");
      console.log("Failed to submit");
      return false;
    } else if (!/@/.test(email.value)) {
      console.log("Email needs an '@' .");
      console.log("Failed to submit");
      return false;
    }

     if (password === "") {
      console.log("Password cannot be empty.");
      console.log("Failed to submit");
      return false;
    } else if (password.length < 8) {
      console.log("Failed, password needs 8 characters.");
      console.log("Failed to submit");
      return false;
    }

console.log("Form submitted successfully");
return true;
}

const products = [
  "apple",
  "banana",
  "coconut",
  "orange",
  "lime",
  "lemon",
  "tangerine",
  "dragon fruit",
  "kiwi",
  "mango"
];
function productDisplay(productList) {
  const ul = document.getElementById("productList");
  ul.innerHTML = "";
  for (const product of productList) {
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  }
}
function searchProducts(query) {
  const lowerCaseQuery = query.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(lowerCaseQuery)
  );
  return filteredProducts;
}
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", event => {
  const query = event.target.value;
  const filteredProducts = searchProducts(query);
  productDisplay(filteredProducts);
});


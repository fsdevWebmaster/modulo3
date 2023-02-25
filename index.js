const testDialog = document.querySelector("#testDialog");
const showBtn = document.querySelector("#showBtn");
const submitBtn = document.querySelector("#submitBtn");
const testSelector = document.querySelector("#testSelector");
const output = document.querySelector("output");

showBtn.addEventListener('click', () => {
  testDialog.showModal();
});

testSelector.addEventListener('change', () => {
  output.innerHTML = testSelector.value;
  testDialog.close();
});

const itemProp = document.querySelector("#itemProp");

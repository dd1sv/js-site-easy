const checkNumInputs = (selector) => {
   const NumInputs = document.querySelectorAll(selector);

   numInputs.forEach(item => {
      item.addEventListener('input', () => {
          item.value = item.value.replace(/\D/, '');
      });
  })
}

export default checkNumInputs;
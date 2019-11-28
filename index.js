function name_validation() {
  const regex = /^[A-Z][a-z]+/;
  if (
    regex.test(document.getElementById('name').value)
        && document.getElementById('name').value.length <= 16
  ) alert('Имя корректное!');
  else alert('Имя не корректное!');
}

function email_validate() {
  const x = document.getElementById('email').value;
  const atpos = x.indexOf('@');
  const dotpos = x.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) alert('Не корректный адрес e-mail!');
  else alert('Адрес корректный!');
}

function number_validate() {
  input = document.getElementById('mob_num').value;
  const cor_sym = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let ok = true;
  if (input.length > 12) ok = false;
  if (input.charAt(0) !== '3' || input.charAt(1) !== '8') ok = false;
  for (let i = 2; i < input.length; i++) {
    const chr = input.charAt(i);
    let found = false;
    for (let j = 0; j < 10; j++) {
      if (chr === cor_sym[j]) found = true;
    }
    if (!found) ok = false;
  }
  if (!ok) {
    alert('Номер не корректный!');
  } else {
    alert('Номер корректный!');
  }
}

// let inp1 = document.getElementById('inp1')
// let inp2 = document.getElementById('inp2')
// let inp3 = document.getElementById('inp3')
// let inp4 = document.getElementById('inp4')
// let inp5 = document.getElementById('inp5')
// let inp6 = document.getElementById('inp6')
// let inp7 = document.getElementById('inp7')
// let inp8 = document.getElementById('inp8')
// let inp9 = document.getElementById('inp9')
// let inp10 = document.getElementById('inp10')
// let inp11 = document.getElementById('inp11');

// let btn = document.createElement('button');
// btn.innerText = 'Submit';
// let del = document.createElement('button');
// del.innerHTML = 'remove';
// let tbody = document.getElementById('tdata');
// let tr = document.createElement('tr');
// let td1 = document.createElement('td')
// let td2 = document.createElement('td')
// let td3 = document.createElement('td')
// let td4 = document.createElement('td')
// let td5 = document.createElement('td')
// let td6 = document.createElement('td')
// let td7 = document.createElement('td')
// let td8 = document.createElement('td')
// let td9 = document.createElement('td')
// let td10 = document.createElement('td')
// let td11 = document.createElement('td');
// let td12 = document.createElement('td');
// tr.appendChild(td1);
// tr.appendChild(td2)
// tr.appendChild(td3)
// tr.appendChild(td4)
// tr.appendChild(td5)
// tr.appendChild(td6)
// tr.appendChild(td7)
// tr.appendChild(td8)
// tr.appendChild(td9)
// tr.appendChild(td10)
// tr.appendChild(td11);
// tr.appendChild(td12);
// td12.appendChild(del);

// tbody.appendChild(tr);
// td1.style.border = '2px solid red'
// td2.style.border = '2px solid red'
// td3.style.border = '2px solid red'
// td4.style.border = '2px solid red'
// td5.style.border = '2px solid red'
// td6.style.border = '2px solid red'
// td7.style.border = '2px solid red'
// td8.style.border = '2px solid red'
// td9.style.border = '2px solid red'
// td10.style.border = '2px solid red'
// td11.style.border = '2px solid red'

// document.querySelector('body').append(btn);



// btn.addEventListener('click', ()=>{
//   td1.innerText = inp1.value;
//   td2.innerText = inp2.value;
//   td3.innerText = inp3.value;
//   td4.innerText = inp4.value;
//   td5.innerText = inp5.value;
//   td6.innerText = inp6.value;
//   td7.innerText = inp7.value;
//   td8.innerText = inp8.value;
//   td9.innerText = inp9.value;
//   td10.innerText = inp10.value;
//   td11.innerText = inp11.value;
//   del.addEventListener('click', () => {
//     tr.remove();
//     inp1.value = '';
//     inp2.value = '';
//     inp3.value = '';
//     inp4.value = '';
//     inp5.value = '';
//     inp6.value = '';
//     inp7.value = '';
//     inp8.value = '';
//     inp9.value = '';
//     inp10.value = '';
//     inp11.value = '';
//   })

// })



// let inp1 = document.getElementById('inp1');
// let inp2 = document.getElementById('inp2');
// let inp3 = document.getElementById('inp3');
// let inp4 = document.getElementById('inp4');
// let inp5 = document.getElementById('inp5');
// let inp6 = document.getElementById('inp6');
// let inp7 = document.getElementById('inp7');
// let inp8 = document.getElementById('inp8');
// let inp9 = document.getElementById('inp9');
// let inp10 = document.getElementById('inp10');
// let inp11 = document.getElementById('inp11');

// let tbody = document.getElementById('tdata');
// let btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//   let tr = document.createElement('tr');

//   let td1 = document.createElement('td');
//   td1.innerText = inp1.value;
//   let td2 = document.createElement('td');
//   td2.innerText = inp2.value;
//   let td3 = document.createElement('td');
//   td3.innerText = inp3.value;
//   let td4 = document.createElement('td');
//   td4.innerText = inp4.value;
//   let td5 = document.createElement('td');
//   td5.innerText = inp5.value;
//   let td6 = document.createElement('td');
//   td6.innerText = inp6.value;
//   let td7 = document.createElement('td');
//   td7.innerText = inp7.value;
//   let td8 = document.createElement('td');
//   td8.innerText = inp8.value;
//   let td9 = document.createElement('td');
//   td9.innerText = inp9.value;
//   let td10 = document.createElement('td');
//   td10.innerText = inp10.value;
//   let td11 = document.createElement('td');
//   td11.innerText = inp11.value;
//   let td12 = document.createElement('td');



//   localStorage.setItem('id', inp1.value);
//   localStorage.setItem('name', inp2.value);
//   localStorage.setItem('email', inp3.value);
//   localStorage.setItem('salary', inp4.value);
//   localStorage.setItem('contact', inp5.value);
//   localStorage.setItem('exp', inp6.value);
//   localStorage.setItem('bon', inp7.value);
//   localStorage.setItem('inc', inp8.value);
//   localStorage.setItem('tsal', inp9.value);
//   localStorage.setItem('city', inp10.value)
//   localStorage.setItem('dep', inp11.value);

//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   tr.appendChild(td3);
//   tr.appendChild(td4);
//   tr.appendChild(td5);
//   tr.appendChild(td6);
//   tr.appendChild(td7);
//   tr.appendChild(td8);
//   tr.appendChild(td9);
//   tr.appendChild(td10);
//   tr.appendChild(td11);
//   tr.appendChild(td12);

//   tbody.appendChild(tr);

//   inp1.value = '';
//   inp2.value = '';
//   inp3.value = '';
//   inp4.value = '';
//   inp5.value = '';
//   inp6.value = '';
//   inp7.value = '';
//   inp8.value = '';
//   inp9.value = '';
//   inp10.value = '';
//   inp11.value = '';
//   let del = document.createElement('button');
//   del.innerText = 'Remove';
//   td12.appendChild(del);
//   del.addEventListener('click', () => {
//     tr.remove();
//   });
// });

// function Local() {
//   let a = localStorage.getItem('id');
//   let b = localStorage.getItem('name');
//   let c = localStorage.getItem('email');
//   let d = localStorage.getItem('salary');
//   let e = localStorage.getItem('contact');
//   let f = localStorage.getItem('exp');
//   let g = localStorage.getItem('bon');
//   let h = localStorage.getItem('inc');
//   let i = localStorage.getItem('tsal');
//   let j = localStorage.getItem('city');
//   let k = localStorage.getItem('dep');

//   if (a && b && c) {
//     let tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerText = a;
//     let td2 = document.createElement('td');
//     td2.innerText = b;
//     let td3 = document.createElement('td');
//     td3.innerText = c;
//     let td4 = document.createElement('td');
//     td4.innerText = d;
//     let td5 = document.createElement('td');
//     td5.innerText = e;
//     let td6 = document.createElement('td');
//     td6.innerText = f;
//     let td7 = document.createElement('td');
//     td7.innerText = g;
//     let td8 = document.createElement('td');
//     td8.innerText = h;
//     let td9 = document.createElement('td');
//     td9.innerText = i;
//     let td10 = document.createElement('td');
//     td10.innerText = j;
//     let td11 = document.createElement('td');
//     td11.innerText = k;
//     let td12 = document.createElement('td');

//     td1.classList.add('tab');
//     td2.classList.add('tab');
//     td3.classList.add('tab');
//     td4.classList.add('tab');
//     td5.classList.add('tab');
//     td6.classList.add('tab');
//     td7.classList.add('tab');
//     td8.classList.add('tab');
//     td9.classList.add('tab');
//     td10.classList.add('tab');
//     td11.classList.add('tab');

//     let del = document.createElement('button');
//     del.innerText = 'Remove';
//     td12.appendChild(del);
//     del.addEventListener('click', () => {
//       tr.remove();
//     });

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);
//     tr.appendChild(td6);
//     tr.appendChild(td7);
//     tr.appendChild(td8);
//     tr.appendChild(td9);
//     tr.appendChild(td10);
//     tr.appendChild(td11);
//     tr.appendChild(td12);


//     tbody.appendChild(tr);
//   }
// }
// Local();

let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let inp5 = document.getElementById('inp5');
let inp6 = document.getElementById('inp6');
let inp7 = document.getElementById('inp7');
let inp8 = document.getElementById('inp8');
let inp9 = document.getElementById('inp9');
let inp10 = document.getElementById('inp10');
let inp11 = document.getElementById('inp11');

let err1 = document.getElementById('err1');
let err2 = document.getElementById('err2');
let err3 = document.getElementById('err3');
let err4 = document.getElementById('err4');
let err5 = document.getElementById('err5');
let err6 = document.getElementById('err6');
let err7 = document.getElementById('err7');
let err8 = document.getElementById('err8');
let err9 = document.getElementById('err9');
let err10 = document.getElementById('err10');
let err11 = document.getElementById('err11');




function Pettern(inp1, inp2, inp3, inp4, inp5, inp6, inp7, inp8, inp9, inp10, inp11) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

  if (inp1.value === '' && inp2.value === '' && inp3.value === '' && inp4.value === '' && inp5.value === '' && inp6.value === '' && inp7.value === '' && inp8.value === '' && inp9.value === '' && inp10.value == '' && inp11.value == '') {
    alert("Please fill all fields before submitting.");
    return false;
  }

  if (inp1.value.length === 0){
      setTimeout(() =>{
      err1.hidden = false;
      err1.classList.add('show');
    }, 1000);

    setTimeout(() => {
      err1.hidden = true;
      err1.classList.remove('show');
    }, 3000);

    isValid = false;
  }else{
    err1.innerText = '';
  }

  function updateProgressBar(){
    const progressBar1 = document.getElementById('progressBar1');
    const progressBar2 = document.getElementById('progressBar2');
    const progressBar3 = document.getElementById('progressBar3');
    const progressBar4 = document.getElementById('progressBar4');
    const progressBar5 = document.getElementById('progressBar5');
    const progressBar6 = document.getElementById('progressBar6');
    const progressBar7 = document.getElementById('progressBar7');
    const progressBar8 = document.getElementById('progressBar8');
    const progressBar9 = document.getElementById('progressBar9');
    const progressBar10 = document.getElementById('progressBar10');
    const progressBar11 = document.getElementById('progressBar11');
    let width = 0;

    const interval = setInterval(() =>{
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        progressBar1.style.width = width + '%';
        progressBar1.style.backgroundColor = 'orange'
        progressBar2.style.width = width + '%';
        progressBar2.style.backgroundColor = 'orange'
        progressBar3.style.width = width + '%';
        progressBar3.style.backgroundColor = 'orange'
        progressBar4.style.width = width + '%';
        progressBar4.style.backgroundColor = 'orange'
        progressBar5.style.width = width + '%';
        progressBar5.style.backgroundColor = 'orange';
        progressBar6.style.width = width + '%';
        progressBar6.style.backgroundColor = 'orange';
        progressBar7.style.width = width + '%';
        progressBar7.style.backgroundColor = 'orange'
        progressBar8.style.width = width + '%';
        progressBar8.style.backgroundColor = 'orange';
        progressBar9.style.width = width + '%';
        progressBar9.style.backgroundColor = 'orange'
        progressBar10.style.width = width + '%';
        progressBar10.style.backgroundColor = 'orange'
        progressBar11.style.width = width + '%';
        progressBar11.style.backgroundColor = 'orange';
      }
    }, 40);
  }

  updateProgressBar();


  if (inp2.value.length < 5) {
    setTimeout(() => {
      err2.hidden = false;
      err2.classList.add('show');
    }, 1500);

    setTimeout(() => {
      err2.hidden = true;
      err2.classList.remove('show');
    }, 3400);

    isValid = false;
  } else {
    err2.innerText = '';
  }

  if (!emailPattern.test(inp3.value)){
    setTimeout(() => {
      err3.hidden = false;
      err3.classList.add('show');
    }, 1800);

    setTimeout(() => {
      err3.hidden = true;
      err3.classList.remove('show');
    }, 3500);

    isValid = false;
  } else {
    err3.innerText = '';
  }

  
  if(inp4.value < 10000 || inp4.value > 100000){
    setTimeout(() => {
      err4.hidden = false;
      err4.classList.add('show');
    }, 2000);

    setTimeout(() => {
      err4.hidden = true;
      err4.classList.remove('show');
    }, 3600);

    isValid = false;
  } else {
    err4.innerText = '';
  }

  if (inp5.value.length !== 10){
    setTimeout(() => {
      err5.hidden = false;
      err5.classList.add('show');
    }, 2200);

    setTimeout(() => {
      err5.hidden = true;
      err5.classList.remove('show');
    }, 3800);

    isValid = false;
  } else {
    err5.innerText = '';
  }

  
  if (inp6.value === ''){
    setTimeout(() => {
      err6.hidden = false;
      err6.classList.add('show');
    }, 2400);

    setTimeout(() => {
      err6.hidden = true;
      err6.classList.remove('show');
    }, 4000);

    isValid = false;
  } else {
    err6.innerText = '';
  }

  let bonus = parseFloat(inp7.value);
  if (isNaN(bonus) || bonus < 0){
    setTimeout(() => {
      err7.hidden = false;
      err7.classList.add('show');
    }, 2600);

    setTimeout(() => {
      err7.hidden = true;
      err7.classList.remove('show');
    }, 4200);

    isValid = false;
  } else {
    err7.innerText = '';
  }

  if (inp8.value === ''){
    setTimeout(() =>{
      err8.hidden = false;
      err8.classList.add('show');
    }, 2800);

    setTimeout(() => {
      err8.hidden = true;
      err8.classList.remove('show');
    }, 4400);

    isValid = false;
  } else {
    err8.innerText = '';
  }


  if (inp9.value.length < 5 ){
    setTimeout(() => {
      err9.hidden = false;
      err9.classList.add('show');
    }, 3000);

    setTimeout(() => {
      err9.hidden = true;
      err9.classList.remove('show');
    }, 4600);

    isValid = false;
  } else {
    err9.innerText = '';
  }

  if (inp10.value === '') {
    setTimeout(() => {
      err10.hidden = false;
      err10.classList.add('show');
    }, 3200);

    setTimeout(() => {
      err10.hidden = true;
      err10.classList.remove('show');
    }, 4800);
    isValid = false;
  } 

  if (inp11.value === ''){
    setTimeout(() => {
      err11.hidden = false;
      err11.classList.add('show');
    }, 3400);

    setTimeout(() => {
      err11.hidden = true;
      err11.classList.remove('show');
    }, 5000);
    isValid = false;
  }
  
  if(isValid){
    alert("The form filled Successfully!");
  }

  return isValid;
}



let tbody = document.getElementById('tdata');
let btn = document.getElementById('btn');

function getStoredData(){
  let storedData = localStorage.getItem('entries');
  return storedData ? JSON.parse(storedData) : [];
}

function saveToLocalStorage(data){
  localStorage.setItem('entries', JSON.stringify(data));
}

function displayData(){
  let storedData = getStoredData();
  tbody.innerHTML = '';
  storedData.forEach((entry, index) =>{
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = entry.id;
    td1.style.textAlign = 'center';
    td1.style.border = '2px solid red';
    td1.style.color = '#00FA9A'
    let td2 = document.createElement('td');
    td2.innerText = entry.name;
    td2.style.textAlign = 'center';
    td2.style.border = '2px solid red';
    td2.style.color = 'yellow'
    let td3 = document.createElement('td');
    td3.innerText = entry.email;
    td3.style.border = '2px solid red';
    td3.style.textAlign = 'center';
    td3.style.color = 'yellow'
    let td4 = document.createElement('td');
    td4.innerText = entry.salary;
    td4.style.border = '2px solid red'
    td4.style.textAlign = 'center'
    td4.style.color = 'yellow'
    let td5 = document.createElement('td');
    td5.innerText = entry.contact;
    td5.style.border = '2px solid red';
    td5.style.textAlign = 'center';
    td5.style.color = 'yellow'
    let td6 = document.createElement('td');
    td6.innerText = entry.exp;
    td6.style.border = '2px solid red';
    td6.style.textAlign = 'center';
    td6.style.color = '#00FA9A'
    let td7 = document.createElement('td');
    td7.innerText = entry.bon;
    td7.style.border = '2px solid red';
    td7.style.textAlign = 'center';
    td7.style.color = 'yellow'
    let td8 = document.createElement('td');
    td8.innerText = entry.inc;
    td8.style.border = '2px solid red';
    td8.style.textAlign = 'center';
    td8.style.color = 'yellow'
    let td9 = document.createElement('td');
    td9.innerText = entry.tsal;
    td9.style.border = '2px solid red';
    td9.style.textAlign = 'center'
    td9.style.color = 'yellow'
    let td10 = document.createElement('td');
    td10.innerText = entry.city;
    td10.style.border = '2px solid red';
    td10.style.textAlign = 'center';
    td10.style.color = 'yellow';
    let td11 = document.createElement('td');
    td11.innerText = entry.dep;
    td11.style.border = '2px solid red'
    td11.style.textAlign = 'center'
    td11.style.color = 'yellow';
    let td12 = document.createElement('td');
    let del = document.createElement('button');
    del.innerText = 'Remove';
    del.style.backgroundColor = '#5CB3FF';
    del.style.color = '#2916F5';
    del.style.padding = '5px';
    del.style.width = '100px';
    del.style.boxShadow = '-5px 5px 5px #D291BC';

    let td13 = document.createElement('button');
    td13.innerText = 'Update';
    td13.style.backgroundColor = '#FF5C5C';
    td13.style.color = 'white';
    td13.style.padding = '5px';
    td13.style.width = '100px';
    td13.style.marginLeft = '10px';

    td13.addEventListener('click', function () {
      // Pre-fill form with the current entry's data
      inp1.value = entry.id;
      inp2.value = entry.name;
      inp3.value = entry.email;
      inp4.value = entry.salary;
      inp5.value = entry.contact;
      inp6.value = entry.exp;
      inp7.value = entry.bon;
      inp8.value = entry.inc;
      inp9.value = entry.tsal;
      inp10.value = entry.city;
      inp11.value = entry.dep;

      btn.innerText = "Update Entry";
      btn.onclick = function () {
        if (!Pettern(inp1, inp2, inp3, inp4, inp5, inp6, inp7, inp8, inp9, inp10, inp11)) {
          return;
        }
        let updatedEntry ={
          id: entry.id,
          name: inp2.value,
          email: inp3.value,
          salary: inp4.value,
          contact: inp5.value,
          exp: inp6.value,
          bon: inp7.value,
          inc: inp8.value,
          tsal: inp9.value,
          city: inp10.value,
          dep: inp11.value
        };

        storedData[index] = updatedEntry;
        saveToLocalStorage(storedData);
        displayData();

        btn.innerText = "Add Entry";
        inp1.value = '';
        inp2.value = '';
        inp3.value = '';
        inp4.value = '';
        inp5.value = '';
        inp6.value = '';
        inp7.value = '';
        inp8.value = '';
        inp9.value = '';
        inp10.value = '';
        inp11.value = '';
      };
    });


    del.addEventListener('click', function (){
      let storedData = getStoredData();
      storedData.splice(index, 1);
      saveToLocalStorage(storedData);
      displayData();
    });
    td12.appendChild(del);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    tr.appendChild(td10);
    tr.appendChild(td11);
    tr.appendChild(td12);
    tr.appendChild(td13);
    tbody.appendChild(tr);
  });

}


btn.addEventListener('click', () => {
  if (!Pettern(inp1, inp2, inp3, inp4, inp5, inp6, inp7, inp8, inp9, inp10, inp11)){
    return;
  }


  let newEntry = {
    id: getStoredData().length + 1,
    name: inp2.value,
    email: inp3.value,
    salary: inp4.value,
    contact: inp5.value,
    exp: inp6.value,
    bon: inp7.value,
    inc: inp8.value,
    tsal: inp9.value,
    city: inp10.value,
    dep: inp11.value
  };

  let storedData = getStoredData();
  var existeEmployees = storedData.some(employee => employee.id === inp1.value);
  if (existeEmployees){
    alert("Employee ID must be unique!");
    return;
  }
  storedData.push(newEntry);
  saveToLocalStorage(storedData);
  displayData();
  inp1.value = '';
  inp2.value = '';
  inp3.value = '';
  inp4.value = '';
  inp5.value = '';
  inp6.value = '';
  inp7.value = '';
  inp8.value = '';
  inp9.value = '';
  inp10.value = '';
  inp11.value = '';
});

function removeEntry(index){
  let storedData = getStoredData();
  storedData.splice(index, 1);
  saveToLocalStorage(storedData);
  displayData();
}


function Search(){
  let input = document.getElementById('show').value.toLowerCase();
  let rows = tbody.getElementsByTagName('tr');
  let dataFound = false;

  for (let i = 0; i < rows.length; i++) {
    let nameCell = rows[i].getElementsByTagName('td')[1];
    let name = nameCell ? nameCell.textContent.toLowerCase() : '';

    if (name.includes(input)) {
      rows[i].style.display = '';
      dataFound = true;
    } else {
      rows[i].style.display = 'none';
    }
  }

  if (!dataFound) {
    let notFoundRow = document.createElement('tr');
    let notFoundCell = document.createElement('td');
    notFoundCell.setAttribute('colspan', '12');
    notFoundCell.style.textAlign = 'center';
    notFoundCell.style.color = 'red';
    notFoundCell.style.fontSize = '30px';
    notFoundCell.textContent = 'Table data not found!';
    notFoundRow.appendChild(notFoundCell);
    tbody.appendChild(notFoundRow);
  } else {
    notFoundCell.textContent = '';
  }
}

window.onload = () => {
  displayData();
};
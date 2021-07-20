// const isConfirmed = window.confirm('Are you sure?'); // true - false

// if (isConfirmed) {
//     setTimeout(() => {
//         console.log('settimeout worked')
//     }, 2000);


// } else {
//     alert('you did not let me work');
// }

// setInterval(() => {
//     console.log('salam dunya \n');
// }, 100);

// let counter = 0;
// const intervalFunction = () => {
//     if (counter === 10) {
//         clearInterval(interval);
//     }
//     console.log('interval is working')
//     counter++;
// }
// const interval = setInterval(intervalFunction, 500);

// window.document.body.style.backgroundColor = 'red';

// console.log(window.navigator);


// window.navigator.clipboard.writeText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed molestias quia at natus minus enim deleniti eaque provident culpa suscipit, consequatur nulla, laborum possimus saepe voluptate totam ipsum corporis quas dignissimos eum, laboriosam incidunt! Quia, soluta laborum reprehenderit earum fuga, aliquam, quo deleniti fugit harum voluptate commodi culpa in.');
// console.log(window.navigator.platform);

// window.navigator.geolocation.getCurrentPosition(
//     (data) => {
//         console.log(data);
//     },
//     (error) => {
//         console.log(error);
//         if (error.code === 1) {
//             alert('Please user allow us to know your location, otherwise we can not proccess your data');
//         }
//     }
// )

// const heading1 = document.createElement('h1');
// heading1.innerText = 'Hello world';
// document.body.prepend('Hello world');
// document.body.prepend(heading1);


// const container = document.createElement('div');
// const row = document.createElement('div');
// const col12 = document.createElement('div');
// const button = document.createElement('button');

// button.classList.add('btn', 'btn-dark');
// button.innerText = 'Dark mode';

// container.className = 'container';
// row.className = 'row';
// col12.className = 'col-12';

// col12.append(button);
// row.prepend(col12);
// container.prepend(row);
// document.body.prepend(container);

// button.onclick = function () {
//     document.body.classList.toggle('dark');
//     document.body.classList.toggle('light');
//     button.classList.toggle('btn-dark');
//     button.classList.toggle('btn-light');
// }

// const inputElements = document.getElementsByTagName('input');
// const containers = document.getElementsByClassName('container');

// inputElements[0].value = 'Turkan Hashimova';
// inputElements[1].value = 'Yusif Huseynov';
// inputElements[2].value = 'Baycan Salmanoghlu';

// containers[0].innerText = '<span>Salam</span>';
// containers[1].innerHTML = '<span class="badge bg-primary">Salam</span>';

// const inputs = document.querySelectorAll(".container input[type='text']");
// console.log(inputs.length);
// if (input) {
//     input.style.backgroundColor = 'red';
// }

// try {
//     input.style.backgroundColor = 'red';
// } catch (error) {
//     console.log(error);
// }

const students = [
    {
        firstname: 'Turkan',
        lastname: 'Hashimova'
    },
    {
        firstname: 'Baycan',
        lastname: 'Salmanoghlu'
    },
    {
        firstname: 'Yusif',
        lastname: 'Huseynov'
    },
    {
        firstname: 'Gubad',
        lastname: 'Mustafayev'
    }
];
const container = document.querySelector('.container');
students.forEach(student => {
    const row = document.createElement('div');
    row.className = 'row mb-5';

    const col6ForFirstname = document.createElement('div');
    col6ForFirstname.className = 'col-6'
    const firstnameInput = document.createElement('input');
    firstnameInput.className = 'form-control';
    firstnameInput.value = student.firstname;
    col6ForFirstname.append(firstnameInput);

    const col6ForLastname = document.createElement('div');
    col6ForLastname.className = 'col-6'
    const lastnameInput = document.createElement('input');
    lastnameInput.className = 'form-control';
    lastnameInput.value = student.lastname;
    col6ForLastname.append(lastnameInput);

    row.append(col6ForFirstname, col6ForLastname);
    container.append(row);
});


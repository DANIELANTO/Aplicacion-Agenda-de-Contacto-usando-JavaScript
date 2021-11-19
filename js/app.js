const persons = [
    new Person('Rodolfo Aviles', '23427844'),
    new Person('Gabriel Menendez', '78432209')
];

function showList(){
     let text = '';
     for(let person of persons){
         text += `<li>${person.name}  -  ${person.phoneNumber}</li>`;
     }
     document.getElementById('persons').innerHTML = text;
}

function addContact(){
    const forma = document.forms['forma'];
    const name = forma['name'];
    const phoneNumber = forma['phoneNumber'];
    if(name.value != '' || phoneNumber.value != ''){
        const person = new Person(name.value, phoneNumber.value);
        persons.push(person);
        showList();
        forma['name'].value = '';
        forma['phoneNumber'].value = '';
        document.getElementById('message').innerHTML = '';
    } else{
        document.getElementById('message').innerHTML = 'There are required information';
    }
    
}
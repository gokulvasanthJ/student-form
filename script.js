//selecting element

var inp1=document.getElementById('name')
var inp2=document.getElementById('age')
// var genderses=document.getElementById('genders')
// var inp3=genderses.querySelector('input[name="gender"]:checked');
// var inp33=genderses.querySelector('input[name="gender"]:checked');
var inp4=document.getElementById('mail')
var inp5=document.getElementById('course')

var btn=document.getElementById('myBtn')
var tables=document.getElementById('table')


function  saving(){
    var trow=document.createElement('tr')
    var tds=document.createElement('td')
    tds.innerHTML=inp1.value
    trow.appendChild(tds)
    tables.appendChild(trow)

    

    var tds=document.createElement('td')
    tds.innerHTML=inp2.value
    trow.appendChild(tds)
    tables.appendChild(trow)

    
    // var tds=document.createElement('td')
    // tds.innerHTML=inp3.value
    // trow.appendChild(tds)
    // tables.appendChild(trow)

    // var tds=document.createElement('td')
    // tds.innerHTML=inp33.value
    // trow.appendChild(tds)
    // tables.appendChild(trow)

    
    // var tds=document.createElement('td')
    // tds.innerHTML=inp33.value
    // trow.appendChild(tds)
    // tables.appendChild(trow)

    var tds=document.createElement('td')
    tds.innerHTML=inp4.value
    trow.appendChild(tds)
    tables.appendChild(trow)

    var tds=document.createElement('td')
    tds.innerHTML=inp5.value
    trow.appendChild(tds)
    tables.appendChild(trow)

    var tds=document.createElement('td')
    tds.innerHTML="<button onclick='{delfnctn(event)}'>Delete</button>"
    trow.appendChild(tds)
    tables.appendChild(trow)

//for deleting the iknput typed value vanish after click button
    // inp1.value= ' ';
    // inp2.value= ' ';
    // inp4.value= ' ';
    // inp5.value= ' ';

    console.log('hgkhg')
}


 function delfnctn(event){
    event.target.parentElement.parentElement.remove()

 }
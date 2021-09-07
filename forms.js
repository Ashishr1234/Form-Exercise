// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list= document.querySelector('#list');
form.addEventListener('submit', function (e){
    e.preventDefault();
    const pro=form.elements.product;
    const qnt=form.elements.qty;
    addList(pro.value,qnt.value);
    pro.value='';
    qnt.value='';
});
const addList = (product,quantity) => {
    const newPro=document.createElement('li');
    newPro.innerText=(`${quantity} ${product}`);
    list.appendChild(newPro);
};
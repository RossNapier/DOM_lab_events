document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const form=document.querySelector("#new-item-form");
   
  form.addEventListener("submit",handleFormSubmit);
  

//   const textInput=document.querySelector("#author");
//   textInput.addEventListener("input",handleInput);

})


const handleFormSubmit=function(event){
    event.preventDefault();
    document.querySelector('#reading-list');


    const newListItem=document.createElement("li");
    newListItem.textContent=`${event.target.title.value}`;

    const newListItem2=document.createElement("li");
    newListItem2.textContent=`${event.target.author.value}`;
  
    const newListItem3=document.createElement("li");
    newListItem3.textContent=`${event.target.category.value}`;

    const list=document.querySelector("ul");
    list.appendChild(newListItem);
    list.appendChild(newListItem2);
    list.appendChild(newListItem3);

    document.createElement("ul");

    document.querySelector("#new-item-form").reset();
  }

  // const handleInput=function(event){
  //   // console.log(event.target.value);
  //   const resultAuthor=document.querySelector('#reading-list');
  //   resultAuthor.textContent=`${event.target.value}`
  // }
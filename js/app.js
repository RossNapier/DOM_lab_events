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


    const newLIstContainer=document.createElement("div");
    newLIstContainer.classList.add('list-container');
    const readingList=document.querySelector('#reading-list');
    readingList.appendChild(newLIstContainer);


    const newListItem=document.createElement("p");
    newListItem.textContent=`${event.target.title.value}`;
    
    const newListItem2=document.createElement("p");
    newListItem2.textContent=`${event.target.author.value}`;
  
    const newListItem3=document.createElement("p");
    newListItem3.textContent=`${event.target.category.value}`;    
    
    const listItem=document.querySelector("#list-container");
    listItem.appendChild(newListItem);
    listItem.appendChild(newListItem2);
    listItem.appendChild(newListItem3);

    document.querySelector("#new-item-form").reset();
  }

console.log(" Wo Hooooo!!! I'm working");
showNotes();

// Everytime someone add a note, it should update in Local Storage
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function(e){
  let addTxt = document.getElementById('addTxt');
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  } else{
    notesObj = JSON.parse(notes);
  }
  let txtObj = {
    noteVal: addTxt.value
  }
  if(addTxt.value == 0){
    alert("Plz add some text in notes first!");
  }else{
    notesObj.push(txtObj);
  }
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});


// Showing notes in the front end
function showNotes(){
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = []
  }else{
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function(e, index){
    html+= `<div class="col noteCard">
    <div class="card border-primary mb-3 m-1" style="max-width: 18rem">
      <div class="card-header">${index+1}</div>
      <div class="card-body text-primary ">
        <p class="card-text">
          ${e.noteVal}
        </p>
        <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>`
  });

  let notesElem = document.getElementById("notes");
  if(notesElem != null){
    notesElem.innerHTML = html;
  } else{
    notesElem.innerHTML = "Nothing to show here";
  }
}


// Deleting the notes
function deleteNote(index){
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesObj = [];
  } else{
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// Search Function
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){

  let inputVal = searchTxt.value;
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
    if(cardTxt.includes(inputVal)){
      element.style.display = "block";
    } else{
      element.style.display = "none";
    }
  });
});
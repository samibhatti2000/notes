const notesbtn = document.getElementById('notesbtn')
const container = document.getElementById('container')

//local storage ][ storing data o local storage
function updateLsData(){
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    console.log(notes);
    //localstorsge.setItem use to store data
    localStorage.setItem('notes',JSON.stringify(notes));
    
}

function addNewNotes (text = ''){
    const note = document.createElement('div');
    note.classList.add('notes');
    
    const data = `
    <div id="div_icons">
    <i class="fas fa-edit" id="fa_edit"></i>
    <i class="far fa-save" id="fa_save"></i>
    <i class="fas fa-trash-alt" id="fa_trash"></i>
    </div>
    <div id="main_note" class="main_note ${text ? '' : 'display-none'}"></div>
    <textarea class="textarea ${text ? 'display-none' : ''}" id="textarea"></textarea>
    `;
    
    note.insertAdjacentHTML('afterbegin',data)
    container.appendChild(note);
    
    const textarea = note.querySelector('#textarea');
    const main_note = note.querySelector('#main_note');
    const fa_edit = note.querySelector('#fa_edit');
    const fa_save = note.querySelector('#fa_save');
    const fa_trash = note.querySelector('#fa_trash');
    
    //deleting node
    function deleteNode(){
        note.remove();
        updateLsData();
    }
    fa_trash.addEventListener('click',()=> deleteNode());
    //toggle of main and textarea
    function toggleMainArea(){
        main_note.classList.add('display-none');
        textarea.classList.remove('display-none');
    }
    fa_edit.addEventListener('click',()=> toggleMainArea());

    function mainNoteInner(){
        main_note.classList.remove('display-none');
        textarea.classList.add('display-none');
    }
    fa_save.addEventListener('click',()=> mainNoteInner());

    //asgining text to text area and innerhtml

    textarea.addEventListener('change',(event)=>{
        const value = event.target.value;
        let data = value;
        console.log(data);
        main_note.innerHTML = `(Saved Note): ${data}`;

        updateLsData();
        
    });

    textarea.value = text;
    main_note.innerHTML = `(Saved Note): ${text}`;
    
}
notesbtn.addEventListener('click',()=> addNewNotes());

getDataBack();
function getDataBack(){
    //getting data from localStorage.getitem use get data from localStorage
 //if already setItem before
 const notes = JSON.parse(localStorage.getItem('notes'));
 data_back = notes;
 console.log(data_back);
 if(notes){ notes.forEach((note) => addNewNotes(note)) };
}




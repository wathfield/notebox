
// Function to create a new note box
function createNoteBox(type, date, location) {
    const noteBox = document.createElement('div');
    noteBox.classList.add('note-box');
    noteBox.innerHTML = `
        <div>${type}</div>
        <div>${date} - ${location}</div>
    `;
    return noteBox;
}

// Function to handle back button click
function handleBackButtonClick() {
    // Implement navigation logic here
    console.log('Back button clicked');

    // Save file
    // Redirect to 'all notes' 
}

// Function to handle forward button click
function handleForwardButtonClick() {
    // Implement navigation logic here
    console.log('Forward button clicked');
}

// Function to handle camera button click
function handleCameraButtonClick() {
    // Implement logic to add image to current note
    console.log('Camera button clicked');

    const notesContainer = document.getElementById('notes-container');
            const newNoteBox = createNoteBox('Photo Note', 'Jan 18, 2024', 'New York');
            notesContainer.appendChild(newNoteBox);
}

// Function to handle microphone button click
function handleMicrophoneButtonClick() {
    // Implement logic to add audio recording to current note
    console.log('Microphone button clicked');

    const notesContainer = document.getElementById('notes-container');
            const newNoteBox = createNoteBox('Memo Note', 'Jan 18, 2024', 'New York');
            notesContainer.appendChild(newNoteBox);
}

// Function to handle text button click
function handleTextButtonClick() {
    // Implement logic to add text to current note
    console.log('Text button clicked');

    const notesContainer = document.getElementById('notes-container');
            const newNoteBox = createNoteBox('Text Note', 'Jan 18, 2024', 'New York');
            notesContainer.appendChild(newNoteBox);
}



// Event listeners
document.getElementById('backButton').addEventListener('click', handleBackButtonClick);
document.getElementById('forwardButton').addEventListener('click', handleForwardButtonClick);
document.getElementById('cameraButton').addEventListener('click', handleCameraButtonClick);
document.getElementById('microphoneButton').addEventListener('click', handleMicrophoneButtonClick);
document.getElementById('textButton').addEventListener('click', handleTextButtonClick);

// Initial rendering of notes
renderNotes();

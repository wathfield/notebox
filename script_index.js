// Sample data for notes (can be replaced with actual data from a database)
const notes = [
    {
        id: 1,
        title: 'Note 1',
        elements: [
            { type: 'text', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { type: 'image', src: 'image1.jpg' },
            { type: 'audio', src: 'audio1.mp3' }
        ]
    },
    {
        id: 2,
        title: 'Note 2',
        elements: [
            { type: 'text', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
        ]
    }
];

// Function to render notes
function renderNotes() {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';

    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `<h2>${note.title}</h2>`;
        notesContainer.appendChild(noteElement);
    });
}

// Function to create a new note box
function createNoteBox(type, date, location) {
    const noteBox = document.createElement('div');
    noteBox.classList.add('note');
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

function handleAddNoteButtonClick() {
    // Implement logic to add text to current note
    console.log('Text button clicked');

    const notesContainer = document.getElementById('notesContainer');
            const newNoteBox = createNoteBox('New Note', 'Jan 18, 2024', 'New York');
            notesContainer.appendChild(newNoteBox);    
}

// Event listeners
document.getElementById('backButton').addEventListener('click', handleBackButtonClick);
document.getElementById('forwardButton').addEventListener('click', handleForwardButtonClick);
document.getElementById('add-note-button').addEventListener('click', handleAddNoteButtonClick);

// Initial rendering of notes
renderNotes();

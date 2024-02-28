// Define global variables
let notes = [];
let actionHistory = [];
const MAX_HISTORY_LENGTH = 50;

// Function to create a new note
function createNote() {
    const note = {
        id: notes.length + 1,
        elements: [],
        deleted: false
    };
    notes.push(note);
}

// Function to add an element to a note
function addElementToNote(noteId, elementType, content) {
    const note = notes.find(note => note.id === noteId);
    if (note) {
        const element = {
            type: elementType,
            content: content,
            date: new Date(),
            location: 'Unknown' // Placeholder for location
        };
        note.elements.push(element);
        addToActionHistory({ type: 'add', noteId: noteId, element: element });
    }
}

// Function to undo the last action
function undoAction() {
    if (actionHistory.length > 0) {
        const lastAction = actionHistory.pop();
        if (lastAction.type === 'add') {
            const note = notes.find(note => note.id === lastAction.noteId);
            if (note) {
                const index = note.elements.findIndex(element => element === lastAction.element);
                if (index !== -1) {
                    note.elements.splice(index, 1);
                }
            }
        }
    }
}

// Function to delete an element from a note
function deleteElementFromNote(noteId, elementIndex) {
    const note = notes.find(note => note.id === noteId);
    if (note) {
        const deletedElement = note.elements.splice(elementIndex, 1)[0];
        deletedElement.deleted = true;
        addToActionHistory({ type: 'delete', noteId: noteId, element: deletedElement });
    }
}

// Function to add an action to the history
function addToActionHistory(action) {
    actionHistory.push(action);
    if (actionHistory.length > MAX_HISTORY_LENGTH) {
        actionHistory.shift(); // Remove the oldest action if exceeding max length
    }
}

// Example usage:
createNote();
addElementToNote(1, 'text', 'This is a text note.');
addElementToNote(1, 'image', 'image1.jpg');
deleteElementFromNote(1, 0);
undoAction();

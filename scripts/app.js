import Note from './Notes1.js'

const App = {
    data() {
      return {
        editMode: false,
        noteTitleInput: "",
        noteBodyInput: "",
        notes: [],
      }
    },
    created(){
        this.getNotesFromBBDD()
    },
    methods: {
        getNotesFromBBDD(){
            Note.fetchAll((response)=> this.notes = response)
        },
        createNote(){
            this.editMode = true
            
        },
        addNote(){
            let dateObj = new Date()
            let month = dateObj.getUTCMonth() + 1
            let day = dateObj.getUTCDate()
            let year = dateObj.getUTCFullYear()
            
            let newDate = `${day}/${month}/${year}`
            const newNote = new Note (this.noteTitleInput, this.noteBodyInput, newDate)
            newNote.saveNote(()=>{
                this.getNotesFromBBDD()
            })

            this.noteTitleInput = ""
            this.noteBodyInput = ""
            this.editMode = false

        }

    }
  }
  
  Vue.createApp(App).mount('#app')
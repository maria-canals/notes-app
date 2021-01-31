
const url = 'https://notes-de11f-default-rtdb.firebaseio.com/notes.json'

export default class Note {
    constructor(title, description, date) {
      this.title = title;
      this.description = description;
      this.date = date
    }

    saveNote(cb) {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                title: this.title,
                description: this.description,
                date: this.date
            })
        }  
        fetch(url, postOptions).
        then(data => {
            console.log("Inserción finalizada")
            cb()
        }).
        catch(error => console.error(error)) 
    }

    static fetchAll(cb){
      fetch(url)
      .then(data => data.json())
      .then(response => cb(response));
    }

  }
const fs = require('fs')
// creating a directory/folder named student and a file named user.js and writing my name to it
if (!fs.existsSync('student')) {
    fs.mkdir('student', (err) => {

        if (err) throw err

        fs.writeFile('./student/user.js', '//The writter of this content is Victory Joshua', 'utf8' , (err) =>{
            if (err) {
                console.log(err,)
            }

            console.log('A folder named Student and a file named user.js was created and written into')
        })
    })

}

//Updated the 'student' directory to 'Names'
fs.rename('student', 'Names', (err) => {
    if (err){
        console.log('Error renaming the file', err)
    }else{
       console.log  ('the folder was renamed to Names')
    }
})

//updating file to add my details
const userData = {
    name: 'Victory Joshua',
    age: 28,
    nationality: 'Nigeria',
    phoneNumber: '08186946795',
    Hobbies: 'Anime and Basketball',
}

const updatedContent = JSON.stringify(userData, null, 2);

fs.writeFile('Names/user.js', updatedContent, 'utf8', (err) => {
  if (err) {
    console.error('Error updating the file:', err);
  } else {
    console.log('File "user.js" updated with additional content successfully.');
  }
});


//Updating the file to my name and reading it
fs.rename('Names/user.js', 'Names/Victory.js', (err)=>{
    if (err) {
        console.error('Error renaming the file:', err)
    } else{
    console.log('File named to Victory.js successfully')

    fs.readFile('Names/Victory.js','utf8' ,(err)=>{
    if (err) {
    console.error('Error reading this file:', err);
  } else {
    console.log('File content:');
     console.log(data);
  }
})
    }
})

fs.unlink('Names/Victory.js', (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
  } else {
    console.log('File "Victory.js" deleted successfully.');
  }
});

fs.rmdir('Names', (err) => {
  if (err) {
    console.error('Error deleting the directory:', err);
  } else {
    console.log('Directory "Names" deleted successfully.');
  }
});
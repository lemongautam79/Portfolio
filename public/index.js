
filebutton.addEventListener('change', function (e) {
    for (let i = 0; i < e.target.files.length; i++) {
        let docFile = e.target.files[i];
        let storageRef = firebase.storage().ref("Docs/" + docFile.name);
        let task = storageRef.put(docFile);
        task.on('state_changed', function progress(docs) {
            let percentage = docs.bytesTransferred / docs.totalBytes * 100;
            console.log("Upload" + percentage + "%");
            switch (docs.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log("Upload is paused");
                    break;
                case firebase.storaget.TaskState.RUNNING:
                    console.log("Upload is running");
                    break;
            }
        })
    }
})
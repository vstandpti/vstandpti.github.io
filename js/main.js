// function loadUserData(){
//   let request = new XMLHttpRequest()
//   request.open('GET', 'quote.json', true)
//   request.onload = function(){
//     if(request.status >= 200 && request.status < 400){
//       let data = JSON.parse(request.responseText)
//       generateUserTable(data);
//     }
//     else{
//       alert('Page Not Found!') 
//     }
//   }
//   request.onerror = function(){
//     alert('Request Failed! Check your internet connection!')
//   }
//   request.send()
// }

// function generateUserTable(data){
//   console.log(data);
//   let idx = 0
//   let tbody = document.getElementById('tableKritik').innerHTML = ''
//   for(idx = 0; idx < data.length; idx++){
//     let singleRow = document.createElement('tr')
//     let colName = document.createElement('td')
//     colName.appendChild(document.createTextNode(data[idx].name))
//     let colMessage = document.createElement('td')
//     colMessage.appendChild(document.createTextNode(data[idx].quote))

//     singleRow.appendChild(colName) 
//     singleRow.appendChild(colMessage)
//   }
// }

// function loadUserData(){
//     function generateUserTable(data){
//     function loadAlbum(){
//             let request = new XMLHttpRequest()
//     request.open('GET', 'quote.json', true)

//     request.onload = function() {
//         if (request.status >= 200 && request.status < 400) {
//             let data = JSON.parse(request.responseText)
//             generateUserTable(data);
//         } else {
//             alert('Page Not Found!')
//         }
//     }
//     request.onerror = function() {
//         alert('Request Failed! Check your internet connection!')
//     }

//     request.send()
//     }

//     let idx = 0;
//     let tbody = document.getElementById('tableKritik').querySelector('tbody')
//     tbody.innerHTML = ''
//     for(idx=0;idx<data.length;idx++) {
//         let singleRow = document.createElement('tr')

//         let colName = document.createElement('td')
//         colName.appendChild(document.createTextNode(data[idx].name))
//         let colMessage = document.createElement('td')
//         colMessage.appendChild(document.createTextNode(data[idx].quote))

//         singleRow.appendChild(colName)
//         singleRow.appendChild(colMessage)
//         tbody.appendChild(singleRow)

//         let divContainer = document.getElementById("map-box");
//         divContainer.innerHTML="";
//         divContainer.appendChild(tbody);
//     }
// }
// }

// function kritikSaran(){
//     loadUserData()
// }


// function kritikSaran() { 
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var text = this.responseText; 
//       var data = JSON.parse(text);
//       document.getElementById("name").innerHTML = data.results[1].name; 
//       document.getElementById("message").innerHTML = data.results[1].quote;
//     } 
//   }; 
//   xhttp.open("GET", "quote.json", true); 
//   xhttp.send(); 
// }

function loadUserData(){
    function generateUserTable(data){
    let idx = 0;
    let tbody = document.getElementById('tableKritik').querySelector('tbody')
    tbody.innerHTML = ''
    for(idx=0;idx<data.length;idx++) {
        let singleRow = document.createElement('tr')

        let colName = document.createElement('td')
        colName.appendChild(document.createTextNode(data[idx].name))
        let colEmail = document.createElement('td')
        colEmail.appendChild(document.createTextNode(data[idx].company.catchPhrase))
        

         singleRow.appendChild(colEmail)
     singleRow.appendChild(colName)
        tbody.appendChild(singleRow)
    }
}

    let request = new XMLHttpRequest()
    let url = 'https://jsonplaceholder.typicode.com/users'
    request.open('GET', url, true)

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText)
            generateUserTable(data);
        } else {
            alert('Page Not Found!')
        }
    }
    request.onerror = function() {
        alert('Request Failed! Check your internet connection!')
    }

    request.send()
}

function kritikSaran(){
    loadUserData()
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



function onDocumentFinish(){
      event.preventDefault();
      var createdBy = document.getElementById('form');
        let item = {
          nama: createdBy.elements['itemName'].value,
          message: createdBy.elements['itemMessage'].value, 
        }
        
          const tbody = document.getElementById('tableKritik').querySelector('tbody');
            const newRow = document.createElement("tr");

            const nameCol = document.createElement("td");
            nameCol.appendChild(document.createTextNode(item['nama']));
            const messageCol = document.createElement("td");
            messageCol.appendChild(document.createTextNode(item['message']));
            
            newRow.appendChild(messageCol);
            newRow.appendChild(nameCol);
            

            tbody.appendChild(newRow);

            createdBy.elements['itemMessage'].value = ' ';
            createdBy.elements['itemName'].value = ' ';
            

            // Total = document.getElementById('tableItem').rows.length;
            // document.getElementById('total').innerHTML = "Jumlah data orang sekarang ada : " + (Total-1);
        
      }
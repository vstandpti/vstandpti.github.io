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
//   let tbody = document.getElementById('quote').innerHTML = ''
//   for(idx = 0; idx < data.length; idx++){
//     let singleRow = document.createElement('div')
//     let colName = document.createElement('cite')
//     colName.appendChild(document.createTextNode(data[idx].name))
//     let colNim = document.createElement('cite')
//     colEmail.appendChild(document.createTextNode(data[idx].nim))
//     let colQuote = document.createElement('blockquote')
//     colWebsite.appendChild(document.createTextNode(data[idx].quote))

//     singleRow.appendChild(colName)
//     singleRow.appendChild(colNim)   
//     singleRow.appendChild(colQuote)
//   }
// }

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
            
            newRow.appendChild(nameCol);
            newRow.appendChild(messageCol);

            tbody.appendChild(newRow);

            createdBy.elements['itemName'].value = ' ';
            createdBy.elements['itemMessage'].value = ' ';

            // Total = document.getElementById('tableItem').rows.length;
            // document.getElementById('total').innerHTML = "Jumlah data orang sekarang ada : " + (Total-1);
        
      }
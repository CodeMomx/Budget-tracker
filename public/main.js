const stars = document.getElementsByClassName("fa-star");
const trash = document.getElementsByClassName("fa-trash-o");

Array.from(stars).forEach(function(element) {
      element.addEventListener('click', function(){
        const description = this.parentNode.parentNode.childNodes[1].innerText
        fetch('important', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'description': description,
            'important': true,
            'starBackground': 'gold'
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          if(data.value.important){
            console.log('its important')
            // element.style.color ='gold'
          }
          window.location.reload(false)
        })
      });
});



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const description = this.parentNode.parentNode.childNodes[1].innerText
       console.log(description)
       console.log(this.parentNode.childNodes)
        fetch('deleteItem', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'description': description,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

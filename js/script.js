// window.addEventListener('scroll', function() {
//     var sections = document.querySelectorAll('.section');

//     for (var i = 0; i < sections.length; i++) {
//       var section = sections[i];
//       var sectionTop = section.getBoundingClientRect().top;
//       var sectionBottom = section.getBoundingClientRect().bottom;

//       if (sectionTop < window.innerHeight && sectionBottom >= 0) {
//         var textCard = section.querySelector('.text-card');
//         var imageCard = section.querySelector('.image-placeholder');

//         textCard.classList.add('animate__animated', 'animate__fadeInLeft');
//         imageCard.classList.add('animate__animated', 'animate__fadeInRight');
//       }
//     }
//   });

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
  
    sections.forEach(section => {
      var sectionTop = section.getBoundingClientRect().top;
      var sectionBottom = section.getBoundingClientRect().bottom;
  
      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        var textCard = section.querySelector('.text-card');
        var imageCard = section.querySelector('.image-placeholder');
  
        textCard.classList.add('animate-left');
        imageCard.classList.add('animate-right');
      }
    });
  });
  
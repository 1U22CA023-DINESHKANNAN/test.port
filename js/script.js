window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollY = window.pageYOffset;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const navLink = document.querySelector('a[href="#' + section.id + '"] .nav-icon');
      
      document.querySelectorAll('.nav-icon').forEach(link => {
        link.classList.remove('active');
      });
      
      navLink.classList.add('active');

      // Add border class to the nav icon
      navLink.parentElement.classList.add('active-border');
    } else {
      const navLink = document.querySelector('a[href="#' + section.id + '"] .nav-icon');
      
      navLink.parentElement.classList.remove('active-border');
    }
    
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      
      // Remove 'active' class from all navigation links
      document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
      });
      
      // Add 'active' class to the clicked navigation link
      this.classList.add('active');
      
      // Remove 'active-border' class from all parent elements
      document.querySelectorAll('.nav-link').forEach(link => {
          link.parentElement.classList.remove('active-border');
      });
      
      // Add 'active-border' class to the parent element of the clicked link
      this.parentElement.classList.add('active-border');
      
      // Scroll to the corresponding section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});


const words = ['IOT Developer', 'PCB Designer'];
let index = 0;
let charIndex = 0;
const textElement = document.querySelector('.blue-text');

function type() {
  if (charIndex < words[index].length) {
    textElement.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    index = (index + 1) % words.length;
    setTimeout(type, 500);
  }
}

type();

var side_bar = document.querySelector("#side-bar");
var navHamIcon = document.querySelector("#nav-ham-icon");
var links = document.querySelectorAll(".nav-link");
var main = document.querySelector(".black-shadow");

navHamIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent clicks from propagating to the document
    side_bar.classList.toggle("mobile-side-bar");
    var body = document.querySelector("body");
    body.classList.toggle("scrollBarHide");
    main.classList.toggle("black-shadow-over-main");
    navHamIcon.classList.add("hideIcon");

    // Remove the shadow if sidebar is closed
    if (!side_bar.classList.contains("mobile-side-bar")) {
        main.classList.remove("black-shadow-over-main");
    }
});

document.addEventListener("click", (event) => {
    const isClickInsideNavbar = side_bar.contains(event.target);
    const isClickInsideNavLinks = Array.from(links).some(link => link.contains(event.target));

    if (!isClickInsideNavbar && !isClickInsideNavLinks) {
        side_bar.classList.remove("mobile-side-bar");
        var body = document.querySelector("body");
        body.classList.remove("scrollBarHide");
        navHamIcon.classList.remove("hideIcon");
        main.classList.remove("black-shadow-over-main");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        side_bar.classList.remove("mobile-side-bar");
        var body = document.querySelector("body");
        body.classList.remove("scrollBarHide");
        navHamIcon.classList.remove("hideIcon");
        main.classList.remove("black-shadow-over-main");
    });
});



const boxes = document.querySelectorAll('.box');
const line = document.querySelector('.time-line');

    function checkInView() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowBottom = window.innerHeight;
            if (boxTop < windowBottom) {
                box.classList.add('animate');
                line.classList.add("line-animation")
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    window.addEventListener('resize', checkInView);

    // Initial check in case some boxes are already in view when the page loads
    checkInView();


function downloadResume() {
  // Change the file path to match your file location
  var fileUrl = './resume.jpg';

  // Create a temporary link element
  var link = document.createElement('a');

  // Set the href attribute of the link to the file URL
  link.href = fileUrl;

  // Set the download attribute to force download
  link.download = 'resume.jpg';

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger a click event on the link to start download
  link.click();

  // Remove the link from the body
  document.body.removeChild(link);
}


function validateForm() {
        var firstName = document.getElementById('first-name').value.trim();
        var secondName = document.getElementById('second-name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        // Simple validation - check if fields are not empty
        if (firstName === '' || secondName === '' || email === '' || message === '') {
            alert('Please fill out all fields');
            return false;
        }

        // Additional validation for email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // You can add more complex validation if needed

        // If all validations pass, return true to allow form submission
        return true;
    }

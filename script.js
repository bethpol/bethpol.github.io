

$(document).ready(() => {
    particlesJS.load('particles-js', 'particles.json', () => {
        console.log('callback - particles-js config loaded');
      });
});

$("#email-me").onclick(() => {
    window.location.href = "mailto:bpolito001@gmail.com";
});
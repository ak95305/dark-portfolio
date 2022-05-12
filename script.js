const swup = new Swup();


const ctaButton = document.querySelector('.cta .get-con');
// const dataValue = ctaButton.getAttribute('data-value');
// if(dataValue === 'Projects'){
//     ctaButton.textContent = 'Projects';
//     console.log(ctaButton);
// }
// else if(dataValue !== 'Projects'){
//     ctaButton.textContent = 'Get in Touch';
// }

    
swup.on('contentReplaced', function() {
    if (window.location.href.indexOf("contact") > -1) {
        ctaButton.textContent = "Projects";
    } else{
        ctaButton.textContent = "Get in Touch";
    }
});

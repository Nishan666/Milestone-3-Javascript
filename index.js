//Navbar
function toggleContent(contentId) {
    var enquiryElement = document.getElementById("enquiry");
    var pricingElement = document.getElementById("pricing");
    var pricingbtn = document.getElementById("nav-pricing");
    var enquirybtn = document.getElementById("nav-enquiry");



    if (contentId === "enquiry") {
        enquiryElement.classList.remove("d-none");
        pricingElement.classList.add("d-none");
        enquirybtn.classList.add("active");
        enquirybtn.classList.remove("inactive");
        pricingbtn.classList.add("inactive");
        pricingbtn.classList.remove("active");

    } else if (contentId === "pricing") {
        enquiryElement.classList.add("d-none");
        pricingElement.classList.remove("d-none");
        pricingbtn.classList.add("active");
        pricingbtn.classList.remove("inactive");
        enquirybtn.classList.add("inactive");
        enquirybtn.classList.remove("active");
    }
}


// show more/less in pricing list
function toggleMorePackagesPremium() {
    const morePackages = document.querySelectorAll('.show-more-packages-premium li:nth-child(n+8)');
    morePackages.forEach((item) => {
        item.classList.toggle('d-none');
        item.classList.toggle('d-md-none');
    });

    const seeMoreLink = document.querySelector('.show-more-packages-premium + a');
    seeMoreLink.textContent = (seeMoreLink.textContent === 'See Less') ? 'See More' : 'See Less';

    // (seeMoreLink.textContent === 'See More') ? document.getElementById("free-pack").classList.add('d-flex') : document.getElementById("free-pack").classList.remove('d-flex');
}
function toggleMorePackagesEnterprise() {
    const morePackages = document.querySelectorAll('.show-more-packages-enterprise li:nth-child(n+8)');
    morePackages.forEach((item) => {
        item.classList.toggle('d-none');
        item.classList.toggle('d-md-none');
    });

    const seeMoreLink = document.querySelector('.show-more-packages-enterprise + a');
    seeMoreLink.textContent = (seeMoreLink.textContent === 'See Less') ? 'See More' : 'See Less';

    // (seeMoreLink.textContent === 'See More') ? document.getElementById("free-pack").classList.add('d-flex') : document.getElementById("free-pack").classList.remove('d-flex');
}
function toggleMorePackagesCustom() {
    const morePackages = document.querySelectorAll('.show-more-packages-custom li:nth-child(n+8)');
    morePackages.forEach((item) => {
        item.classList.toggle('d-none');
        item.classList.toggle('d-md-none');
    });

    const seeMoreLink = document.querySelector('.show-more-packages-custom + a');
    seeMoreLink.textContent = (seeMoreLink.textContent === 'See Less') ? 'See More' : 'See Less';

    // (seeMoreLink.textContent === 'See More') ? document.getElementById("free-pack").classList.add('d-flex') : document.getElementById("free-pack").classList.remove('d-flex');
}


// submit btn color change
function checkForm() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    const allFieldsFilled = fname && lname && email && phone && message;

    const submitBtn = document.getElementById('submitBtn');
    if (allFieldsFilled) {
        submitBtn.style.backgroundColor = '#05233B';
    } else {
        submitBtn.style.backgroundColor = '#E4E7ED';
    }
}
document.getElementById('fname').addEventListener('input', checkForm);
document.getElementById('lname').addEventListener('input', checkForm);
document.getElementById('email').addEventListener('input', checkForm);
document.getElementById('phone').addEventListener('input', checkForm);
document.getElementById('message').addEventListener('input', checkForm);


// forms country code
$(document).ready(function () {
    $('.dropdown-menu a').on('click', function () {
        var selectedValue = $(this).attr('value');
        $('.country-code').text(selectedValue);
    });
});


// Add the HTML content to the body
const remind = document.createElement("div");
remind.innerHTML = `
    <div class='overlay'>
        <span class='text'>
            Take a break
        </span>
    </div>
`;

// Create a style element and add the CSS to it
const style = document.createElement('style');
style.innerHTML = `
    .overlay {
        position: fixed;
        display: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 99999;
        cursor: pointer;
    }
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 50px;
        color: white;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
    }
`;
document.head.appendChild(style);
document.body.appendChild(remind);

// Function to show the overlay
function showOverlay() {
    document.querySelector('.overlay').style.display = 'block';
}

// Function to hide the overlay
function hideOverlay() {
    document.querySelector('.overlay').style.display = 'none';
}
showOverlay();

// Hide the overlay when it is clicked
document.querySelector('.overlay').addEventListener('click', hideOverlay);


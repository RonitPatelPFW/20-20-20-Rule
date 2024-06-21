function displayCSSHTML() {
    document.querySelector('.overlay').style.display = 'block';

    function removeCSSHTML() {
        document.querySelector('.overlay').style.display = 'none';
    }

    setTimeout(removeCSSHTML, 5000)
}

if(!document.querySelector('.overlay')) {
    // Add the HTML content to the body
const remind = document.createElement("div");
remind.innerHTML = `
    <div class='overlay'>
        <span class='text'>
            Take an Eye Break
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
    displayCSSHTML();
}
else {
    displayCSSHTML();
}
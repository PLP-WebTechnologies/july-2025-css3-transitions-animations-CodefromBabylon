// Part 1: CSS3 Transitions and Animations - JavaScript triggers
document.getElementById('fadeBtn').addEventListener('click', function() {
    document.querySelector('.fade-box').classList.toggle('hidden');
});

document.getElementById('slideBtn').addEventListener('click', function() {
    document.querySelector('.slide-box').classList.toggle('right');
});

document.getElementById('rotateBtn').addEventListener('click', function() {
    document.querySelector('.rotate-box').classList.toggle('rotated');
});

// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable to demonstrate scope
let globalValue = 10;

// Function with parameters and return value
function calculateSum(a, b) {
    // Local variables - these are only accessible within this function
    const localResult = a + b;
    return localResult;
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
    
    // Call function and use the returned value
    const result = calculateSum(num1, num2);
    document.getElementById('result').textContent = `Result: ${result}`;
});

// Function to demonstrate scope
function demonstrateScope() {
    // This variable is local to the function
    let localValue = 5;
    
    // We can access the global variable
    const combinedValue = globalValue + localValue;
    
    // Return a string that shows the values
    return `Global: ${globalValue}, Local: ${localValue}, Combined: ${combinedValue}`;
}

document.getElementById('scopeBtn').addEventListener('click', function() {
    const result = demonstrateScope();
    document.getElementById('scopeResult').textContent = result;
    
    // Try to access localValue from the function - this will cause an error
    try {
        console.log(localValue);
    } catch (e) {
        console.log("Cannot access localValue - it's out of scope");
    }
});

// Part 3: Combining CSS Animations with JavaScript

// Card flip functionality
document.getElementById('card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

document.getElementById('flipCardBtn').addEventListener('click', function() {
    document.getElementById('card').classList.toggle('flipped');
});

// Modal functionality
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('visible');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('visible');
});

// Close modal if clicked outside content
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('visible');
    }
});

// Loader functionality
document.getElementById('startLoaderBtn').addEventListener('click', function() {
    document.getElementById('loader').classList.add('animating');
});

document.getElementById('stopLoaderBtn').addEventListener('click', function() {
    document.getElementById('loader').classList.remove('animating');
});

// Utility function to add animation classes
function animateElement(elementId, animationClass, duration = 1000) {
    const element = document.getElementById(elementId);
    element.classList.add(animationClass);
    
    // Remove the class after animation completes
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, duration);
    
    return true; // Indicate animation was started
}

// Example usage of the utility function
// animateElement('someElement', 'pulse', 2000);
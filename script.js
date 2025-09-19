
// ===========================================
// PART 2: JAVASCRIPT FUNCTIONS DEMONSTRATIONS
// ===========================================

// Global scope variables
let globalCounter = 0;
const globalConfig = {
    animationDuration: 500,
    maxCalculations: 10
};

/**
 * Demonstrates function parameters and return values
 * Calculates the area of a rectangle
 */
function calculateArea() {
    // Local scope variables
    const width = Math.floor(Math.random() * 20) + 5; // Random width 5-25
    const height = Math.floor(Math.random() * 20) + 5; // Random height 5-25
    
    // Function with parameters and return value
    const area = calculateRectangleArea(width, height);
    
    // Display result
    const output = document.getElementById('function-output');
    output.innerHTML = `
        <strong>Area Calculation Demo:</strong><br>
        Width: ${width} units<br>
        Height: ${height} units<br>
        <span style="color: #4facfe;">Area: ${area} square units</span><br>
        <small>Function returned: ${area}</small>
    `;
}

/**
 * Pure function with parameters and return value
 * @param {number} width - Width of rectangle
 * @param {number} height - Height of rectangle
 * @returns {number} Area of rectangle
 */
function calculateRectangleArea(width, height) {
    // Local scope - these variables only exist within this function
    const area = width * height;
    return area; // Return value
}

/**
 * Demonstrates scope differences between global and local variables
 */
function demonstrateScope() {
    // Local scope variable (shadows global if same name)
    let localCounter = 0;
    
    // Nested function demonstrating closure
    function incrementCounters() {
        globalCounter++; // Accessing global scope
        localCounter++;  // Accessing local scope
        
        return {
            global: globalCounter,
            local: localCounter
        };
    }
    
    // Call nested function multiple times
    const results = [];
    for (let i = 0; i < 3; i++) {
        results.push(incrementCounters());
    }
    
    // Display scope demonstration
    const output = document.getElementById('function-output');
    output.innerHTML = `
        <strong>Scope Demonstration:</strong><br>
        <span style="color: #f093fb;">Global Counter:</span> ${globalCounter}<br>
        <span style="color: #4facfe;">Local Counter:</span> ${localCounter}<br><br>
        <strong>Function Calls Results:</strong><br>
        ${results.map((result, index) => 
            `Call ${index + 1}: Global=${result.global}, Local=${result.local}`
        ).join('<br>')}<br><br>
        <small>Notice how global persists between calls, local resets!</small>
    `;
}

/**
 * Demonstrates array processing with functions
 * Shows parameter passing and return values
 */
function processArray() {
    // Generate random array
    const numbers = Array.from({length: 8}, () => Math.floor(Math.random() * 100));
    
    // Functions with parameters and return values
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const max = findMaximum(numbers);
    const min = findMinimum(numbers);
    
    // Display results
    const output = document.getElementById('function-output');
    output.innerHTML = `
        <strong>Array Processing Demo:</strong><br>
        <span style="color: #43e97b;">Original Array:</span> [${numbers.join(', ')}]<br><br>
        <span style="color: #667eea;">Sum:</span> ${sum}<br>
        <span style="color: #f093fb;">Average:</span> ${average.toFixed(2)}<br>
        <span style="color: #f5576c;">Maximum:</span> ${max}<br>
        <span style="color: #4facfe;">Minimum:</span> ${min}<br><br>
        <small>All calculations use functions with parameters and return values!</small>
    `;
}

/**
 * Calculates sum of array elements
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of all elements
 */
function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * Calculates average of array elements
 * @param {number[]} arr - Array of numbers
 * @returns {number} Average of all elements
 */
function calculateAverage(arr) {
    return calculateSum(arr) / arr.length;
}

/**
 * Finds maximum value in array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Maximum value
 */
function findMaximum(arr) {
    return Math.max(...arr);
}

/**
 * Finds minimum value in array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Minimum value
 */
function findMinimum(arr) {
    return Math.min(...arr);
}

/**
 * Interactive calculator function
 * Demonstrates parameter validation and return values
 */
function performCalculation() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        showCalculationResult('Please enter valid numbers!', 'error');
        return;
    }
    
    // Perform calculation using function with parameters and return value
    const result = calculate(num1, num2, operation);
    
    if (result !== null) {
        showCalculationResult(`${num1} ${getOperationSymbol(operation)} ${num2} = ${result}`, 'success');
    } else {
        showCalculationResult('Invalid operation!', 'error');
    }
}

/**
 * Calculator function with parameters and return value
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Operation to perform
 * @returns {number|null} Result of calculation or null if invalid
 */
function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : null; // Prevent division by zero
        default:
            return null;
    }
}

/**
 * Helper function to get operation symbol
 * @param {string} operation - Operation name
 * @returns {string} Operation symbol
 */
function getOperationSymbol(operation) {
    const symbols = {
        'add': '+',
        'subtract': '-',
        'multiply': '×',
        'divide': '÷'
    };
    return symbols[operation] || '?';
}

/**
 * Display calculation result
 * @param {string} message - Result message
 * @param {string} type - Result type (success/error)
 */
function showCalculationResult(message, type) {
    const resultBox = document.getElementById('calc-result');
    resultBox.textContent = message;
    resultBox.className = `result-box ${type}`;
    
    // Add visual feedback
    resultBox.style.transform = 'scale(1.05)';
    setTimeout(() => {
        resultBox.style.transform = 'scale(1)';
    }, 200);
}

// ===========================================
// PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT
// ===========================================

/**
 * Animates a box using JavaScript to trigger CSS animations
 * Demonstrates dynamic class manipulation
 */
function animateBox() {
    const box = document.getElementById('animated-box');
    
    // Remove any existing animation classes
    box.classList.remove('animate-spin', 'animate-bounce', 'animate-pulse', 'animate-scale');
    
    // Generate random animation
    const animations = ['animate-spin', 'animate-bounce', 'animate-pulse', 'animate-scale'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    // Add animation class
    box.classList.add(randomAnimation);
    
    // Update box content
    box.textContent = `Animating: ${randomAnimation.replace('animate-', '')}`;
    
    // Remove animation after duration
    setTimeout(() => {
        box.classList.remove(randomAnimation);
        box.textContent = 'Click to animate!';
    }, 2000);
}

/**
 * Flips a card using CSS 3D transforms triggered by JavaScript
 * Demonstrates toggle functionality
 */
function flipCard() {
    const card = document.getElementById('flip-card');
    
    // Toggle flipped class
    card.classList.toggle('flipped');
    
    // Add click animation
    card.style.transform = card.classList.contains('flipped') 
        ? 'rotateY(180deg) scale(1.05)' 
        : 'rotateY(0deg) scale(1.05)';
    
    // Reset scale after animation
    setTimeout(() => {
        card.style.transform = card.classList.contains('flipped') 
            ? 'rotateY(180deg)' 
            : 'rotateY(0deg)';
    }, 300);
}

/**
 * Controls loading animation using JavaScript
 * Demonstrates dynamic animation control
 */
function startLoading() {
    const spinner = document.getElementById('loading-spinner');
    
    // Add active class to show spinner
    spinner.classList.add('active');
    
    // Add pulsing effect
    spinner.style.animation = 'spin 1s linear infinite, pulse 2s ease-in-out infinite';
    
    // Simulate loading process
    setTimeout(() => {
        stopLoading();
    }, 3000);
}

/**
 * Stops loading animation
 */
function stopLoading() {
    const spinner = document.getElementById('loading-spinner');
    
    // Remove active class
    spinner.classList.remove('active');
    
    // Reset animation
    spinner.style.animation = 'spin 1s linear infinite';
}

/**
 * Opens modal with slide-in animation
 * Demonstrates dynamic element manipulation
 */
function openModal() {
    const modal = document.getElementById('modal');
    
    // Show modal with animation
    modal.style.display = 'flex';
    modal.classList.add('show');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

/**
 * Closes modal with fade-out animation
 */
function closeModal() {
    const modal = document.getElementById('modal');
    
    // Add exit animation
    modal.style.opacity = '0';
    
    // Hide modal after animation
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }, 300);
}

/**
 * Changes theme dynamically using JavaScript
 * Demonstrates dynamic CSS class manipulation
 * @param {string} theme - Theme name (light, dark, colorful)
 */
function changeTheme(theme) {
    // Remove existing theme classes
    document.body.classList.remove('light-theme', 'dark-theme', 'colorful-theme');
    
    // Add new theme class
    document.body.classList.add(`${theme}-theme`);
    
    // Add transition effect
    document.body.style.transition = 'background 0.5s ease, color 0.5s ease';
    
    // Show theme change feedback
    showThemeFeedback(theme);
}

/**
 * Shows feedback for theme change
 * @param {string} theme - Theme name
 */
function showThemeFeedback(theme) {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.textContent = `Theme changed to: ${theme}`;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(feedback);
    
    // Remove feedback after delay
    setTimeout(() => {
        feedback.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 2000);
}

// ===========================================
// UTILITY FUNCTIONS AND EVENT LISTENERS
// ===========================================

/**
 * Utility function to add CSS animations dynamically
 * @param {string} elementId - ID of element to animate
 * @param {string} animation - Animation name
 * @param {number} duration - Animation duration in ms
 */
function addDynamicAnimation(elementId, animation, duration = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Create unique animation name
    const animationName = `${animation}_${Date.now()}`;
    
    // Add CSS animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ${animationName} {
            ${getAnimationKeyframes(animation)}
        }
        #${elementId} {
            animation: ${animationName} ${duration}ms ease-in-out;
        }
    `;
    
    document.head.appendChild(style);
    
    // Remove style after animation completes
    setTimeout(() => {
        document.head.removeChild(style);
    }, duration);
}

/**
 * Returns keyframes for different animation types
 * @param {string} animation - Animation type
 * @returns {string} CSS keyframes
 */
function getAnimationKeyframes(animation) {
    const keyframes = {
        'wiggle': '0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(5deg); } 75% { transform: rotate(-5deg); }',
        'shake': '0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); }',
        'glow': '0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.5); } 50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.8); }'
    };
    
    return keyframes[animation] || '0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); }';
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================================
// INITIALIZATION AND EVENT LISTENERS
// ===========================================

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('🎨 Interactive Web Experience Initialized!');
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey || event.metaKey) {
            switch (event.key) {
                case '1':
                    event.preventDefault();
                    calculateArea();
                    break;
                case '2':
                    event.preventDefault();
                    demonstrateScope();
                    break;
                case '3':
                    event.preventDefault();
                    processArray();
                    break;
                case 'm':
                    event.preventDefault();
                    openModal();
                    break;
            }
        }
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Add CSS for scroll animations
    const scrollAnimationStyle = document.createElement('style');
    scrollAnimationStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .section {
            opacity: 0;
        }
    `;
    document.head.appendChild(scrollAnimationStyle);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Export functions for testing (if in module environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateRectangleArea,
        calculateSum,
        calculateAverage,
        findMaximum,
        findMinimum,
        calculate,
        debounce
    };
}

let currentAnimationIndex = 0;
const animations = ['bounce', 'spin', 'shake', 'pulse', 'flip'];

function toggleAnimation() {
    const meowElement = document.querySelector('.meow');
    
    meowElement.classList.remove(animations[currentAnimationIndex]);
    
    currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;

    meowElement.classList.add(animations[currentAnimationIndex]);
}
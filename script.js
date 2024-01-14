// Data object for areas
const areaData = {
    left: {
        heading: 'IE Tower Student Hubs',
        description: 'The IE Tower, a beacon of educational innovation, houses four distinct student hubs: the Arch Hub, Tech Hub, Garden Hub, and Life Hub. Each is uniquely designed to cater to different aspects of student life and learning.',
        image1: 'images/studentHub.png',
        image2: 'images/techHub.jpeg',
        buttonText: 'Explore Student Hubs'
    },
    right: {
        heading: 'IE Tower Highlights',
        description: 'The IE Tower is designed to enrich the student experience beyond conventional learning environments with spaces such as the Reading Hall, Micro Garden, VR Pod, Meditation Room, Wellness Corner, and more.',
        image1: 'images/mediaLab.png',
        image2: 'images/students.png',
        buttonText: 'Explore The Tower'
    }
};

// Arrow function for updating description
const updateDescription = (area) => {
    const data = areaData[area];
    const sectionHeading = document.getElementById('section-heading');
    const sectionDescription = document.getElementById('section-description');
    const sectionImage1 = document.getElementById('section-image1');
    const sectionImage2 = document.getElementById('section-image2');
    const sectionButton = document.getElementById('section-button');

// Using template strings
    sectionHeading.textContent = data.heading;
    sectionDescription.textContent = data.description;
    sectionImage1.src = data.image1;
    sectionImage2.src = data.image2;
    sectionButton.textContent = data.buttonText;
};

// Assigning event listeners using arrow functions
document.querySelector('.left-overlay').addEventListener('click', () => updateDescription('left'));
document.querySelector('.right-overlay').addEventListener('click', () => updateDescription('right'));


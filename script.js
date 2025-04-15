// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const tiebreakerScreen = document.getElementById('tiebreaker-screen');
const finalTiebreakerScreen = document.getElementById('final-tiebreaker-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const confirmPreferenceBtn = document.getElementById('confirm-preference');
const finalTiebreakerBtn = document.getElementById('final-tiebreaker-btn');
const restartBtn = document.getElementById('restart-btn');
const musicToggleBtn = document.getElementById('music-toggle');

const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const tiedHousesSpan = document.getElementById('tied-houses');
const houseOptionsContainer = document.getElementById('house-options');
const finalTiebreakerQuestion = document.getElementById('final-tiebreaker-question');
const finalTiebreakerOptions = document.getElementById('final-tiebreaker-options');

const houseCrest = document.getElementById('house-crest');
const houseName = document.getElementById('house-name');
const houseMotto = document.getElementById('house-motto');
const houseDescription = document.getElementById('house-description');
const tiebreakerMessage = document.getElementById('tiebreaker-message');

const backgroundMusic = document.getElementById('backgroundMusic');
const sortingSound = document.getElementById('sortingSound');

// Quiz Data
const questions = [
    {
        question: "Which of the following would you most hate people to call you?",
        options: [
            { text: "Ordinary", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "Ignorant", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "Cowardly", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } },
            { text: "Selfish", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } }
        ]
    },
    {
        question: "Which of the following do you find most difficult to deal with?",
        options: [
            { text: "Hunger", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } },
            { text: "Cold", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "Loneliness", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "Boredom", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } }
        ]
    },
    {
        question: "You enter a magical garden. What would you be most curious to examine first?",
        options: [
            { text: "The silver-leafed tree bearing golden apples", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "The fat red toadstools that appear to be talking to each other", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } },
            { text: "The bubbling pool, in the depths of which something luminous is swirling", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "The statue of an old wizard with a strangely twinkling eye", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } }
        ]
    },
    {
        question: "Which instrument most pleases your ear?",
        options: [
            { text: "Violin", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "Trumpet", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } },
            { text: "Piano", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "Drums", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } }
        ]
    },
    {
        question: "Which of the following would you most like to study?",
        options: [
            { text: "Centaur behavior and their knowledge of archery and divination", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } },
            { text: "Goblins and their ability to outwit wizards in matters of finance", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "Ghosts and the precise reasons why they stay behind", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "House-elves and their enslavement to wizardkind", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } }
        ]
    },
    {
        question: "You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. What do you do?",
        options: [
            { text: "Attempt to confuse the troll into letting all three of you pass without fighting", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "Suggest drawing lots to decide which of you will fight", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } },
            { text: "Suggest that all three of you should fight (without telling the troll)", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "Volunteer to fight", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } }
        ]
    },
    {
        question: "Given the choice, would you rather invent a potion that would guarantee you:",
        options: [
            { text: "Glory", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } },
            { text: "Wisdom", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "Love", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } },
            { text: "Power", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } }
        ]
    },
    {
        question: "How would you like to be known to history?",
        options: [
            { text: "The Wise", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "The Good", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } },
            { text: "The Great", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "The Bold", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } }
        ]
    },
    {
        question: "What kind of animal are you most drawn to?",
        options: [
            { text: "Lion", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } },
            { text: "Badger", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } },
            { text: "Eagle", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "Snake", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } }
        ]
    },
    {
        question: "Which of these magical objects would you choose?",
        options: [
            { text: "A cloak that makes you invisible", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 1 } },
            { text: "A book that contains all knowledge", points: { gryffindor: 0, hufflepuff: 0, ravenclaw: 1, slytherin: 0 } },
            { text: "A sword that makes you unbeatable in battle", points: { gryffindor: 1, hufflepuff: 0, ravenclaw: 0, slytherin: 0 } },
            { text: "A cup that never runs dry", points: { gryffindor: 0, hufflepuff: 1, ravenclaw: 0, slytherin: 0 } }
        ]
    }
];

const finalTiebreakerQuestionData = {
    question: "One last question to help the Sorting Hat decide... Which of these traits do you value most?",
    options: [
        { text: "Courage", house: "gryffindor" },
        { text: "Loyalty", house: "hufflepuff" },
        { text: "Intelligence", house: "ravenclaw" },
        { text: "Ambition", house: "slytherin" }
    ]
};

const houseInfo = {
    gryffindor: {
        name: "Gryffindor",
        crest: "assets/images/gryffindor-crest.jpeg",
        motto: "Fortune Favors the Bold",
        description: "Gryffindor values bravery, daring, nerve, and chivalry. Its members are typically courageous and adventurous, willing to stand up for what is right even in the face of adversity. The house colors are scarlet and gold, and its symbol is the lion.",
        color: "var(--gryffindor-red)",
        secondaryColor: "var(--gryffindor-gold)"
    },
    hufflepuff: {
        name: "Hufflepuff",
        crest: "assets/images/hufflepuff-crest.png",
        motto: "Those Patient Hufflepuffs Are True and Unafraid of Toil",
        description: "Hufflepuff values hard work, patience, justice, and loyalty. Its members are typically kind, fair, and dedicated. The house colors are yellow and black, and its symbol is the badger.",
        color: "var(--hufflepuff-yellow)",
        secondaryColor: "var(--hufflepuff-black)"
    },
    ravenclaw: {
        name: "Ravenclaw",
        crest: "assets/images/ravenclaw-crest.jpg",
        motto: "Wit Beyond Measure Is Man's Greatest Treasure",
        description: "Ravenclaw values intelligence, knowledge, curiosity, creativity, and wit. Its members are typically wise, clever, and eager to learn. The house colors are blue and bronze, and its symbol is the eagle.",
        color: "var(--ravenclaw-blue)",
        secondaryColor: "var(--ravenclaw-bronze)"
    },
    slytherin: {
        name: "Slytherin",
        crest: "assets/images/slytherin-crest.jpeg",
        motto: "Ambition Will Take You Far",
        description: "Slytherin values ambition, cunning, leadership, and resourcefulness. Its members are typically determined, proud, and achievement-oriented. The house colors are green and silver, and its symbol is the serpent.",
        color: "var(--slytherin-green)",
        secondaryColor: "var(--slytherin-silver)"
    }
};

// Quiz State
let currentQuestionIndex = 0;
let scores = {
    gryffindor: 0,
    hufflepuff: 0,
    ravenclaw: 0,
    slytherin: 0
};
let selectedOption = null;
let userHousePreference = null;
let finalHouse = null;
let isTie = false;
let tiedHouses = [];

// Initialize the quiz
function initQuiz() {
    currentQuestionIndex = 0;
    scores = {
        gryffindor: 0,
        hufflepuff: 0,
        ravenclaw: 0,
        slytherin: 0
    };
    selectedOption = null;
    userHousePreference = null;
    finalHouse = null;
    isTie = false;
    tiedHouses = [];
    
    // Load saved progress if available
    loadProgress();
    
    showQuestion();
}

// Show current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        determineHouse();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    
    // Update progress bar
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option.text;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset next button
    nextBtn.disabled = true;
}

// Select an option
function selectOption(optionElement, index) {
    // Deselect previous option
    if (selectedOption !== null) {
        const prevOption = optionsContainer.children[selectedOption];
        prevOption.classList.remove('selected');
    }
    
    // Select new option
    optionElement.classList.add('selected');
    selectedOption = index;
    nextBtn.disabled = false;
}

// Go to next question
function nextQuestion() {
    if (selectedOption === null) return;
    
    // Add points for selected option
    const selectedOptionData = questions[currentQuestionIndex].options[selectedOption];
    for (const house in selectedOptionData.points) {
        scores[house] += selectedOptionData.points[house];
    }
    
    // Save progress
    saveProgress();
    
    // Move to next question
    currentQuestionIndex++;
    selectedOption = null;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        determineHouse();
    }
}

// Determine the house based on scores
function determineHouse() {
    // Find the highest score
    const maxScore = Math.max(...Object.values(scores));
    
    // Find all houses with the max score
    tiedHouses = Object.keys(scores).filter(house => scores[house] === maxScore);
    
    if (tiedHouses.length === 1) {
        // No tie - assign house
        finalHouse = tiedHouses[0];
        showResults();
    } else {
        // Tie - show tiebreaker
        isTie = true;
        showTiebreakerScreen();
    }
}

// Show tiebreaker screen
function showTiebreakerScreen() {
    quizScreen.classList.remove('active');
    tiebreakerScreen.classList.add('active');
    
    // Display tied houses
    tiedHousesSpan.textContent = tiedHouses.map(house => houseInfo[house].name).join(' and ');
    
    // Clear previous house options
    houseOptionsContainer.innerHTML = '';
    
    // Add house options
    tiedHouses.forEach(house => {
        const houseOption = document.createElement('div');
        houseOption.classList.add('house-option', house);
        houseOption.dataset.house = house;
        
        const houseIcon = document.createElement('div');
        houseIcon.classList.add('house-icon');
        houseIcon.textContent = getHouseIcon(house);
        
        const houseName = document.createElement('div');
        houseName.textContent = houseInfo[house].name;
        
        houseOption.appendChild(houseIcon);
        houseOption.appendChild(houseName);
        
        houseOption.addEventListener('click', () => selectHousePreference(houseOption, house));
        
        houseOptionsContainer.appendChild(houseOption);
    });
    
    // Reset confirm button
    confirmPreferenceBtn.disabled = true;
}

// Get house icon
function getHouseIcon(house) {
    switch(house) {
        case 'gryffindor': return '🦁';
        case 'hufflepuff': return '🦡';
        case 'ravenclaw': return '🦅';
        case 'slytherin': return '🐍';
        default: return '';
    }
}

// Select house preference
function selectHousePreference(houseOption, house) {
    // Deselect previous option
    const prevSelected = houseOptionsContainer.querySelector('.selected');
    if (prevSelected) {
        prevSelected.classList.remove('selected');
    }
    
    // Select new option
    houseOption.classList.add('selected');
    userHousePreference = house;
    confirmPreferenceBtn.disabled = false;
}

// Confirm house preference
function confirmHousePreference() {
    if (tiedHouses.length === 2) {
        // For two-way ties, proceed to final tiebreaker
        showFinalTiebreaker();
    } else {
        // For multi-way ties, use preference as final house
        finalHouse = userHousePreference;
        showResults();
    }
}

// Show final tiebreaker question
function showFinalTiebreaker() {
    tiebreakerScreen.classList.remove('active');
    finalTiebreakerScreen.classList.add('active');
    
    finalTiebreakerQuestion.textContent = finalTiebreakerQuestionData.question;
    
    // Clear previous options
    finalTiebreakerOptions.innerHTML = '';
    
    // Add options
    finalTiebreakerQuestionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option.text;
        optionElement.dataset.house = option.house;
        
        optionElement.addEventListener('click', () => selectFinalTiebreakerOption(optionElement, option.house));
        
        finalTiebreakerOptions.appendChild(optionElement);
    });
    
    // Reset button
    finalTiebreakerBtn.disabled = true;
}

// Select final tiebreaker option
function selectFinalTiebreakerOption(optionElement, house) {
    // Deselect previous option
    const prevSelected = finalTiebreakerOptions.querySelector('.selected');
    if (prevSelected) {
        prevSelected.classList.remove('selected');
    }
    
    // Select new option
    optionElement.classList.add('selected');
    finalHouse = house;
    finalTiebreakerBtn.disabled = false;
}

// Complete final tiebreaker
function completeFinalTiebreaker() {
    // Check if preferred house matches final house
    const preferredHouseMatches = userHousePreference === finalHouse;
    
    // Store this for results display
    localStorage.setItem('preferredHouseMatches', preferredHouseMatches);
    localStorage.setItem('preferredHouse', userHousePreference);
    localStorage.setItem('finalHouse', finalHouse);
    
    showResults();
}

// Show results
function showResults() {
    // Hide all other screens first
    quizScreen.classList.remove('active');
    tiebreakerScreen.classList.remove('active');
    finalTiebreakerScreen.classList.remove('active');
    
    // Then show results
    resultsScreen.classList.add('active');

    // Play sorting sound
    sortingSound.play();
    
    // Scroll to top in case page was scrolled down
    window.scrollTo(0, 0);

    // Get house info
    const house = houseInfo[finalHouse];
    
    // Set house crest
    houseCrest.src = house.crest;
    houseCrest.alt = `${house.name} Crest`;
    
    // Set house name and info
    houseName.textContent = house.name;
    houseMotto.textContent = `"${house.motto}"`;
    houseDescription.textContent = house.description;
    
    // Apply house colors
    document.documentElement.style.setProperty('--primary-color', house.color);
    document.documentElement.style.setProperty('--secondary-color', house.secondaryColor);
    
    // Display tiebreaker message if applicable
    if (isTie) {
        const preferredHouseMatches = localStorage.getItem('preferredHouseMatches') === 'true';
        const preferredHouse = localStorage.getItem('preferredHouse');
        
        if (preferredHouseMatches) {
            tiebreakerMessage.textContent = "Your choice and your true traits align. Welcome to your destined house!";
        } else {
            tiebreakerMessage.textContent = `You truly belong to ${houseInfo[finalHouse].name}, but we'll place you in ${houseInfo[preferredHouse].name} as a friendly gesture!`;
            // Override final house with preferred house if they don't match
            finalHouse = preferredHouse;
            
            // Update displayed info
            const prefHouse = houseInfo[preferredHouse];
            houseCrest.src = prefHouse.crest;
            houseCrest.alt = `${prefHouse.name} Crest`;
            houseName.textContent = prefHouse.name;
            houseMotto.textContent = `"${prefHouse.motto}"`;
            houseDescription.textContent = prefHouse.description;
            document.documentElement.style.setProperty('--primary-color', prefHouse.color);
            document.documentElement.style.setProperty('--secondary-color', prefHouse.secondaryColor);
        }
    } else {
        tiebreakerMessage.textContent = "";
    }
    
    // Clear saved progress
    clearProgress();
}



// Save progress to localStorage
function saveProgress() {
    const progress = {
        currentQuestionIndex,
        scores,
        selectedOption
    };
    localStorage.setItem('sortingQuizProgress', JSON.stringify(progress));
}

// Load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('sortingQuizProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentQuestionIndex = progress.currentQuestionIndex;
        scores = progress.scores;
        selectedOption = progress.selectedOption;
    }
}

// Clear progress from localStorage
function clearProgress() {
    localStorage.removeItem('sortingQuizProgress');
}



// Event Listeners
startBtn.addEventListener('click', () => {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    initQuiz();
});

nextBtn.addEventListener('click', nextQuestion);

confirmPreferenceBtn.addEventListener('click', confirmHousePreference);

finalTiebreakerBtn.addEventListener('click', completeFinalTiebreaker);

restartBtn.addEventListener('click', () => {
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
});

musicToggleBtn.addEventListener('click', toggleMusic);

// music initialization part 
backgroundMusic.volume = 0.3;
backgroundMusic.muted = false; // Start unmuted but will mute if autoplay fails
backgroundMusic.autoplay = true;
sortingSound.volume = 0.5;
musicToggleBtn.textContent = "Mute Music";

function handleMusicPlayback() {
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay prevented:", error);
            // Set up to play after user interaction
            document.body.addEventListener('click', playMusicOnInteraction, { once: true });
        });
    }
}
function playMusicOnInteraction() {
    backgroundMusic.play()
        .then(() => {
            console.log("Music started after user interaction");
            // Update button state if needed
            if (backgroundMusic.muted) {
                toggleMusic(); // This will unmute if currently muted
            }
        })
        .catch(error => {
            console.log("Still couldn't play music:", error);
        });
}

// Initialize music when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    handleMusicPlayback();
});

// Keep your existing toggle function but add play attempt when unmuting
function toggleMusic() {
    backgroundMusic.muted = !backgroundMusic.muted;
    musicToggleBtn.textContent = backgroundMusic.muted ? "Unmute Music" : "Mute Music";
    musicToggleBtn.classList.toggle('muted', backgroundMusic.muted);
    
    // When unmuting, try to play if not already playing
    if (!backgroundMusic.muted && backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.log("Couldn't resume playback:", error);
        });
    }
}

// Add click event to document to start music on any interaction
document.addEventListener('click', () => {
    if (backgroundMusic.paused && !backgroundMusic.muted) {
        backgroundMusic.play().catch(error => {
            console.log("Playback failed on interaction:", error);
        });
    }
}, { once: true });


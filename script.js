document.getElementById('revealFactButton').addEventListener('click', function() {
    const facts = [
        "I am 18 years old and love art.",
        "I enjoy coding and creating new projects.",
        "I maintain an active lifestyle with gym workouts.",
        "Traveling is one of my passions.",
        "I am an extrovert who loves social interactions."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factDisplay').textContent = randomFact;
});

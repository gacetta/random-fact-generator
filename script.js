document.getElementById('generateFactBtn').addEventListener('click',generateRandomFact)

async function generateRandomFact() {
    const API_URL = 'https://api.chucknorris.io/jokes/random';
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const factDisplay = document.getElementById('factDisplay');
        factDisplay.textContent = data.value;
    } catch (err) {
        console.log('Error fetching data:', err);
    }
}
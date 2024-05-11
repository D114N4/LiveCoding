// API
async function fetchAnswer() {
    try {
        const response = await fetch('https://yesno.wtf/api');
        const data = await response.json();

        document.getElementById('answer').textContent = data.answer;

        
        setTimeout(() => {
            document.getElementById('input').value = '';
            document.getElementById('error').textContent = '';
        }, 3000);
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('button').addEventListener('click', () => {
    fetchAnswer();
});

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

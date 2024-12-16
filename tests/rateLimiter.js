import fetch from 'node-fetch'; // Import node-fetch for making API requests

async function testRateLimiter() {
    for (let i = 1; i <= 10; i++) {
        try {
            const response = await fetch('http://localhost:3000/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Test',
                    senderMail: 'test@example.com',
                    message: 'kakoo kakoo',
                    honeyPot: '',
                }),
            });

            const data = await response.json();
            console.log(`Attempt ${i}: Status ${response.status}`, data);
        } catch (error) {
            console.error(`Error on attempt ${i}:`, error.message);
        }
    }
}

testRateLimiter(); 

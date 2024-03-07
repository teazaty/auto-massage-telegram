import fetch from 'node-fetch';

// Set your Telegram bot token and chat ID
const telegramBotToken = '7039807802:AAEfcs0RBmELkbF7QVjk44jGFQ7DG60o6TA';
const telegramChatId = '1320125276';
const tiktokVideoUrl = 'https://www.tiktok.com/@ijlalfahlefy/video/7330520719916272916';
const delayInSeconds = 5; // Set your desired delay in seconds

// Function to send TikTok video link to Telegram bot
async function sendTikTokVideoToTelegram() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: `${tiktokVideoUrl}`,
      }),
    });

    const responseData = await response.json();
    if (responseData.ok) {
      console.log('TikTok video sent successfully to Telegram.');
    } else {
      console.error('Error sending TikTok video to Telegram:', responseData.description);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Set an interval to send the TikTok video link with the specified delay
setInterval(() => {
  sendTikTokVideoToTelegram();
}, delayInSeconds * 1000); // Convert delay to milliseconds

// Initial message to confirm the script is running
console.log('Script is running. Sending TikTok video link to Telegram with a delay of', delayInSeconds, 'seconds.');

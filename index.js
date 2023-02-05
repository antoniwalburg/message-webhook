async function sendRequest() {
  const response = await fetch('https://graph.facebook.com/<API_VERSION>/<PAGE_ID>/messages?access_token=<PAGE_ACCESS_TOKEN>', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      recipient: {
        id: '<RECIPIENT_ID>'
      },
      message: {
        text: 'Hello, world!'
      }
    })
  });

  const data = await response.json();
  console.log(data);
}
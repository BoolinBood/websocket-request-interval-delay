const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store last message timestamp for each client
const lastMessageTimes = new Map();

wss.on('connection', (ws) => {
	console.log('Client connected');

	ws.on('message', (message) => {
		const now = Date.now();
		const lastTime = lastMessageTimes.get(ws) || 0;
		const timeDiff = now - lastTime;

		if (timeDiff < 500) {
			ws.send('Error: Messages must be at least 0.5 seconds apart');
			return;
		}

		lastMessageTimes.set(ws, now);
		console.log('Received:', message.toString());

		// Send a response to the client
		ws.send(`Server received: ${message}`);
	});

	ws.on('close', () => {
		console.log('Client disconnected');
		lastMessageTimes.delete(ws);
	});
});

const port = process.env.PORT || 3001

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

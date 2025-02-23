# Express WebSocket Server

This is a simple Express-based WebSocket server that validates message timing constraints. It ensures that clients send messages at an interval of **at least 0.5 seconds** before accepting and processing them.

## Features
- Uses `express` for server setup.
- Uses `ws` for WebSocket handling.
- Ensures messages from a client are at least **500ms apart**.
- Rejects messages sent too quickly and responds with an error.

## Installation

First, clone this repository and install dependencies:

```sh
npm install
```

## Running the Server

Start the server with:

```sh
node server.js
```

The server will run on `http://localhost:3001` and listen for WebSocket connections on `ws://localhost:3001`.

## WebSocket Behavior
- When a client connects, the server starts tracking their messages.
- If a client sends a message **less than 500ms after the previous one**, the server rejects it with an error message.
- If the client follows the 500ms rule, the server processes and responds to the message.

## Server Code Structure

- `server.js`: The main Express and WebSocket server.
- The WebSocket server tracks clients and enforces the message interval policy.

## Dependencies

- `express`: Web framework for Node.js.
- `ws`: WebSocket library for handling real-time communication.

Install dependencies with:

```sh
npm install express ws
```

## License
This project is open-source and available under the MIT License.


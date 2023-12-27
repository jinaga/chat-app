# Jinaga Chat App

An overly simplified example of a chat application.
This example is so simplified that it doesn't even keep track of who is chatting.

## Create Your Own Replicator

Log on to the [Jinaga Portal](https://dev.jinaga.com/) and create a replicator named "Chat App".
Leave the replicator in the Development environment.
Then click the Publish button

Copy the replicator URL and paste it into `.env.local`.

```
VITE_APP_JINAGA_REPLICATOR_URL=https://repdev.jinaga.com/get_your_own_replicator
```

## Setup

Install the dependencies.

```
npm ci
```

## Run

Start the development server.

```
npm run dev
```

This application uses Vite.
It will automatically refresh the browser when you make changes to the code.
See the [Vite documentation](https://vitejs.dev/guide/) for more information.

## Model

The model for this application is very simple.
There are only two types of facts: `Topic` and `Message`.
A topic represents a conversation.
It is identified by a `name`.
A message is a statement made in a conversation.
It belongs in a topic and has a `text` property.

The model is defined in `src/model/chat.ts`.

Because of the overly simplistic model, this app has no security.
Anyone can create a topic or post a message.
Anyone can read messages.
Do no post anything sensitive and do not be surprised if someone else posts something offensive.

Another consequence of the simplistic model is that there is no way to delete a message.
Nor is there a way to edit a message.
Once a message is posted, it is there forever.

Furthermore, there is no order to the messages.
They are usually displayed in the order they were created, but that is not guaranteed.

And finally, two messages with the same text are considered to be the same message.
If you post the same message twice, it will only appear once.

There are ways to correct all of these problems.
We will demonstrate those in future examples.
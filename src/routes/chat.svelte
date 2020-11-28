<svelte:head>
    <title>CareerGuru - Chat</title>
</svelte:head>

<svelte:window on:unload={emitUserDisconnect}/>
  
<script>
    import io from "socket.io-client";
    import { fade } from "svelte/transition";
  
    const socket = io();
  
    const placeholder = "Type your message here...";
    const greeting = `You have joined the chat. Use '/nick your_nickname' to set your nickname!`
    let messages = [greeting];
    let message = "";
    let name = 'Anonymous';
    let numUsersConnected = 0;
  
    socket.on("message", function(message) {		
        messages = messages.concat(message);
        updateScroll();
    });
      
    socket.on("user joined", function({message, numUsers}) {
        messages = messages.concat(message);
        numUsersConnected = numUsers;
        updateScroll();
    });
  
    socket.on("user left", function(numUsers) {
        numUsersConnected = numUsers;
        updateScroll();
    });
  
    function emitUserDisconnect() {
        socket.emit('user disconnect', name); 
    }
  
    function handleSubmit() {
        message = message.trim();
        
        if (message == '') {
            return;
        }

        let messageString = `${name}: ${message}`;

        if (message.slice(0, 5) == '/nick') {
            let newName = message.slice(6);
            messageString = `Server: ${name} changed their nickname to ${newName}`;
            name = newName;
        }

        messages = messages.concat(messageString);
        socket.emit("message", messageString);

        updateScroll();

        message = "";
    }
      
    function updateScroll() {
        const chatWindow = document.getElementById('chatWindow');
        setTimeout(() => {
            chatWindow.scrollTop = chatWindow.scrollHeight;			
        }, 0);
    }
  </script>
  
<p>Make connections</p>
<div id="chatWindow">
    <ul id="messages">
        {#each messages as message}
            <li transition:fade>{message}</li>
        {/each}
    </ul>
</div>
<form action="">
    <input id="m" autocomplete="off" {placeholder} bind:value={message} />
    <button on:click|preventDefault={handleSubmit}>Send</button>
</form>
<p id="numUsers">
    There {numUsersConnected == 1 ? 'is' : 'are'} {numUsersConnected} {numUsersConnected == 1 ? 'user' : 'users'} currently chatting!
</p>

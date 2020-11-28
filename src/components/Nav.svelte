<script>
	export let segment;
</script>

<style>
	/* navbar */
	nav{
		background-color: white;
		display: block;
		
		width: 100%	;
		height: 4vw;
	}
	.logo{
		margin: 10px;
		width: 8vw;
		
		position: absolute;
		left:0;
	}
	
	.navbar ul{
		list-style-type:none;
		overflow:hidden;
		
		position: absolute;
		right:0;
		top: 1vw;
	}
	.navbar li{
		float: left;
		
		margin-right: 1vw;
		padding: .5vw 1vw;
	}
	.navbar li a{
		display:inline-block;
		color: #555B6E;
		
		font-family: 'Work Sans', sans-serif;
		font-weight: 500;
		text-transform: capitalize;
		font-size: 1.25vw;
		text-decoration:none;
		text-align:center;
		vertical-align:middle;
		
	}

	.navbar li:hover{
		background-color: rgba(190, 227, 219, 0.2);  
		border-radius: 10px;
	}
	li[aria-current] {
		background-color: rgba(190, 227, 219, 0.2);  
		border-radius: 10px;	
	}
	/* end of navbar */
</style>

<nav class="navbar">
	<img class="logo" src="logo.png" alt="logo">
	<ul>
		<li aria-current="{segment === undefined ? 'page' : undefined}"><a href=".">Home</a></li>
		<li aria-current="{segment === 'about' ? 'page' : undefined}"> <a href="about">About</a></li>
		<li aria-current="{segment === 'forum' ? 'page' : undefined}"><a href="forum">Forum</a></li>
		<li aria-current="{segment === 'chat' ? 'page' : undefined}"><a href="chat">Chat</a></li>
		<li aria-current="{segment === 'login' ? 'page' : undefined}"><a href="chat">Login</a></li>
		<li aria-current="{segment === 'signup' ? 'page' : undefined}"><a href="chat">Signup</a></li>
	</ul>
</nav>
<style>
    img {
		width: 100%;
    }
    @media screen and (min-width: 500px) {
		footer {
			display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2em;
		}
		.decoration {
            grid-row: 3;
            grid-column: span 2;
        }
    }
    @media screen and (min-width: 1000px) {
		footer {
			display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 2em;
		}
		.decoration {
            grid-row: 2;
            grid-column: span 4;
        }
    }
</style>

<footer class="grid grid-cols-4 gap-5">
    <img src="logo.png" alt="Career Guru logo">
    <ul>
        <li><a href="about">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="about">Forum</a></li>
    </ul>
    <address>
        Email: <a href="mailto:john.doe@example.com">mailto:john.doe@example.com</a>
        <br>
        Phone: <a href="tel:+10123456789">+10123456789</a>
        <br>
        Address: 2345 Mailing, CA, US
    </address>

    <img class="decoration" src="dot-grid.svg" alt="Career Guru logo">
</footer>
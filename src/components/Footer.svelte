<style>
    /* footer styles */
    footer{
        width: 100vw;
        position:relative;
        height: 10vw;
        background-color: white;
    }
    footer .container{overflow: hidden;}
    #footer-grid{
        background-color:white;
        height: 4vw;
        width: 100vw;
        display:block;
        background-size: 50%;
        background-repeat:repeat-x;
        margin: 0;
    }
    .logo{
        margin: 10px;
        width: 6vw;
        float:left;
    }
    footer p{
        font-family: Work Sans, Sans Serif;
        font-weight: 500;
        font-size: .75vw;
        text-decoration:none;
        color: #555B6E;
    }
    .quicklinks{
        float:left;
        margin-left:25px;
        height:50%;
        display:block;
    }
    .quicklinks ul{
        list-style-type:none;
    }
    .quicklinks li a{
        font-family: Work Sans, Sans Serif;
        font-weight: 400;
        font-size: .75vw;
        text-decoration:none;
        color: #555B6E;
    }
    .quicklinks li a:hover{
        text-decoration:underline;
    }
    .contact{
        height: 50%;
        margin-left: 10vw;
        margin-top: 1vw;
    }
    /* end of footer */
</style>

<footer>
    <div class="container">
        <div class="quicklinks">
            <img src="logo.png" alt="Career Guru logo" class="logo">
            <ul>
                <li><a href="about">About</a></li>
                <li><a href="forum">Forum</a></li>
            </ul>
        </div>
        <div class="contact">
            <p>Contact information</p>
            <address>
                <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
                <p>Phone: <a href="tel:+10123456789">+10123456789</a></p>
                <p>Mailing Address: 2345 Mailing, CA, US</p>
            </address>
        </div>
        <div id="footer-grid" style="background-image: url('dot-grid.svg')"></div>
    </div>
</footer>
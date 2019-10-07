function handleHomePage() {
    console.log('handle home page');

    const homePageHtml = `
    <section class="home-message">
        Web Developer. Engineer by training. <br>
        Ventures. Investing. Strategy. <br>
        Adventures. Burner. Athlete. <br>
        UPenn. Denver. <br>
    </section>
    <section class="home-buttons mobile-screen">
        <button type="button" class="view-aboutme">About Me</button>
        <button type="button" class="view-portfolio">Projects</button>
        <button type="button" class="view-blog">Blog</button>
        <button type="button" class="view-photos">Photos</button>
    </section>`;

    $('.main-section').html(homePageHtml);
} 

function handleAboutMe() {
    console.log('handle about me page');

    const aboutMeHtml = `
    <img class="about-me-image" src='images/about-me-photo.JPG' alt="picture in about me with me hiking" width=65%>
    <section class = "about-me-message">
        I’m a web developer and an engineer by training. I enjoy working with a team to materialize an idea, to solve problems, and to improve efficiency. I love being challenged intellectually. <br> <br>
        When I have free time, I can be found doing something active (e.g. hiking a 14er, surfing, swimming). I seek new adventures and enjoy having new experiences. I’m also an avid manga reader. <br> <br>
        I am currently based out of Denver, CO. I’ve lived in Philadelphia, New York City, Los Angeles, and San Francisco.
    </section>`;

    $('.main-section').html(aboutMeHtml);
}

function handlePortfolio() {
    console.log('handle portfolio and projects');

    let projectsArray = [];
    //learn how to turn this into the forEach() function
    for (let i = 0; i < PROJECTS.length; i++) {
        projectsArray.push(createProjectsHTML(PROJECTS[i]));
    };

    //confirm that it is best practice to use JSON.stringify to turn the array into a string for html
    const portfolioHtml = projectsArray.join('');
    $('.main-section').html(portfolioHtml);
}

function createProjectsHTML(projectObj) {
    return `
    <div class="project-card">
        <img src='${projectObj.screenshot}' alt="${projectObj.title}" width=100%>
        <section class="project-card-description">
            <h2>${projectObj.title}</h2>
            <section class="project-card-technologies">
                <img src='images/javascript.png' alt="JavaScript icon" height=30 width=30>
                <img src='images/html.png' alt="HTML5 icon" height=30 width=30>
                <img src='images/css.jpg' alt="CSS icon" height=30 width=30>
            </section>
            <p>${projectObj.description}</p>
            <section class="project-card-buttons">
                <a href="${projectObj.repoLink}" target="_blank"><button type="button" class="view-project">View Code</button></a>
                <a href="${projectObj.liveLink}" target="_blank"><button type="button" class="view-project">View Project</button></a>
            </section>
        </section>
    </div>`;
}

function handleBlog() {
    console.log('handle blog');

    const blogHtml = `
    <section class="home-message">
        Coming soon!
    </section>`;

    $('.main-section').html(blogHtml);
}

function handlePhotos() {
    console.log('handle photos');

    const photosHtml = `
    <section class="home-message">
        Coming soon!
    </section>`;

    $('.main-section').html(photosHtml);
}

//handleNavigation listens for all clicks on navigtation specific places
//what's a better way of writing this function to handle user input?
function handleNavigation() {
    $('body').on('click','.view-homeMessage',function(){
        handleHomePage();
    });
    
    $('body').on('click','.view-aboutme',function(){
        handleAboutMe();
    });

    $('body').on('click','.view-portfolio',function(){
        handlePortfolio();
    });

    $('body').on('click','.view-blog',function(){
        handleBlog();
    });

    $('body').on('click','.view-photos',function(){
        handlePhotos();
    });
}

//function that bolds the menu item that is in play right now (and remove that ones that are not)
function boldAndUnderline () {
}

function personalWebsiteStart() {
    handleHomePage();
    handleNavigation();
}

$(personalWebsiteStart)
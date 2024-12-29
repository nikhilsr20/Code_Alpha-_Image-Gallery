
// tried to feth the api but still cant use dure to the security


// async function fetchPhotos(endpoint, apiKey) {
//     try {
//         const response = await fetch(endpoint, {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${apiKey}`, 
//             },
//         });
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log(data.photos[0].src.original);
//         data.photos.slice(0, 10).map((photo, i) => {
           
//             const img = document.createElement('img');
            
            
//             img.setAttribute('src', photo.src.original);
//             img.className = `img${i}`;
        
//             img.style.width = i % 2 === 0 ? "300px" : "400px";
//             img.style.height = i % 2 === 0 ? "500px" : "600px";
//             img.style.marginTop = i % 2 === 0 ? "60px" : "20px";
//             img.style.borderRadius = "10px";
//             img.style.cursor = "pointer";
           
//             document.querySelector(".image-container").appendChild(img);
//         });
      

//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// const apiKey = 'y2FKaGbeQNa1gyH84wA9dyMFbBCjIkTXwjw1YFfm1vQk9CqJoPXIonoI'; 
// const endpoint = 'https://www.pexels.com/search/end%20point/';

// fetchPhotos(endpoint, apiKey);



    let tog=document.querySelector(".drag");
   
    tog.addEventListener("mouseover",()=>{
        if(!isDarkMode){
        document.querySelector(".explore").innerHTML=`𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-up" style="color: #0c0d0d;"></i>`
        let exploreItems = document.querySelector(".explore-items");
        exploreItems.style.display = "block";}
        else{
            document.querySelector(".explore").innerHTML=`𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-up" style="color:rgb(255, 255, 255);"></i>`
            let exploreItems = document.querySelector(".explore-items");
            exploreItems.style.display = "block";}
        
    })
    tog.addEventListener("mouseout",()=>{
        if(!isDarkMode){
        document.querySelector(".explore").innerHTML=`𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-down" style="color: #0f0f10;"></i>`
        let exploreItems = document.querySelector(".explore-items");
        exploreItems.style.display = "none";
        }
        else{
            document.querySelector(".explore").innerHTML=`𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-down" style="color:rgb(255, 255, 255);"></i>`
            let exploreItems = document.querySelector(".explore-items");
            exploreItems.style.display = "none";
        }
    })
 
    let lastScrollPosition = 0;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScrollPosition == 0) {
          document.querySelector(".nav").style.backgroundColor="transparent"
          
        } else {
            if(isDarkMode){
          document.querySelector(".nav").style.backgroundColor="black"}
          else{
             document.querySelector(".nav").style.backgroundColor="white"
          }
          
        }
    
        
    });
   
    let a = "Capture-Memories, Display, Art, Inspire, Explore.";
    let b = 0; 
    
    setInterval(() => {
        if (b < a.length) {
            document.querySelector(`.tagline`).innerHTML += a[b];
            b++; 
        } else {
            b = 0; 
            document.querySelector(`.tagline`).innerHTML = ""; 
        }
    }, 100); 
    
    let trend=document.querySelector(".feature");

    trend.addEventListener("mouseover",()=>{
        
        let exploreItems = document.querySelector(".others");
        exploreItems.style.display = "block";
    })
    trend.addEventListener("mouseout",()=>{
      
        let exploreItems = document.querySelector(".others");
        exploreItems.style.display = "none";

        
    })



    let isDarkMode = false;

    function darkmode() {
        const body = document.body;
        const darkToggleElement = document.querySelector(".dark");
        const searchBar = document.querySelector(".search-bar") || document.querySelector(".search-bardark");
        const texElement = document.querySelector(".tex") || document.querySelector(".tex-dark");
        const homeElement = document.querySelector(".home") || document.querySelector(".home-dark");
        const loginElement = document.querySelector(".login") || document.querySelector(".login-dark");
        const featureElement = document.querySelector(".feature") || document.querySelector(".feature-dark");
        const exploreElement = document.querySelector(".explore");
        const firstElement = document.querySelector(".first");
    
        if (isDarkMode) {
            
            darkToggleElement.innerHTML = `
                <i id="darkmode" class="fa-solid fa-sun fa-xl" style="color: #110d0d;"></i>
                <i class="fa-solid fa-toggle-off fa-2xl" style="color: #482424;"></i>`;
            body.classList.remove("dark-mode");
            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1729505622656-6da75375c3a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8')";
            searchBar.classList.replace("search-bardark", "search-bar");
            texElement.classList.replace("tex-dark", "tex");
            homeElement.classList.replace("home-dark", "home");
            loginElement.classList.replace("login-dark", "login");
            featureElement.classList.replace("feature-dark", "feature");
            homeElement.innerHTML = `<i class="fa-solid fa-house fa-xs" style="color:rgb(0, 0, 0);"></i> home`;
            loginElement.innerHTML = `<i class="fa-solid fa-user" style="color:rgb(0, 0, 0);"></i> 𝙡𝙤𝙜𝙞𝙣`;
            exploreElement.innerHTML = `𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-down" style="color:rgb(0, 0, 0);"></i>`;
            firstElement.innerHTML = `Trending <i id="cheveron" class="fa-solid fa-chevron-down" style="color:rgb(0, 0, 0);"></i>`;
        } else {
           
            darkToggleElement.innerHTML = `
                <i id="darkmode" class="fa-solid fa-moon fa-xl" style="color: hsl(0, 11.10%, 92.90%);"></i>
                <i class="fa-solid fa-toggle-on fa-2xl" style="color: rgb(245, 236, 236);"></i>`;
            body.classList.add("dark-mode");
            body.style.backgroundImage = "url('https://plus.unsplash.com/premium_photo-1686255006386-5f58b00ffe9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5pZ2h0JTIwc2t5fGVufDB8fDB8fHww')";
            searchBar.classList.replace("search-bar", "search-bardark");
            texElement.classList.replace("tex", "tex-dark");
            homeElement.classList.replace("home", "home-dark");
            loginElement.classList.replace("login", "login-dark");
            featureElement.classList.replace("feature", "feature-dark");
            homeElement.innerHTML = `<i class="fa-solid fa-house fa-xs" style="color: #ffffff;"></i> home`;
            loginElement.innerHTML = `<i class="fa-solid fa-user" style="color: #ffffff;"></i> 𝙡𝙤𝙜𝙞𝙣`;
            exploreElement.innerHTML = `𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-down" style="color: rgb(255, 255, 255);"></i>`;
            firstElement.innerHTML = `Trending <i id="cheveron" class="fa-solid fa-chevron-down" style="color: rgb(255, 255, 255);"></i>`;

        }
    
        isDarkMode = !isDarkMode;
    }
    
function copy(id){
let source=document.getElementById(id);
console.log(source);
let innercode= source.getAttribute("src");
console.log(innercode)



document.querySelectorAll(".uper").forEach((el) => {
    el.innerHTML = "Copied.....";
    el.style.backgroundColor="green"
    el.style.color="white"
});


setTimeout(() => {
    document.querySelectorAll(".uper").forEach((el) => {
        el.innerHTML = "Click to copy the image address";
        el.style.backgroundColor="white"
    el.style.color="#909291"
    });
}, 2000);
if (innercode) {
    
    let tempInput = document.createElement("input");
    tempInput.value = innercode;

    
    document.body.appendChild(tempInput);

    
    tempInput.select();
    document.execCommand("copy");

  
    document.body.removeChild(tempInput);

    console.log("Copied to clipboard: " + innercode);
} else {
    console.error("No 'src' attribute found!");
}
}



    
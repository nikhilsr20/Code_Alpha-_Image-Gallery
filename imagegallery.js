
// const apiKey = 'wNpzAvLhgJwe0C7SvTzasVOMA9LiRtBxcLvoDbzwviqGiiScYlhnZmhq'; 
// const endpoint = 'https://api.pexels.com/v1/search?query=mountains&per_page=10&page=1';


// fetch(endpoint, {
//     method: 'GET',
//     headers: {
//         Authorization: apiKey
//     }
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });



    let tog=document.querySelector(".drag");
    tog.addEventListener("mouseover",()=>{
        document.querySelector(".explore").innerHTML=`𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-up" style="color: #0c0d0d;"></i>`
        let exploreItems = document.querySelector(".explore-items");
        exploreItems.style.display = "block";
    })
    tog.addEventListener("mouseout",()=>{
        document.querySelector(".explore").innerHTML=`𝙘𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙚𝙨<i class="fa-solid fa-chevron-down" style="color: #0f0f10;"></i>`
        let exploreItems = document.querySelector(".explore-items");
        exploreItems.style.display = "none";
    })
 
    let lastScrollPosition = 0;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
        if (currentScrollPosition < lastScrollPosition) {
           
            document.querySelector(".body").style.opacity = "1";
        } else {
            
            document.querySelector(".body").style.opacity = "0.4"; 
        }
    
        lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
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
    
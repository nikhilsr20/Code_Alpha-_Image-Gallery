

async function fetchPhotos(endpoint, apiKey) {
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`, 
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data.photos[0].src.original);
        data.photos.slice(0, 10).map((photo, i) => {
           
            const img = document.createElement('img');
            
            
            img.setAttribute('src', photo.src.original);
            img.className = `img${i}`;
        
            img.style.width = i % 2 === 0 ? "300px" : "400px";
            img.style.height = i % 2 === 0 ? "500px" : "600px";
            img.style.marginTop = i % 2 === 0 ? "60px" : "20px";
            img.style.borderRadius = "10px";
            img.style.cursor = "pointer";
           
            document.querySelector(".image-container").appendChild(img);
        });
      

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const apiKey = 'wNpzAvLhgJwe0C7SvTzasVOMA9LiRtBxcLvoDbzwviqGiiScYlhnZmhq'; 
const endpoint = 'https://api.pexels.com/v1/search?query=mountains&per_page=10&page=1';

fetchPhotos(endpoint, apiKey);



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
        
        if (currentScrollPosition == 0) {
          document.querySelector(".nav").style.backgroundColor="transparent"
          
        } else {
          document.querySelector(".nav").style.backgroundColor="white"
          
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
 


var first_hero_slide_data = [
       "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
]


var second_hero_slide_data = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer 2",
    "Web Developer 2",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
 ]



 var third_hero_slide_data = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer 3",
    "Web Developer 3",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
 ]

var suggestions = first_hero_slide_data;

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox1 = document.querySelector("#website_service");
const inputBox2 = document.querySelector("#digital_service");
const inputBox3 = document.querySelector("#design_service");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// for hero section bg image change

 $(".nav.nav-tabs li a").click(function(){
    var dataVl = $(this).data("url");
     console.log('fxdgcfhvjbknlm----------->',dataVl)
     $('.first-hero-slide').hide()
     $('.second-hero-slide').hide()
     $('.third-hero-slide').hide()
     var myclass = "." + dataVl;
    $(myclass).show()
    const suggBox = searchWrapper.querySelector(".autocom-box");
    suggBox.innerHTML='';
              // $(".hero-bg-img").css("background-image", "url('"+$(this).data("url")+"')");
});







// if user press any key and release
inputBox1.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data

    const suggBox = document.querySelector("#website_autocom");
    load_values('website_service',userData,first_hero_slide_data,suggBox)
    
}

// if user press any key and release
inputBox2.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    const suggBox = document.querySelector("#digital_autocom");
    console.log(userData)
    load_values('digital_service',userData,second_hero_slide_data,suggBox)
    
}

inputBox3.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data

    const suggBox = document.querySelector("#design_autocom");
    load_values('design_service',userData,third_hero_slide_data,suggBox)
    
}

function load_values(selector,userData,suggestions,suggBox){
    console.log(userData)
    let emptyArray = [];
    if(userData){
        // icon.onclick = ()=>{
        //     webLink = `https://www.google.com/search?q=${userData}`;
        //     linkTag.setAttribute("href", webLink);
        //     linkTag.click();
        // }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        console.log(emptyArray);

        $(`#${selector}`).parent().addClass("active"); //show autocomplete box
        showSuggestions(emptyArray,userData,suggBox);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", `select('${selector}',this)`);
        }
    }else{
         $(`#${selector}`).parent().removeClass("active"); //hide autocomplete box
    }
}

function select(selector,element){
    let selectData = element.textContent;
    document.querySelector(`#${selector}`).value=selectData;
    // inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    $(`#${selector}`).parent().removeClass("active");
    // searchWrapper.classList.remove("active");
}

function showSuggestions(list,userData,suggBox){
    let listData;
    if(!list.length){
        // userValue = inputBox.value;
        listData = `<li>${userData}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}




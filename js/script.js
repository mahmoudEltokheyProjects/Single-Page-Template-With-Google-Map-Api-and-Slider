// ++++++++++++++++++++++++++++++ Jquery Code ++++++++++++++++++++++++++++++
// when document is render successfully
$(document).ready(function(){
    /* ==================== Navbar Section ==================== */
    // +++++++++++++++++++++++ menubar button +++++++++++++++++++++
    // when click on "menubar button" , appear "links" , using Debounce
    // إلا بعد 1500 ثانية لان اخر لينك بيحصل له ظهور بعد 1400 ثانية وهزود 50 مللي ثانية للامان event مش هينفذ اي  menubar عشان مهما تضغط علي زرار ال
    var clicked = false ;
    $(".nav-btn").click(function(){
        if( !clicked )
        {
            clicked = true ;
            // when click on "menubar_button" toggle "<ul></ul>"
            $(".nav .links").slideToggle(1000,function(){
                $(".nav .links").toggleClass("activeLinks");
                setTimeout( function(){
                    clicked = false ;
                } , 1500 );
            });
        } 
    } , 
    );
    // when click on "link" , add class "active" and remove from other links
    $(".nav-list > li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    // when "menubar" is opened , close it when click on any place
    // تكون مفتوحه وضغطت بالفارة علي اي مكان يتم غلقها menubar عايز لما ال
    // x.closeset("y") : y يعني عنصر موجود بداخل ال y لل child عبارة عن x بشوف هل ال
    $(document).on("click",function(e) {
        // هترجع العنصر اللي تم الضغط عليه
        var clickedArea = $(e.target);
        if( ! clickedArea.closest(".nav").length && $(".nav .links").hasClass("activeLinks") && !clicked )
        {
            $(".nav .links").removeClass("activeLinks");
        }
    });
    /* ======================================== navbar section ========================================  */
var navEl = document.querySelector(".nav"); 
window.onscroll = function(e)
{
    if ( window.scrollY >= 120 )
    {
        // add Background-color To Navbar
        navEl.classList.add("stickyNav");
    }
    else
    {
        // remove Background-color From Navbar
        navEl.classList.remove("stickyNav"); 
    }
}
// /* ======================================== about section ========================================  */
// /* ++++++++++ about section : hide image and play video ++++++++++++ */
let isPlaying = false ,
    //  video icon parent
    videoControl =  document.querySelector(".controls-video .controls-cont") ,
    //  about img tag
    aboutImgTag =  document.querySelector(".about-img img") ,
    // video Tag
    videoTag = document.querySelector(".videoTag");
    // call togglePlay()
    togglePlay();
    // // ++++++++++++++++++++++++ toggle between "Play" and "Pause" +++++++++++++++++++++++ 
    // //شغال ولا لاه audio فهعمل دالة هشوف هل ال play هذه الدالة مش هتشتغل إلا لما اضغط علي زرار ال
    function togglePlay()
    {
        // play icon هتتغير الي play هيتوقف والايقون بتاع ال audio فال play شغال فلما اضغط علي زرار ال audio لو ال
        if( isPlaying == true )
        {
            // hide "about-image"
            $(".about-img img").hide();
            // show "about-video"
            $(".videoTag").show();
            videoControl.innerHTML = `<span class="control-text">pause</span><i class="fa fa-pause"></i>`;            // هيتوقف video وال pause الي video icon هيغير ال play هيكون شغال فلما اضغط علي زرار ال video ال
            isPlaying = false;
        }
        else
        {
            // show "about-image"
            $(".about-img img").show();
            // hide "about-video"
            $(".videoTag").hide();
            // pause icon هتتغير الي play هيشتغل والايقون بتاع ال video فال play مش شغال فلما اضغط علي زرار ال video لو ال
            videoControl.innerHTML = '<span class="control-text">play</span><i class="fa fa-play"></i>';
            isPlaying = true ;
        }
    }
    // when click on "play" button , the "togglePlay()" function will implement
    videoControl.addEventListener("click",togglePlay);
    /* ======================================= special-menu Section ======================================= */
    /* ##################################### Silder ##################################### */
    var leftBtn = document.getElementById("left_arrow"), 
        rightBtn = document.getElementById("right_arrow"),
        clientsUlElem = document.getElementById("testimUlId"),
        windowSize = $(window).width() ,
        count = 0 ;
    // calculate "window width" in each resizing
    $(window).resize = function()
    {
        windowSize = $(window).width()  ;  
    }
    // ++++++++++++++++++++++ prev arrow ++++++++++++++++++++++
    // hide the "prev arrow" by default
    $(".arrow.prev").hide(100);
    leftBtn.onclick = function()
    {
        count-- ;
        if(  windowSize >= 0 && windowSize < 676 )
        {
            console.log(count);
            if( count > 0 ) 
            {
                clientsUlElem.style.transform += "translateX(16.6667%)";
                $(".arrow.next").show(100);
            }
            else
            {
                $(".arrow.prev").hide(100);
                count = 0 ; 
                clientsUlElem.style.transform = "translateX(0%)"; 
            }
        }
        else if(  windowSize >= 676 && windowSize <= 1000  )
        {
            console.log(count);
            if( count > 0 ) 
            {
                $(".arrow.next").show(100);
                clientsUlElem.style.transform += "translateX(16.6667%)";
            }
            else
            {
                $(".arrow.prev").hide(100);
                count = 0 ; 
                clientsUlElem.style.transform = "translateX(0%)"; 
            }
        }
        else
        {
            console.log(count);
            if( count > 0 ) 
            {
                clientsUlElem.style.transform += "translateX(16.4666667%)";
                $(".arrow.next").show(100);
            }
            else
            {
                $(".arrow.prev").hide(100);
                count = 0 ; 
                clientsUlElem.style.transform = "translateX(0%)"; 
            }
        }
    }
    // ++++++++++++++++++++++ next arrow ++++++++++++++++++++++
    rightBtn.onclick = function()
    {
        count++ ;
        // console.log(count); 
        if(  windowSize >= 0 && windowSize < 676 )
        {
            console.log(count);
            if( count <= 5 ) 
            {
                $(".arrow.prev").show(100);
                clientsUlElem.style.transform += "translateX(-16.6667%)";
            }
            else
            { 
                $(".arrow.next").hide(100);
                count = 5 ; 
                // clientsUlElem.style.transform = "translateX(0%)";  
            }
        }
        else if(  windowSize >= 676 && windowSize <= 1000  )
        {
            console.log(count);
            if( count <= 4 ) 
            {
                $(".arrow.prev").show(100);
                clientsUlElem.style.transform += "translateX(-16.6667%)";
            }
            else
            { 
                $(".arrow.next").hide(100);
                count = 4 ;  
                // clientsUlElem.style.transform = "translateX(0%)"; 
            }
        }
        else
        {
            console.log(count);
            if( count <= 3 ) 
            {
                $(".arrow.prev").show(100);
                clientsUlElem.style.transform += "translateX(-16.6667%)";
            }
            else
            { 
                $(".arrow.next").hide(100);
                count = 3 ; 
                // clientsUlElem.style.transform = "translateX(0%)"; 
            }
        }
    }  
    /* ======================================= Chief Section ======================================= */
    /* ##################################### Silder ##################################### */
    var leftBtnChief = document.getElementById("chief_left_arrow"), 
        rightBtnChief = document.getElementById("chief_right_arrow"),
        chiefUlElem = document.getElementById("chiefUlId"),
        windowSize = $(window).width() ,
        chiefCount = 0 ;
    // calculate "window width" in each resizing
    $(window).resize = function()
    {
        windowSize = $(window).width();  
    }
    // ++++++++++++++++++++++ prev arrow ++++++++++++++++++++++
    // hide the "prev arrow" by default
    $(".arrow.prev").hide(100);
    leftBtnChief.onclick = function()
    {
        chiefCount-- ;
        console.log(chiefCount);
        if( chiefCount > 0 ) 
        {
            chiefUlElem.style.transform += "translateX(16.4666667%)";
            $(".arrow.next").show(100);
        }
        else
        {
            $(".arrow.prev").hide(100);
            chiefCount = 0 ; 
            chiefUlElem.style.transform = "translateX(0%)"; 
        }
    }
    // ++++++++++++++++++++++ next arrow ++++++++++++++++++++++
    rightBtnChief.onclick = function()
    {
        chiefCount++ ;
        console.log(chiefCount);
        if( chiefCount <= 5 ) 
        {
            $(".arrow.prev").show(100);
            chiefUlElem.style.transform += "translateX(-16.4666667%)";
        }
        else
        { 
            $(".arrow.next").hide(100);
            chiefCount = 5 ;  
        }
    }  
    /* ======================================= contact Section ======================================= */
    /*  ++++++++++++++ Google Map ++++++++++++++  */
    // +++++++++++++++++++ "Navigator.GeoLocation" Api +++++++++++++++++++
    // create function "renderMap(myCoordinatePara) , "myCoordinatePara" is array parameter that contains 'x-axis' , 'y-axis' "
    // "shubra al Khayma" coordinates : longitude:31.2631261 , latitude:30.1148849
    function renderMap(myCoordinatePara)
    {
        var map = new maplibregl.Map({
            container: 'map',
            style:
            'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
            center: myCoordinatePara ,
            zoom: 10
            });
            // add location mark
            var marker = new maplibregl.Marker()
            .setLngLat(myCoordinatePara)
            .addTo(map);
        // Add "zoom" and "rotation" controls to the map
        map.addControl(new maplibregl.NavigationControl(),"bottom-right");   
    }
    // call "renderMap( x-axis , y-axis )" function
    renderMap( [144.946457 , -37.840935 ] );
});


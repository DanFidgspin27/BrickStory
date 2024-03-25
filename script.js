//Class that creates the boxes for themes
class Theme{
    constructor(title){
        this.title = title[1].Name
        this.id = title[0].ThemeID
        this.create()
    } 
    create(){
        console.log(this.id)

        const ThemeB = document.createElement('button')
        ThemeB.innerHTML = this.title
        ThemeB.setAttribute('class','ThemeB')
        ThemeB.setAttribute('id',this.id)
        ThemeB.setAttribute('onclick','SubThemes('+this.id+')')
        document.getElementById("border").appendChild(ThemeB);

    }
}
//Class that creates the subtheme boxes
class SubTheme{
    constructor(title){
        this.title = title[2].Name
        this.id = title[1].SubID
        this.create()
    } 
    create(){
        console.log(this.id)

        const SThemeB = document.createElement('button')
        SThemeB.innerHTML = this.title
        SThemeB.setAttribute('class','ThemeB')
        SThemeB.setAttribute('id',this.id)
        SThemeB.setAttribute('onclick','Sets('+this.id+')')
        document.getElementById("border").appendChild(SThemeB);

    }
}

class Set{
    constructor(title){
        this.title = title[2].SName
        this.id = title[1].SetID
        this.create()
    } 
    create(){
        console.log(this.id)

        const SThemeB = document.createElement('button')
        SThemeB.innerHTML = this.title
        SThemeB.setAttribute('class','ThemeB')
        SThemeB.setAttribute('id',this.id)
        SThemeB.setAttribute('onclick','info('+this.id+')')
        document.getElementById("border").appendChild(SThemeB);

    }
}

//Loads the subthemes of the selected theme
function SubThemes(id){
    //Clears page and cretes navbar
    setup()
    const main = document.createElement("div");
    main.setAttribute("id","main");
    main.setAttribute("class","main");
    document.body.appendChild(main);

    const border = document.createElement("div");
    border.setAttribute("id","border");
    border.setAttribute("class","border");
    document.getElementById("main").appendChild(border);

    const header = document.createElement("h1");
    header.innerHTML = "Themes"
    header.setAttribute("id","header")
    document.getElementById("border").appendChild(header);

    document.getElementById("border").appendChild(document.createElement("hr"))
    //Creates connectiuon to json file
    $.ajax({
        type: 'GET',
        url: 'Themes.json',
        success: function(data){
            //Changes header of page to the theme that was selected
            document.getElementById("header").innerHTML = data.Themes[id - 1][1].Name
            const wp = document.createElement("p");
            wp.innerHTML = data.Themes[id -1][2].Desc
            document.getElementById("border").appendChild(wp);
        
            //Creates objects for the subthemes within the selected theme
            for(i=0;i<data.SubThemes.length;i++){
                if(data.SubThemes[i][0].ThemeID == id){
                    let box = new SubTheme(data.SubThemes[i])
                }
            }
                
            
        }
        
    })

}


function setup(){
    //clears window
    const myNode = document.getElementById("body");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    //generates navbar
    const nav = document.createElement("ul");
    nav.setAttribute("id","topnav");
    nav.setAttribute("class","topnav");
    document.body.appendChild(nav);

    const l = document.createElement("li");
    l.setAttribute("id","l");
    document.getElementById("topnav").appendChild(l);
    const img = document.createElement("img");
    img.setAttribute("id","img");
    img.setAttribute("src","Brickstory.png")
    img.setAttribute("height","65px")
    document.getElementById("l").appendChild(img);
    
    const l1 = document.createElement("li");
    l1.setAttribute("id","l1");
    document.getElementById("topnav").appendChild(l1);
    const a1 = document.createElement("a");
    a1.setAttribute("onclick","Welcome()");
    a1.innerHTML = 'Home'
    document.getElementById("l1").appendChild(a1);

    const l2 = document.createElement("li");
    l2.setAttribute("id","l2");
    document.getElementById("topnav").appendChild(l2);
    const a2 = document.createElement("a");
    a2.setAttribute("onclick","themes()");
    a2.innerHTML = 'Themes'
    document.getElementById("l2").appendChild(a2);

    const l4 = document.createElement("li");
    l4.setAttribute("id","l4");
    document.getElementById("topnav").appendChild(l4);
    const a4 = document.createElement("a");
    a4.setAttribute("href","#History");
    a4.innerHTML = 'History'
    document.getElementById("l4").appendChild(a4);

    const l3 = document.createElement("li");
    l3.setAttribute("id","l3");
    document.getElementById("topnav").appendChild(l3);
    const a3 = document.createElement("a");
    a3.setAttribute("href","#wishlist");
    a3.innerHTML = 'Wishlist'
    document.getElementById("l3").appendChild(a3);

    const l5 = document.createElement("li");
    l5.setAttribute("id","l5");
    document.getElementById("topnav").appendChild(l5);
    const a5 = document.createElement("a");
    a5.setAttribute("href","#About Us");
    a5.innerHTML = 'About Us'
    document.getElementById("l5").appendChild(a5);

    const l6 = document.createElement("li");
    l6.setAttribute("id","l6");
    l6.setAttribute("class","icon")
    document.getElementById("topnav").appendChild(l6);
    const a6 = document.createElement("a");
    a6.setAttribute("href","javascript:void()");
    a6.setAttribute('id','icon')
    a6.setAttribute('onclick','resNav()')
    document.getElementById("l6").appendChild(a6);
    const i = document.createElement('i')
    i.setAttribute("class","fa fa-bars")
    document.getElementById("icon").appendChild(i)




    
}

function resNav() {
    console.log('cheese')
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



function Welcome(){
    //Creates setup for the page
    setup()
    const main = document.createElement("div");
    main.setAttribute("id","main");
    main.setAttribute("class","main");
    document.body.appendChild(main);

    const border = document.createElement("div");
    border.setAttribute("id","border");
    border.setAttribute("class","border");
    document.getElementById("main").appendChild(border);

    const header = document.createElement("h1");
    header.innerHTML = "Home"
    document.getElementById("border").appendChild(header);

    document.getElementById("border").appendChild(document.createElement("hr"));

    const wp = document.createElement("p");
    wp.innerHTML = "Welcome to Brickstory, the unofficial window into Lego's retired themes. This site will provide you with the in and outs of Lego's past creations, including their sets, stories, minifigures, and what key sets to buy now that the theme has ended. Additionally, you will be able to add sets to your wishlist to help guide your persuit of Lego's harder to find retro sets."
    document.getElementById("border").appendChild(wp);
}

function themes(){
    //Creates setup for the page
    setup()
    const main = document.createElement("div");
    main.setAttribute("id","main");
    main.setAttribute("class","main");
    document.body.appendChild(main);

    const border = document.createElement("div");
    border.setAttribute("id","border");
    border.setAttribute("class","border");
    document.getElementById("main").appendChild(border);

    const header = document.createElement("h1");
    header.innerHTML = "Themes"
    document.getElementById("border").appendChild(header);

    document.getElementById("border").appendChild(document.createElement("hr"));

    const wp = document.createElement("p");
    wp.innerHTML = "Throughout it's history, Lego has created sets for a variety of in-house themes since the creation of the minifigure in 1978, rangeing form medieval knights and castles, to the exploration of deep space. Each of these themes carry their own story through their sets, official comic/video serieses and the cretivity of builders. By clicking on each theme, you will be presented by it's various sub-themes, or in the case in which the theme only produced one wave, the sets and story of that theme"
    document.getElementById("border").appendChild(wp);


    

    //Cretes connection to the JSON file
    $.ajax({
        type: 'GET',
        url: 'Themes.json',
        success: function(data){
            //Creates a boc for each theme in the database
            for(i=0;i<data.Themes.length;i++){
                let box = new Theme(data.Themes[i])
            }
                
            
        }
        
    })
}

function Sets(id){
    //Clears page and cretes navbar
    setup()
    const main = document.createElement("div");
    main.setAttribute("id","main");
    main.setAttribute("class","main");
    document.body.appendChild(main);

    const border = document.createElement("div");
    border.setAttribute("id","border");
    border.setAttribute("class","border");
    document.getElementById("main").appendChild(border);

    const header = document.createElement("h1");
    header.innerHTML = "Themes"
    header.setAttribute("id","header")
    document.getElementById("border").appendChild(header);

    document.getElementById("border").appendChild(document.createElement("hr"))
    //Creates connectiuon to json file
    $.ajax({
        type: 'GET',
        url: 'Themes.json',
        success: function(data){
            //Changes header of page to the theme that was selected
            document.getElementById("header").innerHTML = data.SubThemes[id - 1][2].Name
    //        const wp = document.createElement("p");
    //        wp.innerHTML = data.Themes[id -1][2].Desc
    //        document.getElementById("border").appendChild(wp);
        
            //Creates objects for the subthemes within the selected theme
            for(i=0;i<data.Sets.length;i++){
                console.log(id)
                if(data.Sets[i][0].SubID == id){
                    let box = new Set(data.Sets[i])
                }
            }
                
            
        }
        
    })

}



//Calls the initial function
Welcome()
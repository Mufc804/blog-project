function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var textEntry = document.contactForm.mobile.value;

    var nameErr = emailErr = mobileErr = textErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your phone number");
    } else {
        var regex = /^[0-9]{10}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid phone number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    // Validate text entry
    if (textEntry == ("")) {
        printError("textErr", "Please enter a message");
    } else {
        printError("textErr", "");
        textErr = false;
    }

   
    if (nameErr || emailErr || mobileErr || textErr == true) {
        return false;
    } else {
        alert('You have submitted the form..')
    }
}

var blogs = [
    {
        "title": "Manchester United",
        "detail": "Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football. Nicknamed 'the Red Devils', the club was founded as Newton Heath LYR Football Club in 1878, changed its name to Manchester United in 1902 and moved to its current stadium, Old Trafford, in 1910.Manchester United have won more trophies than any other club in English football, with a record 20 League titles, 12 FA Cups, five League Cups and a record 21 FA Community Shields. United have also won three UEFA Champions Leagues, one UEFA Europa League, one UEFA Cup Winners' Cup, one UEFA Super Cup, one Intercontinental Cup and one FIFA Club World Cup. In 1998–99, the club became the first in the history of English football to achieve the continental European treble. By winning the UEFA Europa League in 2016–17, they became one of five clubs to have won all three main UEFA club competitions. The 1958 Munich air disaster claimed the lives of eight players. In 1968, under the management of Matt Busby, Manchester United became the first English football club to win the European Cup. Alex Ferguson won 38 trophies as manager, including 13 Premier League titles, 5 FA Cups and 2 UEFA Champions Leagues, between 1986 and 2013, when he announced his retirement. Manchester United was the highest-earning football club in the world for 2016–17, with an annual revenue of €676.3 million, and the world's third most valuable football club in 2019, valued at £3.15 billion ($3.81 billion). As of 2015, it is the world's most valuable football brand, estimated to be worth $1.2 billion. From 2012, some shares of the club were listed on the New York Stock Exchange, although the Glazer family retains overall ownership and control of the club.",
        "image": "./img/Manchester-United.png",
        "date": "2014-01-01T23:28:56.782Z"
    },
    {
        "title": "Real Madrid",
        "detail": "Real Madrid Club de Fútbol,Founded on 6 March 1902 as Madrid Football Club, the club has traditionally worn a white home kit since inception. The word real is Spanish for 'royal' and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 81,044-capacity Santiago Bernabéu Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrid's members (socios) have owned and operated the club throughout its history.The club was estimated to be worth €3.8 billion ($4.2 billion) in 2019In domestic football, the club has won 66 trophies; a record 34 La Liga titles, 19 Copa del Rey, 11 Supercopa de España, a Copa Eva Duarte, and a Copa de la Liga. In European and worldwide competitions, Real Madrid have won a record 26 trophies; a record 13 European Cup/UEFA Champions League titles, two UEFA Cups and four UEFA Super Cups. In international football, they have achieved a record seven club world championships.Real Madrid was recognised as the FIFA Club of the 20th Century on 11 December 2000 with 42.35% of the vote, and received the FIFA Centennial Order of Merit on 20 May 2004. The club was also awarded Best European Club of the 20th Century by the IFFHS on 11 May 2010. In June 2017, the team succeeded in becoming the first club to win consecutive Champions League titles, then made it three in a row and four in five seasons in May 2018, extending their lead atop the UEFA club rankings. As of 2020, Real Madrid are ranked third behind Bayern Munich and Barcelona.",
        "image": "./img/Real-Madrid.png",
        "date": "2014-01-01T23:28:56.782Z"
    }, {
        "title": "Barcelona",
        "detail": "Futbol Club Barcelona, Founded in 1899 by a group of Swiss, Spanish, English, and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto 'Més que un club' ('More than a club'). Unlike many other football clubs, the supporters own and operate Barcelona. It is the fourth-most valuable sports team in the world, worth $4.06 billion, and the world's richest football club in terms of revenue, with an annual turnover of €840,8 million.Domestically, Barcelona has won a record 74 trophies: 26 La Liga, 30 Copa del Rey, 13 Supercopa de España, 3 Copa Eva Duarte, and 2 Copa de la Liga trophies, as well as being the record holder for the latter four competitions. In international club football, the club has won 20 European and worldwide titles: 5 UEFA Champions League titles, a record 4 UEFA Cup Winners' Cup, a joint record 5 UEFA Super Cup, a record 3 Inter-Cities Fairs Cup, and 3 FIFA Club World Cup. Barcelona was ranked first in the International Federation of Football History & Statistics Club World Ranking for 1997, 2009, 2011, 2012, and 2015 and currently occupies the third position on the UEFA club rankings. The club has a long-standing rivalry with Real Madrid, and matches between the two teams are referred to as El Clásico. Barcelona is one of the most widely supported teams in the world, and the club has one of the largest social media following in the world among sports teams.",
        "image": "./img/Barcelona.png",
        "date": "2014-01-01T23:28:56.782Z"
    }, {
        "title": "Bayern Munich",
        "detail": "FC Bayern München, is a German professional sports club based in Munich, Bavaria. It is best known for its professional football team, which plays in the Bundesliga, the top tier of the German football league system, and is the most successful club in German football history, having won a record 30 national titles, including eight consecutively since 2013, and 20 national cups, along with numerous European honours.FC Bayern Munich was founded in 1900 by 11 football players, led by Franz John. Although Bayern won its first national championship in 1932, the club was not selected for the Bundesliga at its inception in 1963. The club had its period of greatest success in the middle of the 1970s when, under the captaincy of Franz Beckenbauer, it won the European Cup three consecutive times (1974–1976). Overall, Bayern has reached eleven European Cup/UEFA Champions League finals, most recently winning their sixth title in 2020 as part of a continental treble. By winning their sixth Champions League trophy on 23 August 2020, Bayern became only the second European club in history to achieve the continental treble twice. Bayern has also won one UEFA Cup, one European Cup Winners' Cup, two UEFA Super Cups, one FIFA Club World Cup and two Intercontinental Cups, making it one of the most successful European clubs internationally and the only German club to have won both international titles. Since the formation of the Bundesliga, Bayern has been the dominant club in German football, winning 30 titles. The club has traditional local rivalries with 1860 Munich and 1. FC Nürnberg, as well as with Borussia Dortmund since the mid-1990s.Since the beginning of the 2005–06 season, Bayern has played its home games at the Allianz Arena. Previously the team had played at Munich's Olympiastadion for 33 years. The team colours are red and white, and the team crest shows the white and blue flag of Bavaria. In terms of revenue, Bayern Munich is the largest sports club in Germany and the fourth highest-earning football club in the world, generating €660.1 million in 2020.",
        "image": "./img/Bayern-Munich.png",
        "date": "2014-01-01T23:28:56.782Z"
    }
];


var createBlog = function (title, detail, image, date) {
    var div = document.createElement("div");
    var titleElem = document.createElement("h2");
    var detailElem = document.createElement("p");
    var img = document.createElement("img");
    var timeElem = document.createElement("h5");
    var clear = document.createElement("hr");
    titleElem.innerText = title;
    detailElem.innerText = detail;
    timeElem.innerText = date;
    timeElem.classList.add("text-muted");
    img.src = image;
    img.style.float = "right";
    img.style.width = "360px";
    img.style.height = "360px";
    img.classList.add("img-responsive");
    clear.style.clear = "both";
    div.appendChild(img);
    div.appendChild(titleElem);
    div.appendChild(timeElem);
    div.appendChild(detailElem);
    div.appendChild(clear);
    return div;
}

var addToDOM = function (parent, child) {
    parent.appendChild(child);
}

var load_blogs = function () {
    var blog_space = document.getElementById("blog-post");
    for (blog of blogs) {
        var elem = createBlog(blog.title, blog.detail, blog.image, blog.date);
        addToDOM(blog_space, elem);
    }
    return;
}
var checkAll = function(){
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    var file = document.getElementById("file").value;
    var date = new Date();
    var success = true;
    if(title==""){
        if(document.getElementById("title-error").classList.contains("d-none")){
            document.getElementById("title-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("title-error").classList.contains("d-none")){
            document.getElementById("title-error").classList.toggle("d-none");
        }
    }
    if(detail==""){
        if(document.getElementById("detail-error").classList.contains("d-none")){
            document.getElementById("detail-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("detail-error").classList.contains("d-none")){
            document.getElementById("detail-error").classList.toggle("d-none");
        }
    }
    if(file==""){
        if(document.getElementById("file-error").classList.contains("d-none")){
            document.getElementById("file-error").classList.toggle("d-none");
        }
        success = false;
    }else{
        if(!document.getElementById("file-error").classList.contains("d-none")){
            document.getElementById("file-error").classList.toggle("d-none");
        }
    }
    
    if(success){
        
        var file = document.getElementById("file").files[0];
        var reader = new FileReader();
        var filename = "";
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            filename = e.target.result;
            var blog = createBlog(title,detail,filename,date);
            var blog_space = document.getElementById("blog-post");
            blog_space.removeChild(blog_space.children[0]);
            blog_space.appendChild(blog);
            document.getElementById("post").disabled = false;
            window.scroll(0,1000000);
        }  
        
    }

    return false;
}
var cancelAction = function(){
    var blog_space = document.getElementById("blog-post");
        blog_space.removeChild(blog_space.children[0]);
        document.getElementById("post").disabled = false;
}



var post_new = function(btn){
    btn.disabled = true;
    window.scroll(0,0);
    var blog_space = document.getElementById("blog-post");
    var new_blog = document.createElement("form");
    new_blog.setAttribute("action","javascript:void(0)");
    var div1 = document.createElement("div");
    div1.classList.add("form-group");
    var label1 = document.createElement("label");
    label1.innerText = "Title: ";
    label1.setAttribute("for","title");
    
    var title_input = document.createElement("input");
    title_input.classList.add("form-control");
    title_input.setAttribute("id","title");
    title_input.type = "text";
    var title_error = document.createElement("small");
    title_error.id = "title-error";
    title_error.innerText = "Your title is blank!! Please type something...";
    title_error.classList.add("text-danger");
    title_error.classList.add("d-none");

    var div2 = document.createElement("div");
    div2.classList.add("form-group");
    var label2 = document.createElement("label");
    label2.innerText = "Main Blog: ";
    label2.setAttribute("for","detail");

    var input1 = document.createElement("textarea");
    input1.classList.add("form-control");
    input1.rows = "3";
    input1.setAttribute("id","detail");

    var detail_error = document.createElement("small");
    detail_error.id = "detail-error";
    detail_error.innerText = "Your textarea is blank!! Please type something...";
    detail_error.classList.add("text-danger");
    detail_error.classList.add("d-none");

    var div3 = document.createElement("div");
    div3.classList.add("form-group");
    var label3 = document.createElement("label");
    label3.innerText = "Image File: ";
    label3.setAttribute("for","detail");

    var input2 = document.createElement("input");
    input2.type = "file";
    input2.classList.add("form-control");
    input2.accept = ".jpg, .jpeg, .png";
    input2.setAttribute("id","file");

    

    var file_error = document.createElement("small");
    file_error.id = "file-error";
    file_error.innerText = "You need one image for posting image";
    file_error.classList.add("text-danger");
    file_error.classList.add("d-none");
    
    var file_help = document.createElement("small");
    file_help.id = "file-help";
    file_help.innerText = "Upload only support .png, .jpg, .jepg format...";
    file_help.classList.add("text-muted");
    // file_help.classList.add("d-none");

    var div4 = document.createElement("div");
    div4.classList.add("form-group");
    var input3 = document.createElement("button");
    var input4 = document.createElement("button");
    input3.classList.add("btn");
    input3.classList.add("btn-primary");
    input3.innerText = "Post Blog";
    input3.addEventListener("click",checkAll);
    input4.classList.add("btn");
    input4.classList.add("btn-danger");
    input4.innerText = "Cancel";
    input4.addEventListener("click",cancelAction);
    input4.style.marginLeft = "5px";

    div1.appendChild(label1);
    div1.appendChild(title_input);
    div1.appendChild(title_error);
    div2.appendChild(label2);
    div2.appendChild(input1);
    div2.appendChild(detail_error);
    div3.appendChild(label3);
    div3.appendChild(input2);
    div3.appendChild(file_help);
    div3.appendChild(file_error);
    div4.appendChild(input3);
    div4.appendChild(input4);
    new_blog.appendChild(div1);
    new_blog.appendChild(div2);
    new_blog.appendChild(div3);
    new_blog.appendChild(div4);
    blog_space.insertBefore(new_blog,blog_space.children[0]);

}


let category = document.getElementById("category")
let country = document.getElementById("country")
let content = document.getElementById("content")
let submitBtn = document.getElementById("submitBtn")
let data_hide = document.getElementsByClassName(".data_hide")
let news_img = document.getElementById("news_img")
let heading = document.getElementById("heading")
let source = document.getElementById("source")
let news_container = document.getElementsByClassName(".news_container")
let next = document.getElementById("next")
let offcial = document.getElementById("official")
getinfo = async (event) => {
    event.preventDefault();
    let categ = category.value;
    let count = country.value;
    if (count === "" && categ === "") {
        content.innerText = "Please Enter country code and Category";
        news_img.src = "images/404.png"
        heading.innerText = "Noting to show"
        source.innerText = ""

    }

    else {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${count}&category=${categ}&apiKey=a148ab49564c464395cd8da3e6b92d0b`

            const respone = await fetch(url)
            const data = await respone.json()
            const arrdata = [data];
            const pos = Math.floor(Math.random(1, 50) * 10)
            console.log(arrdata[0].articles[pos])
            let news_data = arrdata[0].articles[pos].description
            let news_url = arrdata[0].articles[pos].url
            let image = arrdata[0].articles[pos].urlToImage
            let title_news = arrdata[0].articles[pos].title
            if (news_data == null) {
                content.innerText = "No headlines (click on know more for more updates";

            }
            else {
                content.innerText = `${news_data}`;

            }
            offcial.href = news_url
            if (image == null) {
                news_img.src = "images/404.png"

            }
            else {
                news_img.src = `${image}`
            }
            heading.innerText = `${title_news}`
            source.innerText = ""

        } catch (error) {
            content.innerText = "Please Enter valid country code and Category";
            news_img.src = "images/404.png"
            heading.innerText = "SOMETHING WENT WRONG TRY AGAIN"
            source.innerText = ""

        }
    }
}


submitBtn.addEventListener("click", getinfo)






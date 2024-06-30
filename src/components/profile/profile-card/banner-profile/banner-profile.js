import WebComponent, { Component } from "#WebComponent";

export default Component({
    tagName: "banner-profile",
    styleCSS: `
        .banner {
            width: 100%;
            height: 220px; 
            background-color: #ffcc00;
            background-size: cover;
            background-position: center;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .img-banner {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        } 
        .small-circle {
            position: absolute;
            top: 1%;
            right: 1%;
            z-index: 1;
            width: 50px;
            aspect-ratio: 1 / 1; /* Mantiene una proporción de 1:1 para asegurar que sea un círculo */
            background-color:#8D8DDA;
            border-radius: 50%;
            border: none;
        }
        .icon-btn{
            width: 30px;
            height: 30px;
            object-fit: cover;
            border-radius: 50%;
        }
    `
},
class BannerProfile extends WebComponent
{
render() {
    return `
        <div class="banner mt-0">
            <button class="small-circle text-light d-flex justify-content-center align-items-center"> <img src="/src/img/icons/edit.png" class="icon-btn"> </button>
            <img src="https://via.placeholder.com/800x200" class="img-banner" alt="Banner">
        </div>
    `
}
})
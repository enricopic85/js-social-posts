const post=[
    {
        id:1,
        nomeAutore: "Phil Mangione",
        fotoAutore: "https://i.picsum.photos/id/819/300/300.jpg?hmac=o_tofBTN76_8cQzVqBszEFWPHgnSKuTw05WAKcycVCo",
        data: "6/25/2021",
        testo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, nulla aperiam alias facilis esse perferendis voluptatem atque? Iste, placeat non voluptatem dolores nisi reiciendis. Error iste amet officiis optio in.",
        immagine:"https://i.picsum.photos/id/819/300/300.jpg?hmac=o_tofBTN76_8cQzVqBszEFWPHgnSKuTw05WAKcycVCo",
        numeroLike:0
    },
    {
        id:2,
        nomeAutore: "Sofia Perlari",
        fotoAutore: "https://i.picsum.photos/id/819/300/300.jpg?hmac=o_tofBTN76_8cQzVqBszEFWPHgnSKuTw05WAKcycVCo",
        data: "9/3/2021",
        testo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, nulla aperiam alias facilis esse perferendis voluptatem atque? Iste, placeat non voluptatem dolores nisi reiciendis. Error iste amet officiis optio in.",
        immagine:"https://i.picsum.photos/id/819/300/300.jpg?hmac=o_tofBTN76_8cQzVqBszEFWPHgnSKuTw05WAKcycVCo",
        numeroLike:0
    }
];
let containerHtml=document.getElementById("container");

for(i=0;i<post.length;i++){
   let innerPost=post[i];
    containerHtml.innerHTML +=` 
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=${innerPost.fotoAutore} alt="${innerPost.nomeAutore}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${innerPost.nomeAutore}</div>
                <div class="post-meta__time">${innerPost.data}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${innerPost.testo}</div>
    <div class="post__image">
        <img src="${innerPost.immagine}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="${innerPost.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${innerPost.id}" class="js-likes-counter">${innerPost.numeroLike}</b> persone
            </div>
        </div> 
    </div>            
    </div>
`
}
let posts=document.querySelectorAll('.like-button');
for(let i=0;i<posts.length;i++){
    posts[i].addEventListener('click',function(){
        let counter=document.getElementById(`like-counter-${i+1}`);
        post[i].numeroLike++;
        counter.innerHTML=post[i].numeroLike;
        posts[i].classList.add("like-button--liked")
    })
}




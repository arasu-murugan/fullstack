async function liked() {
    return new promise( (like)=>{
        like(" liked Successfully")
    })
    
} 

async function commentCode() {
    return new promise( (commentPosted)=>{
        commentPosted("Comment posted Successfully in the post")
    })
    
} 
async function createPost() {
    return new promise( (cPost)=>{
        cPost(" post Create Successfully")
    })

    var [posts,comment,like] = await promise.all [post,commentCode(),likeCode]
    console.log (posts);
    console.log (comment);
    console.log (like);
    
} 

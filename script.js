function init(){
    new Vue({
        el: '#app', 
        data: {
            show : "active",          
            imageNumber : 1,
            imageFormat: ".jpg",
            imagePath : "./img/paesaggio-",
        },
        methods: {
            nextPic: function(){
                if(this.imageNumber == 4){
                    this.imageNumber = 1;
                } else {
                    this.imageNumber = this.imageNumber+1;
                }              
            },
            prevPic: function(){
                if(this.imageNumber == 1){
                    this.imageNumber = 4;
                } else {
                    this.imageNumber = this.imageNumber-1;
                }
            }
        }    
            
    })
}

$(init);
    


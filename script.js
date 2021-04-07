function init(){
    new Vue({
        el: '#app', 

        data: {
            show : "active",          
            imageNumber : 1,
            imageFormat: ".jpg",
            imagePath : "./img/paesaggio-",
            bgClass: "",
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
            },
            slideShow: function(){
                const self = this;
                const clock = setInterval(function(){
                    if(self.imageNumber == 4){
                        self.imageNumber = 1;
                    } else {
                        self.imageNumber = self.imageNumber+1;
                    }
                    return clock; 
                },2000)
            },
        }      
            
    })
}

$(init);
    


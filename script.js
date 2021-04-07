function init(){
    new Vue({
        el: '#app', 

        data: {
            show : "active",          
            imageNumber : 0,
            imageFormat: ".jpg",
            imagePath : "./img/paesaggio-",
            bgClass: "",
            point: "point",
        },

        methods: {           
            nextPic: function(){
                if(this.imageNumber == 3){
                    this.imageNumber = 0;
                } else {
                    this.imageNumber = this.imageNumber+1;
                }              
            },
            prevPic: function(){
                if(this.imageNumber == 0){
                    this.imageNumber = 3;
                } else {
                    this.imageNumber = this.imageNumber-1;
                }
            },
            slideShow: function(){
                this.clock = setInterval(this.nextPic,2000);
                // setInterval( ()=>this.nextPic(),2000) ;            
            },
            slideStop: function(){
                clearInterval(this.clock);
            },
            selectImg: function(index){
                this.imageNumber = index;
            }
            
        }      
            
    })
}

$(init);
    


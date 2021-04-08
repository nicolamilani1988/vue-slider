function init(){
    new Vue({
        el: '#app', 

        data: {
            imageNumber : 1,
            maxNum : 4 // valore da aumentare se aggiungo foto
        },

        methods: {           
            nextPic: function(){
                if(this.imageNumber == (this.maxNum)){
                    this.imageNumber = 1;
                } else {
                    this.imageNumber = this.imageNumber+1;
                }              
            },
            prevPic: function(){
                if(this.imageNumber == 1){
                    this.imageNumber = (this.maxNum);
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
            selectImg: function(elem){
                this.imageNumber = elem;
            }
            
        }      
            
    })
}

$(init);
    


function init(){
    new Vue({
        el: '#app', 

        data: {
            imageNumber : 0,
            maxNum : 4 // valore da aumentare se aggiungo foto
        },

        methods: {           
            nextPic: function(){
                if(this.imageNumber == (this.maxNum-1)){
                    this.imageNumber = 0;
                } else {
                    this.imageNumber = this.imageNumber+1;
                }              
            },
            prevPic: function(){
                if(this.imageNumber == 0){
                    this.imageNumber = (this.maxNum-1);
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
    


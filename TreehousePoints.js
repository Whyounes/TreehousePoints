/*
 * TreehousePoints.js
 * v0.1 - 2014
 * https://github.com/Whyounes/TreehousePoints
 * (c) RAFIE Younes; MIT License
 */

(function(){
    var th = window.th = function( options ){
        // options = { th_id: "younesrafie", wrapper: "wrapper_id", circle: { width: 10, radius: 60 } }
        
        if( ! options.th_id || ! options.wrapper ) return;
        
        this._url = "http://teamtreehouse.com/" + options.th_id +".json";
        this._wrap = options.wrapper;
        this.circle = options.circle;
        this.circle.values = [];
        this.count = 0; 
        this.colors = { 
                        "HTML":"#39ADD1",
                        "CSS":"#2570A8",
                        "JavaScript":"#913B53",
                        "Ruby":"#E15258",
                        "iOS":"#53BBB4",
                        "Business":"#F9845B",
                        "Android":"#51B46D",
                        "PHP":"#665885",
                        "Wordpress":"#9D8AC7",
                        "Design":"#E0AB18",
                        "Development Tools":"#556B7C",
                        "others": "#e2e5e8",
                        "none":"#D4D9DD"
                    };

        this.getJsonProfile();
    };

    th.prototype = {
        getJsonProfile: function(){
            //i hate the other solutions
            that = this;

            $.ajax({
                type: 'GET',
                url: this._url,
                dataType: 'json',
                success: function( data ){
                    if( ! data.points ) return;
                    that.initCircle( data.points );
                },
                error: function( xhr, text, err ){
                    if( xhr.status == 404 )
                        $( "#" + that._wrap ).append( "<h3>I think this profile doesn't exist :(</h3>" );
                }
            });
        },
        initCircle: function( points ){
            var point,
                color,
                count = 0,
                pw_html_start = "<div class='points_wrap' style='float: left;width: 70%;padding: 30px;' >"+
                "<ul style='list-style:none;'>",
                pw_html_li = "",
                pw_html_end = "</ul></div>";
            
            this.count = points.total;           
            this.circle.id = this._wrap;
            this.circle.text = this.count;
            delete points.total;// to avoid a test inside the loop
            
            points = this.fixTotal( points );

            for( point in points ){
                count += points[ point ];
                color = ( points[ point ] > 0 ? this.colors[ point ] : this.colors[ "none" ] );
                
                this.circle.values.push({
                    percent: ( ( points[ point ] * 100 ) / this.count ), 
                    color: color
                });
                
                pw_html_li += "<li style='float: left; width: 25%; margin: 2%;'>"+
                    "<span class='topic_color' style='width: 15px;height: 15px;background-color: "+ color +";float: left;margin: 5px; border-radius: 50%;'></span>"+
                    "<span class='points' style='font-weight: bold;'>"+ points[ point ] +"</span><span class='topic' style='font-size: 12px; display: block; color: #999;'>"+ point +"</span>"+
                    "</li>";
            }//for
           
            new Circle( this.circle );
            $( "#" + this._wrap ).append( pw_html_start + pw_html_li + pw_html_end );
        },
        fixTotal: function( points ){
            // The points count does not equal the sum of points earned from different topics it also include points from answering on the forum etc..
            var total = 0;

            for( point in points ){
                total += points[ point ];
            }
            points.others = this.count - total;
            
            return points;
        }
    };
})();

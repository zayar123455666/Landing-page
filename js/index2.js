
    var EventUtil={
        addHandler:function(element,type,handler){
        if(element.addEventListner){
          element.addEventListener(ype,handler,false);
        }
      else if(element.attachEvent){
        element.attachEvent("on"+type,handler);
      } 
      else{
        element["on"+type]=handler;
      }
        },
        removeHandler:function(element,type,handler){
          if(element.addEventListner){
            element.removeEventListener(ype,handler,false);
          }
        else if(element.attachEvent){
          element.detachEvent("on"+type,handler);
        } 
        else{
          element["on"+type]=null;
        }
        },
        getEvent:function(event){
          return event?event:window.event;
        },
        getTarget:function(event){
          return event.target||event.srcElement;

        },
        preventDefault:function(event){
          if(event.preventDefault){
            event.preventDefault();
          }
          else{
            event.returnValue=false;
          }
        },
        stopPropagation:function(event){
          if(event.stopPropagation){
            event.stopPropagation();
          }
          else{
            event.cancelBubble=true;
          }
        }
    }
 
 
             $(document).ready(function(){

                $('#resetBtn').click(function(){

                    var item=$('#itemValue').val();

                    var newItem=$('<div></div>');

                    if(item.length==0){
                        alert("empty item!! please enter valid item");
                    }

                    else if(item.length>30){
                        alert("item length must be less than 30");
                    }

                    else{

                        var btn=$('<button></button>').text('delete');

                        btn.click(function(){
                        

                        $(this).parent().fadeOut(400,function(){

                            $(this).remove();
                            $(this).parent().remove();
                            colorChange();
                            
                        });
                    
                    });

                    newItem.text(item);

                    newItem.addClass('a');

                    $('.itemHolder').append(newItem);

                    newItem.append(btn);

                    colorChange();

                     function colorChange(){

                        $('.a:odd').css('background-color','lightgreen');
                        $('.a:even').css('background-color','skyblue');

                    }

                     }
                    
                });

        });

//////////////////////////iPhone-section/////////////////////////////////////////////////////////////////

document.getElementById('mynas_one').addEventListener('click',function(){
    var show_mynas_one_value = parseInt(document.getElementById('show_value_iphone').innerHTML);
    if(show_mynas_one_value>0){
        document.getElementById('mynas_one').style.background="red";
        document.getElementById('plus_one').style.background="white";
        show_mynas_one_value = show_mynas_one_value -1;
        document.getElementById('show_value_iphone').innerHTML=show_mynas_one_value;
        
        var iPhone_price=parseInt(document.getElementById('iPhone_price').innerHTML);
        var new_iPhone_price=iPhone_price-1219;
        document.getElementById('iPhone_price').innerHTML=new_iPhone_price;
        show();
        

    }
});

document.getElementById('plus_one').addEventListener('click',function(){
    var show_plus_one_value = parseInt(document.getElementById('show_value_iphone').innerHTML);
    if(show_plus_one_value>-1){
        document.getElementById('plus_one').style.background="green";
        document.getElementById('mynas_one').style.background="white";
        show_plus_one_value = show_plus_one_value+1;
        document.getElementById('show_value_iphone').innerHTML=show_plus_one_value;
        var iPhone_price=parseInt(document.getElementById('iPhone_price').innerHTML);
        var new_iPhone_price=iPhone_price+1219;
        
        console.log(new_iPhone_price);
        document.getElementById('iPhone_price').innerHTML=new_iPhone_price;
        show();
    }
});



///////////////////////////////////////////////////cover_section//////////////////

document.getElementById('mynas_two').addEventListener('click',function(){
    var show_mynas_two_value = parseInt(document.getElementById('show_value_cover').innerHTML);
    if(show_mynas_two_value>0){
        document.getElementById('mynas_two').style.background="red";
        document.getElementById('plus_two').style.background="white";
        show_mynas_two_value = show_mynas_two_value -1;
        document.getElementById('show_value_cover').innerHTML=show_mynas_two_value;
        
        var cover_price=parseInt(document.getElementById('cover_price').innerHTML);
        var new_cover_price=cover_price-59;
        document.getElementById('cover_price').innerHTML=new_cover_price;
        show();

    }
});

document.getElementById('plus_two').addEventListener('click',function(){
    var show_plus_two_value = parseInt(document.getElementById('show_value_cover').innerHTML);
    if(show_plus_two_value>-1){
        document.getElementById('plus_two').style.background="green";
        document.getElementById('mynas_two').style.background="white";
        show_plus_two_value = show_plus_two_value+1;
        document.getElementById('show_value_cover').innerHTML=show_plus_two_value;
        var cover_price=parseInt(document.getElementById('cover_price').innerHTML);
        var new_cover_price=cover_price+59;
        
        document.getElementById('cover_price').innerHTML=new_cover_price;
        show();
    }
});


//////////////////////////////////////////total_section/////////////////////////////

 function show (){
    var cover_price=parseInt(document.getElementById('cover_price').innerHTML);
var iPhone_price=parseInt(document.getElementById('iPhone_price').innerHTML);
var sub_total_price=cover_price+iPhone_price;
     var show_value_iphone=parseInt(document.getElementById('show_value_iphone').innerHTML);
     var show_value_cover=parseInt(document.getElementById('show_value_cover').innerHTML);
     show_value_iphone*=12;
     show_value_cover*=3;
     var tax =show_value_iphone+show_value_cover;
     var total_price=sub_total_price+tax;
document.getElementById('show_subtotal').innerHTML=sub_total_price;
document.getElementById('show_tax').innerHTML=tax;
document.getElementById('show_total').innerHTML=total_price;
}



/////////check_out  section????//////////

document.getElementById('check_out').addEventListener('click',function (){

    document.getElementById('phone_section').style.display="none";
    document.getElementById('done_section').style.display="block";
   
});
document.getElementById('reset').addEventListener('click',function (){

    document.getElementById('phone_section').style.display="block";
    document.getElementById('done_section').style.display="none";
   
});
////////////////////////close_section//////////////////////

document.getElementById('crose_one').addEventListener('click',function(){
    document.getElementById('phone').style.display="none";
    document.getElementById('phone_section_refresh_one').style.display="block";
});
document.getElementById('crose_two').addEventListener('click',function(){
    document.getElementById('cover').style.display="none";
    document.getElementById('phone_section_refresh_two').style.display="block";
});
////////////////////////////////////////////////refresh/////////////////////////

document.getElementById('close_one-ref').addEventListener('click',function(){
    document.getElementById('phone').style.display="flex";
    document.getElementById('phone_section_refresh_one').style.display="none";
}); 
document.getElementById('close_two-ref').addEventListener('click',function(){
    document.getElementById('cover').style.display="flex";
    document.getElementById('phone_section_refresh_two').style.display="none";
});

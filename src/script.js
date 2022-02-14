// var table_add ="";
var mall = [];

$(document).ready(function()
{

});
function add_product()
{
    $("#success").css("display","none");
    $("#error").css("display","none");
    let table_add ="";
    let sku = $("#product_sku").val();
    let name =$("#product_name").val();
    let price = $("#product_price").val();
    let quantity = $("#product_quantity").val();  
    let exp = /^[a-zA-Z\s]+$/;
    let name_check = exp.test(name);

    // check validation 
    if(sku =="" || name == "" || price == "" || quantity == "" || isNaN(price) || isNaN(quantity) || !name_check)
    {
        $("#error").css("display","block")
        return;
    }
    for(var i=0;i<mall.length;i++)
    {
        if(sku == mall[i]["SKU"])
        {
            $("#error").css("display","block")
            return;
        }
    }
    mall.push({"SKU":sku,"NAME":name,"PRICE":price,"QUANTITY":quantity}); //PRODUCT JSON
    $("#success").css("display","block");


    for(var i=0;i<mall.length;i++)
    {
       
        table_add += `<tr id=${mall[i]["SKU"]}><td>${mall[i]["SKU"]}</td><td>${mall[i]["NAME"]}</td><td>${mall[i]["PRICE"]}</td><td>${mall[i]["QUANTITY"]}</td><td><a href="#" class="edit" id=edit${mall[i]["SKU"]} onclick=editform(${mall[i]["SKU"]})>Edit</a><a href="#" class="delete" id=delete${mall[i]["SKU"]} onclick=display_delete_form(${mall[i]["SKU"]})>Delete</a></td</tr>`;
       
    } // TO display in HTML
    $("#display1").html(table_add);
   

}

var get_udate_index;
function editform(get_sku)
{

    $("#add_product").css("display","none");
    $("#update_product").css("display","block");
    $("#error").css("display","none");
    $("#success").css("display","none");
    for(var i=0;i<mall.length;i++)
    {
        if(mall[i]["SKU"] == get_sku)
        {
            get_udate_index = i;
            $("#product_sku").val(mall[i]["SKU"]);
            $("#product_name").val(mall[i]["NAME"]);
            $("#product_price").val(mall[i]["PRICE"]);
            $("#product_quantity").val(mall[i]["QUANTITY"]);
            break;
        }
    }
    
    
}
function update()
{
    $("#add_product").css("display","block");
    $("#update_product").css("display","none");
    $("#error").css("display","none");
  
    let sku = $("#product_sku").val();
    let name =$("#product_name").val();
    let price = $("#product_price").val();
    let quantity = $("#product_quantity").val();  
    let exp = /^[a-zA-Z\s]+$/;
    let name_check = exp.test(name);

    // check validation 
    if(sku =="" || name == "" || price == "" || quantity == "" || isNaN(price) || isNaN(quantity) || !name_check)
    {
        $("#error").css("display","block");
        return;
    }

    mall[get_udate_index]["SKU"] = $("#product_sku").val();
    mall[get_udate_index]["NAME"] = $("#product_name").val();
    mall[get_udate_index]["PRICE"] =$("#product_price").val();
    mall[get_udate_index]["QUANTITY"] =$("#product_quantity").val();

    let table_add ="";
    for(var i=0;i<mall.length;i++)
    {
       
        table_add += `<tr id=${mall[i]["SKU"]}><td>${mall[i]["SKU"]}</td><td>${mall[i]["NAME"]}</td><td>${mall[i]["PRICE"]}</td><td>${mall[i]["QUANTITY"]}</td><td><a href="#" class="edit" id=edit${mall[i]["SKU"]} onclick=editform(${mall[i]["SKU"]})>Edit</a><a href="#" class="delete" id=delete${mall[i]["SKU"]} onclick=display_delete_form(${mall[i]["SKU"]})>Delete</a></td</tr>`;
       
    } // TO display in HTML
    $("#display1").html(table_add);
    
}

function display_delete_form(get_sku)
{
    $("#add_product_form").css("display","none");
    $("#yes_no").css("display","block");
    var disp = `<p>Are you sure want to delete this item</p>
    <button id="yes" onclick="deleteform(${get_sku})">Yes</button>
    <button id="no" onclick="remainform()">No</button>`;

    $("#yes_no").html(disp);



   
}
function deleteform(get_sku)
{
    for(var i=0;i<mall.length;i++)
    {
        if(mall[i]["SKU"] == get_sku)
        {
            mall.splice(i,1);
            break;
        }
    }
    // document.getElementById("add_product_form").style.display = "block";
    // document.getElementById("yes_no").style.display = "none";
    $("#add_product_form").css("display","block");
    $("#yes_no").css("display","none");


    let table_add ="";
    for(var i=0;i<mall.length;i++)
    {
       
        table_add += `<tr id=${mall[i]["SKU"]}><td>${mall[i]["SKU"]}</td><td>${mall[i]["NAME"]}</td><td>${mall[i]["PRICE"]}</td><td>${mall[i]["QUANTITY"]}</td><td><a href="#" class="edit" id=edit${mall[i]["SKU"]} onclick=editform(${mall[i]["SKU"]})>Edit</a><a href="#" class="delete" id=delete${mall[i]["SKU"]} onclick=display_delete_form(${mall[i]["SKU"]})>Delete</a></td</tr>`;
       
    } // TO display in HTML


    $("#display1").html(table_add)
    $("#product_sku").val("");
    $("#product_name").val("");
    $("#product_price").val("");
    $("#product_quantity").val("");



    
}
function remainform()
{
    $("#add_product_form").css("display","block");
    $("#yes_no").css("display","none");
    let table_add ="";
    for(var i=0;i<mall.length;i++)
    {
       
        table_add += `<tr id=${mall[i]["SKU"]}><td>${mall[i]["SKU"]}</td><td>${mall[i]["NAME"]}</td><td>${mall[i]["PRICE"]}</td><td>${mall[i]["QUANTITY"]}</td><td><a href="#" class="edit" id=edit${mall[i]["SKU"]} onclick=editform(${mall[i]["SKU"]})>Edit</a><a href="#" class="delete" id=delete${mall[i]["SKU"]} onclick=display_delete_form(${mall[i]["SKU"]})>Delete</a></td</tr>`;
       
    } // TO display in HTML
    $("#display1").html(table_add)
    $("#product_sku").val("");
    $("#product_name").val("");
    $("#product_price").val("");
    $("#product_quantity").val("");
}

function closesuccess()
{
    
    
    $("#success").css("display","none");
}
function closeerror()
{
    $("#error").css("display","none");
}
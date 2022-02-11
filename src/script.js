$(document).ready(function(){

    var products = [{
        "id": "100",
        "name": "iPhone 4S",
        "brand": "Apple",
        "os": "iOS"
        
    },
    {
        "id": "101",
        "name": "Moto X",
        "brand": "Motorola",
        "os": "Android"	
        
    },
    {
        "id": "102",
        "name": "iPhone 6",
        "brand": "Apple",
        "os": "iOS"
        
    },
    {
        "id": "103",
        "name": "Samsung Galaxy S",
        "brand": "Samsung",
        "os": "Android"
        
    },
    {
        "id": "104",
        "name": "Google Nexus",
        "brand": "ASUS",
        "os": "Android"
        
    },
    {
        "id": "105",
        "name": "Surface",
        "brand": "Microsoft",
        "os": "Windows" 
        
    }];


    var result="";
    var brand="All";
    var os="All";
    var searchInput="";

    result+=`<select name="brand" id="brand">
        <option value="All">All</option>
        <option value="Apple">Apple</option>
        <option value="Motorola">Motorola</option>
        <option value="Samsung">Samsung</option>
        <option value="ASUS">ASUS</option>
        <option value="Microsoft">Microsoft</option>
      </select>
      <select name="os" id="os">
        <option value="All">All</option>
        <option value="iOS">iOS</option>
        <option value="Android">Android</option>
        <option value="Windows">Windows</option>
      </select><br>
      <div id="disp"></div><br>
      <div id="search"><label for="search"><input id="input" placeholder="search by name or id"><input type="button" id="button" value="search"></label></div>`; 

      $('#content').html(result);


      function displayAll()
      {
          var result1="";
          if(searchInput=="")
          {
            for(let i=0;i<products.length;i++)
            {
                
              result1+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
              //products[i].x=0;
            }
          }
          else
          {
            for(let i=0;i<products.length;i++)
            {
                if(searchInput==products[i].id || searchInput==products[i].name)
                result1+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
              //products[i].x=0;
            }
          }
          $('#disp').html(result1);
          
      }

      displayAll();

      $('#content').on("click","#brand",function(){

        brand=$(this).val();
        console.log(brand);
        display();


      });


      $('#content').on("click","#os",function(){

        os=$(this).val();
        console.log(os);
        display();
      });

      $('#content').on("click","a#x",function(){

        var id=$(this).data("pid");
        var index="";
        console.log("hide=="+id);
        for(let i=0;i<products.length;i++)
        {
            if(products[i].id==id)
            {
                index=i;
               
                //products[i].x="1";
                //console.log("changed x =="+products[i].x);
            }
        }
        products.splice(index,1);
        display();

      });

      


      function display()
      {
          console.log(brand+"=="+os);
          if(brand=="All"&&os=="All")
           displayAll();
         else if(brand=="All")
           displayByOs();
         else if(os=="All")
           displayByBrand();
        else
           displayByBoth();  
      }


      function displayByOs()
      {
          console.log("display by os");
          var result2="";
          if(searchInput=="")
          {
            for(let i=0;i<products.length;i++)
            {
                if(os==products[i].os )
                result2+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
       
            }
          }
          else
          {
            for(let i=0;i<products.length;i++)
            {
                if(os==products[i].os && (searchInput==products[i].id || searchInput==products[i].name) )
                result2+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
       
            }

          }
          $('#disp').html(result2);
      }

      function displayByBrand()
      {
          console.log("display by brand");
          var result3="";
          if(searchInput=="")
          {
            for(let i=0;i<products.length;i++)
            {
                if(brand==products[i].brand )
                result3+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
       
            }
          }
          else
          {
            for(let i=0;i<products.length;i++)
            {
                if(brand==products[i].brand && (searchInput==products[i].id || searchInput==products[i].name) )
                result3+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
       
            }

          }
          $('#disp').html(result3);
      }

      function displayByBoth()
      {
          console.log("display by both");
          var result4="";
          if(searchInput=="")
          {
            for(let i=0;i<products.length;i++)
            {
                if(os==products[i].os && brand==products[i].brand )
                result4+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
       
            }
          }
          else
          {
            for(let i=0;i<products.length;i++)
            {
                if(os==products[i].os && brand==products[i].brand && (searchInput==products[i].id || searchInput==products[i].name) )
                result4+=`<table><tr><td style="padding-right:60px">${products[i].id}</td><td style="padding-right:60px">${products[i].name}</td><td style="padding-right:60px">${products[i].brand}</td><td style="padding-right:60px">${products[i].os}</td><td><a href="#" id="x" data-pid=${products[i].id}>X</td></tr></table>`;
       
            }
          }
          $('#disp').html(result4);
      }










      //search 

      $('#content').on("click","#button",function(){

        searchInput=$('#input').val();
        display();
        searchInput="";
        var search="";
        search+=`<label for="search"><input id="input" placeholder="search by name or id"><input type="button" id="button" value="search"></label>`;
        $('#search').html(search);
        console.log(searchInput);
      });



});
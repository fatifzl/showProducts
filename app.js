var products=[
    {imgSrc:'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-2.jpg',
        Name:'Galaxy S24 Ultra',
        Display:'6.8"', 
        CPU:'Snapdragon 8 Gen 3',  
        Ram:'12GB',
        Rom:'256GB',
        Camera:'200MP',
        Battery:'5000mAh',
        Price:1299.99,
        hasDiscount:true},
    {imgSrc:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-2.jpg',
        Name:'iPhone 15 Promax',
        Display:'6.7"', 
        CPU:'Apple A17 Pro',  
        Ram:'8GB',
        Rom:'256GB',
        Camera:'48MP',
        Battery:'4441mAh',
        Price:1199.99,
        hasDiscount:false},
    {imgSrc:'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-ultra-2.jpg',
        Name:'Xiaomi 14 Ultra',
        Display:'6.73"', 
        CPU:'Snapdragon 8 Gen 3',  
        Ram:'12GB',
        Rom:'512GB',
        Camera:'50MP',
        Battery:'5000mAh',
        Price:1120,
         hasDiscount:true},
    {imgSrc:'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-pura70-ultra-2.jpg',
        Name:'Huawei Pura 70 Ultra',
        Display:'6.8"', 
        CPU:'Kirin 9010',  
        Ram:'16GB',
        Rom:'512GB',
        Camera:'50MP',
        Battery:'5200mAh',
        Price:1440,
        hasDiscount:false}
];
function createImg(){
    var imgTag = document.createElement("img");
    return imgTag;
}
function createPTag() {
    var pTag = document.createElement("p");
    return pTag;
}
function showProducts() {
    var index = 0 ;
    var product = products[index];
    var productObjectKeys = Object.keys(product);
    productObjectKeys.forEach(function(element){
        var Product = product[element];
        if(element=="Name"){
        var tag = createPTag();
        tag.innerText = element + ' : ' + product[element];
        document.getElementById("item1").appendChild(tag); }
        else if (element=="imgSrc") {
            var img = createImg();
            img.setAttribute("src",Product);
            img.setAttribute("alt","productImg");
            document.getElementById("item1").appendChild(img);
        }  
    });    
}


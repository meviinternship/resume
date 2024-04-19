var hyder = 0;
var hyder_price=0.00;

var thala = 0;
var thala_price=0.00;

var ambur = 0;
var ambur_price=0.00;

var thalapa = 0;
var thalapa_price = 0.00;

var kozhi = 0;
var kozhi_price = 0.00;

var total = 0.00;
var qty = 0;

function add()
{
    if(document.getElementById("item1").checked)
    {
        hyder+=1;
        hyder_price=hyder*180;
        hyder_price=parseFloat(hyder_price.toFixed(2));
        document.getElementById("hyder").value=hyder;
        document.getElementById("hyder_price").value=hyder_price;
    }
    else if(document.getElementById("item2").checked)
    {
        thala+=1;
        thala_price=thala*200;
        thala_price=parseFloat(thala_price.toFixed(2));
        document.getElementById("thala").value=thala;
        document.getElementById("thala_price").value=thala_price;
    }
    else if(document.getElementById("item3").checked)
    {
        ambur+=1;
        ambur_price=ambur*250;
        ambur_price=parseFloat(ambur_price.toFixed(2));
        document.getElementById("ambur").value=ambur;
        document.getElementById("ambur_price").value=ambur_price;
    }
    else if(document.getElementById("item4").checked)
    {
        thalapa+=1;
        thalapa_price=thalapa*300;
        thalapa_price=parseFloat(thalapa_price.toFixed(2));
        document.getElementById("thalapa").value=thalapa;
        document.getElementById("thalapa_price").value=thalapa_price;
    }
    else if(document.getElementById("item5").checked)
    {
        kozhi+=1;
        kozhi_price=kozhi*500;
        kozhi_price=parseFloat(kozhi_price.toFixed(2));
        document.getElementById("kozhi").value=kozhi;
        document.getElementById("kozhi_price").value=kozhi_price;
    }
}

function bill()
{
    total = parseFloat(hyder_price + thala_price + ambur_price + thalapa_price + kozhi_price);
    total = total.toFixed(2);
    qty = hyder + thala + ambur + thalapa + kozhi;

    document.getElementById("qty").value=qty;
    document.getElementById("total").value=total;
}
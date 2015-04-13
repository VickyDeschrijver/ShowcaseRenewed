/**
 * Created by cyber05 on 13/04/2015.
 */


//het array met de tags
//elk item is zelf een Array met de naam, het huidig aantal stemmen en het vorig aantal stemmen die het kreeg
var arrTags = [
    ["pic1.gif", 984, 607],
    ["pic2.gif", 750, 803],
    ["pic3.gif", 1900, 1800],
    ["pic4.gif", 864, 792],
    ["pic5.gif", 768, 35]]


window.onload	=	function() {
    var eKader		=	document.getElementById('tagContainer');
    var nArray		=	arrTags;



    tagsMaken(eKader, nArray);

}


function tagsMaken(eKader, array) {
    /*	Functie maakt span elementen aan in container
     *	zet fontsize  - opacity
     *	Bepaalt positie
     * */

    var nBreedte	=	eKader.offsetWidth;
    var nHoogte		=	eKader.offsetHeight;
    var nAantalTags	=	array.length;





//	console.log('breedte: ' + nBreedte);
//	console.log('hoogte: ' + nHoogte);

    for (var i=0; i<nAantalTags; i++) {
        var eTag	=	document.createElement('span');
        var eImg    =   document.createElement('img');
        var sPad	=	array[i][0];					// source

        eTag.className	=	"cloud";

        //console.log(sPad);
        eTag.src	=	"../showcaserenewed/img/" + array [i][0];
        console.log(eTag);
        eImg.setAttribute('src', eTag.src);


        // size bepalen
        var nGrootte	=	array[i][1];
        var nSize	    =	(Math.random()*12)+8;
		console.log('size: ' + nSize + ' - ');

        eImg.style.width	=	nSize + "em";

        console.log(eTag.style.width);
        eTag.appendChild(eImg);
        eKader.appendChild(eTag);						//	zet inhoud in tagContainer
    }

    // plaats in tagContainer bepalen van span-elementen
    var plaatsTag	=	eKader.getElementsByTagName('span');

    for (var i=0; i<plaatsTag.length; i++) {
        var nTagBreedte		=	plaatsTag[i].offsetWidth;
        var nTagHoogte		=	plaatsTag[i].offsetHeight;
        var xPos			=	((Math.random()*(nBreedte-nTagBreedte))+1);
        var yPos			=	((Math.random()*(nHoogte-nTagHoogte))+1);


		console.log(arrTags[i][0] + ' - breedte tag : '+ nTagBreedte + ' - hoogte tag : '+nTagHoogte );
		console.log('xPos: '+ xPos + ' - yPos: ' + yPos);

        yPos    =   yPos/15;
        xPos    =   xPos/15;



        if (xPos >= 20 ) plaatsTag[i].style.left	=	"15em";
        else plaatsTag[i].style.left	=	xPos + "em";


        if (yPos >= 30 ) plaatsTag[i].style.top	=	"20em";
        else plaatsTag[i].style.top	=	(yPos / 15) + "em";




        console.log('xPos: '+ xPos + ' - yPos: ' + yPos);


    }






}



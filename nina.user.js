// ==UserScript==
// @name          Ninja Keszthelyi
// @namespace     *://tig.kgk.uni-obuda.hu/vizsga/*
// @description   Keszthelyi egy Szovjet Ninja
// @include       *://tig.kgk.uni-obuda.hu/vizsga/*
// ==/UserScript==

//--------------- Örök Idõ ---------------
//unsafeWindow.szam = myszam;
unsafeWindow.countdown = mycountdown;
var szam = "30";
function mycountdown()
{
    if (szam>0)
    {
        szam--
    }
    if (szam==0)
    {
        szam=30;
    }
    crosscount.innerHTML='<b>'+szam+'</b>'
    setTimeout("countdown()",1000)
}
//---------------------------------------

//--------------- Megfejtõ ---------------
function szia()
{
var kerdesek = ["1836" ,"1837" ,"1838" ,"1840" ,"1841" ,"1842" ,"1843" ,"1844" ,"1845" ,"1846" ,"1847" ,"1849" ,"1850" ,"1851" ,"1852" ,"1853" ,"1854" ,"1855" ,"1857" ,"1858" ,"1859" ,"1860" ,"1861" ,"1862" ,"1863" ,"1865" ,"1866" ,"1869" ,"1870" ,"1871" ,"1872" ,"1875" ,"1877" ,"1878" ,"1879" ,"1880" ,"1882" ,"1884" ,"1885" ,"1873" ,"1876" ,"1848" ,"1867" ,"1841" ,"1868"];
var valaszok = ["veszteség" ,"csak szabályokkal koordinálják a tevékenységüket" ,"csak struktúrákkal szabályozzák a tevékenységüket" ,"technológia" ,"külső környezet" ,"a releváns környezeti tényezők legtágabb rendszere" ,"az adott termékre/szolgáltatásra vonatkozó iparági környezet" ,"pénzügyi" ,"hitelezők" ,"emberi erőforrások" ,"a vállalat stratégiai csoportjának résztvevői" ,"Kik a beszállítóink?" ,"Hogyan befolyásolja a technológia az innovációt?" ,"A környezeti trendek ismeretében fenntartható-e a fejlődés?" ,"Menyire jellemző a működési környezetre a centralizáció/decentralizáció?" ,"jogi" ,"kiegészítő termékek" ,"heterogén" ,"A vevő az eladó termékeinek nagy részét vásárolja meg,a termék differenciálatlan,partnerváltás költségei alacsonyak." ,"Ha kevés a miénkhez hasonló vállalat a piacon,ha alacsony a fix költségünk, vagy rendelkezünk kihasználatlan kapacitásokkal." ,"a termék differenciált" ,"alacsony áttérési költségek miatt mi kötve vagyunk az adott iparághoz" ,"oligopolisztikus verseny" ,"Árelfogadó vállaltok a költségek területén nem tudnak egymással versenyezni." ,"tulajdonosok" ,"A vállalatok kölcsönösen nem függnek egymástól." ,"a tökéletes verseny formája" ,"Az új belépők megjelenéséből származó fenyegetés annál kisebb, minél alacsonyabb az iparágban a tőkeigény-küszöb." ,"A stratégia megvalósíthatóságának vizsgálata, illetve rizikófaktorok és előfeltevések elrejtése" ,"tulajdonosi érdeket" ,"társadalmi felelősségvállalás" ,"Könnyen tudják érdekeiket érvényesíteni - nem fűződik közvetlen érdekük a vállalati teljesítményhez" ,"Az állami szféra szereplői általában gyakran, azonban annál kisebb hatással avatkoznak be a szervezetek életébe." ,"nem/nehezen tudják érdekeiket érvényesíteni - nem fűzödik közvetlen érdekük a vállalati teljesítményhez" ,"nem/nehezen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"Political, Economical, Social, Technological, Environmental,Legal" ,"az árszínvonal alakulása" ,"a gazdaságpolitika kiszámíthatósága" ,"az infláció mértéke" ,"nem/nehezen tudják érdekeiket érvényesíteni - nem fűzödik közvetlen érdekük a vállalati teljesítményhez" ,"Könnyen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"Milyen belföldi szerződések kötik a kormányt?" ,"de helyettesíthetősége magas" ,"a munkajogi szabályozások" ,"eladók nem különböztetik meg egymástól a termékeiket"];
var kerdesString = document.getElementsByClassName("kkerdes")[0].innerText;
var kerdesId = kerdesString.substr(kerdesString.length - 5,4);

var valasz1 = document.getElementsByClassName("kvalasz1")[0].innerText;
var valasz2 = document.getElementsByClassName("kvalasz2")[0].innerText;
var valasz3 = document.getElementsByClassName("kvalasz3")[0].innerText;
var valasz4 = document.getElementsByClassName("kvalasz4")[0].innerText;

var kerdesIndex = kerdesek.indexOf(kerdesId);
var valasz = valaszok[kerdesIndex];

if (valasz1 == valasz)
{
    document.getElementsByClassName("kvalasz1")[0].innerText = valasz1 + ".";
}
else if (valasz2 == valasz)
{
    document.getElementsByClassName("kvalasz2")[0].innerText = valasz2 + ".";
}
else if (valasz3 == valasz)
{
    document.getElementsByClassName("kvalasz3")[0].innerText = valasz3 + ".";
}
else if (valasz4 == valasz)
{
    document.getElementsByClassName("kvalasz4")[0].innerText = valasz4 + ".";
}
}
szia();
//---------------------------------------
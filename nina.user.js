// ==UserScript==
// @name          facebook
// @namespace     *://tig.kgk.uni-obuda.hu/*
// @description   Keszthelyi egy Szovjet Ninja
// @include       *://tig.kgk.uni-obuda.hu/*
// ==/UserScript==

//------------------------------
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

//------------------------------
function szia()
{
var kerdesek = ["1885" ,"1884" ,"1883" ,"1882" ,"1880" ,"1879" ,"1878" ,"1877" ,"1876" ,"1875" ,"1874" ,"1873" ,"1872" ,"1871" ,"1870" ,"1869" ,"1868" ,"1867" ,"1866" ,"1865" ,"1864" ,"1863" ,"1862" ,"1861" ,"1860" ,"1859" ,"1858" ,"1857" ,"1856" ,"1855" ,"1854" ,"1853" ,"1852" ,"1851" ,"1850" ,"1849" ,"1848" ,"1847" ,"1846" ,"1845" ,"1844" ,"1843" ,"1842" ,"1841" ,"1840" ,"1839" ,"1838" ,"1837" ,"1836","1835" ,"1834" ,"1833" ,"1832" ,"1831" ,"1830" ,"1829" ,"1827" ,"1826" ,"1825" ,"1824" ,"1823" ,"1822" ,"1821" ,"1819" ,"1817" ,"1816" ,"1815" ,"1814" ,"1813" ,"1812" ,"1811" ,"1810" ,"1809" ,"1807" ,"1806" ,"1805" ,"1804" ,"1803" ,"1801" ,"1800" ,"1799" ,"1798" ,"1797" ,"1796" ,"1795" ,"1794" ,"1793" ,"1792" ,"1791" ,"1790" ,"1818" ,"1802" ,"1828" ,"1808", "1887" ,"1889" ,"1890" ,"1892" ,"1893" ,"1895" ,"1896" ,"1901" ,"1902" ,"1903" ,"1904" ,"1905" ,"1906" ,"1907" ,"1908" ,"1909" ,"1910" ,"1915" ,"1917" ,"1919" ,"1920" ,"1921" ,"1922" ,"1923" ,"1925" ,"1886", "1888" ,"1891" ,"1894" ,"1898" ,"1899" ,"1900" ,"1911" ,"1912" ,"1916" ,"1918" ,"1924" ,"1913" ,"1897" ,"1914"];
var valaszok = ["az infláció mértéke" ,"a gazdaságpolitika kiszámíthatósága" ,"a munkajogi szabályozások" ,"az árszínvonal alakulása" ,"Political, Economical, Social, Technological, Environmental,Legal" ,"nem/nehezen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"nem/nehezen tudják érdekeiket érvényesíteni - nem fűzödik közvetlen érdekük a vállalati teljesítményhez" ,"Az állami szféra szereplői általában gyakran, azonban annál kisebb hatással avatkoznak be a szervezetek életébe." ,"Könnyen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"Könnyen tudják érdekeiket érvényesíteni - nem fűződik közvetlen érdekük a vállalati teljesítményhez" ,"nem/nehezen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"nem/nehezen tudják érdekeiket érvényesíteni - nem fűzödik közvetlen érdekük a vállalati teljesítményhez" ,"társadalmi felelősségvállalás" ,"tulajdonosi érdeket" ,"A stratégia megvalósíthatóságának vizsgálata, illetve rizikófaktorok és előfeltevések elrejtése" ,"Az új belépők megjelenéséből származó fenyegetés annál kisebb, minél alacsonyabb az iparágban a tőkeigény-küszöb." ,"eladók nem különböztetik meg egymástól a termékeiket" ,"de helyettesíthetősége magas" ,"a tökéletes verseny formája" ,"A vállalatok kölcsönösen nem függnek egymástól." ,"alkalmazottak" ,"tulajdonosok" ,"Árelfogadó vállaltok a költségek területén nem tudnak egymással versenyezni." ,"oligopolisztikus verseny" ,"alacsony áttérési költségek miatt mi kötve vagyunk az adott iparághoz" ,"a termék differenciált" ,"Ha kevés a miénkhez hasonló vállalat a piacon,ha alacsony a fix költségünk, vagy rendelkezünk kihasználatlan kapacitásokkal." ,"A vevő az eladó termékeinek nagy részét vásárolja meg,a termék differenciálatlan,partnerváltás költségei alacsonyak." ,"homogén" ,"heterogén" ,"kiegészítő termékek" ,"jogi" ,"Menyire jellemző a működési környezetre a centralizáció/decentralizáció?" ,"A környezeti trendek ismeretében fenntartható-e a fejlődés?" ,"Hogyan befolyásolja a technológia az innovációt?" ,"Kik a beszállítóink?" ,"Milyen belföldi szerződések kötik a kormányt?" ,"a vállalat stratégiai csoportjának résztvevői" ,"emberi erőforrások" ,"hitelezők" ,"pénzügyi" ,"az adott termékre/szolgáltatásra vonatkozó iparági környezet" ,"a releváns környezeti tényezők legtágabb rendszere" ,"külső környezet" ,"technológia" ,"árúk" ,"csak struktúrákkal szabályozzák a tevékenységüket" ,"csak szabályokkal koordinálják a tevékenységüket" ,"veszteség", "mindkettő helyes" ,"A központok tevékenységét nem csupán a rövid távú nyereségesség, hanem annak hosszú távon történő fenntarthatósága is jellemzi." ,"A vezető mind az inputok, mind az outputok költségét/árát képes befolyásolni." ,"Az egység által értékesített termékek/szolgáltatások utáni bevétel jó indikátora a szervezeti egység erőfeszítésének." ,"A központ vezetőjének viszonylag nagy mozgástere van a rendelkezésére bocsájtott költségek felhasználására vonatkozóan." ,"Tőkemegtérülés" ,"Realizált forgalom" ,"Szervezeti kereteken túlmenő folyamatokat irányító egységek" ,"Divizionális szervezetek divíziói" ,"Nehezen számszerűsíthető kimenettel rendelkező egységek" ,"Teljes pénzügyi beszámoló" ,"Eredményesség növelés Erőforrásokkal való gazdálkodás" ,"Eredményesség növelés, eladott mennyiségi növelése" ,"Hatékonyság növelés, költségek csökkentése az outputok csökkentése nélkül" ,"veszteség" ,"átalakító folyamatok" ,"beszerzés" ,"műveletek" ,"koordinációs folyamatok" ,"a szervezet struktúrája" ,"kognitív" ,"a kommunikáció célzott formája" ,"Egydimenziós szervezetek esetében is lehet többvonalas a vezetés." ,"könnyű beazonosítani a probléma felelősét" ,"Az irányítási, koordinációs és ellenőrzési tevékenységet a központ egységek látják el." ,"A munkamegosztás a szervezeti funkciók mentén történik." ,"versenyhelyzetet teremthet a probléma megoldásában" ,"megjelenhet a vezetők rivalizálása" ,"több dimenziós" ,"gyenge a piaci orientáció" ,"egydimenziós" ,"a funkcionális munkamegosztás az egységköltség csökkenését eredményezheti" ,"az egységköltség növekedését eredményezheti a funkcionális munkamegosztás" ,"egydimenziós" ,"ha a vállalat több telephellyel is rendelkezik" ,"eladó" ,"közös célok" ,"kooperáció" ,"a szervezet elemzésénél" ,"vezetők" ,"közös célok" ,"optimalizáljuk a termelést" ,"erőteljes a piaci orientáció" ,"Leányvállalatok, vagy holding szervezetek esetében az egyes szervezetek" ,"A feladatok és hatáskörök szabályozottsága ebből az egyenrangú döntési helyzetből fakadóan kevésbé egyértelmű, konfliktusok keletkezhetnek", "Porter" ,"magas fokú specializáció" ,"A fizikai és szellemi munka szétválasztása." ,"Mindenkinek a képességeinek legmegfelelőbb munkát kell végeznie." ,"hierarchia" ,"A munkaszervezet racionalizálása pedig csökkenti a középvezetés iránti igényt, de a hiba esélyét nem." ,"technikai" ,"a hatáskör és a felelősség nem válhat el egymástól" ,"a hatalmat a felelősség arányában kell megosztani" ,"minden alkalmazott csak egy embertől kaphat utasítást" ,"az ellenszolgáltatás legyen méltányos és igazságos" ,"lineáris munkamegosztás" ,"informális eljárásokon nyugvó" ,"A szervezetek számára a irracionális forrásból fakadó uralom az ideális." ,"nem tudás alapú kiválasztás és előléptetés" ,"összehasonlíthatatlan" ,"eredmény orientált" ,"fenyegetés-gyengeség stratégiák" ,"minden szervezet egy rendszer, amelynek vannak inputjai, rendelkezik egy átalakítási folyamattal és outputokkal" ,"a jövő kutatása és a cselekvés részletes programtervének meghatározása" ,"a vállalat kettős szervezetének létrehozása" ,"feladatok végrehajtatása rendelkezésekkel, utasításokkal" ,"a kiadott szabályok és utasítások betartásának a felügyelete" ,"inkább horizontális, mint vertikális kommunikáció" ,"adaptív" ,"XX. Század eleje", "rugalmas" ,"Ahhoz, hogy az emberek képesek legyenek jövedelemszerző tevékenységek folytatására, előre meg kell számukra határozni az elvégzendő feladatokat." ,"az átfutási idő bonyolultabbá vált" ,"közvetett irányítás" ,"a szervezet ereje, tagjainak egységében rejlik" ,"A vezetési funkció gyakorlása nem oszlik meg a vállalat társadalmi szervezetének felső és alsó szintjei között." ,"tevékenység orientált" ,"lehetőség-erősség stratégiák" ,"vállalati stratégia kulcsmomentumait" ,"Minden szervezet egy rendszer, amelynek vannak inputjai, rendelkezik egy átalakítási folyamattal, de outputokkal nem." ,"rugalmatlan" ,"lehetőség-gyengeség stratégiák" ,"beszerzési" ,"fenyegetés-erősség stratégiák"];
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
    document.getElementsByClassName("kvalasz1")[0].setAttribute("style", "cursor: default");
    
    //document.getElementsByClassName("kvalasz1")[0].innerText = valasz1 + ".";
}
else if (valasz2 == valasz)
{
    document.getElementsByClassName("kvalasz2")[0].setAttribute("style", "cursor: default");
    
    //document.getElementsByClassName("kvalasz2")[0].innerText = valasz2 + ".";
}
else if (valasz3 == valasz)
{
    document.getElementsByClassName("kvalasz3")[0].setAttribute("style", "cursor: default");
   

    //document.getElementsByClassName("kvalasz3")[0].innerText = valasz3 + ".";
}
else if (valasz4 == valasz)
{
    document.getElementsByClassName("kvalasz4")[0].setAttribute("style", "cursor: default");
    
    //document.getElementsByClassName("kvalasz4")[0].innerText = valasz4 + ".";
}
}
szia();
//---------------------------------------
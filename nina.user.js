// ==UserScript==
// @name          Facebook
// @namespace     *://tig.kgk.uni-obuda.hu/*
// @description   Keszthelyi egy Szovjet Ninja
// @include       *://tig.kgk.uni-obuda.hu/*
// ==/UserScript==

//---------------------------------------
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

//---------------------------------------
function szia()
{
var kerdesek = ["Milyen típusa nincs a piaci versenynek?" ,"A PESTEL elemzésben a politikai faktorok vizsgálatának fókuszában melyik nem áll:" ,"Melyik állítás hamis?" ,"Melyik nem lehet a haszonszerzés megjelenési formája?" ,"Melyik állítás nem igaz a szervezetek általános jellemzésére?" ,"Melyik állítás nem igaz a szervezetek általános jellemzésére?" ,"Melyik tényező tartozik a vállalat outputjai közé?" ,"Melyik tényező nem tartozik a vállalat inputjai közé?" ,"A szervezeti környezet milyen szférára nem bomlik?" ,"Melyik állítás igaz a makrokörnyezetre?" ,"Melyik állítás igaz a mikrokörnyezetre?" ,"Melyik nem része a makrokörnyezetnek?" ,"Melyik nem része a mikrokörnyezetnek?" ,"Melyik nem része a működési környezetnek?" ,"Melyik nem része a belső környezetnek?" ,"A PESTEL elemzésben milyen politikai kérdésre nem keressük a választ?" ,"A PESTEL elemzésben milyen szociokulturális kérdésre nem keressük a választ?" ,"A PESTEL elemzésben milyen technológiai kérdésre nem keressük a választ?" ,"A PESTEL elemzésben milyen természeti környezeti kérésre nem keressük a választ?" ,"A PESTEL elemzésben milyen jogi kérésre nem keressük a választ?" ,"A STEEP elemzésbe melyik környezet nem tartozik?" ,"Melyik nem tartozik a piaci verseny öt tényezője közé?" ,"Melyik állítás nem igaz a termékekre?" ,"Melyik állítás nem igaz a szolgáltatásokra?" ,"A vevők alkupozíciójával és jövedelmezőségével összefügggő versenyerő, mely tényezők együttes hatásainak következménye?" ,"A vevőkért folytatott verseny során mikor van alapvető előnyünk a versenytársakhoz képest?" ,"A PESTEL elemzésben a szociokultúrális faktorok vizsgálatának fókuszában melyik nem áll:" ,"Az iparág többi szereplője mikor nem veszélyezteti a pozíciónkat?" ,"A PESTEL elemzésben a gazdasági faktorok vizsgálatának fókuszában melyik nem áll:" ,"Milyen típusa nincs a piaci versenynek?" ,"Melyik állítás nem igaz a tökéletes versenyre?" ,"Kik tartoznak ahhoz az érdekvédelmi csoporthoz, amelyben a közvetlenül érdekeltek tartoznak és könnyen tudják érdekeiket érvényesíteni?" ,"Kik tartoznak ahhoz az érdekvédelmi csoporthoz, amelyben a közvetlenül érdekeltek tartoznak és nem tudják érdekeiket érvényesíteni?" ,"Melyik állítás nem igaz az oligopóliumra?" ,"Melyik állítás nem igaz a monopóliumra?" ,"Melyik állítás nem igaz a monopóliumra?" ,"Melyik állítás nem igaz a monopolisztikus versenyre?" ,"Melyik állítás hamis?" ,"Melyik nem a stakeholder elemzés célja?" ,"A korai vállalati döntéshozók mit tartottak szem előtt?" ,"Melyik szempontra igaz az, hogy a vállalatok önkéntes alapon társadalmi és környezeti szempontokat építenek be gazdasági működésükbe és az érdekelt felekkel való kapcsolatrendszerükbe?" ,"A szervezet érintettjeinek hatalom/érdek mátrixában hova tartozik a civil csoportok?" ,"A szervezet érintettjeinek hatalom/érdek mátrixában hova tartozik a beszállítók?" ,"A szervezet érintettjeinek hatalom/érdek mátrixában hova tartozik a helyi önkormányzatok?" ,"A szervezet érintettjeinek hatalom/érdek mátrixában hova tartozik a tulajdonosok/részvényesek?" ,"Melyik állítás hamis a következőek közül?" ,"A szervezet érintettjeinek hatalom/érdek mátrixában hova tartozik a média?" ,"A szervezet érintettjeinek hatalom/érdek mátrixában hova tartozik a versenytársak?" ,"A PESTEL elemzésben a gazdasági faktorok vizsgálatának fókuszában melyik nem áll:" ,"A PESTEL betűszó elemei:" ,"Melyik elem nem tartozik a 7S modell elemei közé?" ,"Milyen a funkcionális szervezet?" ,"Melyik elem nem tartozik a 7S modell elemei közé?" ,"Melyik a vállalati felsővezetés feladata?" ,"Milyen alapelv szerint nem lehet a munkát felosztani?" ,"Melyik állítás igaz a nyereség központokra?" ,"Melyik nem tartozik a szervezeti stuktúra jellemzői közé?" ,"Melyik állítás igaz a költség központokra?" ,"Melyik állítás igaz a bevétel központokra?" ,"A bevétel alapú ellenőrzés egysége:" ,"A beruházási alapú ellenőrzés egysége:" ,"A bevétel alapú ellenőrzési és beszámolási egység jellemző előfordulása:" ,"A beruházási alapú ellenőrzési és beszámolási egység jellemző előfordulása:" ,"A költség alapú ellenőrzési és beszámolási egység jellemző előfordulása:" ,"A nyereség alapú ellenőrzési és beszámolási egység jellemző előfordulása:" ,"A nyereség alapú kontroll célja:" ,"A beruházási alapú kontroll célja:" ,"A költség alapú kontroll célja:" ,"A bevétel alapú kontroll célja:" ,"Melyik állítás nem lényeges a dekomponálásnál?" ,"Milyen típusa nincs az ellenőrzési és beszámolói egységeknek?" ,"Napjainkban hol használják a 7S modellt?" ,"Melyik nem tartozik a támogató folyamatok közé?" ,"A szervezeti értéklánc modelljében melyik nem tartozik a támogató folyamatok közé?" ,"A szervezeti értéklánc modelljében melyik nem tartozik az alapfolyamatok közé?" ,"Melyik nem tartozik a konfiguráció jellemzői közé?" ,"A szervezetben milyen folyamat nem jelenik meg?" ,"Melyik állítás igaz a koordinációra?" ,"A koordináció személyorientált megoldásai milyen szinten hatnak?" ,"Melyik állítás hamis a többvonalas szervezet esetében?" ,"Melyik állítás igaz?" ,"Melyik állítás igaz a divizionális szervezetre?" ,"Melyik állítás igaz a mátrix szervezetre?" ,"Melyik állítás nem tartozik a mátrix szervezet hátrányai közé?" ,"Melyik állítás igaz a funkcionális szervezetre?" ,"Milyen a mátrix szervezet?" ,"Melyik állítás nem tartozik a mátrix szervezet előnyei közé?" ,"Melyik állítás nem tartozik a divizonális szervezet előnyei közé?" ,"Melyik állítás nem tartozik a divizonális szervezet hátrányai közé?" ,"Melyik nem tartozik a lágy elemek közé?" ,"Melyik állítás nem tartozik a funkcionális szervezet hátrányai közé?" ,"Mikor van szükség a regionális elv szerinti munkamegosztásra?" ,"Milyen a divizonális szervezet?" ,"Melyik állítás nem tartozik a funkcionális szervezet előnyei közé?" ,"Melyik állítás igaz a beruházási központokra?" ,"Melyik állítás nem igaz a mechanikus struktúrára?" ,"Melyik állítás nem igaz a organikus struktúrára?" ,"Mit jelent a közvetlen irányítás?" ,"Mit jelent az ellenőrzés?" ,"Mikor jött létre a szervezés és vezetés tudomány?" ,"Mit jelent a szervezés?" ,"Melyik állítás nem igaz a mechanikus struktúrára?" ,"Kinek a nevéhez nem fűzödik a vezetés szervezés kialakulása?" ,"Mit jelent a specializáció?" ,"Melyik állítás nem igaz a organikus struktúrára?" ,"Mit jelent a funkcionalitás?" ,"Mit jelent a szabályozottság?" ,"Melyik hamis az alábbi állítások közül a futólaggal kapcsolatban?" ,"Melyik tényező nem tartozik a tudományos vezetés alapjai közé?" ,"Melyik tevékenység nem tartozik a Fayol-i vállalati tevékenységek közé?" ,"Melyik állítás hamis? (Henry Ford)" ,"Melyik nem tartozik a Fayol-i vezetés feladatai közé?" ,"Melyik tevékenység nem tartozik a Fayol-i vállalati tevékenységek közé?" ,"Melyik állítás hamis? (Fayol)" ,"Melyik állítás nem tartozik a Fayol-i tervezés alapelvei közé?" ,"Melyik állítás nem tartozik a Fayol-i közvetlen irányítás alapelvei közé?" ,"Melyik állítás nem tartozik a Fayol-i szervezés alapelvei közé?" ,"Melyik állítás tartozik a Fayol-i ellenőrzés alapjai közé?" ,"Melyik állítás tartozik a Fayol-i koordinálási alapjai közé?" ,"Melyik állítás nem tartozik a bürökratikus szervezet jellemzői közé?" ,"Melyik állítás nem tartozik a Weber-i bürokrácia ideáltípusainak jellemzői közé?" ,"Melyik állítás nem tartozik a Weber-i bürokrácia ideáltípusainak jellemzői közé?" ,"Melyik állítás hamis? (Max Weber)" ,"Melyik nem tartozik Porter stratégiai alternatívái közé?" ,"Melyik állítás nem tartozik a bürökratikus szervezet jellemzői közé?" ,"Melyik jelöli az offenzív stratégiai alternatívát?" ,"Melyik nem tartozik Porter stratégiai alternatívái közé?" ,"Melyik jelöli a diverzifikáló stratégiai alternatívát?" ,"Melyik jelöli a változás orientált stratégiai alternatívát?" ,"Mit mutat meg a külső és belső tényező együttesen?" ,"Melyik jelöli a defenzív stratégiai alternatívát?" ,"Melyik állítás hamis a kontingencialista szervezetképre?" ,"Melyik állítás igaz a kontingencialista szervezetképre?" ,"Melyik állítás nem igaz a mechanikus struktúrára?" ,"Mit jelent a tervezés?" ,"A közös vállalat stratégiai irányítását" ,"Az egyesülés abban különbözik a többi gazdasági társaságtól, hogy" ,"A közös vállalat létrehozói általában" ,"A részvénytársaság esetében" ,"A korlátolt felelősségű társaság esetében" ,"A betéti társaság kül- és beltagja között" ,"A közkereseti társaságban" ,"A gazdasági társaságok megszűnésének okai lehetnek:" ,"A cégjegyzés módozatai lehetnek:" ,"A gazdasági társaságok vezető tisztségviselőinek felelőssége" ,"Könyvvizsgálót a társaságoknál akkor kötelező foglalkoztatni, ha" ,"Felügyelő bizottság létrehozása kötelező" ,"Gazdasági társaságok vezető tisztségviselője lehet minden olyan személy, aki" ,"A gazdasági társaságok vezető tisztségviselői" ,"A gazdasági társaság legfőbb irányító szerve" ,"Az előtársasági működésre a következő szabályok érvényesek" ,"A cégbejegyzést a cégbíróság megtagadhatja, ha" ,"A cég bejegyzéséhez szükséges legfontosabb iratok közzé tartozik" ,"Az egyes társasági formáknál a nyereségből ill. veszteségből való részesedés" ,"A szövetkezet jogállása szerint" ,"Gazdasági társasági formák lehetnek" ,"A gazdasági társaságok olyan társas vállalkozások, amelyek saját nevükben" ,"Az egyéni vállalkozó a hiánypótlásnak köteles eleget tenni" ,"Megszűnik az egyéni vállalkozás, ha" ,"Az egyéni vállalkozó foglalkoztathat" ,"A vállalkozói igazolvány a következő adatokat tartalmazza:" ,"A vállalkozói igazolványt kiadja" ,"Nem kaphat vállalkozói igazolványt az," ,"Az egyéni vállalkozás alapfeltételei:" ,"A szövetkezeti társasági forma lényege, hogy" ,"A szövetkezet tagjai lehetnek" ,"A szövetkezet vagyonát rendelkezésre bocsátók:" ,"Mennyi ideg érvényes a korlátlan felelősség?" ,"Lehet-e tulajdonrésze egy BTnek egy KFT-ben?" ,"Lehet-e tulajdonrésze egy BTnek egy KKT-ben?" ,"Milyen felelőssége van egy egyéni vállalkozónak?" ,"Gazdasági szabályozók" ,"A szövetkezeti tag megszüntetheti tagságát" ,"Melyik állítás igaz az egyéni cégre?" ,"Melyik gazdasági társaságnál hívják alapító okiratnak a társasági szerződést?" ,"Melyik gazdasági társaságnál hívják alapszabálynak a társasági szerződést?" ,"Gazdasági társaságot alapíthatnak" ,"A szövetkezet stratégiai irányítását ellátja" ,"Gazdasági társaság alapításához szükséges tagok száma" ,"A szövetkezet operatív irányítását" ,"Egyéni vállalkozó…" ,"A költségek a termék előállítással való kapcsolatuk alapján lehetnek" ,"A költségek változását a termelési volumen függvényében árázolják" ,"Az előkalkuláció adatforrásai között szerepel" ,"A fedezeti elven alapuló részköltség számítás alap megfontolása, hogy" ,"A vállalati összköltség függvény meghatározásának peremfeltételei között szerepel" ,"Mi alapján NEM osztályozuk a költségeket?" ,"Mi NEM tartozik a költségnemek szerinti csoportosításba?" ,"Mi NEM tartozik az EGYÉB költségek közé (költségenemek szerinti felbontás) ?" ,"Termelési volumen szerint NEM létezik" ,"Egységköltség a volumen függvényében hogyan változik?" ,"A tevékenység érdekében történő élő és holtmunka felhasználás pénzben kifejezett értéke" ,"A termék egységére vagy meghatározott mennyiségére vonatkozó költség" ,"A kibocsátás újabb egységének előállításához szükséges többletköltség" ,"Tényleges pénzkiadást, kifizetést jelent." ,"A következő ábrán mit jelent az A betű?" ,"A következő ábrán mit jelent az B betű?" ,"A következő ábrán mit jelent az C betű?" ,"A következő egységköltség ábrán mit jelent az A betű?" ,"A következő egységköltség ábrán mit jelent az B betű?" ,"Mi NEM tartozik a költségnemek szerinti csoportosításba?" ,"A következő egységköltség ábrán mit jelent az D betű?" ,"A minél rövidebb átfutási időnek azért van jelentősége, mert" ,"A költségek változását a termelési volumen függvényében árázolják" ,"A tőkemegtérülés mutatószáma egyenlő" ,"Az előkalkuláció adatforrásai között szerepel" ,"Mi az összefüggés a fedezeti és a likviditási pont között?" ,"A vállalati vagyonmérleg" ,"A passzív időbeli elhatárolás azokat a tételeket tartalmazza, amelyek a mérleg fordulónapja" ,"Melyik kifejezés IGAZ?" ,"A fedezeti elven alapuló részköltség számítás alap megfontolása, hogy" ,"A termékegység fedezete" ,"A fedezetszámítás szemléletében a versenyár alsó határa" ,"A kritikus gyártmány mennyiség úgy értelmezhető, hogy" ,"Gazdasági kalkuláció" ,"A szük keresztmetszet" ,"Mi alapján oldjuk meg a problémát, ha egyetlen szük keresztmetszet létezik?" ,"Mi NEM tartozik az EGYÉB költségek közé (költségenemek szerinti felbontás) ?" ,"Mi tartozik az ábrán az B betűhöz?" ,"Mi tartozik az ábrán az C betűhöz?" ,"Mi alapján oldjuk meg a problémát, ha nincs szük keresztmetszet?" ,"Mi alapján oldjuk meg a problémát, ha több szük keresztmetszet van?" ,"Mi tartozik az ábrán az A betűhöz?" ,"Mi tartozik az ábrán az E betűhöz?" ,"Mi tartozik az ábrán az F betűhöz?" ,"Mi tartozik az ábrán az D betűhöz?" ,"A következő egységköltség ábrán mit jelent az C betű?" ,"A likviditási mutatók" ,"A kontrolling feladatai között találjuk" ,"A költségek a termék előállítással való kapcsolatuk alapján lehetnek" ,"Mire nem alkamazzuk a fedezeti számítást?"];
var valaszok = ["tökéletlen verseny" ,"az árszínvonal alakulása" ,"a termék differenciált" ,"veszteség" ,"csak szabályokkal koordinálják a tevékenységüket" ,"csak struktúrákkal szabályozzák a tevékenységüket" ,"áruk" ,"technológia" ,"külső környezet" ,"a releváns környezeti tényezők legtágabb rendszere" ,"az adott termékre/szolgáltatásra vonatkozó iparági környezet" ,"pénzügyi" ,"hitelezők" ,"emberi erőforrások" ,"a vállalat stratégiai csoportjának résztvevői" ,"Milyen belföldi szerződések kötik a kormányt?" ,"Kik a beszállítóink?" ,"Hogyan befolyásolja a technológia az innovációt?" ,"A környezeti trendek ismeretében fenntartható-e a fejlődés?" ,"Menyire jellemző a működési környezetre a centralizáció/decentralizáció?" ,"jogi" ,"kiegészítő termékek" ,"heterogén" ,"homogén" ,"A vevő az eladó termékeinek nagy részét vásárolja meg,a termék differenciálatlan,partnerváltás költségei alacsonyak." ,"Ha kevés a miénkhez hasonló vállalat a piacon,ha alacsony a fix költségünk, vagy rendelkezünk kihasználatlan kapacitásokkal." ,"az infláció mértéke" ,"alacsony áttérési költségek miatt mi kötve vagyunk az adott iparághoz" ,"a munkajogi szabályozások" ,"oligopolisztikus verseny" ,"Árelfogadó vállaltok a költségek területén nem tudnak egymással versenyezni." ,"tulajdonosok" ,"alkalmazottak" ,"A vállalatok kölcsönösen nem függnek egymástól." ,"a tökéletes verseny formája" ,"de helyettesíthetősége magas" ,"eladók nem különböztetik meg egymástól a termékeiket" ,"Az új belépők megjelenéséből származó fenyegetés annál kisebb, minél alacsonyabb az iparágban a tőkeigény-küszöb." ,"A stratégia megvalósíthatóságának vizsgálata, illetve rizikófaktorok és előfeltevések elrejtése" ,"tulajdonosi érdeket" ,"társadalmi felelősségvállalás" ,"nem/nehezen tudják érdekeiket érvényesíteni - nem fűzödik közvetlen érdekük a vállalati teljesítményhez" ,"nem/nehezen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"Könnyen tudják érdekeiket érvényesíteni - nem fűződik közvetlen érdekük a vállalati teljesítményhez" ,"Könnyen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"Az állami szféra szereplői általában gyakran, azonban annál kisebb hatással avatkoznak be a szervezetek életébe." ,"nem/nehezen tudják érdekeiket érvényesíteni - nem fűzödik közvetlen érdekük a vállalati teljesítményhez" ,"nem/nehezen tudják érdekeiket érvényesíteni - közvetlenül érdekeltek a vállalati teljesítményben" ,"a gazdaságpolitika kiszámíthatósága" ,"Political, Economical, Social, Technological, Environmental,Legal" ,"vezetők" ,"egydimenziós" ,"közös célok" ,"mindkettő helyes" ,"eladó" ,"A vezető mind az inputok, mind az outputok költségét/árát képes befolyásolni." ,"kooperáció" ,"A központ vezetőjének viszonylag nagy mozgástere van a rendelkezésére bocsájtott költségek felhasználására vonatkozóan." ,"Az egység által értékesített termékek/szolgáltatások utáni bevétel jó indikátora a szervezeti egység erőfeszítésének." ,"Realizált forgalom" ,"Tőkemegtérülés" ,"Szervezeti kereteken túlmenő folyamatokat irányító egységek" ,"Leányvállalatok, vagy holding szervezetek esetében az egyes szervezetek" ,"Nehezen számszerűsíthető kimenettel rendelkező egységek" ,"Divizionális szervezetek divíziói" ,"Eredményesség növelés Erőforrásokkal való gazdálkodás" ,"Teljes pénzügyi beszámoló" ,"Hatékonyság növelés, költségek csökkentése az outputok csökkentése nélkül" ,"Eredményesség növelés, eladott mennyiségi növelése" ,"optimalizáljuk a termelést" ,"veszteség" ,"a szervezet elemzésénél" ,"átalakító folyamatok" ,"műveletek" ,"beszerzés" ,"a szervezet struktúrája" ,"koordinációs folyamatok" ,"a kommunikáció célzott formája" ,"kognitív" ,"könnyű beazonosítani a probléma felelősét" ,"Egydimenziós szervezetek esetében is lehet többvonalas a vezetés." ,"Az irányítási, koordinációs és ellenőrzési tevékenységet a központ egységek látják el." ,"A feladatok és hatáskörök szabályozottsága ebből az egyenrangú döntési helyzetből fakadóan kevésbé egyértelmű, konfliktusok keletkezhetnek" ,"versenyhelyzetet teremthet a probléma megoldásában" ,"A munkamegosztás a szervezeti funkciók mentén történik." ,"több dimenziós" ,"megjelenhet a vezetők rivalizálása" ,"gyenge a piaci orientáció" ,"erőteljes a piaci orientáció" ,"közös célok" ,"a funkcionális munkamegosztás az egységköltség csökkenését eredményezheti" ,"ha a vállalat több telephellyel is rendelkezik" ,"egydimenziós" ,"az egységköltség növekedését eredményezheti a funkcionális munkamegosztás" ,"A központok tevékenységét nem csupán a rövid távú nyereségesség, hanem annak hosszú távon történő fenntarthatósága is jellemzi." ,"inkább horizontális, mint vertikális kommunikáció" ,"rugalmatlan" ,"feladatok végrehajtatása rendelkezésekkel, utasításokkal" ,"a kiadott szabályok és utasítások betartásának a felügyelete" ,"XX. Század eleje" ,"a vállalat kettős szervezetének létrehozása" ,"rugalmas" ,"Porter" ,"A fizikai és szellemi munka szétválasztása." ,"magas fokú specializáció" ,"Mindenkinek a képességeinek legmegfelelőbb munkát kell végeznie." ,"Ahhoz, hogy az emberek képesek legyenek jövedelemszerző tevékenységek folytatására, előre meg kell számukra határozni az elvégzendő feladatokat." ,"az átfutási idő bonyolultabbá vált" ,"hierarchia" ,"technikai" ,"A munkaszervezet racionalizálása pedig csökkenti a középvezetés iránti igényt, de a hiba esélyét nem." ,"közvetett irányítás" ,"beszerzési" ,"A vezetési funkció gyakorlása nem oszlik meg a vállalat társadalmi szervezetének felső és alsó szintjei között." ,"a szervezet ereje, tagjainak egységében rejlik" ,"a hatalmat a felelősség arányában kell megosztani" ,"a hatáskör és a felelősség nem válhat el egymástól" ,"az ellenszolgáltatás legyen méltányos és igazságos" ,"minden alkalmazott csak egy embertől kaphat utasítást" ,"informális eljárásokon nyugvó" ,"lineáris munkamegosztás" ,"nem tudás alapú kiválasztás és előléptetés" ,"A szervezetek számára a irracionális forrásból fakadó uralom az ideális." ,"eredmény orientált" ,"összehasonlíthatatlan" ,"lehetőség-erősség stratégiák" ,"tevékenység orientált" ,"fenyegetés-erősség stratégiák" ,"lehetőség-gyengeség stratégiák" ,"vállalati stratégia kulcsmomentumait" ,"fenyegetés-gyengeség stratégiák" ,"Minden szervezet egy rendszer, amelynek vannak inputjai, rendelkezik egy átalakítási folyamattal, de outputokkal nem." ,"minden szervezet egy rendszer, amelynek vannak inputjai, rendelkezik egy átalakítási folyamattal és outputokkal" ,"adaptív" ,"a jövő kutatása és a cselekvés részletes programtervének meghatározása" ,"a tagok által delegált személyekből álló igazgató tanács végzi" ,"valójában nem profitorientált" ,"vállalatok, vállalkozások" ,"a tulajdonosok felelőssége legfeljebb a részvény ellenértékének mértéke" ,"a tagok szavazata bevitt vagyonukkal arányos" ,"a korlátozott és korlátlan felelősség a különbség" ,"minden tagnak egy-egy szavazati joga van" ,"az alakulás határozott ideje lejárt" ,"önállóak, vagy együttesek" ,"a polgári jog általános szabályai szerinti" ,"a társaság részvénytársaság" ,"ha a Kft. törzstőkéje nagyobb, mint 50 millió forint" ,"nem visel tisztséget más hasonló társaságban" ,"a társaság operatív irányítói" ,"a taggyűlés, közgyűlés" ,"korlátlan és egyetemleges felelősség" ,"jogszabálysértés esete áll fenn" ,"hiteles cégaláírási nyilatkozat" ,"törvényi előírás szerinti" ,"jogi személyiséggel rendelkező közösség" ,"közkereseti társaság" ,"szerződést köthetnek" ,"ha erre felszólították" ,"a vállalkozó vállalkozói igazolványát visszaadja" ,"alkalmazottat, diákot, bedolgozót" ,"név, székhely, tevékenység" ,"okmányiroda" ,"aki Kft. tagja" ,"magyar állampolgárság, állandó magyar lakóhely, erkölcsi bizonyítvány" ,"nagy önállóságot biztosít a tagság számára az önkormányzásra" ,"jogi és természetes személyek" ,"a tagok" ,"még 5 évig kilépés után is" ,"Igen" ,"Nem" ,"korlátlan" ,"a társadalmi környezet része" ,"kilépéssel, a bevitt vagyonnal való elszámolás mellett" ,"kizárólag egy tagja lehet" ,"Egyszemélyes KFT" ,"RT" ,"természetes és jogi személyek" ,"a közgyűlés" ,"egy is lehet" ,"az igazgatóság végzi" ,"felelőssége korlátlan" ,"közvetlen és közvetett költségek" ,"görbe vonalú, egyenes vonalú és megszakításos függvények" ,"a műszaki dokumentáció és a becslés" ,"a vállalati költségek egy részét a termelés változása nem befolyásolja" ,"a változó költségek eredője lineáris" ,"jelleg" ,"változó költségek" ,"értékcsökkenési leírás" ,"degresszíven állandó" ,"propocionálisan nem változik a volumen függvényében" ,"Költség" ,"önköltség" ,"Határköltség" ,"Kiadás" ,"progresszív" ,"proporcionális" ,"degresszív" ,"állandó" ,"progresszív" ,"fix vagy állandó költségek" ,"degresszív" ,"a lekötött forgóeszközök megtérülése kedvezőbb" ,"görbe vonalú, egyenes vonalú és megszakításos függvények" ,"a bruttó nyereség és a működtetett tőke hányadosával" ,"a műszaki dokumentáció és a becslés" ,"A likviditási pont mindig alacsonyabb, vagy egyenlő a fedzeti ponttal." ,"a vagyoni eszközök szerkezetét és forrásait mutatja" ,"előtt befolyt pénzbevételek, de csak a következő időszak árbevételei" ,"A fedezeti pont az a pont, ahol a nyereség 0" ,"a vállalati költségek egy részét a termelés változása nem befolyásolja" ,"az egységár és a változó költség különbsége" ,"a változó költségek szintje" ,"mennyit kell értékesíteni a fix költség megtérüléséhez" ,"Olyan módszer, amely a nyereségesség növelését nem a volumen növelésében keresi. Gyakorlatilag fedezetszámítást jelent" ,"operatív tervezést mindig a szűk keresztmetszettel kell kezdeni" ,"Realítv fedezeti összegek" ,"bérek járulékai" ,"Fedezeti pont" ,"Amortizáció" ,"Abszolút fedezeti összeg" ,"Lineáris programozás" ,"Likviditási pont" ,"Kiadási költség" ,"Változó költség" ,"Fix költség" ,"proporcionális" ,"a likvid eszközök értéke viszonyítva a rövid lejáratú kötelezettségekhez" ,"a tervezést, mérést, összehasonlítást, elemzést, értékelést" ,"közvetlen és közvetett költségek" ,"számviteli elemzés"];

var kerdesString = document.getElementsByClassName("kkerdes")[0].innerHTML.replace(/ +(?= )/g,'').replace(/(['"])/g, "");

var valasz1 = document.getElementsByClassName("kvalasz1")[0].innerText;
var valasz2 = document.getElementsByClassName("kvalasz2")[0].innerText;
var valasz3 = document.getElementsByClassName("kvalasz3")[0].innerText;
var valasz4 = document.getElementsByClassName("kvalasz4")[0].innerText;

var i; var van = false;
for (i = 0; i < kerdesek.length && !van; i++)
	{
		if(kerdesString.includes(kerdesek[i]))
		{
			if (valasz1 == valaszok[i])
			{
				document.getElementsByClassName("kvalasz1")[0].setAttribute("style", "cursor: default");
				van = true;
			}
			else if (valasz2 == valaszok[i])
			{
				document.getElementsByClassName("kvalasz2")[0].setAttribute("style", "cursor: default");
				van = true;
			}
			else if (valasz3 == valaszok[i])
			{
				document.getElementsByClassName("kvalasz3")[0].setAttribute("style", "cursor: default");
				van = true;
			}
			else if (valasz4 == valaszok[i])
			{
				document.getElementsByClassName("kvalasz4")[0].setAttribute("style", "cursor: default");
				van = true;
			}
		}
	}
}
szia();
//---------------------------------------
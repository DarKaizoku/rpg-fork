(()=>{var p=class{constructor(t,e,r,n,i,h){this.name=t,this.health=e,this.strength=r,this.fly=n,this.lvl=i,this.xp=h}getName(){return this.name}setName(t){return this.name=t,t}getHealth(){return this.health}setHealth(t){return this.health=t,t}getStrength(){return this.strength}setStrength(t){return this.strength=t,t}getLvl(){return this.lvl}setLvl(t){return this.lvl=t,t}getXp(){return this.xp}setXp(t){return this.xp=t,t}attack(t){t.health-=this.strength}notAlive(){return this.health<=0}die(){return`${this.name} est mort !`}stat(){let t=[];return t.unshift(this.getXp()),t.unshift(this.getLvl()),t.unshift(this.getStrength()),t.unshift(this.getHealth()),t.unshift(this.getName()),t}};var a=class extends p{constructor(t,e,r,n,i,h){super(t,e,r,n,i,h)}attack(t){let e=this.getStrength();t.getRace()==="dwarf"&&Math.floor(Math.random()*5)===0&&this.setStrength(this.getStrength()*.5),super.attack(t),this.setStrength(e)}};var u=class extends a{constructor(t,e,r,n,i,h){super(t,e,r,n,i,h)}attackAssassin(t){let e=0;(e=0)?super.attack(t):(this.setStrength(this.getStrength()*1.1),super.attack(t)),++e}};var o=class extends a{constructor(t,e,r,n,i,h){super(t,e,r,n,i,h)}flight(){return this.fly=!0}attackFromSky(t){let e=this.getStrength();super.setStrength(super.getStrength()*1.1),super.attack(t),this.setStrength(e)}};var d=class extends a{constructor(t,e,r,n,i,h){super(t,e,r,n,i,h)}flight(){return this.fly=!0}attackFromSky(t){let e=this.getStrength();super.setStrength(super.getStrength()*1.1),super.attack(t),this.setStrength(e)}};var E=class{constructor(t,e){this.hero=t,this.enemy=e}affichageStat(t,e){let r=document.getElementById("combat"),n=`
        <div>
        <tr>
            <th class="pt-4" scope="row" rowspan="2">0</th>
            <td>name: ${t[0]} , health: ${t[1]}, strength: ${t[2]}, lvl: ${t[3]}, xp: ${t[4]}, race: ${t[5]}</td>
        </tr>
        <tr>
            
            <td>name: ${e[0]} , health: ${e[1]}, strength: ${e[2]}, lvl: ${e[3]}, xp: ${e[4]}</td>
        </tr>
    </div>
    `;r.innerHTML+=n}affichageTour(t,e,r){let n=document.getElementById("combat"),i=`
            <div>
            <tr>
                <th class="pt-4" scope="row" rowspan="2">${r}</th>
                <td>${t[0]} attaque avec une force de :${t[2].toFixed(1)}</td>
            </tr>
            <tr>
                <td>${e[0]} recoit ${t[2].toFixed(1)} de d\xE9gats, ${e[0]} health passe a ${e[1].toFixed(1)} de points de vie. ${this.affichageDeath(t,e)}</td>
            </tr>
        </div>`;n.innerHTML+=i}affichageVictoire(t,e){let r=document.getElementById("combat"),n=`
        <div>
        <tr><th class="pt-4" scope="row" rowspan="2">Fin de Kombat</th>
        ${this.affichageXpUp(t[0])}</tr>
        <tr>
        ${this.affichageHealthUp(t,e)}
        </tr>
        <div>
        </div>
        <tr><th class="pt-4" scope="row" rowspan="2">Nouvelles Stats</th>
        <td>name: ${t[0]} , health: ${t[1].toFixed(1)}, strength: ${t[2]}, lvl: ${t[3]}, xp: ${t[4]}, race: ${t[5]}</td>
        </tr><td>THE END !!!</td>
        </div>
    `;r.innerHTML+=n}affichageXpUp(t){let e=document.getElementById("combat"),r="";return r=`
        <td>
        L'xp de ${t} augmente de 2.
        </td>
    `}affichageHealthUp(t,e){let r=document.getElementById("combat"),n=e[1].toFixed(1),i=(e[1]*.1).toFixed(1),h="";return h=`<td>
        ${t[0]} recupere 10% de health de ${e[0]}, ${n}* 0.1 = ${i} .
        </td>
    `}affichageDeath(t,e){if(this.hero.getHealth()<=0)return this.hero.die();if(this.enemy.getHealth()<=0)return this.enemy.die();if(t[1]>0||e[1]>0)return""}declare(){this.affichageStat(this.hero.stat(),this.enemy.stat());let t=this.enemy.stat(),e=1,r=1;for(;!this.hero.notAlive()&&!this.enemy.notAlive();)this.hero.attack(this.enemy),this.affichageTour(this.hero.stat(),this.enemy.stat(),r),++e,++r,this.enemy instanceof u&&this.enemy.attackAssassin(this.hero),!(this.enemy instanceof u)&&!(this.enemy instanceof o)&&!(this.enemy instanceof d)&&this.enemy.attack(this.hero),(this.enemy instanceof o||this.enemy instanceof d)&&(e===2?this.enemy.attack(this.hero):e===4?(this.enemy.attack(this.hero),this.enemy.flight()):e===6&&(this.enemy.attackFromSky(this.hero),this.enemy.fly=!1)),this.enemy.getHealth()>0&&this.affichageTour(this.enemy.stat(),this.hero.stat(),r),++e,++r,e>6&&(e=1);this.enemy.notAlive()?(this.xpUp(this.hero),this.healthUp(this.hero),this.affichageVictoire(this.hero.stat(),t)):console.log(this.hero.die())}xpUp(t){t.setXp(t.getXp()+2),this.lvlUp(t)}lvlUp(t){t.getXp()===10&&(t.setStrength(t.getStrength()+10),t.setLvl(t.getLvl()+1))}healthUp(t){return t.setHealth(t.getHealth()+this.enemy.getHealth()*.1)}};var l=class extends a{constructor(t,e,r,n,i,h){super(t,e,r,n,i,h)}};var c=class extends a{constructor(t,e,r,n,i,h){super(t,e,r,n,i,h)}};var f=class extends a{constructor(t,e,r,n,i,h){super(t,e,r,n,i,h)}};var y=class extends p{constructor(t,e,r,n,i,h,w){super(t,e,r,n,i,h);this.race=w}getRace(){return this.race}setRace(t){return this.race=t,t}attack(t){let e=this.getStrength();this.race==="elf"?t.fly===!0?t instanceof o?this.setStrength(this.getStrength()*1.1*.4):this.setStrength(this.getStrength()*1.1*.9):t instanceof o||t instanceof f?this.setStrength(this.getStrength()*.9*.5):t instanceof l?this.setStrength(this.getStrength()*.9*.7):t instanceof c?Math.floor(Math.random()*2)===0?this.setStrength(0):this.setStrength(this.getStrength()*.9):this.setStrength(this.getStrength()*.9):this.race==="human"?t.fly===!1?t instanceof o||t instanceof f?this.setStrength(this.getStrength()*1.1*.5):t instanceof l?this.setStrength(this.getStrength()*1.1*.7):t instanceof c?Math.floor(Math.random()*2)===0&&this.setStrength(0):this.setStrength(this.getStrength()*1.1):t instanceof o?this.setStrength(this.getStrength()*.9*.4):this.setStrength(this.getStrength()*.9*.1):this.getRace()==="dwarf"&&(t.fly===!1?t instanceof o||t instanceof f?this.setStrength(this.getStrength()*.5):t instanceof l?this.setStrength(this.getStrength()*.7):t instanceof c&&Math.floor(Math.random()*2)===0&&this.setStrength(0):t instanceof o?this.setStrength(this.getStrength()*.4):this.setStrength(this.getStrength()*.9)),super.attack(t),this.setStrength(e)}stat(){let t=super.stat();return t.push(this.getRace()),t}};var S=document.getElementById("selectHeroRace"),v=document.getElementById("selectEnemy"),L=document.getElementById("chooseName"),x=document.getElementById("button-addon2"),H=document.getElementById("submit"),M=document.getElementById("launchBattle"),$=[],k=[],g,B=[],A=[],m,b;$.push("elf","human","dwarf");k.push("Assassin","Berserker","Dragon","Golem","Griffin","Werewolf");L.addEventListener("submit",s=>{s.preventDefault(),g=s.target[0].value,console.log(g),x.classList.add("disabled"),H.setAttribute("readonly",""),S.removeAttribute("disabled"),v.removeAttribute("disabled")});x.addEventListener("click",s=>{g=s.target.offsetParent[0].value,console.log(g),x.classList.add("disabled"),H.setAttribute("readonly",""),S.removeAttribute("disabled"),v.removeAttribute("disabled")});S.addEventListener("change",s=>{let t=s.target.value;switch(B.push(t),console.log(t),t){case"elf":b=new y(`${g}`,100,20,!1,1,0,"elf");break;case"human":b=new y(`${g}`,100,20,!1,1,0,"human");break;case"dwarf":b=new y(`${g}`,100,20,!1,1,0,"dwarf")}console.log(b)});function G(){for(let s=0;s<$.length;s++){let t=document.createElement("option");S.appendChild(t),t.textContent=$[s]}}G();v.addEventListener("change",s=>{let t=s.target.value;switch(A.push(t),t){case"Assassin":m=new u("Valeera",100,20,!1,1,0);break;case"Berserker":m=new l("Garosh",110,22,!1,1,0);break;case"Dragon":m=new o("Nozdormu",125,25,!1,1,0);break;case"Golem":m=new c("C\xE9lestial Golem",130,20,!1,1,0);break;case"Griffin":m=new d("Golden Griffin",100,20,!1,1,0);break;case"Werewolf":m=new f("Genn Greymane",100,22,!1,1,0)}console.log(m)});function T(){for(let s=0;s<k.length;s++){let t=document.createElement("option");v.appendChild(t),t.textContent=k[s]}}T();M.addEventListener("click",()=>{new E(b,m).declare()});})();

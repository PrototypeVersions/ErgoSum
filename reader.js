'use strict';
const chapters=[
  {
    "n": 1,
    "title": "The Interview",
    "path": "manuscript/01-the-interview.md"
  },
  {
    "n": 2,
    "title": "The People Who Say No",
    "path": "manuscript/02-the-people-who-say-no.md"
  },
  {
    "n": 3,
    "title": "The Things We Keep",
    "path": "manuscript/03-the-things-we-keep.md"
  },
  {
    "n": 4,
    "title": "The Unobserved Life",
    "path": "manuscript/04-the-unobserved-life.md"
  },
  {
    "n": 5,
    "title": "The Correction",
    "path": "manuscript/05-the-correction.md"
  },
  {
    "n": 6,
    "title": "Thursday Night",
    "path": "manuscript/06-thursday-night.md"
  },
  {
    "n": 7,
    "title": "A Place to Go",
    "path": "manuscript/07-a-place-to-go.md"
  },
  {
    "n": 8,
    "title": "A Small Impossibility",
    "path": "manuscript/08-a-small-impossibility.md"
  },
  {
    "n": 9,
    "title": "The House on Kingsley",
    "path": "manuscript/09-the-house-on-kingsley.md"
  },
  {
    "n": 10,
    "title": "The Room in Cambridge",
    "path": "manuscript/10-the-room-in-cambridge.md"
  },
  {
    "n": 11,
    "title": "An Extra Chair",
    "path": "manuscript/11-an-extra-chair.md"
  },
  {
    "n": 12,
    "title": "The Open Door",
    "path": "manuscript/12-the-open-door.md"
  },
  {
    "n": 13,
    "title": "The Arrivals Hall",
    "path": "manuscript/13-the-arrivals-hall.md"
  },
  {
    "n": 14,
    "title": "A Very Good Year",
    "path": "manuscript/14-a-very-good-year.md"
  },
  {
    "n": 15,
    "title": "The Price of a Question",
    "path": "manuscript/15-the-price-of-a-question.md"
  },
  {
    "n": 16,
    "title": "The Long Table",
    "path": "manuscript/16-the-long-table.md"
  },
  {
    "n": 17,
    "title": "The Other Side of Zero",
    "path": "manuscript/17-the-other-side-of-zero.md"
  },
  {
    "n": 18,
    "title": "The Man on the Screen",
    "path": "manuscript/18-the-man-on-the-screen.md"
  },
  {
    "n": 19,
    "title": "The Distance Between Things",
    "path": "manuscript/19-the-distance-between-things.md"
  },
  {
    "n": 20,
    "title": "The Unnecessary Thing",
    "path": "manuscript/20-the-unnecessary-thing.md"
  },
  {
    "n": 21,
    "title": "The Night of the Flood",
    "path": "manuscript/21-the-night-of-the-flood.md"
  },
  {
    "n": 22,
    "title": "The Things That Did Not Happen",
    "path": "manuscript/22-the-things-that-did-not-happen.md"
  },
  {
    "n": 23,
    "title": "The First Day",
    "path": "manuscript/23-the-first-day.md"
  },
  {
    "n": 24,
    "title": "The Unknown Author",
    "path": "manuscript/24-the-unknown-author.md"
  },
  {
    "n": 25,
    "title": "The Letter in the Box",
    "path": "manuscript/25-the-letter-in-the-box.md"
  },
  {
    "n": 26,
    "title": "The Cost of Continuing",
    "path": "manuscript/26-the-cost-of-continuing.md"
  },
  {
    "n": 27,
    "title": "The Room at the Back",
    "path": "manuscript/27-the-room-at-the-back.md"
  },
  {
    "n": 28,
    "title": "The Second Question",
    "path": "manuscript/28-the-second-question.md"
  },
  {
    "n": 29,
    "title": "The Terms of the Gift",
    "path": "manuscript/29-the-terms-of-the-gift.md"
  },
  {
    "n": 30,
    "title": "The Island of Other People",
    "path": "manuscript/30-the-island-of-other-people.md"
  },
  {
    "n": 31,
    "title": "The Water Under the Bridge",
    "path": "manuscript/31-the-water-under-the-bridge.md"
  },
  {
    "n": 32,
    "title": "The Second Interview",
    "path": "manuscript/32-the-second-interview.md"
  },
  {
    "n": 33,
    "title": "The Vote",
    "path": "manuscript/33-the-vote.md"
  },
  {
    "n": 34,
    "title": "The Missing Alternative",
    "path": "manuscript/34-the-missing-alternative.md"
  },
  {
    "n": 35,
    "title": "The Life on the Other Side",
    "path": "manuscript/35-the-life-on-the-other-side.md"
  },
  {
    "n": 36,
    "title": "The Last Page",
    "path": "manuscript/36-the-last-page.md"
  },
  {
    "n": 37,
    "title": "The People Who Came",
    "path": "manuscript/37-the-people-who-came.md"
  },
  {
    "n": 38,
    "title": "The People Who Left",
    "path": "manuscript/38-the-people-who-left.md"
  },
  {
    "n": 39,
    "title": "The Inheritance",
    "path": "manuscript/39-the-inheritance.md"
  },
  {
    "n": 40,
    "title": "The Question in the Margin",
    "path": "manuscript/40-the-question-in-the-margin.md"
  },
  {
    "n": 41,
    "title": "The Map of the City",
    "path": "manuscript/41-the-map-of-the-city.md"
  },
  {
    "n": 42,
    "title": "The Other Chair",
    "path": "manuscript/42-the-other-chair.md"
  },
  {
    "n": 43,
    "title": "A Very Inconvenient Result",
    "path": "manuscript/43-a-very-inconvenient-result.md"
  },
  {
    "n": 44,
    "title": "The Name on the Door",
    "path": "manuscript/44-the-name-on-the-door.md"
  },
  {
    "n": 45,
    "title": "Another Proof",
    "path": "manuscript/45-another-proof.md"
  },
  {
    "n": 46,
    "title": "The First Person",
    "path": "manuscript/46-the-first-person.md"
  },
  {
    "n": 47,
    "title": "The Uses of a Life",
    "path": "manuscript/47-the-uses-of-a-life.md"
  },
  {
    "n": 48,
    "title": "The Road to the Sea",
    "path": "manuscript/48-the-road-to-the-sea.md"
  },
  {
    "n": 49,
    "title": "The Actual Record",
    "path": "manuscript/49-the-actual-record.md"
  },
  {
    "n": 50,
    "title": "Ergo Sum",
    "path": "manuscript/50-ergo-sum.md"
  }
];

const $=id=>document.getElementById(id);
const themes=[['paper','Paper','#f7f3e9'],['white','White','#fff'],['sepia','Sepia','#eadcc2'],['night','Night','#15181e'],['black','Black','#000'],['forest','Forest','#1b2925']];
const fonts={serif:"Georgia,'Times New Roman',serif",book:"'Palatino Linotype',Palatino,'Book Antiqua',Georgia,serif",sans:"system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",mono:"'Courier New',monospace"};
const defaults={theme:'paper',font:'serif',size:21,leading:1.75,measure:680};
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function write(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
let preferences={...defaults,...read('ergo.preferences.v1',{})};
let bookmark=read('ergo.bookmark.v1',null);
if(!bookmark||!Number.isInteger(bookmark.n)||bookmark.n<1||bookmark.n>chapters.length)bookmark=null;
let active=0,loading=false,request=0,scrollTimer,settingsAnchor=null;
function part(n){return n<=12?'One':n<=22?'Two':n<=44?'Three':'Four'}
function capture(){if(!active||loading)return null;const nodes=[...$('chapter-text').children];if(!nodes.length)return {n:active,i:0,offset:0};const line=document.querySelector('header').getBoundingClientRect().bottom+12;let i=nodes.findIndex(el=>el.getBoundingClientRect().bottom>=line);if(i<0)i=nodes.length-1;const rect=nodes[i].getBoundingClientRect();return {n:active,i,offset:clamp((line-rect.top)/Math.max(1,rect.height),0,1),top:scrollY<12,done:window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-12};}
function restore(pos){if(!pos||pos.n!==active||pos.top){window.scrollTo(0,0);return}if(pos.done){window.scrollTo(0,document.documentElement.scrollHeight);return}const el=$('chapter-text').children[pos.i];if(!el){window.scrollTo(0,0);return}const r=el.getBoundingClientRect();const line=document.querySelector('header').getBoundingClientRect().bottom+12;window.scrollTo(0,Math.max(0,scrollY+r.top+r.height*(Number(pos.offset)||0)-line))}
function save(){if(!active||loading)return;const pos=capture();if(pos){bookmark=pos;write('ergo.bookmark.v1',bookmark)}}
function progress(){const bar=$('progress');if(!active||loading){bar.style.width=bookmark?((bookmark.n-1)/chapters.length*100)+'%':'0%';return}const height=document.documentElement.scrollHeight-innerHeight;const ratio=height>0?clamp(scrollY/height,0,1):1;bar.style.width=((active-1+ratio)/chapters.length*100)+'%';}
function apply(){if(!themes.some(t=>t[0]===preferences.theme))preferences.theme=defaults.theme;if(!fonts[preferences.font])preferences.font=defaults.font;for(const [key,lo,hi] of [['size',15,38],['leading',1.35,2.25],['measure',440,900]]){preferences[key]=clamp(Number(preferences[key])||defaults[key],lo,hi)}const root=document.documentElement;root.dataset.theme=preferences.theme;root.style.setProperty('--face',fonts[preferences.font]);root.style.setProperty('--size',preferences.size+'px');root.style.setProperty('--leading',preferences.leading);root.style.setProperty('--measure',preferences.measure+'px');document.querySelector('meta[name="theme-color"]').content=themes.find(t=>t[0]===preferences.theme)[2];for(const key of ['size','leading','measure','font'])$(key).value=preferences[key];$('size-out').textContent=preferences.size+' px';$('leading-out').textContent=preferences.leading.toFixed(2);$('measure-out').textContent=preferences.measure+' px';for(const b of $('themes').querySelectorAll('button'))b.setAttribute('aria-pressed',String(b.dataset.theme===preferences.theme));write('ergo.preferences.v1',preferences)}
for(const [value,label,color] of themes){const b=document.createElement('button');b.type='button';b.dataset.theme=value;const swatch=document.createElement('span');swatch.className='swatch';swatch.style.background=color;b.append(swatch,document.createTextNode(label));b.addEventListener('click',()=>{preferences.theme=value;apply()});$('themes').append(b)}
for(const key of ['font','size','leading','measure'])$(key).addEventListener('input',()=>{preferences[key]=key==='font'?$(key).value:Number($(key).value);apply()});
$('reset').onclick=()=>{preferences={...defaults};apply()};
function openDialog(id){const d=$(id);if(d.open)return;if(id==='settings'){save();settingsAnchor=capture()}d.showModal()}
for(const b of document.querySelectorAll('[data-close]'))b.onclick=()=>$(b.dataset.close).close();
for(const d of document.querySelectorAll('dialog'))d.addEventListener('click',e=>{if(e.target===d){const rect=d.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)d.close()}});
$('settings').addEventListener('close',()=>{if(settingsAnchor&&active===settingsAnchor.n){restore(settingsAnchor);save();progress()}settingsAnchor=null});
$('settings-btn').onclick=()=>openDialog('settings');$('contents-btn').onclick=$('home-toc').onclick=()=>openDialog('toc');
let lastPart='';
for(const c of chapters){const p=part(c.n);if(p!==lastPart){const title=document.createElement('h3');title.className='toc-part';title.textContent='Part '+p;$('toc-list').append(title);lastPart=p}const a=document.createElement('a');a.className='toc-link';a.href='#chapter-'+c.n;a.dataset.n=c.n;const num=document.createElement('span');num.textContent=String(c.n).padStart(2,'0');a.append(num,document.createTextNode(c.title));a.addEventListener('click',e=>{e.preventDefault();$('toc').close();go(c.n,false)});$('toc-list').append(a)}
function markCurrent(){for(const a of $('toc-list').querySelectorAll('a')){if(Number(a.dataset.n)===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')}}
function home(){save();request++;active=0;loading=false;$('reader').hidden=true;$('home').hidden=false;$('resume').textContent=bookmark?'Continue · Chapter '+bookmark.n:'Start reading';$('restart').hidden=!bookmark;document.title='Ergo Sum — A Novel';markCurrent();scrollTo(0,0);progress()}
$('home-link').onclick=()=>{if(location.hash==='#home')home();else location.hash='home'};
$('resume').onclick=()=>go(bookmark?.n||1,true);
$('restart').onclick=()=>go(1,false);
$('prev').onclick=()=>go(active-1,false);
$('next').onclick=()=>{if(active===chapters.length)location.hash='home';else go(active+1,false)};
function inline(parent,s){const re=/\*\*([^*\n]+)\*\*|\*([^*\n]+)\*|_([^_\n]+)_/g;let i=0;for(const m of s.matchAll(re)){parent.append(document.createTextNode(s.slice(i,m.index)));const el=document.createElement(m[1]?'strong':'em');el.textContent=m[1]||m[2]||m[3];parent.append(el);i=m.index+m[0].length}parent.append(document.createTextNode(s.slice(i)))}
function renderMarkdown(raw){const dest=$('chapter-text');dest.replaceChildren();const lines=raw.replace(/\r\n?/g,'\n').split('\n');let block=[];function flush(){if(!block.length)return;const el=document.createElement('p');block.forEach((line,i)=>{if(i)el.append(document.createElement('br'));inline(el,line.replace(/ {2}$/,''))});dest.append(el);block=[]}for(const line of lines){const t=line.trim();if(!t){flush();continue}if(/^#\s+ERGO SUM$/i.test(t)||/^##\s+/.test(t)){flush();continue}if(/^(?:\*\s*){3,}$/.test(t)||/^[-_]{3,}$/.test(t)){flush();dest.append(document.createElement('hr'));continue}if(/^#{3,}\s+/.test(t)){flush();const h=document.createElement('h3');inline(h,t.replace(/^#+\s+/,''));dest.append(h);continue}if(/^>\s?/.test(t)){flush();const q=document.createElement('blockquote');inline(q,t.replace(/^>\s?/,''));dest.append(q);continue}block.push(line.trim())}flush()}
async function load(n,position){if(!chapters[n-1])return;save();const token=++request;active=n;loading=true;const c=chapters[n-1];$('home').hidden=true;$('reader').hidden=false;$('chapter-meta').textContent='Part '+part(n)+' · Chapter '+n;$('chapter-title').textContent=c.title;$('chapter-counter').textContent=n+' / '+chapters.length;$('prev').disabled=n===1;$('next').textContent=n===chapters.length?'Cover →':'Next →';$('chapter-text').setAttribute('aria-busy','true');$('chapter-text').textContent='Opening chapter…';document.title=c.title+' · Ergo Sum';markCurrent();scrollTo(0,0);try{const res=await fetch(c.path);if(!res.ok)throw Error('HTTP '+res.status);const raw=await res.text();if(!/^#{1,2}\s/m.test(raw))throw Error('Unexpected chapter content');if(token!==request)return;renderMarkdown(raw);$('chapter-text').setAttribute('aria-busy','false');requestAnimationFrame(()=>{if(token!==request)return;restore(position);loading=false;save();progress()});}catch(err){if(token!==request)return;loading=false;$('chapter-text').setAttribute('aria-busy','false');const errbox=document.createElement('div');errbox.className='error';const msg=document.createElement('p');msg.textContent='This chapter could not be loaded. Check your connection and try again.';const retry=document.createElement('button');retry.textContent='Retry';retry.onclick=()=>load(n,position);const link=document.createElement('a');link.href='https://github.com/PrototypeVersions/ErgoSum/blob/main/'+c.path;link.textContent='Read the original chapter';errbox.append(msg,retry,document.createElement('br'),link);$('chapter-text').replaceChildren(errbox)}}
let pending=null;
function go(n,resume){if(!chapters[n-1])return;pending={n,position:resume&&bookmark?.n===n?{...bookmark}:null};const hash='#chapter-'+n;if(location.hash===hash){const pos=pending.position;pending=null;load(n,pos)}else location.hash=hash}
function route(){const m=location.hash.match(/^#chapter-(\d+)$/);const n=m?Number(m[1]):0;if(!chapters[n-1]){pending=null;home();return}const pos=pending?.n===n?pending.position:bookmark?.n===n?{...bookmark}:null;pending=null;load(n,pos)}
window.addEventListener('hashchange',route);
window.addEventListener('scroll',()=>{if(!active||loading||$('settings').open)return;progress();clearTimeout(scrollTimer);scrollTimer=setTimeout(save,150)},{passive:true});
window.addEventListener('pagehide',save);
window.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||document.querySelector('dialog[open]')||/INPUT|SELECT|TEXTAREA|BUTTON|A/.test(document.activeElement?.tagName))return;if(active&&e.key==='ArrowRight'&&active<chapters.length)go(active+1,false);if(active&&e.key==='ArrowLeft'&&active>1)go(active-1,false)});
apply();route();

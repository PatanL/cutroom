const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/live-CWpqgbhi.js","assets/player-D281m43C.js","assets/chrome-CVbVCWyU.js","assets/chrome-Cd6OWNvm.css","assets/player-DabKSXbl.css","assets/risky-BonORCwf.js","assets/official-BRyOI2zv.js","assets/official-CcAcB6wI.css","assets/editbay-D3q0wCK2.js","assets/editbay-BnCX3pRg.css","assets/live-BBh2oNo0.css"])))=>i.map(i=>d[i]);
import{m as q,t as y,e as a,f as _,o as z}from"./chrome-CVbVCWyU.js";import{_ as V,m as x}from"./player-D281m43C.js";/* empty css             */import C from"./rooms-bIzyg52U.js";import{A as E}from"./agents-BCs8enyu.js";import{V as A}from"./cuts-z-c-6KB9.js";import{E as R}from"./extras-C1z-qbY8.js";import{L as P}from"./lore-CEejhifE.js";import{K as J}from"./kickrates-CLFNjp1I.js";import{R as G}from"./risky-BonORCwf.js";import{L as H,r as L,i as Y,b as X}from"./launchapi-Bq9kdkb2.js";import{historyHTML as Q}from"./roomhist-Br4aTrZM.js";const Z=new Set(G),b=Object.fromEntries(J.rates.map(s=>[s.kick,s.usd]));q({active:"Rooms"});const f=document.getElementById("room"),T="https://api.hookrs.fun/cutroom/live",ss=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`,es=`
  <section class="lv-embed" id="live-sec">
    <div class="wrap">
      <div class="lv-embed-head"><div class="lv-onair" id="onair"><span class="lv-dot"></span><b id="air-word">Connecting</b><span class="mono" id="air-clock">--:--:--</span></div>
        <span class="muted">The room is watching this stream right now: every word it hears, chat's pulse, and each moment it cuts.</span></div>
      <div class="lv-watch" id="watch"></div>
    </div>
    <section class="lv-board-sec">
      <div class="wrap">
        <div class="lv-counters" id="counters"></div>
        <div class="lv-show" id="show" hidden>
          <div class="panel lv-desk"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>the editor · last moment</span><span class="tc" id="desk-tc"></span></div><div class="lv-desk-body" id="desk"></div></div>
          <div class="panel lv-latest"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>latest cut</span><span class="tc" id="latest-tc"></span></div><div class="lv-latest-body" id="latest"></div></div>
        </div>
        <div class="lv-board">
          <div class="panel lv-feed">
            <div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>source · <span id="src-name">kick</span></span><span class="tc" id="feed-tc">00:00:00</span></div>
            <div class="lv-screen"><img id="thumb" alt="Latest frame from the stream" hidden><div class="lv-screen-empty" id="thumb-empty">tuning in</div><span class="lv-rec"><i></i>REC</span></div>
            <div class="lv-hear"><div class="lv-label"><span>What the room hears</span><span class="mono" id="tx-meta"></span></div><ol class="lv-tx" id="tx"></ol></div>
          </div>
          <div class="panel lv-signal">
            <div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>signal · last 5 min</span><span class="tc" id="lag"></span></div>
            <div class="lv-chart"><canvas id="chart" aria-label="Loudness, chat speed and moment score over the last five minutes"></canvas></div>
            <p class="lv-key mono"><span><i class="k-loud"></i>loudness</span><span><i class="k-chat"></i>chat msgs/sec</span><span><i class="k-score"></i>moment score</span><span><i class="k-flag"></i>moment</span></p>
            <div class="lv-log"><div class="lv-label"><span>Progress log</span><span class="mono" id="log-n"></span></div><ol class="lv-logl" id="log"></ol></div>
          </div>
          <div class="panel lv-cuts">
            <div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>cut list</span><span class="tc" id="cut-n">0 clips</span></div>
            <div class="lv-cutlist" id="cuts"><p class="lv-empty">Watching. The first moments land after about two minutes of stream.</p></div>
          </div>
        </div>
      </div>
    </section>
  </section>`;var U;const M=(location.pathname.match(/^\/(?:rooms|coin)\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((U=C[0])==null?void 0:U.id),w=Y(M)?M:null;let d=M,o=null,t=C.find(s=>s.id===d);const W=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,ts={},B=s=>{var e;return((e=E[s.slug])==null?void 0:e.handle)||`cutroom${(ts[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},S=s=>{if(!s)return"not yet";const e=Math.max(0,(Date.now()/1e3-s)/60);return e<1?"just now":e<60?`${Math.round(e)} min ago`:e<2880?`${Math.round(e/60)} h ago`:`${Math.round(e/1440)} d ago`},K={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function as(s,e,i,n){if(!s&&!n&&e.platform!=="Kick")return"";const l=n?"live":(s==null?void 0:s.mode)||"offline",[p,v]=K[l]||K.offline,m=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${v}"><i></i>${p}</span>
      <span class="mono muted">checks ${e.platform==="Twitch"?"twitch.tv":"kick.com"}/${a(e.handle||e.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${S(s.checked)}`:""}</span></div>
    <p class="ag-doing">${a(n?`Watching ${e.name} live right now: every word, chat's pulse, each moment it cuts. The board is above.`:(s==null?void 0:s.doing)||`Offline. When ${e.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${e.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${S(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${m.map(u=>`<li><span>${a(new Date(u.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${a(u.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const N=s=>{if(!s)return"";const[e,i]=String(s).split("-");return i?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+i-1]} ${e}`:e};function is(s){const e=P[s.slug],i=P._meta||{};return!e||!(e.arcs.length||e.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${a(e.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${i.storylines||"dozens of"} storylines on ${i.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${e.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${e.cast.map(n=>`<span class="chip">${a(n)}</span>`).join("")}</div></div>`:""}
        ${e.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${e.jokes.map(n=>`<li>${a(n)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${e.arcs.map(n=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${a(N(n.start))}${n.end&&n.end!==n.start?` – ${a(N(n.end))}`:n.start?" – now":""}</span>${n.tone.slice(0,3).map(l=>`<span class="badge">${a(l)}</span>`).join("")}</div>
        <b>${a(n.title)}</b><p>${a(n.summary)}${n.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${n.beats} dated moments · ${n.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const ns={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function F(s){return[...s.clips.map(e=>({k:"live",tag:"Cut live",file:e.file,poster:e.poster,title:e.hook||"",meta:e.after_moment_s?`ready ${W(e.after_moment_s)} after it happened${e.forced?" · operator pressed clip":""}`:"",how:`${a(e.why||"")}${e.post&&e.post.url?" · posted":""}`})),...A.filter(e=>e.slug===s.slug).map(e=>({k:"past",tag:"Past stream",file:e.file,poster:e.poster,title:e.hook||"",meta:`${e.date?`from the ${e.date} stream`:"from a past stream"} · ${Math.round(e.duration)} s`,how:`from <a href="${a(e.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${_(e.source_views||0)} times · editor ${e.score}/10`})),...R.filter(e=>e.slug===s.slug).map(e=>({k:"edit",tag:ns[e.kind]||e.kind,file:e.file,poster:e.poster,title:e.title||"",meta:`${e.from||""} · ${Math.round(e.duration)} s`,how:""}))]}function os(s){const e=F(s);if(!e.length)return"";const i=l=>e.filter(p=>p.k===l).length,n=[["live","Cut live"],["past","From past streams"],["edit","Edits"]].filter(([l])=>i(l));return`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
      ${n.length>1?`<div class="seg ch-chips" role="group" aria-label="Show"><button type="button" data-k="" aria-pressed="true">All ${e.length}</button>${n.map(([l,p])=>`<button type="button" data-k="${l}" aria-pressed="false">${p} ${i(l)}</button>`).join("")}</div>`:""}</div>
    <div class="real-grid ch-cuts">${e.map(l=>`<figure class="real-card reveal" data-k="${l.k}"><div class="real-vid"><video src="${a(l.file)}" poster="${a(l.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono${l.k==="live"?" live":""}">${a(l.tag)}</span></div>
      <figcaption><b>${a(l.title)}</b>${l.meta?`<span class="mono">${a(l.meta)}</span>`:""}${l.how?`<span class="real-how">${l.how}</span>`:""}</figcaption></figure>`).join("")}</div>
  </div></section>`}function D(s,e){const i=s.coin,n=e.clips+A.filter(m=>m.slug===s.slug).length+R.filter(m=>m.slug===s.slug).length,l=F(s).length,p=e.minutes/60;return`<dl class="ch-facts">${[...i?[["Coin",`$${a(i.ticker)}`,i.pending?"confirming…":i.nomarket?"no market yet":`${ss(i.mcap_usd||0)} market cap`,"y"],...i.mint?[[i.graduated?"Graduated":"To graduation",i.graduated?i.venue==="pump"?"PumpSwap":"Meteora":i.nomarket?"—":`${Math.round(i.progress*100)}%`,i.graduated?"trading on the pool":i.nomarket?"":`${i.raised.toFixed(1)} / ${i.target.toFixed(0)} SOL`]]:[]]:[["Coin","no coin yet","opens at launch","muted"]],["Pays",s.rate?`$${s.rate} / 100K`:"—",`<a href="${a(s.program_url)}" target="_blank" rel="noopener">${a(s.program)}</a>`,s.rate?"y":"muted"],["Posts as",`@${a(B(s))}`,o?"accounts opening":"accounts open at launch"],["Watched live",e.sessions?`${p<10?p.toFixed(1):Math.round(p)} h`:"—",e.sessions?`${e.sessions} session${e.sessions===1?"":"s"}`:"starts the next time they go live"],["Cut",_(n),n?`${l} on this page`:"nothing yet",n?"y":""],["Editor",e.moments?`${e.kept} of ${_(e.moments)}`:"—",e.moments?`moments kept${e.median_after_s?` · cut ~${W(e.median_after_s)} after`:""}`:"no moments yet"]].map(([m,u,g,r])=>`<div><dt>${m}</dt><dd class="mono ${r||""}">${u}</dd>${g?`<span class="sub">${g}</span>`:""}</div>`).join("")}
    ${i!=null&&i.mint?`<div class="ch-ca"><dt>CA</dt><b class="mono">${a(i.mint)}</b><button type="button" class="btn btn-ghost btn-sm" id="copy-ca" data-ca="${a(i.mint)}">Copy CA</button>
      <a class="btn btn-y btn-sm" href="${X(a(i.mint),i.venue)}" target="_blank" rel="noopener">Buy $${a(i.ticker)}</a></div>`:""}</dl>`}function ls(s,e,i){var I,j;const n=E[d],l=R.find(c=>c.slug===d);if(!t&&!s&&n&&(s={name:n.name,live:!1,category:n.category||"Kick",rate:b[d]}),!t&&!s&&o&&(s={name:((I=o.sourceNames)==null?void 0:I[0])||d,live:!1,category:"Stream",platform:/^twitch:/.test(((j=o.follow)==null?void 0:j[0])||"")?"Twitch":"Kick",rate:b[d]}),!t&&!s&&l&&(s={name:l.streamer,live:!1,category:l.platform,rate:b[d],program:l.program,platform:l.platform}),!t&&s&&(t={id:d,slug:d,name:s.name||d,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||b[d],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),Z.has(d)&&(t=null),t){const c=/twitch/i.test((s==null?void 0:s.platform)||t.platform||"")?"Twitch":"Kick";t={...t,platform:c,handle:(s==null?void 0:s.handle)||t.handle||t.slug},c==="Twitch"&&!t.rate&&(t={...t,program:"no clipping bounty yet",program_url:`https://www.twitch.tv/${encodeURIComponent(t.handle)}`})}if(!t){f.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}if(o){const c=o.market||{};t={...t,coin:{ticker:o.ticker,venue:o.venue||c.venue||"meteora",mcap_usd:c.mcapUsd||0,mint:o.mint,progress:c.progress||0,raised:c.raisedSol||0,target:c.targetSol||0,graduated:c.graduated,pending:o.state!=="live",nomarket:!o.market}}}document.title=o?`${o.name} ($${o.ticker}) · cutroom`:`${t.name} room · cutroom`;const p=t.stats,v=t.clips[0]||A.find(c=>c.slug===t.slug),m=t.platform==="Twitch"?"twitch":"kick",u=`<a class="mono muted" href="https://${m==="twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(t.handle)}" target="_blank" rel="noopener">${m==="twitch"?"twitch.tv":"kick.com"}/${a(t.handle)} ↗</a>`,g=o?`<span class="badge mid">Launched · $${a(o.ticker)}</span>`:'<span class="badge mid">Test room</span>',r=o?`${a(o.name)} <span class="hl">$${a(o.ticker)}</span>`:`${a(t.name)} <span class="hl">room</span>`,h='<div class="ch-actions"><a class="btn btn-y" href="/launch">Launch a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>';f.innerHTML=`
  ${e?`<section class="ch-strip-sec"><div class="wrap"><div class="ch-strip">
      <div class="ch-strip-h"><h1 class="ch-strip-name">${r}</h1>${g}${h}</div>
      ${D(t,p)}</div></div></section>`:`<section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live?'<div class="ch-live" id="ch-live"></div>':v?`<div class="real-vid"><video src="${a(v.file)}" poster="${a(v.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${_(s.viewers)} watching</span>`:`<span class="badge">Offline${s!=null&&s.last_live?` · last live ${S(s.last_live)}`:""}</span>`}<span class="plat ${m==="twitch"?"tw":"kk"}">${m.toUpperCase()}</span>${u}${g}</div>
        <h1 class="cap ch-cap" style="--n:${Math.max(5,...(o?`${o.name} $${o.ticker}`:t.name).split(/\s+/).map(c=>c.length))}">${r}</h1>
        ${s!=null&&s.live&&(s.title||t.title)?`<p class="ch-sub">“${a(s.title||t.title)}”</p>`:""}
        ${D(t,p)}
        ${h}
      </div>
    </div>
  </section>

  ${as(i,t,s,e)}`}

  ${os(t)}

  ${Q(t,{clips:!1})}

  ${is(t)}

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">Once @${a(B(t))} is connected, every clip the room keeps is posted${t.rate?` and submitted to ${a(t.program)}`:", and submitted as soon as a clipping program opens"}, with its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view${t.rate?`, from ${a(t.program)}`:""}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the payout.</p>
      </div>
    </div>
  </section>`,f.querySelectorAll(".ch-chips button").forEach(c=>c.addEventListener("click",()=>{f.querySelectorAll(".ch-chips button").forEach(O=>O.setAttribute("aria-pressed",String(O===c)));const k=f.querySelector(".ch-cuts");c.dataset.k?k.dataset.k=c.dataset.k:delete k.dataset.k})),f.querySelectorAll("[data-more]").forEach(c=>c.addEventListener("click",()=>{var k;(k=c.closest("section").querySelector(".moments"))==null||k.classList.add("all"),c.remove()})),document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),y("Link copied")}catch{y(location.href)}}),z();const $=document.getElementById("ch-live");$&&!$.dataset.on&&($.dataset.on="1",x($,{slug:t.handle,name:t.name,platform:t.platform==="Twitch"?"twitch":"kick"},T))}async function cs(){var l,p,v,m,u,g;if(!w){try{const r=await fetch(`${H}/v1/rooms`,{cache:"no-store"});r.ok&&(o=((await r.json()).rooms||[]).find(h=>h.slug===d||(h.follow||[]).some($=>$.replace(/^twitch:/,"")===d))||null)}catch{}o&&history.replaceState(null,"",L(o.mint)+location.search)}if(w){try{const r=await fetch(`${H}/v1/rooms/${w}`,{cache:"no-store"});r.ok&&(o=await r.json())}catch{}o&&(d=(((l=o.follow)==null?void 0:l[0])||((p=o.kick)==null?void 0:p[0])||((v=o.sources)==null?void 0:v[0])||d).replace(/^twitch:/,""),t=C.find(r=>r.id===d),location.pathname!==L(w)&&history.replaceState(null,"",L(w)+location.search))}let s=null;try{const r=new AbortController;setTimeout(()=>r.abort(),4e3);const h=await fetch(`${T}/status`,{signal:r.signal,cache:"no-store"});h.ok&&(s=await h.json())}catch{}const e=(m=s==null?void 0:s.streamers)==null?void 0:m[d],i=!!((u=s==null?void 0:s.rooms)!=null&&u[d]);let n=E[d]||null;try{const r=await fetch(`${T}/agent/${encodeURIComponent(d)}`,{cache:"no-store"});if(r.ok){const h=await r.json();n={...h,dug_n:Object.keys(h.dug||{}).length}}}catch{}ls(e,i,n),(g=document.getElementById("copy-ca"))==null||g.addEventListener("click",r=>{var h;(h=navigator.clipboard)==null||h.writeText(r.currentTarget.dataset.ca).then(()=>y("CA copied"),()=>y(r.currentTarget.dataset.ca))}),o&&new URLSearchParams(location.search).has("launched")&&f.insertAdjacentHTML("afterbegin",`<div class="wrap"><div class="launched-banner"><b>${a(o.name)} is launched.</b> <span>The room's agent is on it: it digs ${a(o.sourceNames.join(", "))}'s most-clipped moments now and goes live the next time they stream. Its work shows up below.</span></div></div>`),i&&(f.insertAdjacentHTML("afterbegin",es),window.__CUTROOM_EMBED=!0,await V(()=>import("./live-CWpqgbhi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}cs();

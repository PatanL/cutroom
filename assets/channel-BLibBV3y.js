const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/live-De4pY5Gs.js","assets/player-D281m43C.js","assets/chrome-CVbVCWyU.js","assets/chrome-Cd6OWNvm.css","assets/player-DabKSXbl.css","assets/risky-BonORCwf.js","assets/official-BRyOI2zv.js","assets/official-CcAcB6wI.css","assets/editbay-D3q0wCK2.js","assets/editbay-BnCX3pRg.css","assets/live-BBh2oNo0.css"])))=>i.map(i=>d[i]);
import{m as q,t as _,e as i,f as L,o as z}from"./chrome-CVbVCWyU.js";import{_ as V,m as x}from"./player-D281m43C.js";/* empty css             */import C from"./rooms-bIzyg52U.js";import{A as R}from"./agents-BCs8enyu.js";import{V as A}from"./cuts-z-c-6KB9.js";import{E}from"./extras-C1z-qbY8.js";import{L as P}from"./lore-CEejhifE.js";import{K as J}from"./kickrates-CLFNjp1I.js";import{R as G}from"./risky-BonORCwf.js";import{L as H,r as M,i as Y,b as X}from"./launchapi-Bq9kdkb2.js";import{historyHTML as Q}from"./roomhist-Br4aTrZM.js";const Z=new Set(G),y=Object.fromEntries(J.rates.map(s=>[s.kick,s.usd]));q({active:"Rooms"});const f=document.getElementById("room"),b="https://api.hookrs.fun/cutroom/live",ss=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`,es=`
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
  </section>`;var U;const T=(location.pathname.match(/^\/(?:rooms|coin)\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((U=C[0])==null?void 0:U.id),w=Y(T)?T:null;let d=T,l=null,t=C.find(s=>s.id===d);const B=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,ts={},W=s=>{var e;return((e=R[s.slug])==null?void 0:e.handle)||`cutroom${(ts[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},S=s=>{if(!s)return"not yet";const e=Math.max(0,(Date.now()/1e3-s)/60);return e<1?"just now":e<60?`${Math.round(e)} min ago`:e<2880?`${Math.round(e/60)} h ago`:`${Math.round(e/1440)} d ago`},K={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function as(s,e,a,n){if(!s&&!n&&e.platform!=="Kick")return"";const o=n?"live":(s==null?void 0:s.mode)||"offline",[m,v]=K[o]||K.offline,h=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${v}"><i></i>${m}</span>
      <span class="mono muted">${s!=null&&s.checked?`last checked ${e.platform==="Twitch"?"twitch.tv":"kick.com"}/${i(e.handle||e.slug)} ${S(s.checked)}`:""}</span></div>
    <p class="ag-doing">${i(s!=null&&s.doing&&!/^offline: checking for a live stream/i.test(s.doing)?s.doing:`When ${e.name} goes live, the room watches the whole stream and cuts it live. In between, it digs through past streams for moments worth recutting.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${S(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${h.map(u=>`<li><span>${i(new Date(u.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${i(u.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const N=s=>{if(!s)return"";const[e,a]=String(s).split("-");return a?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+a-1]} ${e}`:e};function is(s){const e=P[s.slug],a=P._meta||{};return!e||!(e.arcs.length||e.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${i(e.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${a.storylines||"dozens of"} storylines on ${a.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${e.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${e.cast.map(n=>`<span class="chip">${i(n)}</span>`).join("")}</div></div>`:""}
        ${e.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${e.jokes.map(n=>`<li>${i(n)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${e.arcs.map(n=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${i(N(n.start))}${n.end&&n.end!==n.start?` – ${i(N(n.end))}`:n.start?" – now":""}</span>${n.tone.slice(0,3).map(o=>`<span class="badge">${i(o)}</span>`).join("")}</div>
        <b>${i(n.title)}</b><p>${i(n.summary)}${n.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${n.beats} dated moments · ${n.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const ns={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function F(s){return[...s.clips.map(e=>({k:"live",tag:"Cut live",file:e.file,poster:e.poster,title:e.hook||"",meta:e.after_moment_s?`ready ${B(e.after_moment_s)} after it happened${e.forced?" · operator pressed clip":""}`:"",how:`${i(e.why||"")}${e.post&&e.post.url?" · posted":""}`})),...A.filter(e=>e.slug===s.slug).map(e=>({k:"past",tag:"Past stream",file:e.file,poster:e.poster,title:e.hook||"",meta:`${e.date?`from the ${e.date} stream`:"from a past stream"} · ${Math.round(e.duration)} s`,how:`from <a href="${i(e.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${L(e.source_views||0)} times · editor ${e.score}/10`})),...E.filter(e=>e.slug===s.slug).map(e=>({k:"edit",tag:ns[e.kind]||e.kind,file:e.file,poster:e.poster,title:e.title||"",meta:`${e.from||""} · ${Math.round(e.duration)} s`,how:""}))]}function os(s){const e=F(s);if(!e.length)return"";const a=o=>e.filter(m=>m.k===o).length,n=[["live","Cut live"],["past","From past streams"],["edit","Edits"]].filter(([o])=>a(o));return`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
      ${n.length>1?`<div class="seg ch-chips" role="group" aria-label="Show"><button type="button" data-k="" aria-pressed="true">All ${e.length}</button>${n.map(([o,m])=>`<button type="button" data-k="${o}" aria-pressed="false">${m} ${a(o)}</button>`).join("")}</div>`:""}</div>
    <div class="real-grid ch-cuts">${e.map(o=>`<figure class="real-card reveal" data-k="${o.k}"><div class="real-vid"><video src="${i(o.file)}" poster="${i(o.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono${o.k==="live"?" live":""}">${i(o.tag)}</span></div>
      <figcaption><b>${i(o.title)}</b>${o.meta?`<span class="mono">${i(o.meta)}</span>`:""}${o.how?`<span class="real-how">${o.how}</span>`:""}</figcaption></figure>`).join("")}</div>
  </div></section>`}function D(s,e){const a=s.coin,n=e.clips+A.filter(h=>h.slug===s.slug).length+E.filter(h=>h.slug===s.slug).length,o=F(s).length,m=e.minutes/60,v=[...a?[["Market cap",a.pending?"confirming…":a.nomarket?"—":ss(a.mcap_usd||0),`$${i(a.ticker)} on ${a.venue==="meteora"?"Meteora":"pump.fun"}`,"y"],...a.mint?[[a.graduated?"Graduated":"To graduation",a.graduated?a.venue==="pump"?"PumpSwap":"Meteora":a.nomarket?"—":`${Math.round(a.progress*100)}%`,a.graduated?"trading on the pool":a.nomarket?"":`${a.raised.toFixed(1)} / ${a.target.toFixed(0)} SOL`]]:[]]:[["Coin","no coin yet","opens at launch","muted"]],["Pays",s.rate?`$${s.rate} / 100K`:"—",`<a href="${i(s.program_url)}" target="_blank" rel="noopener">${i(s.program)}</a>`,s.rate?"y":"muted"],["Posts as",`@${i(W(s))}`,l?"accounts opening":"accounts open at launch"],["Watched live",e.sessions?`${m<10?m.toFixed(1):Math.round(m)} h`:"—",e.sessions?`${e.sessions} session${e.sessions===1?"":"s"}`:"starts the next time they go live"],["Cut",L(n),n?`${o} on this page`:"nothing yet",n?"y":""],["Editor",e.moments?`${e.kept} of ${L(e.moments)}`:"—",e.moments?`moments kept${e.median_after_s?` · cut ~${B(e.median_after_s)} after`:""}`:"no moments yet"]];return`<dl class="ch-facts" style="--cols:${v.length}">${v.map(([h,u,g,c])=>`<div><dt>${h}</dt><dd class="mono ${c||""}">${u}</dd>${g?`<span class="sub">${g}</span>`:""}</div>`).join("")}
    ${a!=null&&a.mint?`<div class="ch-ca"><dt>CA</dt><b class="mono">${i(a.mint)}</b><button type="button" class="btn btn-ghost btn-sm" id="copy-ca" data-ca="${i(a.mint)}">Copy CA</button>
      <a class="btn btn-y btn-sm" href="${X(i(a.mint),a.venue)}" target="_blank" rel="noopener">Buy $${i(a.ticker)}</a></div>`:""}</dl>`}function ls(s,e,a){var I,j;const n=R[d],o=E.find(r=>r.slug===d);if(!t&&!s&&n&&(s={name:n.name,live:!1,category:n.category||"Kick",rate:y[d]}),!t&&!s&&l&&(s={name:((I=l.sourceNames)==null?void 0:I[0])||d,live:!1,category:"Stream",platform:/^twitch:/.test(((j=l.follow)==null?void 0:j[0])||"")?"Twitch":"Kick",rate:y[d]}),!t&&!s&&o&&(s={name:o.streamer,live:!1,category:o.platform,rate:y[d],program:o.program,platform:o.platform}),!t&&s&&(t={id:d,slug:d,name:s.name||d,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||y[d],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),Z.has(d)&&(t=null),t){const r=/twitch/i.test((s==null?void 0:s.platform)||t.platform||"")?"Twitch":"Kick";t={...t,platform:r,handle:(s==null?void 0:s.handle)||t.handle||t.slug},r==="Twitch"&&!t.rate&&(t={...t,program:"no clipping bounty yet",program_url:`https://www.twitch.tv/${encodeURIComponent(t.handle)}`})}if(!t){f.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}if(l){const r=l.market||{};t={...t,coin:{ticker:l.ticker,venue:l.venue||r.venue||"meteora",mcap_usd:r.mcapUsd||0,mint:l.mint,progress:r.progress||0,raised:r.raisedSol||0,target:r.targetSol||0,graduated:r.graduated,pending:l.state!=="live",nomarket:!l.market}}}document.title=l?`${l.name} ($${l.ticker}) · cutroom`:`${t.name} room · cutroom`;const m=t.stats,v=t.clips[0]||A.find(r=>r.slug===t.slug),h=t.platform==="Twitch"?"twitch":"kick",u=`<a class="mono muted" href="https://${h==="twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(t.handle)}" target="_blank" rel="noopener">${h==="twitch"?"twitch.tv":"kick.com"}/${i(t.handle)} ↗</a>`,g=l?'<span class="badge mid">Launched</span>':'<span class="badge mid">Test room</span>',c=l?`${i(l.name)} <span class="hl">$${i(l.ticker)}</span>`:`${i(t.name)} <span class="hl">room</span>`,p='<div class="ch-actions"><a class="btn btn-y" href="/launch">Launch a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>';f.innerHTML=`
  ${e?`<section class="ch-strip-sec"><div class="wrap"><div class="ch-strip">
      <div class="ch-strip-h"><h1 class="ch-strip-name">${c}</h1>${g}${p}</div>
      ${D(t,m)}</div></div></section>`:`<section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live?'<div class="ch-live" id="ch-live"></div>':v?`<div class="real-vid"><video src="${i(v.file)}" poster="${i(v.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${L(s.viewers)} watching</span>`:`<span class="badge">Offline${s!=null&&s.last_live?` · last live ${S(s.last_live)}`:""}</span>`}<span class="plat ${h==="twitch"?"tw":"kk"}">${h.toUpperCase()}</span>${u}${g}</div>
        <h1 class="cap ch-cap" style="--n:${Math.max(5,...(l?`${l.name} $${l.ticker}`:t.name).split(/\s+/).map(r=>r.length))}">${c}</h1>
        ${s!=null&&s.live&&(s.title||t.title)?`<p class="ch-sub">“${i(s.title||t.title)}”</p>`:""}
        ${D(t,m)}
        ${p}
      </div>
    </div>
  </section>

  ${as(a,t,s,e)}`}

  ${os(t)}

  ${Q(t,{clips:!1})}

  ${is(t)}

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">Once @${i(W(t))} is connected, every clip the room keeps is posted${t.rate?` and submitted to ${i(t.program)}`:", and submitted as soon as a clipping program opens"}, with its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view${t.rate?`, from ${i(t.program)}`:""}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the payout.</p>
      </div>
    </div>
  </section>`,f.querySelectorAll(".ch-chips button").forEach(r=>r.addEventListener("click",()=>{f.querySelectorAll(".ch-chips button").forEach(O=>O.setAttribute("aria-pressed",String(O===r)));const k=f.querySelector(".ch-cuts");r.dataset.k?k.dataset.k=r.dataset.k:delete k.dataset.k})),f.querySelectorAll("[data-more]").forEach(r=>r.addEventListener("click",()=>{var k;(k=r.closest("section").querySelector(".moments"))==null||k.classList.add("all"),r.remove()})),document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),_("Link copied")}catch{_(location.href)}}),z();const $=document.getElementById("ch-live");$&&!$.dataset.on&&($.dataset.on="1",x($,{slug:t.handle,name:t.name,platform:t.platform==="Twitch"?"twitch":"kick"},b))}async function cs(){var o,m,v,h,u,g;if(!w){try{const c=await fetch(`${H}/v1/rooms`,{cache:"no-store"});c.ok&&(l=((await c.json()).rooms||[]).find(p=>p.slug===d||(p.follow||[]).some($=>$.replace(/^twitch:/,"")===d))||null)}catch{}l&&history.replaceState(null,"",M(l.mint)+location.search)}if(w){try{const c=await fetch(`${H}/v1/rooms/${w}`,{cache:"no-store"});c.ok&&(l=await c.json())}catch{}l&&(d=(((o=l.follow)==null?void 0:o[0])||((m=l.kick)==null?void 0:m[0])||((v=l.sources)==null?void 0:v[0])||d).replace(/^twitch:/,""),t=C.find(c=>c.id===d),location.pathname!==M(w)&&history.replaceState(null,"",M(w)+location.search))}let s=null;try{const c=new AbortController;setTimeout(()=>c.abort(),4e3);const p=await fetch(`${b}/status`,{signal:c.signal,cache:"no-store"});p.ok&&(s=await p.json())}catch{}const e=(h=s==null?void 0:s.streamers)==null?void 0:h[d],a=!!((u=s==null?void 0:s.rooms)!=null&&u[d]);let n=R[d]||null;try{const c=await fetch(`${b}/agent/${encodeURIComponent(d)}`,{cache:"no-store"});if(c.ok){const p=await c.json();n={...p,dug_n:Object.keys(p.dug||{}).length}}}catch{}ls(e,a,n),(g=document.getElementById("copy-ca"))==null||g.addEventListener("click",c=>{var p;(p=navigator.clipboard)==null||p.writeText(c.currentTarget.dataset.ca).then(()=>_("CA copied"),()=>_(c.currentTarget.dataset.ca))}),l&&new URLSearchParams(location.search).has("launched")&&f.insertAdjacentHTML("afterbegin",`<div class="wrap"><div class="launched-banner"><b>${i(l.name)} is launched.</b> <span>The room's agent is on it: it digs ${i(l.sourceNames.join(", "))}'s most-clipped moments now and goes live the next time they stream. Its work shows up below.</span></div></div>`),a&&(f.insertAdjacentHTML("afterbegin",es),window.__CUTROOM_EMBED=!0,window.__CUTROOM_ROOM=d,await V(()=>import("./live-De4pY5Gs.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])));{let c=0;setInterval(async()=>{var p;try{c=!!((p=(await(await fetch(`${b}/status`,{cache:"no-store"})).json()).rooms)!=null&&p[d])!==a?c+1:0,c>=2&&location.reload()}catch{}},45e3)}}cs();

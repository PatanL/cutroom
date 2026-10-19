const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/live-CSMlP1RL.js","assets/player-B0K4Li5P.js","assets/chrome-Cj0vY1oM.js","assets/chrome-Dglelo8v.css","assets/player-DabKSXbl.css","assets/risky-BonORCwf.js","assets/official-BTCQjf3z.js","assets/official-CcAcB6wI.css","assets/editbay-D3q0wCK2.js","assets/editbay-BnCX3pRg.css","assets/live-RCm4yjzM.css"])))=>i.map(i=>d[i]);
import{m as H,t as b,e as a,f,o as K}from"./chrome-Cj0vY1oM.js";import{_ as N,m as D}from"./player-B0K4Li5P.js";/* empty css             */import L from"./rooms-bIzyg52U.js";import{A as _}from"./agents-BCs8enyu.js";import{V as U}from"./cuts-z-c-6KB9.js";import{E as A}from"./extras-C1z-qbY8.js";import{L as R}from"./lore-CEejhifE.js";import{K as B}from"./kickrates-CLFNjp1I.js";import{R as W}from"./risky-BonORCwf.js";import{L as S,r as y,i as F,b as z}from"./launchapi-Bq9kdkb2.js";import{historyHTML as V}from"./roomhist-BjqfdPMo.js";const J=new Set(W),$=Object.fromEntries(B.rates.map(s=>[s.kick,s.usd]));H({active:"Rooms"});const w=document.getElementById("room"),T="https://api.hookrs.fun/cutroom/live",Y=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`,q=`
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
  </section>`;var j;const M=(location.pathname.match(/^\/(?:rooms|coin)\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((j=L[0])==null?void 0:j.id),u=F(M)?M:null;let r=M,i=null,e=L.find(s=>s.id===r);const G=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,X={},Q=s=>{var t;return((t=_[s.slug])==null?void 0:t.handle)||`cutroom${(X[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},C=s=>{if(!s)return"not yet";const t=Math.max(0,(Date.now()/1e3-s)/60);return t<1?"just now":t<60?`${Math.round(t)} min ago`:t<2880?`${Math.round(t/60)} h ago`:`${Math.round(t/1440)} d ago`},I={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function Z(s,t,n,o){if(!s&&!o&&t.platform!=="Kick")return"";const p=o?"live":(s==null?void 0:s.mode)||"offline",[l,h]=I[p]||I.offline,v=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${h}"><i></i>${l}</span>
      <span class="mono muted">checks ${t.platform==="Twitch"?"twitch.tv":"kick.com"}/${a(t.handle||t.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${C(s.checked)}`:""}</span></div>
    <p class="ag-doing">${a(o?`Watching ${t.name} live right now: every word, chat's pulse, each moment it cuts. The board is above.`:(s==null?void 0:s.doing)||`Offline. When ${t.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${t.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${C(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${v.map(m=>`<li><span>${a(new Date(m.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${a(m.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const E=s=>{if(!s)return"";const[t,n]=String(s).split("-");return n?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+n-1]} ${t}`:t};function ss(s){const t=R[s.slug],n=R._meta||{};return!t||!(t.arcs.length||t.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${a(t.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${n.storylines||"dozens of"} storylines on ${n.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${t.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${t.cast.map(o=>`<span class="chip">${a(o)}</span>`).join("")}</div></div>`:""}
        ${t.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${t.jokes.map(o=>`<li>${a(o)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${t.arcs.map(o=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${a(E(o.start))}${o.end&&o.end!==o.start?` – ${a(E(o.end))}`:o.start?" – now":""}</span>${o.tone.slice(0,3).map(p=>`<span class="badge">${a(p)}</span>`).join("")}</div>
        <b>${a(o.title)}</b><p>${a(o.summary)}${o.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${o.beats} dated moments · ${o.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const es={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function as(s){const t=A.filter(n=>n.slug===s.slug);return t.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Edits</span><h2 class="h2" style="margin-top:14px">More than <em>one moment.</em></h2></div>
      <p class="lede" style="max-width:28em">Stories told across months of streams, the month's best counted down, and the big IRL clip-page edit. Each one made by the room from ${a(s.name)}'s own streams.</p></div>
    <div class="real-grid">${t.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${a(n.file)}" poster="${a(n.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono">${a(es[n.kind]||n.kind)}</span></div>
      <figcaption><b>${a(n.title||"")}</b><span class="mono">${a(n.from||"")} · ${Math.round(n.duration)} s</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function ts(s){const t=U.filter(n=>n.slug===s.slug);return t.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">While offline</span><h2 class="h2" style="margin-top:14px">Cut from <em>past streams.</em></h2></div>
      <p class="lede" style="max-width:28em">Between streams the room goes back through ${a(s.name)}'s recent streams, starting with the moments viewers clipped most, and recuts them its own way.</p></div>
    <div class="real-grid">${t.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${a(n.file)}" poster="${a(n.poster)}" controls playsinline preload="none"></video></div>
      <figcaption><b>${a(n.hook)}</b><span class="mono">${n.date?`from the ${a(n.date)} stream · `:""}${n.layout==="hooksplit"?"facecam split":"auto-framed"} · ${Math.round(n.duration)} s</span>
      <span class="real-how">from <a href="${a(n.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${f(n.source_views||0)} times · editor ${n.score}/10</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function ns(s,t,n){var g,d;const o=_[r],p=A.find(c=>c.slug===r);if(!e&&!s&&o&&(s={name:o.name,live:!1,category:o.category||"Kick",rate:$[r]}),!e&&!s&&i&&(s={name:((g=i.sourceNames)==null?void 0:g[0])||r,live:!1,category:"Stream",platform:/^twitch:/.test(((d=i.follow)==null?void 0:d[0])||"")?"Twitch":"Kick",rate:$[r]}),!e&&!s&&p&&(s={name:p.streamer,live:!1,category:p.platform,rate:$[r],program:p.program,platform:p.platform}),!e&&s&&(e={id:r,slug:r,name:s.name||r,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||$[r],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),J.has(r)&&(e=null),e){const c=/twitch/i.test((s==null?void 0:s.platform)||e.platform||"")?"Twitch":"Kick";e={...e,platform:c,handle:(s==null?void 0:s.handle)||e.handle||e.slug},c==="Twitch"&&!e.rate&&(e={...e,program:"no clipping bounty yet",program_url:`https://www.twitch.tv/${encodeURIComponent(e.handle)}`})}if(!e){w.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}if(i){const c=i.market||{};e={...e,coin:{ticker:i.ticker,venue:i.venue||c.venue||"meteora",mcap_usd:c.mcapUsd||0,mint:i.mint,progress:c.progress||0,raised:c.raisedSol||0,target:c.targetSol||0,graduated:c.graduated,pending:i.state!=="live",nomarket:!i.market}}}document.title=i?`${i.name} ($${i.ticker}) · cutroom`:`${e.name} room · cutroom`;const l=e.stats,h=e.clips[0],v=[["Watch",`${l.minutes} min`,`live, ${l.sessions} session${l.sessions===1?"":"s"}`],["Hear",f(l.words),"words transcribed"],["Read",f(l.chat),"chat messages"],["Find",l.moments,"moments flagged"],["Edit",`${l.kept} / ${l.dropped}`,"kept / dropped by the editor"],["Cut",l.clips,`clips on this page${l.held?`, ${l.held} held back (see below)`:""}${l.median_after_s?` · ~${G(l.median_after_s)} after the moment`:""}`],["Post + collect",l.posted?`${l.posted}`:"—",l.posted?"posted":"posting not connected yet",!0]];w.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live&&!t?'<div class="ch-live" id="ch-live"></div>':h?`<div class="real-vid"><video src="${a(h.file)}" poster="${a(h.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${f(s.viewers)} watching</span>`:'<span class="badge">Offline</span>'}${t?'<span class="badge room">Room on air · cutting now</span>':i?`<span class="badge mid">Launched · $${a(i.ticker)}</span>`:'<span class="badge mid">Test room</span>'}<a class="mono muted" href="https://${e.platform==="Twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(e.handle)}" target="_blank" rel="noopener">${e.platform==="Twitch"?"twitch.tv":"kick.com"}/${a(e.handle)} ↗</a></div>
        <h1 class="cap ch-cap" style="--n:${Math.max(5,...(i?`${i.name} $${i.ticker}`:e.name).split(/\s+/).map(c=>c.length))}">${i?`${a(i.name)} <span class="hl">$${a(i.ticker)}</span>`:`${a(e.name)} <span class="hl">room</span>`}</h1>
        <div class="ch-sub"><span>clips <b>${a(e.name)}</b> on ${a(e.platform)}</span><span>${a(e.category)}</span>${e.title?`<span class="muted">“${a(e.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${e.coin?`<div><span class="k">Coin</span><b class="mono">$${a(e.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${e.coin.pending?"confirming…":e.coin.nomarket?"—":Y(e.coin.mcap_usd||0)}</b></div>${e.coin.mint?`
          <div><span class="k">${e.coin.graduated?"Graduated":"To graduation"}</span><b class="mono">${e.coin.graduated?e.coin.venue==="pump"?"on PumpSwap":"on Meteora DAMM v2":e.coin.nomarket?"—":`${Math.round(e.coin.progress*100)}% · ${e.coin.raised.toFixed(1)} / ${e.coin.target.toFixed(0)} SOL`}</b></div>
          <div class="ch-buy"><a class="btn btn-y btn-sm" href="${z(a(e.coin.mint),e.coin.venue)}" target="_blank" rel="noopener">Buy $${a(e.coin.ticker)}</a></div>
          <div class="ch-ca"><span class="k">CA</span><b class="mono">${a(e.coin.mint)}</b><button type="button" class="btn btn-ghost btn-sm" id="copy-ca" data-ca="${a(e.coin.mint)}">Copy CA</button></div>`:""}`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${a(e.program_url)}" target="_blank" rel="noopener"><b>${a(e.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${e.rate?`$${e.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${l.sessions?`This room watched ${a(e.name)} live for ${l.minutes} minutes across ${l.sessions} session${l.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${a(e.name)} goes live with nothing else in the queue.`} ${l.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-handles"><span class="k mono">Posts as</span><b class="mono">@${a(Q(e))}</b><span class="muted">on TikTok · Instagram · YouTube</span><span class="badge">${i?"accounts opening":"accounts open at launch"}</span></div>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Launch a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  ${Z(n,e,s,t)}

  ${ss(e)}

  ${as(e)}

  ${ts(e)}

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${v.map(([c,k,O,x],P)=>`<li><span class="mono pn">0${P+1} ${c}</span><b class="mono ${x?"y":""}">${a(String(k))}</b><span class="pl">${a(O)}</span></li>`).join("")}</ol>
    </div>
  </section>

  ${V(e)}

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">${e.platform==="Twitch"&&!e.rate?`${a(e.name)} has no clipping bounty yet. Once the room's TikTok is connected, every clip it keeps is posted and its views tracked here, and it's submitted as soon as a program opens.`:`${a(e.name)} already pays clippers through ${a(e.program)}${e.rate?`, $${e.rate} per 100K views`:""}. Once the room's TikTok is connected, every clip it keeps is posted, submitted to the program, and its views tracked here.`} After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view, from ${a(e.program)}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet. This is a test room: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the program's payout.</p>
      </div>
    </div>
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),b("Link copied")}catch{b(location.href)}}),K();const m=document.getElementById("ch-live");m&&!m.dataset.on&&(m.dataset.on="1",D(m,{slug:e.handle,name:e.name,platform:e.platform==="Twitch"?"twitch":"kick"},T))}async function is(){var p,l,h,v,m,g;if(!u){try{const d=await fetch(`${S}/v1/rooms`,{cache:"no-store"});d.ok&&(i=((await d.json()).rooms||[]).find(c=>c.slug===r||(c.follow||[]).some(k=>k.replace(/^twitch:/,"")===r))||null)}catch{}i&&history.replaceState(null,"",y(i.mint)+location.search)}if(u){try{const d=await fetch(`${S}/v1/rooms/${u}`,{cache:"no-store"});d.ok&&(i=await d.json())}catch{}i&&(r=(((p=i.follow)==null?void 0:p[0])||((l=i.kick)==null?void 0:l[0])||((h=i.sources)==null?void 0:h[0])||r).replace(/^twitch:/,""),e=L.find(d=>d.id===r),location.pathname!==y(u)&&history.replaceState(null,"",y(u)+location.search))}let s=null;try{const d=new AbortController;setTimeout(()=>d.abort(),4e3);const c=await fetch(`${T}/status`,{signal:d.signal,cache:"no-store"});c.ok&&(s=await c.json())}catch{}const t=(v=s==null?void 0:s.streamers)==null?void 0:v[r],n=!!((m=s==null?void 0:s.rooms)!=null&&m[r]);let o=_[r]||null;try{const d=await fetch(`${T}/agent/${encodeURIComponent(r)}`,{cache:"no-store"});if(d.ok){const c=await d.json();o={...c,dug_n:Object.keys(c.dug||{}).length}}}catch{}ns(t,n,o),(g=document.getElementById("copy-ca"))==null||g.addEventListener("click",d=>{var c;(c=navigator.clipboard)==null||c.writeText(d.currentTarget.dataset.ca).then(()=>b("CA copied"),()=>b(d.currentTarget.dataset.ca))}),i&&new URLSearchParams(location.search).has("launched")&&w.insertAdjacentHTML("afterbegin",`<div class="wrap"><div class="launched-banner"><b>${a(i.name)} is launched.</b> <span>The room's agent is on it: it digs ${a(i.sourceNames.join(", "))}'s most-clipped moments now and goes live the next time they stream. Its work shows up below.</span></div></div>`),n&&(w.insertAdjacentHTML("afterbegin",q),window.__CUTROOM_EMBED=!0,await N(()=>import("./live-CSMlP1RL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}is();

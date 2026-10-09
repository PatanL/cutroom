const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/live-B6D5kcgK.js","assets/preload-helper-ckwbz45p.js","assets/risky-sa1155ad.js","assets/chrome-CNxf_vqa.js","assets/chrome-Dglelo8v.css","assets/live-JmaRzgLL.css"])))=>i.map(i=>d[i]);
import{m as P,e,f,t as S,o as D}from"./chrome-CNxf_vqa.js";import{_ as H}from"./preload-helper-ckwbz45p.js";/* empty css             */import M from"./rooms-DooAxp_E.js";import{A as y}from"./agents-BCs8enyu.js";import{V as W}from"./cuts-z-c-6KB9.js";import{E as N}from"./extras-C1z-qbY8.js";import{L}from"./lore-g8MlWGn0.js";import{K as U}from"./kickrates-CLFNjp1I.js";import{R as z}from"./risky-sa1155ad.js";import{L as R,r as j,i as B,b as F}from"./launchapi-BXK3P0J3.js";const V=new Set(z),b=Object.fromEntries(U.rates.map(s=>[s.kick,s.usd]));P({active:"Rooms"});const w=document.getElementById("room"),x="https://vancouver-phpbb-promise-taking.trycloudflare.com",q=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`,J=`
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
  </section>`;var K;const _=(location.pathname.match(/^\/(?:rooms|coin)\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((K=M[0])==null?void 0:K.id),$=B(_)?_:null;let r=_,o=null,a=M.find(s=>s.id===r);const E=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,C=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",Y=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),G={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},X={},Q=s=>{var i;return((i=y[s.slug])==null?void 0:i.handle)||`cutroom${(X[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},I=s=>{if(!s)return"not yet";const i=Math.max(0,(Date.now()/1e3-s)/60);return i<1?"just now":i<60?`${Math.round(i)} min ago`:i<2880?`${Math.round(i/60)} h ago`:`${Math.round(i/1440)} d ago`},A={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function Z(s,i,n,l){if(!s&&!l&&i.platform!=="Kick")return"";const p=l?"live":(s==null?void 0:s.mode)||"offline",[c,h]=A[p]||A.offline,u=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${h}"><i></i>${c}</span>
      <span class="mono muted">checks ${i.platform==="Twitch"?"twitch.tv":"kick.com"}/${e(i.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${I(s.checked)}`:""}</span></div>
    <p class="ag-doing">${e(l?`Watching ${i.name} live right now: every word, chat's pulse, each moment it cuts. The board is above.`:(s==null?void 0:s.doing)||`Offline. When ${i.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${i.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${I(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${u.map(v=>`<li><span>${e(new Date(v.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${e(v.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const O=s=>{if(!s)return"";const[i,n]=String(s).split("-");return n?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+n-1]} ${i}`:i};function ss(s){const i=L[s.slug],n=L._meta||{};return!i||!(i.arcs.length||i.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${e(i.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${n.storylines||"dozens of"} storylines on ${n.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${i.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${i.cast.map(l=>`<span class="chip">${e(l)}</span>`).join("")}</div></div>`:""}
        ${i.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${i.jokes.map(l=>`<li>${e(l)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${i.arcs.map(l=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${e(O(l.start))}${l.end&&l.end!==l.start?` – ${e(O(l.end))}`:l.start?" – now":""}</span>${l.tone.slice(0,3).map(p=>`<span class="badge">${e(p)}</span>`).join("")}</div>
        <b>${e(l.title)}</b><p>${e(l.summary)}${l.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${l.beats} dated moments · ${l.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const es={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function as(s){const i=N.filter(n=>n.slug===s.slug);return i.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Edits</span><h2 class="h2" style="margin-top:14px">More than <em>one moment.</em></h2></div>
      <p class="lede" style="max-width:28em">Stories told across months of streams, the month's best counted down, and the big IRL clip-page edit. Each one made by the room from ${e(s.name)}'s own streams.</p></div>
    <div class="real-grid">${i.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono">${e(es[n.kind]||n.kind)}</span></div>
      <figcaption><b>${e(n.title||"")}</b><span class="mono">${e(n.from||"")} · ${Math.round(n.duration)} s</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function ts(s){const i=W.filter(n=>n.slug===s.slug);return i.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">While offline</span><h2 class="h2" style="margin-top:14px">Cut from <em>past streams.</em></h2></div>
      <p class="lede" style="max-width:28em">Between streams the room goes back through ${e(s.name)}'s recent streams, starting with the moments viewers clipped most, and recuts them its own way.</p></div>
    <div class="real-grid">${i.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video></div>
      <figcaption><b>${e(n.hook)}</b><span class="mono">${n.date?`from the ${e(n.date)} stream · `:""}${n.layout==="hooksplit"?"facecam split":"auto-framed"} · ${Math.round(n.duration)} s</span>
      <span class="real-how">from <a href="${e(n.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${f(n.source_views||0)} times · editor ${n.score}/10</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function is(s,i,n){var v,d;const l=y[r],p=N.find(t=>t.slug===r);if(!a&&!s&&l&&(s={name:l.name,live:!1,category:l.category||"Kick",rate:b[r]}),!a&&!s&&o&&(s={name:((v=o.sourceNames)==null?void 0:v[0])||r,live:!1,category:"Stream",platform:/^twitch:/.test(((d=o.follow)==null?void 0:d[0])||"")?"Twitch":"Kick",rate:b[r]}),!a&&!s&&p&&(s={name:p.streamer,live:!1,category:p.platform,rate:b[r],program:p.program,platform:p.platform}),!a&&s&&(a={id:r,slug:r,name:s.name||r,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||b[r],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),V.has(r)&&(a=null),!a){w.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}if(o){const t=o.market||{};a={...a,coin:{ticker:o.ticker,mcap_usd:t.mcapUsd||0,mint:o.mint,progress:t.progress||0,raised:t.raisedSol||0,target:t.targetSol||0,graduated:t.graduated,pending:o.state!=="live",nomarket:!o.market}}}document.title=o?`${o.name} ($${o.ticker}) · cutroom`:`${a.name} room · cutroom`;const c=a.stats,h=a.clips[0],u=[["Watch",`${c.minutes} min`,`live, ${c.sessions} session${c.sessions===1?"":"s"}`],["Hear",f(c.words),"words transcribed"],["Read",f(c.chat),"chat messages"],["Find",c.moments,"moments flagged"],["Edit",`${c.kept} / ${c.dropped}`,"kept / dropped by the editor"],["Cut",c.clips,`clips on this page${c.held?`, ${c.held} held back (see below)`:""}${c.median_after_s?` · ~${E(c.median_after_s)} after the moment`:""}`],["Post + collect",c.posted?`${c.posted}`:"—",c.posted?"posted":"posting not connected yet",!0]];w.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live&&!i?`<div class="ch-live"><iframe class="lv-player" src="https://player.kick.com/${encodeURIComponent(a.slug)}?muted=true&autoplay=true" title="${e(a.name)} live on Kick" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><button type="button" class="lv-sound" aria-label="Turn the stream sound on">🔊 Sound on</button></div>`:h?`<div class="real-vid"><video src="${e(h.file)}" poster="${e(h.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${f(s.viewers)} watching</span>`:'<span class="badge">Offline</span>'}${i?'<span class="badge room">Room on air · cutting now</span>':o?`<span class="badge mid">Launched · $${e(o.ticker)}</span>`:'<span class="badge mid">Test room</span>'}<a class="mono muted" href="https://${a.platform==="Twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(a.slug)}" target="_blank" rel="noopener">${a.platform==="Twitch"?"twitch.tv":"kick.com"}/${e(a.slug)} ↗</a></div>
        <h1 class="cap ch-cap">${o?`${e(o.name)} <span class="hl">$${e(o.ticker)}</span>`:`${e(a.name)} <span class="hl">room</span>`}</h1>
        <div class="ch-sub"><span>clips <b>${e(a.name)}</b> on ${e(a.platform)}</span><span>${e(a.category)}</span>${a.title?`<span class="muted">“${e(a.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${a.coin?`<div><span class="k">Coin</span><b class="mono">$${e(a.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${a.coin.pending?"confirming…":a.coin.nomarket?"—":q(a.coin.mcap_usd||0)}</b></div>${a.coin.mint?`
          <div><span class="k">${a.coin.graduated?"Graduated":"To graduation"}</span><b class="mono">${a.coin.graduated?"on Meteora DAMM v2":a.coin.nomarket?"—":`${Math.round(a.coin.progress*100)}% · ${a.coin.raised.toFixed(1)} / ${a.coin.target.toFixed(0)} SOL`}</b></div>
          <div class="ch-buy"><a class="btn btn-y btn-sm" href="${F(e(a.coin.mint))}" target="_blank" rel="noopener">Buy $${e(a.coin.ticker)}</a></div>`:""}`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${e(a.program_url)}" target="_blank" rel="noopener"><b>${e(a.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${a.rate?`$${a.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${c.sessions?`This room watched ${e(a.name)} live for ${c.minutes} minutes across ${c.sessions} session${c.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${e(a.name)} goes live with nothing else in the queue.`} ${c.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-handles"><span class="k mono">Posts as</span><b class="mono">@${e(Q(a))}</b><span class="muted">on TikTok · Instagram · YouTube</span><span class="badge">${o?"accounts opening":"accounts open at launch"}</span></div>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Launch a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  ${Z(n,a,s,i)}

  ${ss(a)}

  ${as(a)}

  ${ts(a)}

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${u.map(([t,g,m,k],T)=>`<li><span class="mono pn">0${T+1} ${t}</span><b class="mono ${k?"y":""}">${e(String(g))}</b><span class="pl">${e(m)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${a.clips.map(t=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(t.file)}" poster="${e(t.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${e(t.hook||"")}</b><span class="mono">${t.after_moment_s?`ready ${E(t.after_moment_s)} after it happened`:""}${t.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${e(t.why||"")}</span><span class="real-how">${e(t.post&&t.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${a.moments.map(t=>{const g=G[t.stage]||[t.stage,"low"],m=t.signals||{};return`<tr><td class="mono">${e(C(t.found))}<br><span class="muted">${Y(t.at)} in</span></td>
          <td class="mono" style="font-size:12px">${m.chat_x?`chat ×${m.chat_x}`:""}${m.laughs?` · ${m.laughs} laughs`:""}${m.clip_it?` · ${m.clip_it}× clip it`:""}${m.forced?" · operator":""}</td>
          <td style="font-size:13px">${(t.chat_top||[]).map(([k,T])=>`“${e(k)}” ×${T}`).join(", ")}</td>
          <td><span class="badge ${g[1]}">${e(g[0])}</span>${t.hook?`<div style="margin-top:6px;font-size:13px"><b>${e(t.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${e(t.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${a.sessions.slice().reverse().map(t=>`<tr><td class="mono">${e(C(t.started))}</td><td class="mono">${t.minutes} min</td><td class="mono">${t.viewers?f(t.viewers):"—"}</td><td class="mono">${t.moments}</td><td class="mono">${t.kept}</td><td class="mono muted">${e(t.model||"")}</td></tr>`).join("")}</tbody></table></div>
    </div>
  </section>

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">${e(a.name)} already pays clippers through ${e(a.program)}${a.rate?`, $${a.rate} per 100K views`:""}. Once the room's TikTok is connected, every clip it keeps is posted, submitted to the program, and its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view, from ${e(a.program)}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet. This is a test room: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the program's payout.</p>
      </div>
    </div>
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),S("Link copied")}catch{S(location.href)}}),D()}document.addEventListener("click",s=>{const i=s.target.closest(".ch-live .lv-sound");if(!i)return;const n=i.parentElement.querySelector("iframe");n&&(n.src=n.src.replace("muted=true","muted=false")),i.remove()});async function ns(){var p,c,h,u,v;if(!$)try{const d=await fetch(`${R}/v1/rooms`,{cache:"no-store"});d.ok&&(o=((await d.json()).rooms||[]).find(t=>t.slug===r||(t.follow||[]).some(g=>g.replace(/^twitch:/,"")===r))||null)}catch{}if($){try{const d=await fetch(`${R}/v1/rooms/${$}`,{cache:"no-store"});d.ok&&(o=await d.json())}catch{}o&&(r=(((p=o.follow)==null?void 0:p[0])||((c=o.kick)==null?void 0:c[0])||((h=o.sources)==null?void 0:h[0])||r).replace(/^twitch:/,""),a=M.find(d=>d.id===r),location.pathname!==j($)&&history.replaceState(null,"",j($)+location.search))}let s=null;try{const d=new AbortController;setTimeout(()=>d.abort(),4e3);const t=await fetch(`${x}/status`,{signal:d.signal,cache:"no-store"});t.ok&&(s=await t.json())}catch{}const i=(u=s==null?void 0:s.streamers)==null?void 0:u[r],n=!!((v=s==null?void 0:s.rooms)!=null&&v[r]);let l=y[r]||null;if(y[r]||o)try{const d=await fetch(`${x}/agent/${encodeURIComponent(r)}`,{cache:"no-store"});if(d.ok){const t=await d.json();l={...t,dug_n:Object.keys(t.dug||{}).length}}}catch{}is(i,n,l),o&&new URLSearchParams(location.search).has("launched")&&w.insertAdjacentHTML("afterbegin",`<div class="wrap"><div class="launched-banner"><b>${e(o.name)} is launched.</b> <span>The room's agent is on it: it digs ${e(o.sourceNames.join(", "))}'s most-clipped moments now and goes live the next time they stream. Its work shows up below.</span></div></div>`),n&&(w.insertAdjacentHTML("afterbegin",J),window.__CUTROOM_EMBED=!0,await H(()=>import("./live-B6D5kcgK.js"),__vite__mapDeps([0,1,2,3,4,5])))}ns();

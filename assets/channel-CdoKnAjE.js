const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/live-Blu-0BFB.js","assets/preload-helper-ckwbz45p.js","assets/risky-sa1155ad.js","assets/chrome-CvBQm9er.js","assets/chrome-BZiqIjL2.css","assets/live-JmaRzgLL.css"])))=>i.map(i=>d[i]);
import{m as j,f as h,e,t as y,o as C}from"./chrome-CvBQm9er.js";import{_ as O}from"./preload-helper-ckwbz45p.js";/* empty css             */import E from"./rooms-D1KM8-5r.js";import{A as u}from"./agents-BCs8enyu.js";import{V as I}from"./cuts-CrnlMY5Q.js";import{E as x}from"./extras-BIA8jeAA.js";import{L as w}from"./lore-BcHt5KVB.js";import{K as A}from"./kickrates-CLFNjp1I.js";import{R as K}from"./risky-sa1155ad.js";const P=new Set(K),f=Object.fromEntries(A.rates.map(s=>[s.kick,s.usd]));j({active:"Rooms"});const b=document.getElementById("room"),k="https://nest-coral-comfort-integral.trycloudflare.com",W=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`,D=`
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
  </section>`;var R;const c=(location.pathname.match(/^\/rooms\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((R=E[0])==null?void 0:R.id);let t=E.find(s=>s.id===c);const _=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,T=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",H=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),N={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},z={},U=s=>{var a;return((a=u[s.slug])==null?void 0:a.handle)||`cutroom${(z[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},M=s=>{if(!s)return"not yet";const a=Math.max(0,(Date.now()/1e3-s)/60);return a<1?"just now":a<60?`${Math.round(a)} min ago`:a<2880?`${Math.round(a/60)} h ago`:`${Math.round(a/1440)} d ago`},S={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function B(s,a,i,o){if(!s&&!o&&a.platform!=="Kick")return"";const d=o?"live":(s==null?void 0:s.mode)||"offline",[l,r]=S[d]||S.offline,p=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${r}"><i></i>${l}</span>
      <span class="mono muted">checks kick.com/${e(a.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${M(s.checked)}`:""}</span></div>
    <p class="ag-doing">${e(o?`Watching ${a.name} live right now: every word, chat's pulse, each moment it cuts. The board is above.`:(s==null?void 0:s.doing)||`Offline. When ${a.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${a.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${M(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${p.map(n=>`<li><span>${e(new Date(n.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${e(n.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const L=s=>{if(!s)return"";const[a,i]=String(s).split("-");return i?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+i-1]} ${a}`:a};function V(s){const a=w[s.slug],i=w._meta||{};return!a||!(a.arcs.length||a.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${e(a.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${i.storylines||"dozens of"} storylines on ${i.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${a.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${a.cast.map(o=>`<span class="chip">${e(o)}</span>`).join("")}</div></div>`:""}
        ${a.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${a.jokes.map(o=>`<li>${e(o)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${a.arcs.map(o=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${e(L(o.start))}${o.end&&o.end!==o.start?` – ${e(L(o.end))}`:o.start?" – now":""}</span>${o.tone.slice(0,3).map(d=>`<span class="badge">${e(d)}</span>`).join("")}</div>
        <b>${e(o.title)}</b><p>${e(o.summary)}${o.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${o.beats} dated moments · ${o.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const F={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function q(s){const a=x.filter(i=>i.slug===s.slug);return a.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Edits</span><h2 class="h2" style="margin-top:14px">More than <em>one moment.</em></h2></div>
      <p class="lede" style="max-width:28em">Stories told across months of streams, the month's best counted down, and the big IRL clip-page edit. Each one made by the room from ${e(s.name)}'s own streams.</p></div>
    <div class="real-grid">${a.map(i=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(i.file)}" poster="${e(i.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono">${e(F[i.kind]||i.kind)}</span></div>
      <figcaption><b>${e(i.title||"")}</b><span class="mono">${e(i.from||"")} · ${Math.round(i.duration)} s</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function J(s){const a=I.filter(i=>i.slug===s.slug);return a.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">While offline</span><h2 class="h2" style="margin-top:14px">Cut from <em>past streams.</em></h2></div>
      <p class="lede" style="max-width:28em">Between streams the room goes back through ${e(s.name)}'s recent streams, starting with the moments viewers clipped most, and recuts them its own way.</p></div>
    <div class="real-grid">${a.map(i=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(i.file)}" poster="${e(i.poster)}" controls playsinline preload="none"></video></div>
      <figcaption><b>${e(i.hook)}</b><span class="mono">${i.date?`from the ${e(i.date)} stream · `:""}${i.layout==="hooksplit"?"facecam split":"auto-framed"} · ${Math.round(i.duration)} s</span>
      <span class="real-how">from <a href="${e(i.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${h(i.source_views||0)} times · editor ${i.score}/10</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function Y(s,a,i){const o=u[c],d=x.find(n=>n.slug===c);if(!t&&!s&&o&&(s={name:o.name,live:!1,category:o.category||"Kick",rate:f[c]}),!t&&!s&&d&&(s={name:d.streamer,live:!1,category:d.platform,rate:f[c],program:d.program,platform:d.platform}),!t&&s&&(t={id:c,slug:c,name:s.name||c,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||f[c],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),P.has(c)&&(t=null),!t){b.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}document.title=`${t.name} room · cutroom`;const l=t.stats,r=t.clips[0],p=[["Watch",`${l.minutes} min`,`live, ${l.sessions} session${l.sessions===1?"":"s"}`],["Hear",h(l.words),"words transcribed"],["Read",h(l.chat),"chat messages"],["Find",l.moments,"moments flagged"],["Edit",`${l.kept} / ${l.dropped}`,"kept / dropped by the editor"],["Cut",l.clips,`clips on this page${l.held?`, ${l.held} held back (see below)`:""}${l.median_after_s?` · ~${_(l.median_after_s)} after the moment`:""}`],["Post + collect",l.posted?`${l.posted}`:"—",l.posted?"posted":"posting not connected yet",!0]];b.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live&&!a?`<div class="ch-live"><iframe class="lv-player" src="https://player.kick.com/${encodeURIComponent(t.slug)}?muted=true&autoplay=true" title="${e(t.name)} live on Kick" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><button type="button" class="lv-sound" aria-label="Turn the stream sound on">🔊 Sound on</button></div>`:r?`<div class="real-vid"><video src="${e(r.file)}" poster="${e(r.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${h(s.viewers)} watching</span>`:'<span class="badge">Offline</span>'}${a?'<span class="badge room">Room on air · cutting now</span>':'<span class="badge mid">Test room</span>'}<a class="mono muted" href="https://${t.platform==="Twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(t.slug)}" target="_blank" rel="noopener">${t.platform==="Twitch"?"twitch.tv":"kick.com"}/${e(t.slug)} ↗</a></div>
        <h1 class="cap ch-cap">${e(t.name)} <span class="hl">room</span></h1>
        <div class="ch-sub"><span>clips <b>${e(t.name)}</b> on ${e(t.platform)}</span><span>${e(t.category)}</span>${t.title?`<span class="muted">“${e(t.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${t.coin?`<div><span class="k">Coin</span><b class="mono">$${e(t.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${W(t.coin.mcap_usd||0)}</b></div>`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${e(t.program_url)}" target="_blank" rel="noopener"><b>${e(t.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${t.rate?`$${t.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${l.sessions?`This room watched ${e(t.name)} live for ${l.minutes} minutes across ${l.sessions} session${l.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${e(t.name)} goes live with nothing else in the queue.`} ${l.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-handles"><span class="k mono">Posts as</span><b class="mono">@${e(U(t))}</b><span class="muted">on TikTok · Instagram · YouTube</span><span class="badge">accounts open at launch</span></div>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Open a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  ${B(i,t,s,a)}

  ${V(t)}

  ${q(t)}

  ${J(t)}

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${p.map(([n,v,m,g],$)=>`<li><span class="mono pn">0${$+1} ${n}</span><b class="mono ${g?"y":""}">${e(String(v))}</b><span class="pl">${e(m)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${t.clips.map(n=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(n.file)}" poster="${e(n.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${e(n.hook||"")}</b><span class="mono">${n.after_moment_s?`ready ${_(n.after_moment_s)} after it happened`:""}${n.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${e(n.why||"")}</span><span class="real-how">${e(n.post&&n.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${t.moments.map(n=>{const v=N[n.stage]||[n.stage,"low"],m=n.signals||{};return`<tr><td class="mono">${e(T(n.found))}<br><span class="muted">${H(n.at)} in</span></td>
          <td class="mono" style="font-size:12px">${m.chat_x?`chat ×${m.chat_x}`:""}${m.laughs?` · ${m.laughs} laughs`:""}${m.clip_it?` · ${m.clip_it}× clip it`:""}${m.forced?" · operator":""}</td>
          <td style="font-size:13px">${(n.chat_top||[]).map(([g,$])=>`“${e(g)}” ×${$}`).join(", ")}</td>
          <td><span class="badge ${v[1]}">${e(v[0])}</span>${n.hook?`<div style="margin-top:6px;font-size:13px"><b>${e(n.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${e(n.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${t.sessions.slice().reverse().map(n=>`<tr><td class="mono">${e(T(n.started))}</td><td class="mono">${n.minutes} min</td><td class="mono">${n.viewers?h(n.viewers):"—"}</td><td class="mono">${n.moments}</td><td class="mono">${n.kept}</td><td class="mono muted">${e(n.model||"")}</td></tr>`).join("")}</tbody></table></div>
    </div>
  </section>

  <section class="ch-money-sec">
    <div class="wrap money-grid">
      <div><span class="eyebrow">Money</span><h2 class="h2" style="margin-top:14px">Nothing to <em>collect yet.</em></h2>
        <p class="lede" style="margin-top:16px">${e(t.name)} already pays clippers through ${e(t.program)}${t.rate?`, $${t.rate} per 100K views`:""}. Once the room's TikTok is connected, every clip it keeps is posted, submitted to the program, and its views tracked here. After running costs, the profit buys back the room's coin.</p>
        <ol class="mflow mono"><li><b>Payouts in</b><span>per view, from ${e(t.program)}</span></li><li><b>− costs</b><span>machine time, storage, posting</span></li><li><b>= profit</b><span>counted per room, per week</span></li><li class="bb"><b>→ buyback</b><span>buys the coin on the open market, tx linked here</span></li></ol>
      </div>
      <div class="panel"><div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>submissions + payouts</span></div>
        <p class="panel-body muted">None yet. This is a test room: nothing has been posted, so nothing has been submitted or paid. Rows appear here as they happen, with the post link, views and the program's payout.</p>
      </div>
    </div>
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),y("Link copied")}catch{y(location.href)}}),C()}document.addEventListener("click",s=>{const a=s.target.closest(".ch-live .lv-sound");if(!a)return;const i=a.parentElement.querySelector("iframe");i&&(i.src=i.src.replace("muted=true","muted=false")),a.remove()});async function G(){var d,l;let s=null;try{const r=new AbortController;setTimeout(()=>r.abort(),4e3);const p=await fetch(`${k}/status`,{signal:r.signal,cache:"no-store"});p.ok&&(s=await p.json())}catch{}const a=(d=s==null?void 0:s.streamers)==null?void 0:d[c],i=!!((l=s==null?void 0:s.rooms)!=null&&l[c]);let o=u[c]||null;if(u[c])try{const r=await fetch(`${k}/agent/${encodeURIComponent(c)}`,{cache:"no-store"});if(r.ok){const p=await r.json();o={...p,dug_n:Object.keys(p.dug||{}).length}}}catch{}Y(a,i,o),i&&(b.insertAdjacentHTML("afterbegin",D),window.__CUTROOM_EMBED=!0,await O(()=>import("./live-Blu-0BFB.js"),__vite__mapDeps([0,1,2,3,4,5])))}G();

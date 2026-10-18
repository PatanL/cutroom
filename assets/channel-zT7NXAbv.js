const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/live-DcBzQXyT.js","assets/player-B0K4Li5P.js","assets/chrome-Cj0vY1oM.js","assets/chrome-Dglelo8v.css","assets/player-DabKSXbl.css","assets/risky-BonORCwf.js","assets/official-BTCQjf3z.js","assets/official-CcAcB6wI.css","assets/editbay-D3q0wCK2.js","assets/editbay-BnCX3pRg.css","assets/live-RCm4yjzM.css"])))=>i.map(i=>d[i]);
import{m as D,t as y,e as a,f as b,o as H}from"./chrome-Cj0vY1oM.js";import{_ as W,m as U}from"./player-B0K4Li5P.js";/* empty css             */import C from"./rooms-bIzyg52U.js";import{A as R}from"./agents-BCs8enyu.js";import{V as B}from"./cuts-z-c-6KB9.js";import{E as N}from"./extras-C1z-qbY8.js";import{L as x}from"./lore-CEejhifE.js";import{K as z}from"./kickrates-CLFNjp1I.js";import{R as F}from"./risky-BonORCwf.js";import{L as j,r as M,i as V,b as J}from"./launchapi-Bq9kdkb2.js";const Y=new Set(F),w=Object.fromEntries(z.rates.map(s=>[s.kick,s.usd]));D({active:"Rooms"});const k=document.getElementById("room"),S="https://api.hookrs.fun/cutroom/live",q=s=>s>=1e6?`$${(s/1e6).toFixed(2)}M`:s>=1e3?`$${(s/1e3).toFixed(1)}K`:`$${Math.round(s)}`,G=`
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
  </section>`;var K;const L=(location.pathname.match(/^\/(?:rooms|coin)\/([a-z0-9_-]+)/i)||[])[1]||new URLSearchParams(location.search).get("id")||((K=C[0])==null?void 0:K.id),f=V(L)?L:null;let r=L,o=null,e=C.find(s=>s.id===r);const E=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,I=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",X=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),Q={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},Z={},ss=s=>{var n;return((n=R[s.slug])==null?void 0:n.handle)||`cutroom${(Z[s.slug]||s.name||s.slug).toLowerCase().replace(/[^a-z0-9]/g,"")}`},A=s=>{if(!s)return"not yet";const n=Math.max(0,(Date.now()/1e3-s)/60);return n<1?"just now":n<60?`${Math.round(n)} min ago`:n<2880?`${Math.round(n/60)} h ago`:`${Math.round(n/1440)} d ago`},O={live:["Watching live","live"],queued:["Live · waiting for a slot","mid"],digging:["Digging past streams","dig"],offline:["Offline · checking every 5 min",""],idle:["Caught up",""],stopped:["Paused",""],starting:["Starting",""]};function es(s,n,i,c){if(!s&&!c&&n.platform!=="Kick")return"";const p=c?"live":(s==null?void 0:s.mode)||"offline",[l,v]=O[p]||O.offline,g=((s==null?void 0:s.log)||[]).slice(-8).reverse();return`<section class="ag-sec"><div class="wrap"><div class="ag panel">
    <div class="ag-h"><span class="ag-mode ${v}"><i></i>${l}</span>
      <span class="mono muted">checks ${n.platform==="Twitch"?"twitch.tv":"kick.com"}/${a(n.handle||n.slug)} every 5 minutes${s!=null&&s.checked?` · last check ${A(s.checked)}`:""}</span></div>
    <p class="ag-doing">${a(c?`Watching ${n.name} live right now: every word, chat's pulse, each moment it cuts. The board is above.`:(s==null?void 0:s.doing)||`Offline. When ${n.name} goes live the room watches the whole stream; in between it digs through past streams for evergreen cuts.`)}</p>
    <div class="ag-cols"><dl class="ag-nums">
      <div><dt>Past moments read</dt><dd class="mono">${(s==null?void 0:s.dug_n)??0}</dd></div>
      <div><dt>Cut from past streams</dt><dd class="mono y">${((s==null?void 0:s.cuts)||[]).length}</dd></div>
      <div><dt>Live sessions</dt><dd class="mono">${n.stats.sessions}</dd></div>
      <div><dt>Last dig</dt><dd class="mono">${A(s==null?void 0:s.last_dig)}</dd></div></dl>
    <ol class="ag-log mono">${g.map(m=>`<li><span>${a(new Date(m.t*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}))}</span>${a(m.msg)}</li>`).join("")||'<li class="muted">No activity yet.</li>'}</ol></div>
  </div></div></section>`}const P=s=>{if(!s)return"";const[n,i]=String(s).split("-");return i?`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+i-1]} ${n}`:n};function as(s){const n=x[s.slug],i=x._meta||{};return!n||!(n.arcs.length||n.cast.length)?"":`<section class="kn-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">What the room knows</span><h2 class="h2" style="margin-top:14px">${a(n.name)}'s <em>world.</em></h2></div>
      <p class="lede" style="max-width:30em">Before it cuts anything, a room reads the streamer's world: who's around them, the running jokes, the storylines fans follow. That's how a hook names the right person and a story edit follows an arc across months. The library holds ${i.storylines||"dozens of"} storylines on ${i.streamers||"dozens of"} streamers, every moment sourced.</p></div>
    <div class="kn">
      <div class="kn-side">
        ${n.cast.length?`<div class="kn-block"><span class="k mono">Regular cast</span><div class="kn-chips">${n.cast.map(c=>`<span class="chip">${a(c)}</span>`).join("")}</div></div>`:""}
        ${n.jokes.length?`<div class="kn-block"><span class="k mono">Running jokes</span><ul>${n.jokes.map(c=>`<li>${a(c)}</li>`).join("")}</ul></div>`:""}
      </div>
      <div class="kn-arcs">${n.arcs.map(c=>`<article class="kn-arc">
        <div class="kn-arc-h"><span class="mono">${a(P(c.start))}${c.end&&c.end!==c.start?` – ${a(P(c.end))}`:c.start?" – now":""}</span>${c.tone.slice(0,3).map(p=>`<span class="badge">${a(p)}</span>`).join("")}</div>
        <b>${a(c.title)}</b><p>${a(c.summary)}${c.summary.length>=259?"…":""}</p>
        <span class="mono kn-n">${c.beats} dated moments · ${c.sources} sources</span></article>`).join("")}</div>
    </div>
  </div></section>`}const ts={hype:"Hype edit",story:"Story edit",ranking:"Ranking"};function ns(s){const n=N.filter(i=>i.slug===s.slug);return n.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">Edits</span><h2 class="h2" style="margin-top:14px">More than <em>one moment.</em></h2></div>
      <p class="lede" style="max-width:28em">Stories told across months of streams, the month's best counted down, and the big IRL clip-page edit. Each one made by the room from ${a(s.name)}'s own streams.</p></div>
    <div class="real-grid">${n.map(i=>`<figure class="real-card reveal"><div class="real-vid"><video src="${a(i.file)}" poster="${a(i.poster)}" controls playsinline preload="none"></video>
      <span class="real-tag mono">${a(ts[i.kind]||i.kind)}</span></div>
      <figcaption><b>${a(i.title||"")}</b><span class="mono">${a(i.from||"")} · ${Math.round(i.duration)} s</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function is(s){const n=B.filter(i=>i.slug===s.slug);return n.length?`<section class="ch-clips-sec"><div class="wrap">
    <div class="section-head"><div><span class="eyebrow">While offline</span><h2 class="h2" style="margin-top:14px">Cut from <em>past streams.</em></h2></div>
      <p class="lede" style="max-width:28em">Between streams the room goes back through ${a(s.name)}'s recent streams, starting with the moments viewers clipped most, and recuts them its own way.</p></div>
    <div class="real-grid">${n.map(i=>`<figure class="real-card reveal"><div class="real-vid"><video src="${a(i.file)}" poster="${a(i.poster)}" controls playsinline preload="none"></video></div>
      <figcaption><b>${a(i.hook)}</b><span class="mono">${i.date?`from the ${a(i.date)} stream · `:""}${i.layout==="hooksplit"?"facecam split":"auto-framed"} · ${Math.round(i.duration)} s</span>
      <span class="real-how">from <a href="${a(i.source_url)}" target="_blank" rel="noopener noreferrer">the viewer clip</a> watched ${b(i.source_views||0)} times · editor ${i.score}/10</span></figcaption></figure>`).join("")}</div>
  </div></section>`:""}function os(s,n,i){var $,d;const c=R[r],p=N.find(t=>t.slug===r);if(!e&&!s&&c&&(s={name:c.name,live:!1,category:c.category||"Kick",rate:w[r]}),!e&&!s&&o&&(s={name:(($=o.sourceNames)==null?void 0:$[0])||r,live:!1,category:"Stream",platform:/^twitch:/.test(((d=o.follow)==null?void 0:d[0])||"")?"Twitch":"Kick",rate:w[r]}),!e&&!s&&p&&(s={name:p.streamer,live:!1,category:p.platform,rate:w[r],program:p.program,platform:p.platform}),!e&&s&&(e={id:r,slug:r,name:s.name||r,platform:s.platform||"Kick",category:s.category||"IRL",program:s.program||"Kick Clipping (clipping.net)",program_url:"https://clipping.net/c/kick-clipping",rate:s.rate||w[r],title:s.title,sessions:[],clips:[],moments:[],since:null,stats:{sessions:0,minutes:0,words:0,chat:0,moments:0,kept:0,dropped:0,clips:0,held:0,posted:0}}),Y.has(r)&&(e=null),e){const t=/twitch/i.test((s==null?void 0:s.platform)||e.platform||"")?"Twitch":"Kick";e={...e,platform:t,handle:(s==null?void 0:s.handle)||e.handle||e.slug},t==="Twitch"&&!e.rate&&(e={...e,program:"no clipping bounty yet",program_url:`https://www.twitch.tv/${encodeURIComponent(e.handle)}`})}if(!e){k.innerHTML='<section><div class="wrap"><h1 class="h2">No room <em>by that name.</em></h1><a class="btn btn-y" href="/rooms" style="margin-top:20px">All rooms</a></div></section>';return}if(o){const t=o.market||{};e={...e,coin:{ticker:o.ticker,venue:o.venue||t.venue||"meteora",mcap_usd:t.mcapUsd||0,mint:o.mint,progress:t.progress||0,raised:t.raisedSol||0,target:t.targetSol||0,graduated:t.graduated,pending:o.state!=="live",nomarket:!o.market}}}document.title=o?`${o.name} ($${o.ticker}) · cutroom`:`${e.name} room · cutroom`;const l=e.stats,v=e.clips[0],g=[["Watch",`${l.minutes} min`,`live, ${l.sessions} session${l.sessions===1?"":"s"}`],["Hear",b(l.words),"words transcribed"],["Read",b(l.chat),"chat messages"],["Find",l.moments,"moments flagged"],["Edit",`${l.kept} / ${l.dropped}`,"kept / dropped by the editor"],["Cut",l.clips,`clips on this page${l.held?`, ${l.held} held back (see below)`:""}${l.median_after_s?` · ~${E(l.median_after_s)} after the moment`:""}`],["Post + collect",l.posted?`${l.posted}`:"—",l.posted?"posted":"posting not connected yet",!0]];k.innerHTML=`
  <section class="ch-head">
    <div class="wrap ch-head-grid">
      <div class="ch-poster">${s!=null&&s.live&&!n?'<div class="ch-live" id="ch-live"></div>':v?`<div class="real-vid"><video src="${a(v.file)}" poster="${a(v.poster)}" controls playsinline preload="none"></video></div>`:""}</div>
      <div class="ch-info">
        <div class="ch-meta">${s!=null&&s.live?`<span class="badge live"><span class="dot-live"></span>Live · ${b(s.viewers)} watching</span>`:'<span class="badge">Offline</span>'}${n?'<span class="badge room">Room on air · cutting now</span>':o?`<span class="badge mid">Launched · $${a(o.ticker)}</span>`:'<span class="badge mid">Test room</span>'}<a class="mono muted" href="https://${e.platform==="Twitch"?"twitch.tv":"kick.com"}/${encodeURIComponent(e.handle)}" target="_blank" rel="noopener">${e.platform==="Twitch"?"twitch.tv":"kick.com"}/${a(e.handle)} ↗</a></div>
        <h1 class="cap ch-cap" style="--n:${Math.max(5,...(o?`${o.name} $${o.ticker}`:e.name).split(/\s+/).map(t=>t.length))}">${o?`${a(o.name)} <span class="hl">$${a(o.ticker)}</span>`:`${a(e.name)} <span class="hl">room</span>`}</h1>
        <div class="ch-sub"><span>clips <b>${a(e.name)}</b> on ${a(e.platform)}</span><span>${a(e.category)}</span>${e.title?`<span class="muted">“${a(e.title)}”</span>`:""}</div>
        <div class="ch-coinbox">${e.coin?`<div><span class="k">Coin</span><b class="mono">$${a(e.coin.ticker)}</b></div><div><span class="k">Market cap</span><b class="mono y">${e.coin.pending?"confirming…":e.coin.nomarket?"—":q(e.coin.mcap_usd||0)}</b></div>${e.coin.mint?`
          <div><span class="k">${e.coin.graduated?"Graduated":"To graduation"}</span><b class="mono">${e.coin.graduated?e.coin.venue==="pump"?"on PumpSwap":"on Meteora DAMM v2":e.coin.nomarket?"—":`${Math.round(e.coin.progress*100)}% · ${e.coin.raised.toFixed(1)} / ${e.coin.target.toFixed(0)} SOL`}</b></div>
          <div class="ch-buy"><a class="btn btn-y btn-sm" href="${J(a(e.coin.mint),e.coin.venue)}" target="_blank" rel="noopener">Buy $${a(e.coin.ticker)}</a></div>
          <div class="ch-ca"><span class="k">CA</span><b class="mono">${a(e.coin.mint)}</b><button type="button" class="btn btn-ghost btn-sm" id="copy-ca" data-ca="${a(e.coin.mint)}">Copy CA</button></div>`:""}`:'<div><span class="k">Coin</span><b class="mono muted">no coin yet</b></div><div><span class="k">Market cap</span><b class="mono muted">opens at launch</b></div>'}
          <div><span class="k">Program</span><a href="${a(e.program_url)}" target="_blank" rel="noopener"><b>${a(e.program)}</b></a></div><div><span class="k">Pays</span><b class="mono y">${e.rate?`$${e.rate} / 100K views`:"—"}</b></div></div>
        <p class="lede" style="max-width:34em">${l.sessions?`This room watched ${a(e.name)} live for ${l.minutes} minutes across ${l.sessions} session${l.sessions===1?"":"s"}.`:`No session yet. A room starts on its own the next time ${a(e.name)} goes live with nothing else in the queue.`} ${l.sessions?" Everything on this page is what it actually did: the moments it flagged, what its editor kept or dropped and why, and the clips it cut while the stream was still going.":""}</p>
        <div class="ch-handles"><span class="k mono">Posts as</span><b class="mono">@${a(ss(e))}</b><span class="muted">on TikTok · Instagram · YouTube</span><span class="badge">${o?"accounts opening":"accounts open at launch"}</span></div>
        <div class="ch-actions"><a class="btn btn-y" href="/launch">Launch a room like this</a><button class="btn btn-ghost" id="share">Copy link</button></div>
      </div>
    </div>
  </section>

  ${es(i,e,s,n)}

  ${as(e)}

  ${ns(e)}

  ${is(e)}

  <section class="ch-pipe-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Pipeline</span><h2 class="h2" style="margin-top:14px">The room, <em>so far.</em></h2></div></div>
      <ol class="pipe">${g.map(([t,u,h,T],_)=>`<li><span class="mono pn">0${_+1} ${t}</span><b class="mono ${T?"y":""}">${a(String(u))}</b><span class="pl">${a(h)}</span></li>`).join("")}</ol>
    </div>
  </section>

  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Clips</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${e.clips.map(t=>`<figure class="real-card reveal"><div class="real-vid"><video src="${a(t.file)}" poster="${a(t.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${a(t.hook||"")}</b><span class="mono">${t.after_moment_s?`ready ${E(t.after_moment_s)} after it happened`:""}${t.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${a(t.why||"")}</span><span class="real-how">${a(t.post&&t.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${e.moments.map(t=>{const u=Q[t.stage]||[t.stage,"low"],h=t.signals||{};return`<tr><td class="mono">${a(I(t.found))}<br><span class="muted">${X(t.at)} in</span></td>
          <td class="mono" style="font-size:12px">${h.chat_x?`chat ×${h.chat_x}`:""}${h.laughs?` · ${h.laughs} laughs`:""}${h.clip_it?` · ${h.clip_it}× clip it`:""}${h.forced?" · operator":""}</td>
          <td style="font-size:13px">${(t.chat_top||[]).map(([T,_])=>`“${a(T)}” ×${_}`).join(", ")}</td>
          <td><span class="badge ${u[1]}">${a(u[0])}</span>${t.hook?`<div style="margin-top:6px;font-size:13px"><b>${a(t.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${a(t.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${e.sessions.slice().reverse().map(t=>`<tr><td class="mono">${a(I(t.started))}</td><td class="mono">${t.minutes} min</td><td class="mono">${t.viewers?b(t.viewers):"—"}</td><td class="mono">${t.moments}</td><td class="mono">${t.kept}</td><td class="mono muted">${a(t.model||"")}</td></tr>`).join("")}</tbody></table></div>
    </div>
  </section>

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
  </section>`,document.getElementById("share").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href),y("Link copied")}catch{y(location.href)}}),H();const m=document.getElementById("ch-live");m&&!m.dataset.on&&(m.dataset.on="1",U(m,{slug:e.handle,name:e.name,platform:e.platform==="Twitch"?"twitch":"kick"},S))}async function cs(){var p,l,v,g,m,$;if(!f){try{const d=await fetch(`${j}/v1/rooms`,{cache:"no-store"});d.ok&&(o=((await d.json()).rooms||[]).find(t=>t.slug===r||(t.follow||[]).some(u=>u.replace(/^twitch:/,"")===r))||null)}catch{}o&&history.replaceState(null,"",M(o.mint)+location.search)}if(f){try{const d=await fetch(`${j}/v1/rooms/${f}`,{cache:"no-store"});d.ok&&(o=await d.json())}catch{}o&&(r=(((p=o.follow)==null?void 0:p[0])||((l=o.kick)==null?void 0:l[0])||((v=o.sources)==null?void 0:v[0])||r).replace(/^twitch:/,""),e=C.find(d=>d.id===r),location.pathname!==M(f)&&history.replaceState(null,"",M(f)+location.search))}let s=null;try{const d=new AbortController;setTimeout(()=>d.abort(),4e3);const t=await fetch(`${S}/status`,{signal:d.signal,cache:"no-store"});t.ok&&(s=await t.json())}catch{}const n=(g=s==null?void 0:s.streamers)==null?void 0:g[r],i=!!((m=s==null?void 0:s.rooms)!=null&&m[r]);let c=R[r]||null;try{const d=await fetch(`${S}/agent/${encodeURIComponent(r)}`,{cache:"no-store"});if(d.ok){const t=await d.json();c={...t,dug_n:Object.keys(t.dug||{}).length}}}catch{}os(n,i,c),($=document.getElementById("copy-ca"))==null||$.addEventListener("click",d=>{var t;(t=navigator.clipboard)==null||t.writeText(d.currentTarget.dataset.ca).then(()=>y("CA copied"),()=>y(d.currentTarget.dataset.ca))}),o&&new URLSearchParams(location.search).has("launched")&&k.insertAdjacentHTML("afterbegin",`<div class="wrap"><div class="launched-banner"><b>${a(o.name)} is launched.</b> <span>The room's agent is on it: it digs ${a(o.sourceNames.join(", "))}'s most-clipped moments now and goes live the next time they stream. Its work shows up below.</span></div></div>`),i&&(k.insertAdjacentHTML("afterbegin",G),window.__CUTROOM_EMBED=!0,await W(()=>import("./live-DcBzQXyT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}cs();

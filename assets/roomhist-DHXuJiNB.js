import{e,f as n}from"./chrome-CVbVCWyU.js";const y={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},b=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,m=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",w=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`),$=25;function k(s,{limit:a=0,eyebrow:u="",clips:i=!0}={}){const g=a?s.clips.slice(0,Math.max(8,Math.round(a/3))):s.clips,d=a?s.moments.slice(0,a):s.moments,r=s.sessions.slice().reverse().slice(0,a||void 0),c=a?`<a class="btn btn-ghost btn-sm" href="/rooms/${encodeURIComponent(s.slug)}">${e(s.name)}'s full room →</a>`:"",h=s.moments.length||s.sessions.length;return!h&&!i?"":`${i?`
  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">${e(u||"Clips")}</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${g.map(t=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(t.file)}" poster="${e(t.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${e(t.hook||"")}</b><span class="mono">${t.after_moment_s?`ready ${b(t.after_moment_s)} after it happened`:""}${t.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${e(t.why||"")}</span><span class="real-how">${e(t.post&&t.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>`:""}

  ${h?`<section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${d.map((t,l)=>{const p=y[t.stage]||[t.stage,"low"],o=t.signals||{};return`<tr${!a&&l>=$?' class="more"':""}><td class="mono">${e(m(t.found))}<br><span class="muted">${w(t.at)} in</span></td>
          <td class="mono" style="font-size:12px">${o.chat_x?`chat ×${o.chat_x}`:""}${o.laughs?` · ${o.laughs} laughs`:""}${o.clip_it?` · ${o.clip_it}× clip it`:""}${o.forced?" · operator":""}</td>
          <td style="font-size:13px">${(t.chat_top||[]).map(([v,f])=>`“${e(v)}” ×${f}`).join(", ")}</td>
          <td><span class="badge ${p[1]}">${e(p[0])}</span>${t.hook?`<div style="margin-top:6px;font-size:13px"><b>${e(t.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${e(t.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      ${!a&&d.length>$?`<button type="button" class="btn btn-ghost btn-sm rh-more" data-more>Show all ${n(d.length)} moments</button>`:""}
      ${r.length?`<details class="panel rh-sessions"><summary><span class="mono">Sessions</span><b>${n(s.sessions.length)} watched live</b><span class="muted">${n(s.sessions.reduce((t,l)=>t+(l.minutes||0),0))} min in all</span></summary>
        <table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${r.map(t=>`<tr><td class="mono">${e(m(t.started))}</td><td class="mono">${t.minutes} min</td><td class="mono">${t.viewers?n(t.viewers):"—"}</td><td class="mono">${t.moments}</td><td class="mono">${t.kept}</td><td class="mono muted">${e(t.model||"")}</td></tr>`).join("")}</tbody></table></details>`:""}
      ${c?`<div style="margin-top:16px">${c}</div>`:""}
    </div>
  </section>`:""}`}export{k as historyHTML};

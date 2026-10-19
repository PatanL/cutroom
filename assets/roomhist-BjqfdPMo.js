import{e,f as $}from"./chrome-Cj0vY1oM.js";const v={ready:["cut","ok"],posted:["posted","ok"],submitted:["sent","ok"],paid:["paid","ok"],dropped:["dropped","low"],hidden:["held back","low"],failed:["failed","low"]},f=s=>`${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`,i=s=>s?new Date(s*1e3).toLocaleString([],{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"",u=s=>(s=Math.max(0,Math.floor(s||0)),`${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor(s/60)%60).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`);function g(s,{limit:o=0,eyebrow:l=""}={}){const r=o?s.clips.slice(0,Math.max(8,Math.round(o/3))):s.clips,c=o?s.moments.slice(0,o):s.moments,p=s.sessions.slice().reverse().slice(0,o||void 0),n=o?`<a class="btn btn-ghost btn-sm" href="/rooms/${encodeURIComponent(s.slug)}">${e(s.name)}'s full room →</a>`:"";return`
  <section class="ch-clips-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">${e(l||"Clips")}</span><h2 class="h2" style="margin-top:14px">What the room <em>cut.</em></h2></div>
        <p class="lede" style="max-width:26em">Cut live. Each one was ready about a minute after it happened, before any human saw it.</p></div>
      <div class="real-grid">${r.map(t=>`<figure class="real-card reveal"><div class="real-vid"><video src="${e(t.file)}" poster="${e(t.poster)}" controls playsinline preload="none"></video></div>
        <figcaption><b>${e(t.hook||"")}</b><span class="mono">${t.after_moment_s?`ready ${f(t.after_moment_s)} after it happened`:""}${t.forced?" · operator pressed clip":""}</span>
        <span class="real-how">${e(t.why||"")}</span><span class="real-how">${e(t.post&&t.post.url?"posted":"not posted yet: TikTok not connected")}</span></figcaption></figure>`).join("")||'<p class="muted">No clips yet.</p>'}</div>
    </div>
  </section>

  <section class="ch-vod-sec">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Every moment</span><h2 class="h2" style="margin-top:14px">What it flagged, <em>and the call.</em></h2></div>
        <p class="lede" style="max-width:28em">The editor drops more than it keeps: anything that needs context, punches down, or that chat reacted to off camera.</p></div>
      <div class="panel"><table class="moments"><thead><tr><th>When</th><th>Signals</th><th>Chat said</th><th>Call</th><th>Why</th></tr></thead>
        <tbody>${c.map(t=>{const d=v[t.stage]||[t.stage,"low"],a=t.signals||{};return`<tr><td class="mono">${e(i(t.found))}<br><span class="muted">${u(t.at)} in</span></td>
          <td class="mono" style="font-size:12px">${a.chat_x?`chat ×${a.chat_x}`:""}${a.laughs?` · ${a.laughs} laughs`:""}${a.clip_it?` · ${a.clip_it}× clip it`:""}${a.forced?" · operator":""}</td>
          <td style="font-size:13px">${(t.chat_top||[]).map(([h,m])=>`“${e(h)}” ×${m}`).join(", ")}</td>
          <td><span class="badge ${d[1]}">${e(d[0])}</span>${t.hook?`<div style="margin-top:6px;font-size:13px"><b>${e(t.hook)}</b></div>`:""}</td>
          <td style="font-size:13px;color:var(--text-2)">${e(t.why||"")}</td></tr>`}).join("")}</tbody></table></div>
      <div class="panel" style="margin-top:16px"><table class="moments"><thead><tr><th>Session</th><th>Watched</th><th>Viewers</th><th>Moments</th><th>Kept</th><th>Heard with</th></tr></thead>
        <tbody>${p.map(t=>`<tr><td class="mono">${e(i(t.started))}</td><td class="mono">${t.minutes} min</td><td class="mono">${t.viewers?$(t.viewers):"—"}</td><td class="mono">${t.moments}</td><td class="mono">${t.kept}</td><td class="mono muted">${e(t.model||"")}</td></tr>`).join("")}</tbody></table></div>
      ${n?`<div style="margin-top:16px">${n}</div>`:""}
    </div>
  </section>`}export{g as historyHTML};

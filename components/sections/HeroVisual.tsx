"use client";

import { useEffect, useRef } from "react";

const JB = "'JetBrains Mono', monospace";
const GOLD = "#C9A84C";
const GOLD_LT = "#E8C97A";
const CYAN_LT = "#2A8FD4";
const DIM_GOLD = "rgba(232,201,122,0.5)";
const ANN_GOLD = "rgba(232,201,122,0.7)";

function fUp(delay: string, dur = ".3s") {
  return { style: { opacity: 0, animation: `fadeUp ${dur} ${delay} forwards` } };
}

export default function HeroVisual() {
  const coordsRef = useRef<HTMLDivElement>(null);
  const twRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let x = 2748.32, y = 1563.47;
    const id = setInterval(() => {
      x += (Math.random() - 0.4) * 12;
      y += (Math.random() - 0.5) * 8;
      if (coordsRef.current)
        coordsRef.current.textContent = `X: ${x.toFixed(2)}  Y: ${y.toFixed(2)}  Z: 0.00`;
    }, 120);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = twRef.current;
    if (!el) return;
    const cmds = ["LINE", "PLINE", "HATCH", "DIMLINEAR", "OFFSET", "TRIM"];
    let seq = 0;
    let tid: ReturnType<typeof setTimeout>;
    const run = () => {
      const text = cmds[seq % cmds.length];
      let i = 0;
      el.textContent = "";
      const iv = setInterval(() => {
        if (i <= text.length) el.textContent = text.slice(0, i++);
        else {
          clearInterval(iv);
          tid = setTimeout(() => { seq++; run(); }, 800);
        }
      }, 80);
    };
    tid = setTimeout(run, 2800);
    return () => clearTimeout(tid);
  }, []);

  return (
    <div className="relative overflow-hidden select-none"
      style={{ width: "min(580px, 96vw)", height: "min(520px, 96vw)" }}>

      {/* Blueprint grid */}
      <div className="blueprint-bg absolute inset-0"
        style={{ zIndex: 1, opacity: 0, animation: "fadeIn .6s ease forwards" }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(10,13,18,.55) 100%)",
        }} />
      </div>

      {/* BTP silhouette */}
      <div className="absolute inset-0" aria-hidden
        style={{ zIndex: 2, opacity: 0, animation: "fadeIn 2s ease forwards" }}>
        <svg viewBox="0 0 600 540" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="1">
            <line x1="60" y1="440" x2="540" y2="440" /><line x1="100" y1="440" x2="100" y2="180" />
            <line x1="200" y1="440" x2="200" y2="180" /><line x1="300" y1="440" x2="300" y2="130" />
            <line x1="400" y1="440" x2="400" y2="180" /><line x1="480" y1="440" x2="480" y2="200" />
            <line x1="90" y1="360" x2="490" y2="360" /><line x1="90" y1="290" x2="490" y2="290" />
            <line x1="90" y1="220" x2="490" y2="220" /><line x1="110" y1="180" x2="490" y2="180" />
            <line x1="110" y1="180" x2="270" y2="130" />
            <line x1="120" y1="225" x2="120" y2="285" strokeDasharray="3 3" />
            <line x1="140" y1="225" x2="140" y2="285" strokeDasharray="3 3" />
            <line x1="160" y1="225" x2="160" y2="285" strokeDasharray="3 3" />
            <line x1="180" y1="225" x2="180" y2="285" strokeDasharray="3 3" />
            <line x1="220" y1="225" x2="220" y2="285" strokeDasharray="3 3" />
            <line x1="110" y1="240" x2="290" y2="240" strokeDasharray="3 3" />
            <line x1="110" y1="255" x2="290" y2="255" strokeDasharray="3 3" />
            <rect x="320" y="220" width="60" height="30" strokeDasharray="4 2" />
            <rect x="400" y="220" width="60" height="30" strokeDasharray="4 2" />
            <line x1="510" y1="440" x2="510" y2="100" /><line x1="510" y1="100" x2="420" y2="100" />
            <line x1="510" y1="100" x2="540" y2="130" />
            <line x1="420" y1="100" x2="420" y2="130" strokeDasharray="3 3" />
            <rect x="510" y="100" width="28" height="14" />
            <rect x="108" y="300" width="30" height="20" strokeDasharray="2 1" opacity=".6" />
            <rect x="210" y="300" width="30" height="20" strokeDasharray="2 1" opacity=".6" />
          </g>
        </svg>
      </div>

      {/* Plan de coffrage */}
      <div className="absolute overflow-hidden" style={{
        left: "5%", top: "7%", width: "58%", height: "82%", zIndex: 4,
        background: "#0D1520", border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: 2, boxShadow: "0 20px 60px rgba(0,0,0,.55)",
        transform: "rotate(-2.5deg) scale(.85)", opacity: 0,
        animation: "planUnfold .7s cubic-bezier(.22,1,.36,1) .4s forwards",
      }}>
        <svg viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="340" height="300" fill="#0D1520" />
          <g stroke="rgba(201,168,76,0.04)" strokeWidth=".5">
            {[30,60,90,120,150,180,210].map(v=><line key={`gh${v}`} x1="0" y1={v} x2="340" y2={v}/>)}
            {[30,60,90,120,150,180,210,240,270,300].map(v=><line key={`gv${v}`} x1={v} y1="0" x2={v} y2="230"/>)}
          </g>
          <rect x="22" y="18" width="260" height="185" fill="none"
            stroke="rgba(255,255,255,0.7)" strokeWidth="1.4"
            strokeDasharray="1200" strokeDashoffset="1200"
            style={{ animation: "drawPath 1.4s ease .8s forwards" }} />
          <rect x="28" y="24" width="248" height="173" fill="none"
            stroke="rgba(255,255,255,0.3)" strokeWidth=".7"
            strokeDasharray="900" strokeDashoffset="900"
            style={{ animation: "drawPath 1.2s ease .95s forwards" }} />
          <rect x="140" y="24" width="8" height="90"
            fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.55)" strokeWidth=".9"
            {...fUp("1.3s",".4s")} />
          <rect x="28" y="118" width="112" height="8"
            fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.5)" strokeWidth=".9"
            {...fUp("1.4s",".4s")} />
          {[[22,18],[268,18],[22,189],[268,189]].map(([x,y],i)=>(
            <g key={i} {...fUp("1.0s",".3s")}>
              <rect x={x} y={y} width="14" height="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.75)" strokeWidth="1" />
              <line x1={x} y1={y} x2={x+14} y2={y+14} stroke="rgba(255,255,255,0.4)" strokeWidth=".5" />
            </g>
          ))}
          <rect x="136" y="18" width="12" height="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.6)" strokeWidth=".8" {...fUp("1.08s",".3s")} />
          <rect x="136" y="189" width="12" height="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.6)" strokeWidth=".8" {...fUp("1.1s",".3s")} />
          <line x1="144" y1="8" x2="144" y2="228" stroke="rgba(27,108,168,0.5)" strokeWidth=".8" strokeDasharray="8 4" {...fUp("1.5s",".5s")} />
          <line x1="12" y1="113" x2="310" y2="113" stroke="rgba(27,108,168,0.5)" strokeWidth=".8" strokeDasharray="8 4" {...fUp("1.55s",".5s")} />
          <g {...fUp("1.45s",".4s")}>
            <rect x="75" y="118" width="28" height="8" fill="#0D1520" />
            <path d="M 75,118 A 28,28 0 0,1 103,118" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth=".7" />
            <line x1="75" y1="118" x2="75" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth=".7" />
          </g>
          <g {...fUp("1.5s",".4s")}>
            <line x1="22" y1="12" x2="282" y2="12" stroke={DIM_GOLD} strokeWidth=".6" />
            <line x1="22" y1="9" x2="22" y2="15" stroke={DIM_GOLD} strokeWidth=".6" />
            <line x1="282" y1="9" x2="282" y2="15" stroke={DIM_GOLD} strokeWidth=".6" />
            <polygon points="26,12 22,9 22,15" fill="rgba(232,201,122,0.6)" />
            <polygon points="278,12 282,9 282,15" fill="rgba(232,201,122,0.6)" />
            <text x="152" y="10" textAnchor="middle" fontFamily={JB} fontSize="7" fill={GOLD_LT}>10.80 m</text>
          </g>
          <g {...fUp("1.55s",".4s")}>
            <line x1="16" y1="18" x2="16" y2="203" stroke={DIM_GOLD} strokeWidth=".6" />
            <line x1="13" y1="18" x2="19" y2="18" stroke={DIM_GOLD} strokeWidth=".6" />
            <line x1="13" y1="203" x2="19" y2="203" stroke={DIM_GOLD} strokeWidth=".6" />
            <text x="14" y="115" textAnchor="middle" fontFamily={JB} fontSize="7" fill={GOLD_LT} transform="rotate(-90 14 115)">5.40 m</text>
          </g>
          <g {...fUp("1.65s",".4s")} fontFamily={JB} fontSize="7" fill={ANN_GOLD}>
            <text x="36" y="38">50×50</text>
            <text x="36" y="175">ep. 20cm</text>
            <text x="155" y="80">ø12/15 cm</text>
          </g>
          <g {...fUp("1.7s",".4s")}>
            {[22,144,282].map((cx,i)=>(
              <g key={i}>
                <circle cx={cx} cy="210" r="7" fill="none" stroke="rgba(27,108,168,0.6)" strokeWidth=".8" />
                <text x={cx} y="213" textAnchor="middle" fontFamily={JB} fontSize="6.5" fill="rgba(27,108,168,0.8)">{i+1}</text>
              </g>
            ))}
            {[18,113,203].map((cy,i)=>(
              <g key={i}>
                <circle cx="5" cy={cy} r="7" fill="none" stroke="rgba(27,108,168,0.6)" strokeWidth=".8" />
                <text x="5" y={cy+3} textAnchor="middle" fontFamily={JB} fontSize="6.5" fill="rgba(27,108,168,0.8)">{String.fromCharCode(65+i)}</text>
              </g>
            ))}
          </g>
          <g {...fUp("1.8s",".4s")} transform="translate(292,30)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="rgba(232,201,122,0.4)" strokeWidth=".7" />
            <polygon points="0,-9 -3,2 0,0 3,2" fill="rgba(232,201,122,0.7)" />
            <polygon points="0,-9 -3,2 0,0 3,2" fill="rgba(232,201,122,0.15)" transform="rotate(180)" />
            <text x="0" y="-13" textAnchor="middle" fontFamily={JB} fontSize="7" fill="rgba(232,201,122,0.7)">N</text>
          </g>
          <g {...fUp("1.75s",".4s")}>
            <polygon points="168,190 164,197 172,197" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth=".7" />
            <text x="176" y="197" fontFamily={JB} fontSize="6.5" fill="rgba(201,168,76,0.6)">NGF +0.00</text>
          </g>
          <g {...fUp("1.85s",".4s")}>
            <rect x="0" y="225" width="340" height="75" fill="rgba(8,14,24,0.95)" />
            <line x1="0" y1="225" x2="340" y2="225" stroke="rgba(201,168,76,0.4)" strokeWidth=".8" />
            <line x1="170" y1="225" x2="170" y2="300" stroke="rgba(201,168,76,0.2)" strokeWidth=".5" />
            <line x1="255" y1="225" x2="255" y2="300" stroke="rgba(201,168,76,0.2)" strokeWidth=".5" />
            <line x1="170" y1="250" x2="340" y2="250" stroke="rgba(201,168,76,0.15)" strokeWidth=".4" />
            <line x1="170" y1="272" x2="340" y2="272" stroke="rgba(201,168,76,0.15)" strokeWidth=".4" />
            <text x="6" y="237" fontFamily={JB} fontSize="7" fill="rgba(232,201,122,0.9)" fontWeight="600">PLAN DE COFFRAGE</text>
            <text x="6" y="249" fontFamily={JB} fontSize="6" fill="rgba(201,168,76,0.65)">Niveau R+1</text>
            <text x="6" y="261" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.45)">Structure Valley — Bureau d&apos;Études</text>
            <text x="6" y="272" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.4)">Casablanca, Maroc</text>
            <text x="6" y="285" fontFamily={JB} fontSize="5" fill="rgba(201,168,76,0.35)">A. TOUTLA — Dessinateur-Projeteur BA</text>
            <text x="175" y="237" fontFamily={JB} fontSize="6" fill="rgba(201,168,76,0.6)">Ech: 1/50</text>
            <text x="175" y="248" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.4)">Format A1</text>
            <text x="175" y="260" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.4)">Rév. 03</text>
            <text x="175" y="271" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.35)">Indice B</text>
            <text x="175" y="283" fontFamily={JB} fontSize="5" fill="rgba(201,168,76,0.3)">Date: 05/2025</text>
            <text x="260" y="237" fontFamily={JB} fontSize="6" fill="rgba(201,168,76,0.6)">Phase EXE</text>
            <text x="260" y="248" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.4)">Tiroir D.02</text>
            <text x="260" y="260" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.35)">DWG: COF-R1</text>
            <text x="260" y="271" fontFamily={JB} fontSize="5.5" fill="rgba(201,168,76,0.35)">-003.dwg</text>
          </g>
        </svg>
      </div>

      {/* AutoCAD window */}
      <div className="absolute flex flex-col overflow-hidden" style={{
        right: "-2%", top: "4%", width: "52%", height: "60%", zIndex: 6,
        borderRadius: 3,
        boxShadow: "0 30px 80px rgba(27,108,168,.22), 0 0 0 1px rgba(42,143,212,.18)",
        opacity: 0,
        animation: "acadSlideIn .6s cubic-bezier(.22,1,.36,1) 2.2s forwards, acadFloat 5s ease-in-out 2.8s infinite",
      }}>
        {/* title bar */}
        <div style={{ background:"#1a1a2e", padding:"4px 8px", fontFamily:JB, fontSize:8, color:"rgba(255,255,255,.7)", display:"flex", alignItems:"center", gap:6, borderBottom:"1px solid rgba(42,143,212,.18)", flexShrink:0 }}>
          <div style={{ display:"flex", gap:3 }}>
            {["#ff5f57","#ffbd2e","#28ca41"].map(c=>(
              <span key={c} style={{ width:6,height:6,borderRadius:"50%",background:c,display:"inline-block" }} />
            ))}
          </div>
          <span style={{ flex:1, textAlign:"center" }}>Autodesk AutoCAD 2024 — [COFFRAGE_R1_v3.dwg]</span>
        </div>
        {/* menu bar */}
        <div style={{ background:"#1e2233", padding:"3px 6px", fontFamily:JB, fontSize:7.5, color:"rgba(255,255,255,.5)", display:"flex", gap:10, borderBottom:"1px solid rgba(0,0,0,.3)", flexShrink:0 }}>
          {["Fichier","Édition","Affichage","Insérer","Format","Outils","Dessiner","Coter"].map(m=>(
            <span key={m}>{m}</span>
          ))}
        </div>
        {/* toolbar */}
        <div style={{ background:"#1a1e2e", padding:"3px 6px", display:"flex", gap:3, alignItems:"center", borderBottom:"1px solid rgba(0,0,0,.3)", flexShrink:0 }}>
          <TbBtn><svg width="10" height="10" viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" fill="none" stroke="#2A8FD4" strokeWidth="1.2"/></svg></TbBtn>
          <TbBtn><svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="3.5" fill="none" stroke="#2A8FD4" strokeWidth="1.2"/></svg></TbBtn>
          <TbBtn><svg width="10" height="10" viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="#2A8FD4" strokeWidth="1.2"/></svg></TbBtn>
          <TbBtn><svg width="10" height="10" viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" fill="none" stroke="#2A8FD4" strokeWidth="1"/><line x1="1" y1="4" x2="10" y2="4" stroke="rgba(42,143,212,.5)" strokeWidth=".7"/><line x1="1" y1="7" x2="10" y2="7" stroke="rgba(42,143,212,.5)" strokeWidth=".7"/></svg></TbBtn>
          <TbBtn><svg width="10" height="10" viewBox="0 0 10 10"><line x1="1" y1="8" x2="9" y2="8" stroke="rgba(232,201,122,.7)" strokeWidth="1"/><line x1="1" y1="6" x2="1" y2="10" stroke="rgba(232,201,122,.7)" strokeWidth=".8"/><line x1="9" y1="6" x2="9" y2="10" stroke="rgba(232,201,122,.7)" strokeWidth=".8"/></svg></TbBtn>
          <div style={{ flex:1 }} />
          <span style={{ fontFamily:JB, fontSize:7, color:"rgba(42,143,212,.5)" }}>MODEL</span>
        </div>
        {/* canvas */}
        <div style={{ background:"#0B0E18", flex:1, position:"relative", overflow:"hidden", minHeight:0 }}>
          <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 230 160" preserveAspectRatio="none">
            <rect x="20" y="15" width="180" height="120" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="900" strokeDashoffset="900" style={{ animation:"drawPath 1.5s ease 2.3s forwards" }} />
            <rect x="26" y="21" width="168" height="108" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth=".6" strokeDasharray="700" strokeDashoffset="700" style={{ animation:"drawPath 1.3s ease 2.45s forwards" }} />
            <line x1="105" y1="21" x2="105" y2="129" stroke="rgba(255,255,255,0.45)" strokeWidth=".9" strokeDasharray="110" strokeDashoffset="110" style={{ animation:"drawPath .7s ease 2.6s forwards" }} />
            {[[20,15],[190,15],[20,125],[190,125]].map(([x,y],i)=>(
              <rect key={i} x={x} y={y} width="10" height="10" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.6)" strokeWidth=".7" style={{ opacity:0, animation:"fadeUp .3s 2.35s forwards" }} />
            ))}
            <line x1="20" y1="10" x2="200" y2="10" stroke="rgba(232,201,122,.4)" strokeWidth=".5" strokeDasharray="200" strokeDashoffset="200" style={{ animation:"drawPath .8s ease 2.8s forwards" }} />
            <text x="110" y="9" textAnchor="middle" fontFamily={JB} fontSize="7" fill="rgba(232,201,122,0.6)" style={{ opacity:0, animation:"fadeUp .3s 3.1s forwards" }}>10.80</text>
          </svg>
          {/* crosshair */}
          <div style={{ position:"absolute", pointerEvents:"none", zIndex:10, width:40, height:40, animation:"cursorMove 8s ease-in-out 2.6s infinite" }}>
            <div style={{ position:"absolute", top:"50%", left:0, right:0, height:1, background:"#1B6CA8", transform:"translateY(-50%)" }} />
            <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:1, background:"#1B6CA8", transform:"translateX(-50%)" }} />
            <div style={{ position:"absolute", width:9, height:9, border:"1px solid #1B6CA8", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }} />
            <div style={{ position:"absolute", top:"50%", left:"100%", transform:"translate(4px,-50%)", background:GOLD, color:"#0A0D12", fontFamily:JB, fontSize:"6.5px", padding:"2px 4px", borderRadius:2, whiteSpace:"nowrap", animation:"snapShow 8s ease-in-out 2.6s infinite" }}>ENDPOINT</div>
          </div>
          <div ref={coordsRef} style={{ position:"absolute", bottom:4, left:6, fontFamily:JB, fontSize:7, color:"rgba(42,143,212,.6)", pointerEvents:"none" }}>X: 2748.32  Y: 1563.47  Z: 0.00</div>
        </div>
        {/* status bar */}
        <div style={{ background:"#111827", padding:"3px 8px", fontFamily:JB, fontSize:7.5, color:CYAN_LT, display:"flex", gap:8, alignItems:"center", borderTop:"1px solid rgba(0,0,0,.3)", flexShrink:0 }}>
          {["Modèle","|","ORTHO","|","ACCROBJ","|","GRILLE"].map((s,i)=>(
            <span key={i} style={s==="|" ? { color:"rgba(255,255,255,.15)" } : {}}>{s}</span>
          ))}
        </div>
        {/* command line */}
        <div style={{ background:"#0a0a15", padding:"4px 8px", fontFamily:JB, fontSize:8, flexShrink:0, borderTop:"1px solid rgba(27,108,168,.15)" }}>
          {["Commande: LINE","Premier point: 0,0","Point suivant: @5400,0","Commande: HATCH"].map((t,i)=>(
            <div key={i} style={{ color:"rgba(42,143,212,.55)", lineHeight:1.5, fontSize:7.5 }}>{t}</div>
          ))}
          <div style={{ color:"rgba(255,255,255,.75)", display:"flex", alignItems:"center", gap:2 }}>
            <span style={{ color:"rgba(42,143,212,.7)" }}>Commande:</span>&nbsp;
            <span ref={twRef} />
            <span style={{ display:"inline-block", width:5, height:9, background:"rgba(255,255,255,.7)", animation:"blinkCursor .9s step-end infinite" }} />
          </div>
        </div>
      </div>

      {/* Badge 1 — AutoCAD 2D/3D (top-left) */}
      <Badge
        pos={{ top:6, left:6 }}
        bg="rgba(15,25,35,.9)" border="rgba(201,168,76,.3)" textColor={GOLD_LT}
        animDelay="3.2s" floatAnim="bFloat0 3.5s ease-in-out 3.65s infinite"
        icon={
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <rect x=".5" y=".5" width="12" height="12" stroke="rgba(42,143,212,.9)" strokeWidth="1.1"/>
            <line x1=".5" y1="12.5" x2="12.5" y2=".5" stroke="rgba(42,143,212,.9)" strokeWidth="1.1"/>
          </svg>
        }
        iconBg="rgba(27,108,168,0.2)" title="AutoCAD 2D/3D" subtitle="Expert · DWG"
      />

      {/* Badge 3 — Génie Civil BTP (top-right) */}
      <Badge
        pos={{ top:6, right:6 }}
        bg="rgba(15,25,35,.9)" border="rgba(42,143,212,.4)" textColor={CYAN_LT}
        animDelay="3.8s" floatAnim="bFloat2 3.2s ease-in-out 4.25s infinite"
        icon={
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <rect x="1" y="5" width="11" height="7" stroke="rgba(42,143,212,.9)" strokeWidth="1.1"/>
            <line x1="1" y1="5" x2="6.5" y2="1" stroke="rgba(42,143,212,.9)" strokeWidth="1.1"/>
            <line x1="12" y1="5" x2="6.5" y2="1" stroke="rgba(42,143,212,.9)" strokeWidth="1.1"/>
            <rect x="4.5" y="7.5" width="4" height="4.5" fill="none" stroke="rgba(42,143,212,.7)" strokeWidth=".9"/>
          </svg>
        }
        iconBg="rgba(27,108,168,0.18)" title="Génie Civil BTP" subtitle="BAEL · RPS 2000"
      />
    </div>
  );
}

function TbBtn({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width:16, height:16, borderRadius:2, background:"rgba(42,143,212,.15)", border:"1px solid rgba(42,143,212,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      {children}
    </div>
  );
}

interface BadgeProps {
  pos: { top?: number; bottom?: number; left?: number; right?: number };
  bg: string; border: string; textColor: string; subColor?: string;
  animDelay: string; floatAnim: string;
  icon: React.ReactNode; iconBg: string; title: string; subtitle: string;
}
function Badge({ pos, bg, border, textColor, subColor, animDelay, floatAnim, icon, iconBg, title, subtitle }: BadgeProps) {
  return (
    <div style={{
      position:"absolute", zIndex:7, ...pos,
      display:"flex", alignItems:"center", gap:7,
      padding:"6px 10px", borderRadius:8,
      backdropFilter:"blur(10px)",
      background:bg, border:`1px solid ${border}`,
      whiteSpace:"nowrap", opacity:0,
      animation:`bounceIn .45s cubic-bezier(.34,1.56,.64,1) ${animDelay} forwards, ${floatAnim}`,
    }}>
      <div style={{ width:24, height:24, borderRadius:5, background:iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily:"'Raleway', sans-serif", fontWeight:700, fontSize:9.5, letterSpacing:".03em", lineHeight:1.15, color:textColor }}>{title}</div>
        <div style={{ fontFamily:JB, fontSize:7.5, marginTop:1, opacity:.65, color:subColor ?? textColor }}>{subtitle}</div>
      </div>
    </div>
  );
}

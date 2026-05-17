const workouts = [
  {
    day: "Monday", title: "Glutes + Abs Foundation", subtitle: "Quiet strength. Learn the movements and build the base.", minutes: 35,
    blocks: [
      {name:"Warm-up", note:"Move slowly. This wakes up hips and core.", exercises:[
        ex("Hip circles", "1 min each direction", "Bodyweight", "Keep ribs down and move from the hip, not your lower back.", ["Stand tall with hands on hips.","Draw slow circles with one knee or with your hips.","Keep the movement controlled and quiet."], ["Do not arch your lower back.","Do not rush."]),
        ex("Glute bridge", "2 sets x 12", "Bodyweight", "Squeeze your butt hard at the top.", ["Lie on your back, knees bent, feet hip-width apart.","Brace your stomach like someone is about to poke you.","Drive through heels and lift hips until shoulders, hips and knees line up.","Pause 1 second, lower slowly."], ["Do not push through your toes.","Do not over-arch your back."])
      ]},
      {name:"Strength", note:"Rest 45–60 seconds between sets.", exercises:[
        ex("Dumbbell Romanian deadlift", "3 sets x 10", "Two 15 lb dumbbells", "Your main glute/hamstring builder.", ["Stand tall holding dumbbells in front of thighs.","Soften knees slightly.","Push hips back like closing a car door with your butt.","Lower dumbbells down your thighs until you feel hamstrings stretch.","Drive hips forward and squeeze glutes to stand."], ["Back stays flat.","Dumbbells stay close to legs.","This is not a squat; hips go back."]),
        ex("Dumbbell glute bridge", "3 sets x 12", "One dumbbell on hips", "Add load to make the glutes work harder.", ["Place dumbbell across hips with a towel under it if needed.","Feet flat, knees bent.","Lift hips, squeeze glutes hard, pause 2 seconds.","Lower with control."], ["Keep chin tucked.","Ribs stay down."]),
        ex("Dead bug", "3 sets x 8/side", "Bodyweight", "Core control without neck strain.", ["Lie on back, arms up, knees over hips.","Flatten lower back gently into floor.","Lower opposite arm and leg slowly.","Return and switch sides."], ["Only go as low as you can without back arching."])
      ]},
      {name:"Finisher", note:"Slow burn, no noise.", exercises:[ex("Frog pumps", "2 sets x 25", "Bodyweight", "Glute burn without jumping.", ["Lie on back, soles of feet together, knees open.","Tuck pelvis slightly.","Pump hips up and down in a small range.","Squeeze glutes every rep."], ["Keep movement small and controlled."])]}
    ]
  },
  {
    day:"Tuesday", title:"Upper Body Tone: Chest + Arms", subtitle:"Pushups, dumbbells, arms and posture.", minutes:35,
    blocks:[
      {name:"Warm-up", note:"Prepare shoulders and wrists.", exercises:[
        ex("Arm circles", "1 min forward + 1 min backward", "Bodyweight", "Gentle shoulder prep.", ["Stand tall, arms out.","Make small circles, then medium circles.","Keep shoulders away from ears."], ["No shrugging."]),
        ex("Incline pushup practice", "2 sets x 8", "Hands on counter/couch", "Build chest strength safely.", ["Hands slightly wider than shoulders.","Body straight from head to heels.","Lower chest toward surface.","Press away and lock in your core."], ["Do not let hips sag."])
      ]},
      {name:"Strength", note:"Rest 45–75 seconds.", exercises:[
        ex("Incline or knee pushup", "3 sets x 8–12", "Bodyweight", "Choose the version that keeps good form.", ["Hands slightly wider than shoulders.","Brace abs and squeeze glutes.","Lower slowly for 2 seconds.","Push the floor/counter away."], ["Stop with 1–2 reps left in the tank."]),
        ex("Dumbbell floor press", "3 sets x 12", "Two 15 lb dumbbells", "Chest and triceps without a bench.", ["Lie on floor, knees bent.","Hold dumbbells above chest, palms facing forward or slightly inward.","Lower elbows to floor at about 45 degrees from body.","Press up and squeeze chest."], ["Do not flare elbows straight out."]),
        ex("Dumbbell biceps curl", "3 sets x 12", "Two 15 lb dumbbells", "Arms. Slow reps beat swinging.", ["Stand tall with elbows close to ribs.","Curl dumbbells up without moving upper arms.","Squeeze biceps at top.","Lower for 3 seconds."], ["No hip swing.","Wrists stay straight."]),
        ex("Overhead triceps extension", "3 sets x 10", "One dumbbell", "Back of arms.", ["Hold one dumbbell with both hands overhead.","Keep elbows pointing forward.","Lower dumbbell behind head.","Extend arms and squeeze triceps."], ["Ribs down.","Do not let elbows flare wide."])
      ]}
    ]
  },
  {
    day:"Wednesday", title:"Recovery + Core + Mobility", subtitle:"Still productive. Your glutes grow when you recover.", minutes:30,
    blocks:[
      {name:"Quiet recovery circuit", note:"Move gently. This should feel like a reset.", exercises:[
        ex("Cat-cow", "2 min", "Bodyweight", "Spine mobility.", ["On hands and knees.","Round your back slowly.","Then gently arch and lift chest."], ["Move pain-free only."]),
        ex("Bird dog", "3 sets x 8/side", "Bodyweight", "Core and glute stability.", ["On hands and knees.","Extend opposite arm and leg.","Keep hips square to floor.","Pause, then return."], ["Do not rotate your hips."]),
        ex("Side plank from knees", "3 x 20–30 sec/side", "Bodyweight", "Obliques and waist control.", ["Lie on side, elbow under shoulder.","Bend knees.","Lift hips and make a straight line from shoulder to knees.","Breathe slowly."], ["Do not sink into shoulder."]),
        ex("Seated hamstring stretch", "2 x 45 sec/side", "Bodyweight", "Keeps hips moving well.", ["Sit with one leg extended.","Hinge from hips until stretch is felt.","Keep back long."], ["Do not force it."])
      ]}
    ]
  },
  {
    day:"Thursday", title:"Glutes + Legs Shape", subtitle:"More lower-body volume for visible glute results.", minutes:40,
    blocks:[
      {name:"Warm-up", note:"Prime glutes before squats and lunges.", exercises:[
        ex("Bodyweight squat", "2 sets x 10", "Bodyweight", "Practice clean mechanics.", ["Feet shoulder-width.","Sit hips back and down.","Keep chest proud.","Stand by pushing floor away."], ["Knees track over toes."]),
        ex("Standing glute kickback", "2 sets x 12/side", "Bodyweight", "Wake up glutes.", ["Hold wall lightly.","Brace core.","Kick one leg back without arching back.","Squeeze glute, lower slowly."], ["Small controlled range is fine."])
      ]},
      {name:"Strength", note:"Rest 60 seconds between sets.", exercises:[
        ex("Goblet squat", "3 sets x 12", "One dumbbell", "Legs and glutes.", ["Hold dumbbell at chest.","Feet just outside hips.","Lower until thighs are near parallel or comfortable.","Drive through full foot to stand."], ["Do not collapse knees inward."]),
        ex("Reverse lunge", "3 sets x 8/side", "Bodyweight or dumbbells", "Quiet lunge that is knee-friendly.", ["Stand tall.","Step one foot back softly.","Lower until both knees bend.","Push through front heel to stand."], ["Keep torso tall.","Step quietly."]),
        ex("Single-leg glute bridge", "3 sets x 8/side", "Bodyweight", "Glute isolation.", ["Lie on back, one foot planted, other leg bent or straight.","Brace abs.","Lift hips using planted leg.","Pause and lower slowly."], ["Keep hips level."]),
        ex("Plank", "3 x 25–40 sec", "Bodyweight", "Core stiffness and posture.", ["Elbows under shoulders.","Squeeze glutes and abs.","Keep body straight.","Breathe shallow and controlled."], ["Do not let hips sag."])
      ]}
    ]
  },
  {
    day:"Friday", title:"Upper Body + Abs", subtitle:"Chest, arms, shoulders, and tighter core.", minutes:35,
    blocks:[
      {name:"Strength", note:"Controlled reps. No rushing.", exercises:[
        ex("Dumbbell shoulder press", "3 sets x 10", "Two 15 lb dumbbells", "Shoulders and arms.", ["Stand or sit tall.","Dumbbells at shoulder height.","Brace abs.","Press overhead without leaning back.","Lower slowly."], ["Ribs down.","Stop if shoulder pinches."]),
        ex("Dumbbell row", "3 sets x 12/side", "One 15 lb dumbbell", "Back and arm tone for posture.", ["Hinge hips back, one hand on thigh or couch.","Let dumbbell hang under shoulder.","Pull elbow toward back pocket.","Lower slowly."], ["Do not twist torso."]),
        ex("Close-grip floor press", "3 sets x 10", "Two dumbbells", "Chest and triceps.", ["Lie on floor.","Hold dumbbells above chest, palms facing each other.","Keep elbows closer to ribs.","Lower to floor and press up."], ["Wrists straight."]),
        ex("Slow mountain climber", "3 sets x 10/side", "Bodyweight", "Quiet abs, no jumping.", ["Start in high plank.","Bring one knee toward chest slowly.","Return foot quietly.","Alternate sides."], ["Hips stay still."])
      ]}
    ]
  },
  {
    day:"Saturday", title:"Glute Pump + Full Body", subtitle:"Higher-rep tone day. You should feel this.", minutes:35,
    blocks:[
      {name:"Circuit", note:"Complete 3 rounds. Rest 60 seconds between rounds.", exercises:[
        ex("Dumbbell sumo squat", "12 reps", "One dumbbell", "Glutes and inner thighs.", ["Feet wide, toes slightly out.","Hold dumbbell vertically.","Sit down between legs.","Stand and squeeze glutes."], ["Knees follow toes."]),
        ex("Romanian deadlift", "12 reps", "Two dumbbells", "Posterior chain.", ["Push hips back.","Keep dumbbells close.","Feel hamstrings stretch.","Stand by squeezing glutes."], ["Flat back."]),
        ex("Pushup", "8–12 reps", "Incline/knees/full", "Chest and arms.", ["Choose your best version.","Lower slowly.","Press strong."], ["Perfect form over harder version."]),
        ex("Heel taps", "12/side", "Bodyweight", "Abs without strain.", ["Lie on back, knees bent.","Crunch shoulders slightly off floor.","Reach hand toward same-side heel.","Alternate sides."], ["Keep neck relaxed."]),
        ex("Glute bridge hold", "30–45 sec", "Bodyweight or dumbbell", "Final glute burn.", ["Lift into bridge.","Hold hips high.","Squeeze glutes continuously."], ["Do not arch lower back."])
      ]}
    ]
  },
  {
    day:"Sunday", title:"Rest + Walk + Reset", subtitle:"Recovery day. This helps results show up.", minutes:20,
    blocks:[
      {name:"Recovery targets", note:"No hard workout today.", exercises:[
        ex("Easy walk", "20–40 min", "Optional", "Low stress fat-loss and recovery support.", ["Walk at a pace where you can talk.","Keep shoulders relaxed.","This should not feel like punishment."], ["Skip if exhausted."]),
        ex("Glute stretch", "2 x 45 sec/side", "Bodyweight", "Relax hips.", ["Lie on back.","Cross ankle over opposite knee.","Pull thigh toward chest until stretch is felt."], ["No pain."])
      ]}
    ]
  }
];

function ex(name, sets, equipment, why, steps, cues){return {name, sets, equipment, why, steps, cues};}

const todayIndex = (new Date().getDay()+6)%7;
let selectedDay = todayIndex;
let timerSeconds = workouts[selectedDay].minutes*60;
let timerId = null;

const qs = s => document.querySelector(s);
const qsa = s => [...document.querySelectorAll(s)];
const key = suffix => `builtByJosh_${suffix}`;

function render(){
  const w = workouts[selectedDay];
  qs('#todayTitle').textContent = `${w.day}: ${w.title}`;
  qs('#todaySubtitle').textContent = `${w.subtitle} Approx. ${w.minutes} minutes.`;
  timerSeconds = timerId ? timerSeconds : w.minutes*60;
  updateTimer();
  renderWorkout(w);
  renderWeekPlan();
  renderLog();
  updateProgress();
}

function renderWorkout(w){
  const done = JSON.parse(localStorage.getItem(key(`done_${w.day}`)) || '{}');
  qs('#workoutBlocks').innerHTML = w.blocks.map((b, bi)=>`
    <div class="card">
      <div class="block-title"><div><p class="eyebrow">${b.name}</p><h2>${b.note}</h2></div></div>
      ${b.exercises.map((e, ei)=>{
        const id = `${w.day}_${bi}_${ei}`;
        return `<div class="exercise">
          <div class="exercise-head">
            <input type="checkbox" data-done="${id}" ${done[id]?'checked':''} aria-label="Mark ${e.name} complete" />
            <div>
              <h3>${e.name}</h3>
              <p class="muted">${e.why}</p>
              <div class="rx"><span class="pill">${e.sets}</span><span class="pill">${e.equipment}</span></div>
            </div>
          </div>
          <details class="details" open>
            <summary>How to do it</summary>
            <ol>${e.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
            <ul>${e.cues.map(s=>`<li><strong>Coach cue:</strong> ${s}</li>`).join('')}</ul>
          </details>
        </div>`
      }).join('')}
    </div>`).join('');
  qsa('[data-done]').forEach(cb=>cb.addEventListener('change', saveDone));
}

function renderWeekPlan(){
  qs('#weekPlan').innerHTML = workouts.map((w,i)=>`<button class="day-card" data-day="${i}">
    <p class="eyebrow">${w.day}</p><h3>${w.title}</h3><p class="muted">${w.minutes} min</p>
  </button>`).join('');
  qsa('[data-day]').forEach(btn=>btn.addEventListener('click',()=>{selectedDay=Number(btn.dataset.day); clearInterval(timerId); timerId=null; render(); showTab('workout');}));
}

function saveDone(e){
  const w = workouts[selectedDay];
  const done = JSON.parse(localStorage.getItem(key(`done_${w.day}`)) || '{}');
  done[e.target.dataset.done] = e.target.checked;
  localStorage.setItem(key(`done_${w.day}`), JSON.stringify(done));
  updateProgress();
}

function updateProgress(){
  const boxes = qsa('[data-done]');
  const checked = boxes.filter(b=>b.checked).length;
  const pct = boxes.length ? Math.round(checked/boxes.length*100) : 0;
  qs('#progressPct').textContent = `${pct}%`;
}

function updateTimer(){
  const m = String(Math.floor(timerSeconds/60)).padStart(2,'0');
  const s = String(timerSeconds%60).padStart(2,'0');
  qs('#timerDisplay').textContent = `${m}:${s}`;
}

function showTab(tab){
  qsa('.tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  qsa('.panel').forEach(p=>p.classList.toggle('active', p.id===tab));
}

qsa('.tab').forEach(b=>b.addEventListener('click',()=>showTab(b.dataset.tab)));
qs('#startTimer').addEventListener('click',()=>{ if(timerId) return; timerId=setInterval(()=>{timerSeconds=Math.max(0,timerSeconds-1); updateTimer(); if(timerSeconds===0) clearInterval(timerId);},1000); });
qs('#pauseTimer').addEventListener('click',()=>{clearInterval(timerId); timerId=null;});
qs('#resetTimer').addEventListener('click',()=>{clearInterval(timerId); timerId=null; timerSeconds=workouts[selectedDay].minutes*60; updateTimer();});

qs('#saveMetrics').addEventListener('click',()=>{
  const entry = {date:new Date().toLocaleDateString(), weight:qs('#bodyWeight').value, waist:qs('#waist').value, hips:qs('#hips').value, protein:qs('#protein').value, steps:qs('#steps').value, sleep:qs('#sleep').value};
  const log = JSON.parse(localStorage.getItem(key('metrics')) || '[]');
  log.unshift(entry); localStorage.setItem(key('metrics'), JSON.stringify(log.slice(0,60)));
  ['bodyWeight','waist','hips','protein','steps','sleep'].forEach(id=>qs('#'+id).value='');
  renderLog();
});
function renderLog(){
  const log = JSON.parse(localStorage.getItem(key('metrics')) || '[]');
  qs('#metricsLog').innerHTML = log.length ? log.map(e=>`<div class="log-entry"><strong>${e.date}</strong><br>Weight: ${e.weight||'—'} | Waist: ${e.waist||'—'} | Hips: ${e.hips||'—'} | Protein: ${e.protein||'—'}g | Steps: ${e.steps||'—'} | Sleep: ${e.sleep||'—'}h</div>`).join('') : '<p class="muted">No check-ins yet. Start today. Measurements once per week is enough; protein can be daily.</p>';
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); deferredPrompt=e; qs('#installBtn').classList.remove('hidden'); });
qs('#installBtn').addEventListener('click', async()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); deferredPrompt=null; qs('#installBtn').classList.add('hidden'); });
if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js')); }
render();

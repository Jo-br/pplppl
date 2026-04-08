/* ============================================
   PPLPPL Tracker — Application
   ============================================ */

// ---- Exercise Name Mapping (Swedish → English) ----

const EXERCISE_MAP = {
  'knäböj': 'Squat',
  'marklyft': 'Deadlift',
  'bänkpress': 'Bench Press',
  'press': 'Overhead Press',
  'axelpress': 'Overhead Press',
  'uppåtlutande bänkpress': 'Incline Press',
  'smalbänk': 'Close-Grip Bench',
  'sidolyft': 'Lateral Raise',
  'latsdrag i maskin': 'Lat Pulldown',
  'latsdrag': 'Lat Pulldown',
  'skivstångsrodd': 'Barbell Row',
  'face pull': 'Face Pull',
  'skivstångscurl': 'Barbell Curl',
  'benpress': 'Leg Press',
  'liggande lårcurl': 'Leg Curl',
  'benspark': 'Leg Extension',
  'stående vadpress': 'Standing Calf Raise',
  'sittande vadpress': 'Seated Calf Raise',
  'höftlyft': 'Hip Thrust',
  'bulgariska utfallssteg': 'Bulgarian Split Squat',
  'rumänsk marklyft': 'Romanian Deadlift',
  'hammarcurl': 'Hammer Curl',
  'kabeldrag nedåt': 'Tricep Pushdown',
  'tricepspress över huvud': 'Overhead Tricep Extension',
  'bröstmåskin': 'Pec Deck',
  'bröstmaskin': 'Pec Deck',
};

// ---- Workout Templates ----

const WORKOUTS = {
  'Push A': {
    type: 'Strength',
    exercises: [
      { name: 'Bench Press', sets: 4, reps: '4-6', rest: 180 },
      { name: 'Overhead Press', sets: 3, reps: '5-7', rest: 150 },
      { name: 'Incline Press', sets: 3, reps: '8-10', rest: 120 },
      { name: 'Lateral Raise', sets: 3, reps: '12-15', rest: 90 },
      { name: 'Close-Grip Bench', sets: 3, reps: '6-8', rest: 120 },
    ]
  },
  'Pull A': {
    type: 'Strength',
    exercises: [
      { name: 'Deadlift', sets: 4, reps: '4-5', rest: 240 },
      { name: 'Lat Pulldown', sets: 4, reps: '5-7', rest: 150 },
      { name: 'Barbell Row', sets: 3, reps: '6-8', rest: 150 },
      { name: 'Face Pull', sets: 3, reps: '15-20', rest: 60 },
      { name: 'Barbell Curl', sets: 3, reps: '6-8', rest: 90 },
    ]
  },
  'Legs A': {
    type: 'Strength',
    exercises: [
      { name: 'Squat', sets: 4, reps: '4-6', rest: 180 },
      { name: 'Leg Press', sets: 3, reps: '8-10', rest: 120 },
      { name: 'Leg Curl', sets: 3, reps: '8-10', rest: 90 },
      { name: 'Leg Extension', sets: 3, reps: '10-12', rest: 90 },
      { name: 'Standing Calf Raise', sets: 4, reps: '10-12', rest: 60 },
    ]
  },
  'Push B': {
    type: 'Hypertrophy',
    exercises: [
      { name: 'DB Bench', sets: 3, reps: '10-12', rest: 120 },
      { name: 'Incline Press', sets: 3, reps: '10-12', rest: 120 },
      { name: 'Lateral Raise', sets: 3, reps: '12-15', rest: 60 },
      { name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: 60 },
      { name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: 60 },
      { name: 'Pec Deck', sets: 3, reps: '12-15', rest: 60 },
    ]
  },
  'Pull B': {
    type: 'Hypertrophy',
    exercises: [
      { name: 'Cable Row', sets: 3, reps: '10-12', rest: 120 },
      { name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: 120 },
      { name: 'DB Row', sets: 3, reps: '10-12', rest: 120 },
      { name: 'Face Pull', sets: 3, reps: '15-20', rest: 60 },
      { name: 'Hammer Curl', sets: 3, reps: '10-12', rest: 60 },
      { name: 'Incline DB Curl', sets: 3, reps: '12-15', rest: 60 },
    ]
  },
  'Legs B': {
    type: 'Hypertrophy',
    exercises: [
      { name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: 150 },
      { name: 'Bulgarian Split Squat', sets: 3, reps: '10-12', rest: 120 },
      { name: 'Leg Curl', sets: 3, reps: '10-12', rest: 90 },
      { name: 'Hip Thrust', sets: 3, reps: '10-12', rest: 120 },
      { name: 'Seated Calf Raise', sets: 4, reps: '12-15', rest: 60 },
    ]
  }
};

// ---- Exercise Categories ----

const COMPOUND_HEAVY = ['Squat', 'Deadlift', 'Bench Press'];
const COMPOUND_MODERATE = ['Barbell Row', 'Overhead Press', 'Incline Press', 'Close-Grip Bench', 'Romanian Deadlift', 'Hip Thrust', 'Bulgarian Split Squat', 'DB Bench'];
const ACCESSORY = ['Lat Pulldown', 'Leg Press', 'Leg Curl', 'Leg Extension', 'Barbell Curl', 'Hammer Curl', 'Tricep Pushdown', 'Overhead Tricep Extension', 'Cable Row', 'DB Row', 'Incline DB Curl', 'Pec Deck'];
const ISOLATION = ['Lateral Raise', 'Face Pull', 'Standing Calf Raise', 'Seated Calf Raise'];

// Muscle group mapping for volume tracking
const MUSCLE_GROUPS = {
  'Bench Press': ['Chest', 'Triceps', 'Front Delts'],
  'Incline Press': ['Chest', 'Triceps', 'Front Delts'],
  'DB Bench': ['Chest', 'Triceps', 'Front Delts'],
  'Close-Grip Bench': ['Triceps', 'Chest'],
  'Overhead Press': ['Front Delts', 'Triceps'],
  'Lateral Raise': ['Side Delts'],
  'Pec Deck': ['Chest'],
  'Tricep Pushdown': ['Triceps'],
  'Overhead Tricep Extension': ['Triceps'],
  'Deadlift': ['Back', 'Hamstrings', 'Glutes'],
  'Romanian Deadlift': ['Hamstrings', 'Glutes', 'Back'],
  'Lat Pulldown': ['Back', 'Biceps'],
  'Barbell Row': ['Back', 'Biceps'],
  'Cable Row': ['Back', 'Biceps'],
  'DB Row': ['Back', 'Biceps'],
  'Face Pull': ['Rear Delts'],
  'Barbell Curl': ['Biceps'],
  'Hammer Curl': ['Biceps'],
  'Incline DB Curl': ['Biceps'],
  'Squat': ['Quads', 'Glutes'],
  'Leg Press': ['Quads', 'Glutes'],
  'Bulgarian Split Squat': ['Quads', 'Glutes'],
  'Leg Curl': ['Hamstrings'],
  'Leg Extension': ['Quads'],
  'Hip Thrust': ['Glutes', 'Hamstrings'],
  'Standing Calf Raise': ['Calves'],
  'Seated Calf Raise': ['Calves'],
};

// Lower body exercises for +5kg rule
const LOWER_BODY = ['Squat', 'Deadlift', 'Leg Press', 'Romanian Deadlift', 'Bulgarian Split Squat', 'Hip Thrust', 'Leg Curl', 'Leg Extension', 'Standing Calf Raise', 'Seated Calf Raise'];

// Key lifts for progress charts
const KEY_LIFTS = ['Bench Press', 'Squat', 'Deadlift', 'Overhead Press'];

// ---- Data Layer ----

const STORAGE_KEY = 'pplppl_data';

function getDefaultData() {
  return {
    sessions: [],
    bodyweight: [{ date: '2026-04-06', weight: 91 }],
    settings: {
      height: 185,
      cycleStartDate: '2026-03-23',
      currentWeek: 1,
    }
  };
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  const data = getDefaultData();
  prePopulateSessions(data);
  saveData(data);
  return data;
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function prePopulateSessions(data) {
  data.sessions = [
    {
      id: 'pre-1',
      date: '2026-04-06',
      timeStart: '09:00',
      timeEnd: '10:15',
      workoutType: 'Push A',
      exercises: [
        { name: 'Bench Press', allSets: [{r:10,w:20},{r:8,w:40},{r:5,w:55},{r:3,w:67.5},{r:6,w:77},{r:6,w:77},{r:6,w:77},{r:6,w:77}], workingSets: [{r:6,w:77},{r:6,w:77},{r:6,w:77},{r:6,w:77}] },
        { name: 'Overhead Press', allSets: [{r:10,w:20},{r:7,w:35},{r:7,w:35}], workingSets: [{r:7,w:35},{r:7,w:35}] },
        { name: 'Incline Press', allSets: [{r:8,w:20},{r:6,w:35},{r:8,w:47.5},{r:10,w:47.5}], workingSets: [{r:8,w:47.5},{r:10,w:47.5}] },
        { name: 'Lateral Raise', allSets: [{r:15,w:5},{r:15,w:5},{r:15,w:5}], workingSets: [{r:15,w:5},{r:15,w:5},{r:15,w:5}] },
        { name: 'Close-Grip Bench', allSets: [{r:8,w:30},{r:8,w:50},{r:8,w:50},{r:8,w:50}], workingSets: [{r:8,w:50},{r:8,w:50},{r:8,w:50}] },
      ],
      notes: ''
    },
    {
      id: 'pre-2',
      date: '2026-04-07',
      timeStart: '09:15',
      timeEnd: '10:30',
      workoutType: 'Pull A',
      exercises: [
        { name: 'Deadlift', allSets: [{r:10,w:60},{r:5,w:90},{r:3,w:120},{r:5,w:140},{r:5,w:140},{r:4,w:140},{r:4,w:140}], workingSets: [{r:5,w:140},{r:5,w:140},{r:4,w:140},{r:4,w:140}] },
        { name: 'Lat Pulldown', allSets: [{r:10,w:40},{r:7,w:70},{r:7,w:70},{r:7,w:70},{r:7,w:70}], workingSets: [{r:7,w:70},{r:7,w:70},{r:7,w:70},{r:7,w:70}] },
        { name: 'Barbell Row', allSets: [{r:8,w:40},{r:8,w:70},{r:8,w:70},{r:8,w:70}], workingSets: [{r:8,w:70},{r:8,w:70},{r:8,w:70}] },
        { name: 'Face Pull', allSets: [{r:20,w:17.5},{r:20,w:17.5},{r:20,w:17.5}], workingSets: [{r:20,w:17.5},{r:20,w:17.5},{r:20,w:17.5}] },
        { name: 'Barbell Curl', allSets: [{r:8,w:15},{r:8,w:25},{r:8,w:25},{r:8,w:25}], workingSets: [{r:8,w:25},{r:8,w:25},{r:8,w:25}] },
      ],
      notes: ''
    },
    {
      id: 'pre-3',
      date: '2026-04-08',
      timeStart: '09:27',
      timeEnd: '10:34',
      workoutType: 'Legs A',
      exercises: [
        { name: 'Squat', allSets: [{r:10,w:20},{r:8,w:50},{r:5,w:70},{r:3,w:90},{r:6,w:100},{r:6,w:100},{r:6,w:100},{r:6,w:100}], workingSets: [{r:6,w:100},{r:6,w:100},{r:6,w:100},{r:6,w:100}] },
        { name: 'Leg Press', allSets: [{r:10,w:80},{r:8,w:110},{r:10,w:150},{r:10,w:150},{r:10,w:150}], workingSets: [{r:10,w:150},{r:10,w:150},{r:10,w:150}] },
        { name: 'Leg Curl', allSets: [{r:10,w:30},{r:10,w:47},{r:8,w:47}], workingSets: [{r:10,w:47},{r:8,w:47}] },
        { name: 'Leg Extension', allSets: [{r:10,w:40},{r:12,w:68},{r:12,w:68},{r:11,w:68}], workingSets: [{r:12,w:68},{r:12,w:68},{r:11,w:68}] },
        { name: 'Standing Calf Raise', allSets: [{r:15,w:60},{r:15,w:60},{r:15,w:60},{r:15,w:60}], workingSets: [{r:15,w:60},{r:15,w:60},{r:15,w:60},{r:15,w:60}] },
      ],
      notes: ''
    }
  ];
}

let APP_DATA = loadData();

// ---- Utilities ----

function roundTo2_5(w) {
  return Math.round(w / 2.5) * 2.5;
}

function epley1RM(w, r) {
  if (r <= 0) return w;
  if (r === 1) return w;
  return w * (1 + r / 30);
}

function brzycki1RM(w, r) {
  if (r <= 0) return w;
  if (r === 1) return w;
  if (r >= 37) return w * 36;
  return w * (36 / (37 - r));
}

function lombardi1RM(w, r) {
  if (r <= 0) return w;
  return w * Math.pow(r, 0.1);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

function daysBetween(d1, d2) {
  const a = new Date(d1 + 'T00:00:00');
  const b = new Date(d2 + 'T00:00:00');
  return Math.round((b - a) / 86400000);
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.classList.add('hidden'), 300);
  }, 2500);
}

function openModal(html) {
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-body').innerHTML = html;
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => overlay.classList.add('show'));
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('show');
  setTimeout(() => overlay.classList.add('hidden'), 200);
}

// ---- Parser ----

function translateExercise(swedish) {
  const lower = swedish.toLowerCase().trim();
  // Strip PB/ÅB markers
  const cleaned = lower.replace(/\s*\(?(pb|åb)\)?/gi, '').trim();
  if (EXERCISE_MAP[cleaned]) return EXERCISE_MAP[cleaned];
  // Partial match
  for (const [key, val] of Object.entries(EXERCISE_MAP)) {
    if (cleaned.includes(key) || key.includes(cleaned)) return val;
  }
  // Title-case the original
  return swedish.trim().replace(/\b\w/g, c => c.toUpperCase());
}

function parseSets(setsStr) {
  // Format: "10 x 20, 8 x 50, ..."
  // Strip PB/ÅB markers
  const cleaned = setsStr.replace(/\(?(pb|åb)\)?/gi, '').trim();
  const parts = cleaned.split(',');
  return parts.map(p => {
    const match = p.trim().match(/(\d+)\s*[x×]\s*([\d.,]+)/i);
    if (!match) return null;
    return {
      r: parseInt(match[1]),
      w: parseFloat(match[2].replace(',', '.'))
    };
  }).filter(Boolean);
}

function detectWorkingSets(sets) {
  if (sets.length <= 1) return sets;

  // Find the max weight
  const maxWeight = Math.max(...sets.map(s => s.w));

  // Working sets are the cluster at max weight
  // Count from the end backward while weight stays at max
  const workingSets = [];
  let foundWorking = false;

  for (let i = sets.length - 1; i >= 0; i--) {
    if (sets[i].w >= maxWeight * 0.95) {
      workingSets.unshift(sets[i]);
      foundWorking = true;
    } else if (foundWorking) {
      break;
    }
  }

  // If all sets are same weight (like lateral raises), they're all working sets
  if (workingSets.length === 0) return sets;

  // But also check: if there's only 1 set at max and it's the last one,
  // and the second-to-last is close, include the plateau
  if (workingSets.length === sets.length) return sets;

  return workingSets;
}

function detectWorkoutType(exercises) {
  const names = exercises.map(e => e.name);

  // Score each workout type
  let bestMatch = null;
  let bestScore = 0;

  for (const [wName, wDef] of Object.entries(WORKOUTS)) {
    const templateNames = wDef.exercises.map(e => e.name);
    let score = 0;
    for (const n of names) {
      if (templateNames.includes(n)) score++;
    }
    // Normalize by template size
    const normalized = score / Math.max(templateNames.length, names.length);
    if (normalized > bestScore) {
      bestScore = normalized;
      bestMatch = wName;
    }
  }

  return bestScore > 0.3 ? bestMatch : 'Custom';
}

function parseWorkoutLog(text) {
  const lines = text.trim().split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return null;

  let date = todayStr();
  let timeStart = '';
  let timeEnd = '';
  const exercises = [];

  for (const line of lines) {
    // Date/time line: "2026-04-08 09:27 - 10:34"
    const dateMatch = line.match(/^(\d{4}-\d{2}-\d{2})\s+(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/);
    if (dateMatch) {
      date = dateMatch[1];
      timeStart = dateMatch[2];
      timeEnd = dateMatch[3];
      continue;
    }

    // Skip "Träningstid" line
    if (line.toLowerCase().startsWith('träningstid')) continue;

    // Exercise line: "Name: sets"
    const exMatch = line.match(/^(.+?):\s*(.+)$/);
    if (exMatch) {
      const name = translateExercise(exMatch[1]);
      const allSets = parseSets(exMatch[2]);
      if (allSets.length > 0) {
        const workingSets = detectWorkingSets(allSets);
        exercises.push({ name, allSets, workingSets });
      }
    }
  }

  if (exercises.length === 0) return null;

  const workoutType = detectWorkoutType(exercises);

  return {
    id: generateId(),
    date,
    timeStart,
    timeEnd,
    workoutType,
    exercises,
    notes: ''
  };
}

// ---- Recommendations ----

function getRepRange(exerciseName, workoutType) {
  const isADay = workoutType.includes('A');
  if (isADay) {
    if (['Bench Press', 'Squat', 'Deadlift'].includes(exerciseName)) return [4, 6];
    if (exerciseName === 'Overhead Press') return [5, 7];
    if (['Barbell Row', 'Close-Grip Bench', 'Barbell Curl', 'Lat Pulldown'].includes(exerciseName)) return [6, 8];
    if (['Leg Press', 'Leg Curl'].includes(exerciseName)) return [8, 10];
    if (['Leg Extension'].includes(exerciseName)) return [10, 12];
    if (['Standing Calf Raise', 'Seated Calf Raise'].includes(exerciseName)) return [10, 12];
    if (['Lateral Raise'].includes(exerciseName)) return [12, 15];
    if (['Face Pull'].includes(exerciseName)) return [15, 20];
  } else {
    if (['Romanian Deadlift'].includes(exerciseName)) return [8, 10];
    if (['DB Bench', 'Incline Press', 'Cable Row', 'Lat Pulldown', 'DB Row', 'Bulgarian Split Squat', 'Leg Curl', 'Hip Thrust', 'Hammer Curl'].includes(exerciseName)) return [10, 12];
    if (['Lateral Raise', 'Tricep Pushdown', 'Overhead Tricep Extension', 'Pec Deck', 'Incline DB Curl', 'Seated Calf Raise'].includes(exerciseName)) return [12, 15];
    if (['Face Pull'].includes(exerciseName)) return [15, 20];
  }
  return [8, 12]; // default
}

function getRecommendation(exercise, workoutType) {
  const ws = exercise.workingSets;
  if (ws.length === 0) return null;

  const [minRep, maxRep] = getRepRange(exercise.name, workoutType);
  const weight = ws[0].w;
  const allHitTop = ws.every(s => s.r >= maxRep);
  const allHitMin = ws.every(s => s.r >= minRep);
  const anyBelow = ws.some(s => s.r < minRep);
  const isLower = LOWER_BODY.includes(exercise.name);
  const increment = isLower ? 5 : 2.5;

  if (allHitTop) {
    return {
      action: 'increase',
      text: `All sets hit ${maxRep} reps — increase to ${roundTo2_5(weight + increment)} kg`,
      newWeight: roundTo2_5(weight + increment)
    };
  } else if (allHitMin && !allHitTop) {
    return {
      action: 'keep',
      text: `In range (${minRep}-${maxRep}) — keep at ${weight} kg`,
      newWeight: weight
    };
  } else if (anyBelow) {
    // Check if most sets hit min
    const belowCount = ws.filter(s => s.r < minRep).length;
    if (belowCount >= ws.length / 2) {
      return {
        action: 'decrease',
        text: `Below range — consider dropping to ${roundTo2_5(weight * 0.9)} kg`,
        newWeight: roundTo2_5(weight * 0.9)
      };
    }
    return {
      action: 'keep',
      text: `Some sets below ${minRep} reps — stay at ${weight} kg`,
      newWeight: weight
    };
  }

  return { action: 'keep', text: `Keep at ${weight} kg`, newWeight: weight };
}

// ---- Warmup Calculator ----

function calculateWarmup(exerciseName, workingWeight) {
  const bar = 20;
  const sets = [];

  if (COMPOUND_HEAVY.includes(exerciseName)) {
    sets.push({ label: 'Bar', weight: bar, reps: 10 });
    sets.push({ label: '~58%', weight: roundTo2_5(workingWeight * 0.58), reps: 6 });
    sets.push({ label: '~80%', weight: roundTo2_5(workingWeight * 0.80), reps: 4 });
    sets.push({ label: '~92%', weight: roundTo2_5(workingWeight * 0.92), reps: 2 });
    sets.push({ label: 'Working', weight: workingWeight, reps: null });
  } else if (COMPOUND_MODERATE.includes(exerciseName)) {
    sets.push({ label: 'Bar', weight: bar, reps: 8 });
    sets.push({ label: '~68%', weight: roundTo2_5(workingWeight * 0.68), reps: 5 });
    sets.push({ label: '~88%', weight: roundTo2_5(workingWeight * 0.88), reps: 3 });
    sets.push({ label: 'Working', weight: workingWeight, reps: null });
  } else if (ACCESSORY.includes(exerciseName)) {
    sets.push({ label: '~65%', weight: roundTo2_5(workingWeight * 0.65), reps: 8 });
    sets.push({ label: 'Working', weight: workingWeight, reps: null });
  } else {
    // Isolation — no warmup needed
    sets.push({ label: 'Working', weight: workingWeight, reps: null });
  }

  // Remove duplicates where warmup weight equals or exceeds working weight
  return sets.filter((s, i) => {
    if (s.label === 'Working') return true;
    return s.weight < workingWeight && s.weight >= bar;
  });
}

// ---- Volume Tracking ----

function getWeekSessions(weekStartDate) {
  const start = new Date(weekStartDate + 'T00:00:00');
  const end = new Date(start);
  end.setDate(end.getDate() + 7);

  return APP_DATA.sessions.filter(s => {
    const d = new Date(s.date + 'T00:00:00');
    return d >= start && d < end;
  });
}

function calculateVolumeForWeek(sessions) {
  const volume = {};
  for (const session of sessions) {
    for (const ex of session.exercises) {
      const groups = MUSCLE_GROUPS[ex.name] || [];
      const sets = ex.workingSets.length;
      for (const g of groups) {
        volume[g] = (volume[g] || 0) + sets;
      }
    }
  }
  return volume;
}

function getCurrentWeekStart() {
  const now = new Date();
  const day = now.getDay();
  const diff = day === 0 ? 6 : day - 1; // Monday = start
  const monday = new Date(now);
  monday.setDate(monday.getDate() - diff);
  return monday.toISOString().slice(0, 10);
}

// ---- Cycle Tracking ----

function getCycleWeek() {
  // Allow manual override, otherwise calculate from start date
  if (APP_DATA.settings.currentWeek) {
    return APP_DATA.settings.currentWeek;
  }
  const start = APP_DATA.settings.cycleStartDate || '2026-03-23';
  const days = daysBetween(start, todayStr());
  if (days < 0) return 1;
  const week = (Math.floor(days / 7) % 4) + 1;
  return week;
}

window.changeWeek = function(delta) {
  let current = getCycleWeek();
  let newWeek = current + delta;
  if (newWeek < 1) newWeek = 4;
  if (newWeek > 4) newWeek = 1;
  APP_DATA.settings.currentWeek = newWeek;
  saveData(APP_DATA);
  renderPage();
  showToast(`Week ${newWeek}${newWeek === 4 ? ' (Deload)' : ''}`);
};

// ---- Streak Calculation ----

function getStreak() {
  const sorted = [...APP_DATA.sessions].sort((a, b) => b.date.localeCompare(a.date));
  if (sorted.length === 0) return 0;

  let streak = 0;
  let checkDate = new Date(todayStr() + 'T00:00:00');

  for (let i = 0; i < 14; i++) {
    const dateStr = checkDate.toISOString().slice(0, 10);
    if (sorted.some(s => s.date === dateStr)) {
      streak++;
    } else if (streak > 0) {
      // Allow rest days — check if gap > 2 days
      const nextDate = new Date(checkDate);
      nextDate.setDate(nextDate.getDate() - 1);
      const nextStr = nextDate.toISOString().slice(0, 10);
      if (!sorted.some(s => s.date === nextStr)) break;
    }
    checkDate.setDate(checkDate.getDate() - 1);
  }
  return streak || sorted.length;
}

function getWeeksTraining() {
  if (APP_DATA.sessions.length === 0) return 0;
  const sorted = [...APP_DATA.sessions].sort((a, b) => a.date.localeCompare(b.date));
  const first = sorted[0].date;
  const days = daysBetween(first, todayStr());
  return Math.max(1, Math.ceil(days / 7));
}

// ---- Chart.js Lazy Load ----

let chartJsLoaded = false;
let chartJsPromise = null;

function loadChartJs() {
  if (chartJsLoaded) return Promise.resolve();
  if (chartJsPromise) return chartJsPromise;
  chartJsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js';
    script.onload = () => { chartJsLoaded = true; resolve(); };
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return chartJsPromise;
}

const chartInstances = {};

function destroyChart(id) {
  if (chartInstances[id]) {
    chartInstances[id].destroy();
    delete chartInstances[id];
  }
}

// ---- Routing ----

let currentPage = 'dashboard';

function navigate(page, params) {
  currentPage = page;
  window._pageParams = params;
  if (!params) {
    window.location.hash = page;
  }
  renderPage();
  updateNav();
  window.scrollTo(0, 0);
}

function updateNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === currentPage);
  });
}

function handleHash() {
  const hash = window.location.hash.slice(1) || 'dashboard';
  const [page, ...rest] = hash.split('/');
  const params = rest.length ? rest.join('/') : undefined;
  currentPage = page;
  window._pageParams = params;
  renderPage();
  updateNav();
}

window.addEventListener('hashchange', handleHash);

// ---- Page Rendering ----

function renderPage() {
  const content = document.getElementById('content');
  // Destroy any existing charts
  Object.keys(chartInstances).forEach(destroyChart);

  switch (currentPage) {
    case 'dashboard': content.innerHTML = renderDashboard(); initDashboardCharts(); break;
    case 'log': content.innerHTML = renderLog(); break;
    case 'progress': content.innerHTML = renderProgress(); initProgressCharts(); break;
    case 'volume': content.innerHTML = renderVolume(); break;
    case 'warmup': content.innerHTML = renderWarmup(); break;
    case 'estimator': content.innerHTML = renderEstimator(); break;
    case 'settings': content.innerHTML = renderSettings(); break;
    case 'session': content.innerHTML = renderSessionDetail(window._pageParams); break;
    case 'recommendations': content.innerHTML = renderRecommendations(window._pageParams); break;
    case 'workout-select': content.innerHTML = renderWorkoutSelect(); break;
    case 'workout-live': content.innerHTML = renderWorkoutLive(); initWorkoutLive(); break;
    default: content.innerHTML = renderDashboard(); break;
  }
}

// ---- Dashboard ----

function renderDashboard() {
  const cycleWeek = getCycleWeek();
  const sessions = APP_DATA.sessions;
  const sorted = [...sessions].sort((a, b) => b.date.localeCompare(a.date));
  const last3 = sorted.slice(0, 3);
  const streak = getStreak();
  const weeksTraining = getWeeksTraining();

  let html = `<div class="animate-in">`;

  // Cycle week
  html += `<div class="card mb-16">
    <div class="card-header">
      <span class="card-title">Training Cycle</span>
      <div style="display:flex;align-items:center;gap:12px">
        <button class="btn btn-sm btn-secondary" onclick="changeWeek(-1)" style="padding:6px 12px;min-height:32px">←</button>
        <span class="card-badge ${cycleWeek === 4 ? 'badge-deload' : 'badge-strength'}">
          Week ${cycleWeek}${cycleWeek === 4 ? ' — Deload' : ''}
        </span>
        <button class="btn btn-sm btn-secondary" onclick="changeWeek(1)" style="padding:6px 12px;min-height:32px">→</button>
      </div>
    </div>
    <div class="week-dots">
      ${[1,2,3,4].map(w => `<div class="week-dot ${w <= cycleWeek ? 'active' : ''} ${w === 4 && cycleWeek === 4 ? 'deload' : ''}"></div>`).join('')}
    </div>
  </div>`;

  // Stats
  html += `<div class="stats-grid animate-in">
    <div class="stat-block">
      <div class="stat-value">${sessions.length}</div>
      <div class="stat-label">Sessions</div>
    </div>
    <div class="stat-block">
      <div class="stat-value">${streak}</div>
      <div class="stat-label">Day Streak</div>
    </div>
    <div class="stat-block">
      <div class="stat-value">${weeksTraining}</div>
      <div class="stat-label">Weeks</div>
    </div>
    <div class="stat-block">
      <div class="stat-value">${APP_DATA.bodyweight.length > 0 ? APP_DATA.bodyweight[APP_DATA.bodyweight.length - 1].weight : '—'}</div>
      <div class="stat-label">Weight (kg)</div>
    </div>
  </div>`;

  // Bodyweight mini chart
  if (APP_DATA.bodyweight.length > 1) {
    html += `<div class="card mb-16 animate-in">
      <div class="card-title mb-8">Body Weight</div>
      <div class="chart-container mini-chart"><canvas id="bw-chart"></canvas></div>
    </div>`;
  }

  // Last sessions
  html += `<div class="section-header animate-in"><h2>Recent Sessions</h2></div>`;

  if (last3.length === 0) {
    html += `<div class="empty-state"><h3>No sessions yet</h3><p class="text-sm">Paste a workout log to get started</p></div>`;
  } else {
    for (const s of last3) {
      const wt = WORKOUTS[s.workoutType];
      const badgeClass = wt ? (wt.type === 'Strength' ? 'badge-strength' : 'badge-hypertrophy') : 'badge-strength';
      const totalVolume = s.exercises.reduce((sum, e) => sum + e.workingSets.reduce((s2, set) => s2 + set.w * set.r, 0), 0);
      html += `<div class="card session-card animate-in" onclick="navigate('session','${s.id}')">
        <div class="card-header">
          <span class="card-title">${s.workoutType}</span>
          <span class="card-badge ${badgeClass}">${wt ? wt.type : 'Custom'}</span>
        </div>
        <div class="session-date">${formatDate(s.date)}${s.timeStart ? ' · ' + s.timeStart + '–' + s.timeEnd : ''}</div>
        <div class="session-exercises">${s.exercises.map(e => e.name).join(' · ')}</div>
        <div class="text-xs text-secondary mt-12">Volume: ${Math.round(totalVolume).toLocaleString()} kg</div>
      </div>`;
    }
  }

  // Quick action buttons
  html += `<div class="mt-24 animate-in btn-group">
    <button class="btn btn-primary" style="flex:1" onclick="navigate('workout-select')">Start Workout</button>
    <button class="btn btn-secondary" style="flex:1" onclick="navigate('log')">Log Past Workout</button>
  </div>`;

  html += `</div>`;
  return html;
}

function initDashboardCharts() {
  if (APP_DATA.bodyweight.length <= 1) return;
  loadChartJs().then(() => {
    const canvas = document.getElementById('bw-chart');
    if (!canvas) return;
    const sorted = [...APP_DATA.bodyweight].sort((a, b) => a.date.localeCompare(b.date));
    destroyChart('bw');
    chartInstances['bw'] = new Chart(canvas, {
      type: 'line',
      data: {
        labels: sorted.map(e => formatDate(e.date)),
        datasets: [{
          data: sorted.map(e => e.weight),
          borderColor: '#1a1a1a',
          backgroundColor: 'rgba(26,26,26,0.05)',
          fill: true,
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: '#1a1a1a',
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { grid: { color: '#e5e2dc' }, ticks: { font: { size: 11 } } }
        }
      }
    });
  });
}

// ---- Log Workout ----

function renderLog() {
  return `<div class="animate-in">
    <h2>Log Workout</h2>
    <p class="text-sm text-secondary mb-16">Paste your Strength Log export below</p>
    <div class="mb-16">
      <label for="log-input">Workout Log</label>
      <textarea id="log-input" placeholder="2026-04-08 09:27 - 10:34
Träningstid: 01h 07m
Knäböj: 10 x 20, 8 x 50, 5 x 70, 3 x 90, 6 x 100, 6 x 100, 6 x 100, 6 x 100
Benpress: 10 x 80, 8 x 110, 10 x 150, 10 x 150, 10 x 150"></textarea>
    </div>
    <button class="btn btn-primary btn-block" onclick="handleParseLog()">Parse & Save</button>
    <div id="parse-result"></div>
  </div>`;
}

window.handleParseLog = function() {
  const input = document.getElementById('log-input').value;
  if (!input.trim()) {
    showToast('Paste a workout log first');
    return;
  }

  const session = parseWorkoutLog(input);
  if (!session) {
    showToast('Could not parse workout log');
    return;
  }

  // Check for duplicate
  const dup = APP_DATA.sessions.find(s => s.date === session.date && s.workoutType === session.workoutType);
  if (dup) {
    if (!confirm(`A ${session.workoutType} session on ${formatDate(session.date)} already exists. Replace it?`)) return;
    APP_DATA.sessions = APP_DATA.sessions.filter(s => s.id !== dup.id);
  }

  APP_DATA.sessions.push(session);
  saveData(APP_DATA);

  // Show parsed summary
  const resultDiv = document.getElementById('parse-result');
  let html = `<div class="card mt-16 parsed-summary">
    <div class="card-header">
      <span class="card-title">${session.workoutType}</span>
      <span class="session-date">${formatDate(session.date)}</span>
    </div>`;

  for (const ex of session.exercises) {
    const warmupCount = ex.allSets.length - ex.workingSets.length;
    html += `<div class="parsed-exercise">
      <div class="parsed-name">${ex.name}</div>
      <div class="parsed-sets">`;

    for (let i = 0; i < ex.allSets.length; i++) {
      const s = ex.allSets[i];
      const isWorking = ex.workingSets.includes(s);
      html += `<span class="set-tag">${s.r}×${s.w}kg${isWorking ? '<span class="working-tag">W</span>' : '<span class="warmup-tag">wu</span>'}</span>`;
    }
    html += `</div></div>`;
  }

  html += `</div>
    <div class="btn-group mt-16">
      <button class="btn btn-primary" onclick="navigate('session','${session.id}')">View Session</button>
      <button class="btn btn-secondary" onclick="navigate('recommendations','${session.id}')">See Recommendations</button>
    </div>`;

  resultDiv.innerHTML = html;
  showToast('Session saved!');
};

// ---- Session Detail ----

function renderSessionDetail(sessionId) {
  const session = APP_DATA.sessions.find(s => s.id === sessionId);
  if (!session) return `<div class="empty-state"><h3>Session not found</h3><button class="btn btn-secondary mt-16" onclick="navigate('dashboard')">Back to Dashboard</button></div>`;

  const wt = WORKOUTS[session.workoutType];
  const badgeClass = wt ? (wt.type === 'Strength' ? 'badge-strength' : 'badge-hypertrophy') : 'badge-strength';
  const totalVolume = session.exercises.reduce((sum, e) => sum + e.workingSets.reduce((s2, set) => s2 + set.w * set.r, 0), 0);

  // Find previous same workout type
  const prevSession = [...APP_DATA.sessions]
    .filter(s => s.workoutType === session.workoutType && s.date < session.date)
    .sort((a, b) => b.date.localeCompare(a.date))[0];

  let html = `<div class="animate-in">
    <div class="section-header">
      <div>
        <h2>${session.workoutType}</h2>
        <div class="text-sm text-secondary">${formatDate(session.date)}</div>
      </div>
      <span class="card-badge ${badgeClass}">${wt ? wt.type : 'Custom'}</span>
    </div>
    <div class="session-meta">
      ${session.timeStart ? `<span>${session.timeStart} – ${session.timeEnd}</span>` : ''}
      <span>Volume: ${Math.round(totalVolume).toLocaleString()} kg</span>
      <span>${session.exercises.length} exercises</span>
    </div>`;

  for (const ex of session.exercises) {
    // Compare with previous
    let comparison = '';
    if (prevSession) {
      const prevEx = prevSession.exercises.find(e => e.name === ex.name);
      if (prevEx && prevEx.workingSets.length > 0 && ex.workingSets.length > 0) {
        const prevW = prevEx.workingSets[0].w;
        const currW = ex.workingSets[0].w;
        const prevMaxReps = Math.max(...prevEx.workingSets.map(s => s.r));
        const currMaxReps = Math.max(...ex.workingSets.map(s => s.r));
        if (currW > prevW) comparison = `<span class="change-up">↑ +${roundTo2_5(currW - prevW)}kg</span>`;
        else if (currW < prevW) comparison = `<span class="change-down">↓ ${roundTo2_5(currW - prevW)}kg</span>`;
        else if (currMaxReps > prevMaxReps) comparison = `<span class="change-up">↑ +${currMaxReps - prevMaxReps} reps</span>`;
        else if (currMaxReps < prevMaxReps) comparison = `<span class="change-down">↓ ${currMaxReps - prevMaxReps} reps</span>`;
        else comparison = `<span class="change-same">= same</span>`;
      }
    }

    html += `<div class="exercise-row">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span class="exercise-name">${ex.name}</span>
        ${comparison}
      </div>
      <div class="exercise-sets">
        ${ex.workingSets.map(s => `<span class="set-tag">${s.r} × ${s.w} kg</span>`).join('')}
      </div>
    </div>`;
  }

  // Notes
  html += `<div class="notes-area">
    <label for="session-notes">Notes</label>
    <textarea id="session-notes" placeholder="Add notes...">${session.notes || ''}</textarea>
    <button class="btn btn-sm btn-secondary mt-12" onclick="saveSessionNotes('${session.id}')">Save Notes</button>
  </div>`;

  // Actions
  html += `<div class="btn-group mt-24">
    <button class="btn btn-secondary" onclick="navigate('recommendations','${session.id}')">Recommendations</button>
    <button class="btn btn-secondary" onclick="navigate('dashboard')">Back</button>
  </div>
  <div class="mt-16 text-center">
    <span class="delete-link" onclick="deleteSession('${session.id}')">Delete Session</span>
  </div>`;

  html += `</div>`;
  return html;
}

window.saveSessionNotes = function(id) {
  const session = APP_DATA.sessions.find(s => s.id === id);
  if (session) {
    session.notes = document.getElementById('session-notes').value;
    saveData(APP_DATA);
    showToast('Notes saved');
  }
};

window.deleteSession = function(id) {
  if (!confirm('Delete this session?')) return;
  APP_DATA.sessions = APP_DATA.sessions.filter(s => s.id !== id);
  saveData(APP_DATA);
  showToast('Session deleted');
  navigate('dashboard');
};

// ---- Recommendations ----

function renderRecommendations(sessionId) {
  const session = APP_DATA.sessions.find(s => s.id === sessionId);
  if (!session) return `<div class="empty-state"><h3>Session not found</h3></div>`;

  let html = `<div class="animate-in">
    <h2>Next Session</h2>
    <p class="text-sm text-secondary mb-16">Recommendations based on ${session.workoutType} — ${formatDate(session.date)}</p>`;

  for (const ex of session.exercises) {
    const rec = getRecommendation(ex, session.workoutType);
    if (!rec) continue;

    const [minRep, maxRep] = getRepRange(ex.name, session.workoutType);
    const colorClass = rec.action === 'increase' ? 'rec-up' : rec.action === 'decrease' ? 'rec-down' : 'rec-same';

    html += `<div class="rec-card animate-in">
      <div class="rec-exercise">${ex.name}</div>
      <div class="rec-detail">
        Sets: ${ex.workingSets.map(s => `${s.r}×${s.w}kg`).join(', ')} · Range: ${minRep}-${maxRep}
      </div>
      <div class="rec-action ${colorClass}">
        ${rec.action === 'increase' ? '↑' : rec.action === 'decrease' ? '↓' : '→'} ${rec.text}
      </div>
    </div>`;
  }

  // Warmup preview for next workout
  const nextWorkoutType = session.workoutType;
  const template = WORKOUTS[nextWorkoutType];
  if (template) {
    html += `<div class="card mt-24">
      <div class="card-title mb-12">Warmup for Next ${nextWorkoutType}</div>`;
    const firstExercise = template.exercises[0];
    const lastSession = session.exercises.find(e => e.name === firstExercise.name);
    if (lastSession && lastSession.workingSets.length > 0) {
      const rec = getRecommendation(lastSession, nextWorkoutType);
      const targetWeight = rec ? rec.newWeight : lastSession.workingSets[0].w;
      const warmups = calculateWarmup(firstExercise.name, targetWeight);
      html += `<div class="text-sm text-secondary mb-8">${firstExercise.name} @ ${targetWeight}kg</div>`;
      for (const s of warmups) {
        html += `<div class="warmup-set">
          <span class="warmup-set-label">${s.label}</span>
          <span class="warmup-set-weight">${s.reps ? s.reps + ' × ' : ''}${s.weight} kg</span>
        </div>`;
      }
    }
    html += `</div>`;
  }

  html += `<button class="btn btn-secondary btn-block mt-24" onclick="navigate('dashboard')">Back to Dashboard</button>`;
  html += `</div>`;
  return html;
}

// ---- Progress Charts ----

function renderProgress() {
  let html = `<div class="animate-in">
    <h2>Progress</h2>
    <div class="pill-group" id="progress-toggle">
      <button class="pill active" onclick="setProgressMode('1rm')">Est. 1RM</button>
      <button class="pill" onclick="setProgressMode('weight')">Working Weight</button>
    </div>
    <div class="pill-group" id="progress-range">
      <button class="pill" onclick="setProgressRange(30)">30d</button>
      <button class="pill" onclick="setProgressRange(90)">90d</button>
      <button class="pill active" onclick="setProgressRange(0)">All</button>
    </div>`;

  for (const lift of KEY_LIFTS) {
    html += `<div class="card mb-16 animate-in">
      <div class="card-title">${lift}</div>
      <div class="chart-container"><canvas id="chart-${lift.replace(/\s/g, '')}"></canvas></div>
    </div>`;
  }

  html += `</div>`;
  return html;
}

window._progressMode = '1rm';
window._progressRange = 0;

window.setProgressMode = function(mode) {
  window._progressMode = mode;
  document.querySelectorAll('#progress-toggle .pill').forEach((p, i) => {
    p.classList.toggle('active', (i === 0 && mode === '1rm') || (i === 1 && mode === 'weight'));
  });
  initProgressCharts();
};

window.setProgressRange = function(days) {
  window._progressRange = days;
  document.querySelectorAll('#progress-range .pill').forEach(p => {
    p.classList.toggle('active', parseInt(p.textContent) === days || (p.textContent === 'All' && days === 0));
  });
  initProgressCharts();
};

function initProgressCharts() {
  loadChartJs().then(() => {
    for (const lift of KEY_LIFTS) {
      const canvasId = `chart-${lift.replace(/\s/g, '')}`;
      const canvas = document.getElementById(canvasId);
      if (!canvas) continue;

      destroyChart(canvasId);

      // Get data points
      let dataPoints = [];
      for (const session of APP_DATA.sessions) {
        const ex = session.exercises.find(e => e.name === lift);
        if (!ex || ex.workingSets.length === 0) continue;
        const bestSet = ex.workingSets.reduce((best, s) =>
          (s.w > best.w || (s.w === best.w && s.r > best.r)) ? s : best
        , ex.workingSets[0]);

        const value = window._progressMode === '1rm'
          ? Math.round(epley1RM(bestSet.w, bestSet.r) * 10) / 10
          : bestSet.w;

        dataPoints.push({ date: session.date, value, label: formatDate(session.date) });
      }

      // Filter by range
      if (window._progressRange > 0) {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - window._progressRange);
        const cutoffStr = cutoff.toISOString().slice(0, 10);
        dataPoints = dataPoints.filter(d => d.date >= cutoffStr);
      }

      dataPoints.sort((a, b) => a.date.localeCompare(b.date));

      if (dataPoints.length === 0) continue;

      chartInstances[canvasId] = new Chart(canvas, {
        type: 'line',
        data: {
          labels: dataPoints.map(d => d.label),
          datasets: [{
            data: dataPoints.map(d => d.value),
            borderColor: '#1a1a1a',
            backgroundColor: 'rgba(26,26,26,0.05)',
            fill: true,
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: '#1a1a1a',
            borderWidth: 2,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => `${ctx.parsed.y} kg${window._progressMode === '1rm' ? ' (est. 1RM)' : ''}`
              }
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 0 } },
            y: { grid: { color: '#e5e2dc' }, ticks: { font: { size: 11 }, callback: v => v + 'kg' } }
          }
        }
      });
    }
  });
}

// ---- Volume Tracker ----

function renderVolume() {
  const weekStart = getCurrentWeekStart();
  const sessions = getWeekSessions(weekStart);
  const volume = calculateVolumeForWeek(sessions);
  const cycleWeek = getCycleWeek();
  const isDeload = cycleWeek === 4;
  const targetMin = isDeload ? 8 : 16;
  const targetMax = isDeload ? 10 : 22;

  const allGroups = ['Chest', 'Back', 'Quads', 'Hamstrings', 'Glutes', 'Front Delts', 'Side Delts', 'Rear Delts', 'Triceps', 'Biceps', 'Calves'];

  let html = `<div class="animate-in">
    <h2>Weekly Volume</h2>
    <p class="text-sm text-secondary mb-8">Week of ${formatDate(weekStart)}${isDeload ? ' (Deload)' : ''}</p>
    <p class="text-xs text-secondary mb-16">Target: ${targetMin}–${targetMax} sets per muscle group</p>
    <div class="card">`;

  for (const group of allGroups) {
    const sets = volume[group] || 0;
    const maxBar = Math.max(targetMax + 4, sets);
    const pct = Math.min(100, (sets / maxBar) * 100);
    let colorClass = 'under';
    if (sets >= targetMin && sets <= targetMax) colorClass = 'in-range';
    else if (sets > targetMax) colorClass = 'over';

    html += `<div class="volume-row">
      <span class="volume-label">${group}</span>
      <div class="volume-bar-wrap">
        <div class="volume-bar-fill ${colorClass}" style="width:${pct}%"></div>
      </div>
      <span class="volume-count">${sets} sets</span>
      <span class="volume-target">${targetMin}–${targetMax}</span>
    </div>`;
  }

  html += `</div>`;

  // Session breakdown
  html += `<div class="mt-24"><h3>Sessions This Week</h3>`;
  if (sessions.length === 0) {
    html += `<p class="text-sm text-secondary">No sessions logged this week</p>`;
  } else {
    for (const s of sessions) {
      html += `<div class="card session-card" onclick="navigate('session','${s.id}')">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span class="card-title">${s.workoutType}</span>
          <span class="text-sm text-secondary">${formatDate(s.date)}</span>
        </div>
      </div>`;
    }
  }
  html += `</div></div>`;
  return html;
}

// ---- Warmup Calculator ----

function renderWarmup() {
  let html = `<div class="animate-in">
    <h2>Warmup Calculator</h2>
    <p class="text-sm text-secondary mb-16">Enter your working weight for warmup sets</p>
    <div class="mb-12">
      <label for="warmup-exercise">Exercise</label>
      <select id="warmup-exercise" onchange="updateWarmup()">
        ${[...COMPOUND_HEAVY, ...COMPOUND_MODERATE, ...ACCESSORY, ...ISOLATION].map(e =>
          `<option value="${e}">${e}</option>`
        ).join('')}
      </select>
    </div>
    <div class="mb-16">
      <label for="warmup-weight">Working Weight (kg)</label>
      <input type="number" id="warmup-weight" value="100" step="2.5" min="20" onchange="updateWarmup()" oninput="updateWarmup()">
    </div>
    <div id="warmup-result"></div>
  </div>`;
  setTimeout(updateWarmup, 50);
  return html;
}

window.updateWarmup = function() {
  const exercise = document.getElementById('warmup-exercise')?.value;
  const weight = parseFloat(document.getElementById('warmup-weight')?.value);
  if (!exercise || !weight || weight < 20) return;

  const sets = calculateWarmup(exercise, weight);
  let html = `<div class="card">
    <div class="card-title mb-12">Warmup Sequence</div>`;

  if (ISOLATION.includes(exercise)) {
    html += `<p class="text-sm text-secondary">No warmup needed for isolation exercises</p>`;
  }

  for (const s of sets) {
    html += `<div class="warmup-set">
      <span class="warmup-set-label">${s.label}</span>
      <span class="warmup-set-weight">${s.reps ? s.reps + ' reps × ' : ''}${s.weight} kg</span>
    </div>`;
  }

  html += `</div>`;
  const resultDiv = document.getElementById('warmup-result');
  if (resultDiv) resultDiv.innerHTML = html;
};

// ---- 1RM Estimator ----

function renderEstimator() {
  let html = `<div class="animate-in">
    <h2>1RM Estimator</h2>
    <div class="mb-12">
      <label for="rm-weight">Weight (kg)</label>
      <input type="number" id="rm-weight" value="100" step="2.5" min="0" onchange="updateEstimator()" oninput="updateEstimator()">
    </div>
    <div class="mb-16">
      <label for="rm-reps">Reps</label>
      <input type="number" id="rm-reps" value="5" min="1" max="30" onchange="updateEstimator()" oninput="updateEstimator()">
    </div>
    <div id="rm-result"></div>
    <div class="mt-24" id="rm-from-log"></div>
  </div>`;
  setTimeout(updateEstimator, 50);
  return html;
}

window.updateEstimator = function() {
  const w = parseFloat(document.getElementById('rm-weight')?.value);
  const r = parseInt(document.getElementById('rm-reps')?.value);
  if (!w || !r || r < 1) return;

  const e = Math.round(epley1RM(w, r) * 10) / 10;
  const b = Math.round(brzycki1RM(w, r) * 10) / 10;
  const l = Math.round(lombardi1RM(w, r) * 10) / 10;

  let html = `<div class="rm-results">
    <div class="rm-block"><div class="rm-value">${e}</div><div class="rm-formula">Epley</div></div>
    <div class="rm-block"><div class="rm-value">${b}</div><div class="rm-formula">Brzycki</div></div>
    <div class="rm-block"><div class="rm-value">${l}</div><div class="rm-formula">Lombardi</div></div>
  </div>`;

  const resultDiv = document.getElementById('rm-result');
  if (resultDiv) resultDiv.innerHTML = html;

  // Auto-calculate from logged sessions
  let logHtml = `<h3>From Your Logs</h3>`;
  let hasData = false;

  for (const lift of KEY_LIFTS) {
    // Find best set across all sessions
    let bestSet = null;
    let bestDate = '';
    for (const session of APP_DATA.sessions) {
      const ex = session.exercises.find(e => e.name === lift);
      if (!ex) continue;
      for (const s of ex.workingSets) {
        const est = epley1RM(s.w, s.r);
        if (!bestSet || est > epley1RM(bestSet.w, bestSet.r)) {
          bestSet = s;
          bestDate = session.date;
        }
      }
    }

    if (bestSet) {
      hasData = true;
      const est = Math.round(epley1RM(bestSet.w, bestSet.r) * 10) / 10;
      logHtml += `<div class="rec-card">
        <div class="rec-exercise">${lift}</div>
        <div class="rec-detail">Best: ${bestSet.r}×${bestSet.w}kg (${formatDate(bestDate)})</div>
        <div class="rec-action">Est. 1RM: <strong>${est} kg</strong></div>
      </div>`;
    }
  }

  const logDiv = document.getElementById('rm-from-log');
  if (logDiv) logDiv.innerHTML = hasData ? logHtml : '';
};

// ---- Settings ----

function renderSettings() {
  const s = APP_DATA.settings;
  let html = `<div class="animate-in">
    <h2>Settings</h2>

    <div class="settings-section">
      <h3>Cycle</h3>
      <div class="setting-row">
        <label>Current Week</label>
        <select id="set-current-week" onchange="saveSetting('currentWeek', parseInt(this.value))">
          <option value="1" ${(s.currentWeek || 1) === 1 ? 'selected' : ''}>Week 1</option>
          <option value="2" ${s.currentWeek === 2 ? 'selected' : ''}>Week 2</option>
          <option value="3" ${s.currentWeek === 3 ? 'selected' : ''}>Week 3</option>
          <option value="4" ${s.currentWeek === 4 ? 'selected' : ''}>Week 4 (Deload)</option>
        </select>
      </div>
      <div class="setting-row">
        <label>Cycle Start Date</label>
        <input type="date" id="set-cycle-start" value="${s.cycleStartDate || ''}" onchange="saveSetting('cycleStartDate', this.value)">
      </div>
    </div>

    <div class="settings-section">
      <h3>Body Weight</h3>
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input type="date" id="bw-date" value="${todayStr()}" style="flex:1">
        <input type="number" id="bw-weight" placeholder="kg" step="0.1" style="width:100px">
        <button class="btn btn-sm btn-primary" onclick="addBodyweight()">Add</button>
      </div>
      <div id="bw-list">`;

    const sortedBw = [...APP_DATA.bodyweight].sort((a, b) => b.date.localeCompare(a.date));
    for (const entry of sortedBw) {
      html += `<div class="bw-entry">
        <span>${formatDate(entry.date)}</span>
        <span><strong>${entry.weight} kg</strong> <span class="delete-link" onclick="removeBodyweight('${entry.date}')" style="margin-left:8px">×</span></span>
      </div>`;
    }

  html += `</div></div>

    <div class="settings-section">
      <h3>Data</h3>
      <div class="btn-group">
        <button class="btn btn-secondary" onclick="exportData()">Export JSON</button>
        <button class="btn btn-secondary" onclick="document.getElementById('import-file').click()">Import JSON</button>
        <input type="file" id="import-file" accept=".json" style="display:none" onchange="importData(event)">
      </div>
      <div class="mt-16">
        <button class="btn btn-danger" onclick="resetData()">Reset All Data</button>
      </div>
    </div>

    <div class="settings-section">
      <h3>Workout Templates</h3>
      <p class="text-sm text-secondary mb-12">Pre-configured PPLPPL program</p>`;

    for (const [name, workout] of Object.entries(WORKOUTS)) {
      html += `<div class="card mb-12">
        <div class="card-header">
          <span class="card-title">${name}</span>
          <span class="card-badge ${workout.type === 'Strength' ? 'badge-strength' : 'badge-hypertrophy'}">${workout.type}</span>
        </div>
        <div class="text-sm text-secondary">
          ${workout.exercises.map(e => `${e.name} ${e.sets}×${e.reps}`).join('<br>')}
        </div>
      </div>`;
    }

  html += `</div></div>`;
  return html;
}

window.saveSetting = function(key, value) {
  APP_DATA.settings[key] = value;
  saveData(APP_DATA);
  showToast('Setting saved');
};

window.addBodyweight = function() {
  const date = document.getElementById('bw-date').value;
  const weight = parseFloat(document.getElementById('bw-weight').value);
  if (!date || !weight) { showToast('Enter date and weight'); return; }

  // Remove existing entry for same date
  APP_DATA.bodyweight = APP_DATA.bodyweight.filter(e => e.date !== date);
  APP_DATA.bodyweight.push({ date, weight });
  APP_DATA.bodyweight.sort((a, b) => a.date.localeCompare(b.date));
  saveData(APP_DATA);
  showToast(`Weight logged: ${weight}kg`);
  renderPage();
};

window.removeBodyweight = function(date) {
  APP_DATA.bodyweight = APP_DATA.bodyweight.filter(e => e.date !== date);
  saveData(APP_DATA);
  renderPage();
};

window.exportData = function() {
  const blob = new Blob([JSON.stringify(APP_DATA, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pplppl-backup-${todayStr()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported');
};

window.importData = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.sessions && imported.settings) {
        APP_DATA = imported;
        saveData(APP_DATA);
        showToast('Data imported successfully');
        renderPage();
      } else {
        showToast('Invalid data file');
      }
    } catch (err) {
      showToast('Error reading file');
    }
  };
  reader.readAsText(file);
};

window.resetData = function() {
  if (!confirm('Reset ALL data? This cannot be undone.')) return;
  if (!confirm('Are you really sure?')) return;
  localStorage.removeItem(STORAGE_KEY);
  APP_DATA = loadData();
  showToast('Data reset');
  renderPage();
};

// ---- All Sessions Page (linked from history) ----

function renderAllSessions() {
  const sorted = [...APP_DATA.sessions].sort((a, b) => b.date.localeCompare(a.date));
  let html = `<div class="animate-in"><h2>All Sessions</h2>`;
  for (const s of sorted) {
    const wt = WORKOUTS[s.workoutType];
    const badgeClass = wt ? (wt.type === 'Strength' ? 'badge-strength' : 'badge-hypertrophy') : 'badge-strength';
    html += `<div class="card session-card" onclick="navigate('session','${s.id}')">
      <div class="card-header">
        <span class="card-title">${s.workoutType}</span>
        <span class="card-badge ${badgeClass}">${formatDate(s.date)}</span>
      </div>
      <div class="text-sm text-secondary">${s.exercises.map(e => e.name).join(' · ')}</div>
    </div>`;
  }
  html += `</div>`;
  return html;
}

// ---- Live Workout ----

let liveWorkout = null;
let workoutTimer = null;
let restTimer = null;

function renderWorkoutSelect() {
  let html = `<div class="animate-in">
    <h2>Start Workout</h2>
    <p class="text-sm text-secondary mb-16">Select your workout type</p>`;

  for (const [name, workout] of Object.entries(WORKOUTS)) {
    const badgeClass = workout.type === 'Strength' ? 'badge-strength' : 'badge-hypertrophy';
    html += `<div class="card session-card mb-12 animate-in" onclick="startLiveWorkout('${name}')">
      <div class="card-header">
        <span class="card-title">${name}</span>
        <span class="card-badge ${badgeClass}">${workout.type}</span>
      </div>
      <div class="text-sm text-secondary">
        ${workout.exercises.map(e => `${e.name} ${e.sets}×${e.reps}`).join(' · ')}
      </div>
    </div>`;
  }

  html += `<button class="btn btn-secondary btn-block mt-16" onclick="navigate('dashboard')">Cancel</button>
  </div>`;
  return html;
}

window.startLiveWorkout = function(workoutType) {
  const template = WORKOUTS[workoutType];
  if (!template) return;

  liveWorkout = {
    workoutType,
    startTime: new Date(),
    exercises: template.exercises.map(e => ({
      name: e.name,
      targetSets: e.sets,
      targetReps: e.reps,
      restTime: e.rest,
      completedSets: []
    })),
    currentExerciseIndex: 0,
    currentSetIndex: 0,
    isResting: false,
    restRemaining: 0
  };

  navigate('workout-live');
};

function renderWorkoutLive() {
  if (!liveWorkout) {
    return `<div class="empty-state">
      <h3>No active workout</h3>
      <button class="btn btn-primary mt-16" onclick="navigate('workout-select')">Start Workout</button>
    </div>`;
  }

  const ex = liveWorkout.exercises[liveWorkout.currentExerciseIndex];
  const progress = `${liveWorkout.currentExerciseIndex + 1}/${liveWorkout.exercises.length}`;
  const setProgress = `${ex.completedSets.length}/${ex.targetSets}`;

  let html = `<div class="animate-in live-workout">
    <div class="card mb-16">
      <div class="card-header">
        <span class="card-title">${liveWorkout.workoutType}</span>
        <span class="text-sm text-secondary">Exercise ${progress}</span>
      </div>
      <div class="live-timer" id="workout-timer">00:00</div>
    </div>

    <div class="card mb-16">
      <h3 class="mb-8">${ex.name}</h3>
      <div class="text-sm text-secondary mb-12">Target: ${ex.targetSets} sets × ${ex.targetReps} reps · Rest: ${ex.restTime}s</div>
      <div class="text-sm mb-12">Completed: ${setProgress} sets</div>

      <div id="rest-timer-container" class="rest-timer-container hidden">
        <div class="rest-timer-label">Rest</div>
        <div class="rest-timer-value" id="rest-timer-value">0:00</div>
        <button class="btn btn-sm btn-secondary mt-8" onclick="skipRest()">Skip Rest</button>
      </div>

      <div id="set-input-container">
        <div class="set-input-row">
          <div style="flex:1">
            <label>Reps</label>
            <input type="number" id="live-reps" value="${ex.targetReps.split('-')[0]}" min="1" style="font-size:1.2rem;text-align:center">
          </div>
          <div style="flex:1">
            <label>Weight (kg)</label>
            <input type="number" id="live-weight" value="0" step="2.5" min="0" style="font-size:1.2rem;text-align:center">
          </div>
        </div>
        <button class="btn btn-primary btn-block mt-12" onclick="logLiveSet()">Log Set</button>
      </div>

      ${ex.completedSets.length > 0 ? `
        <div class="mt-16">
          <div class="text-sm text-secondary mb-8">Completed Sets:</div>
          <div class="exercise-sets">
            ${ex.completedSets.map(s => `<span class="set-tag">${s.r} × ${s.w} kg</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>

    <div class="btn-group">
      <button class="btn btn-secondary" onclick="previousExercise()">← Previous</button>
      <button class="btn btn-secondary" onclick="nextExercise()">Next →</button>
    </div>
    <div class="mt-12">
      <button class="btn btn-primary btn-block" onclick="finishWorkout()">Finish Workout</button>
    </div>
    <div class="mt-12 text-center">
      <span class="delete-link" onclick="cancelWorkout()">Cancel Workout</span>
    </div>
  </div>`;

  return html;
}

function initWorkoutLive() {
  if (!liveWorkout) return;

  // Start workout timer
  if (workoutTimer) clearInterval(workoutTimer);
  workoutTimer = setInterval(() => {
    const elapsed = Math.floor((new Date() - liveWorkout.startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    const timerEl = document.getElementById('workout-timer');
    if (timerEl) {
      timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  }, 1000);

  // Check if we should auto-focus weight input
  const weightInput = document.getElementById('live-weight');
  if (weightInput) {
    // Pre-fill weight from last session
    const ex = liveWorkout.exercises[liveWorkout.currentExerciseIndex];
    const lastSession = [...APP_DATA.sessions]
      .filter(s => s.workoutType === liveWorkout.workoutType)
      .sort((a, b) => b.date.localeCompare(a.date))[0];

    if (lastSession) {
      const lastEx = lastSession.exercises.find(e => e.name === ex.name);
      if (lastEx && lastEx.workingSets.length > 0) {
        weightInput.value = lastEx.workingSets[0].w;
      }
    }
  }
}

window.logLiveSet = function() {
  if (!liveWorkout) return;

  const reps = parseInt(document.getElementById('live-reps').value);
  const weight = parseFloat(document.getElementById('live-weight').value);

  if (!reps || reps < 1) {
    showToast('Enter reps');
    return;
  }

  const ex = liveWorkout.exercises[liveWorkout.currentExerciseIndex];
  ex.completedSets.push({ r: reps, w: weight });

  // Start rest timer
  if (ex.completedSets.length < ex.targetSets) {
    startRestTimer(ex.restTime);
  }

  renderPage();
};

function startRestTimer(seconds) {
  liveWorkout.isResting = true;
  liveWorkout.restRemaining = seconds;

  const container = document.getElementById('rest-timer-container');
  const inputContainer = document.getElementById('set-input-container');
  if (container) container.classList.remove('hidden');
  if (inputContainer) inputContainer.classList.add('hidden');

  if (restTimer) clearInterval(restTimer);
  restTimer = setInterval(() => {
    liveWorkout.restRemaining--;
    const mins = Math.floor(liveWorkout.restRemaining / 60);
    const secs = liveWorkout.restRemaining % 60;
    const timerEl = document.getElementById('rest-timer-value');
    if (timerEl) {
      timerEl.textContent = `${mins}:${String(secs).padStart(2, '0')}`;
    }

    if (liveWorkout.restRemaining <= 0) {
      skipRest();
    }
  }, 1000);
}

window.skipRest = function() {
  if (restTimer) clearInterval(restTimer);
  liveWorkout.isResting = false;
  liveWorkout.restRemaining = 0;

  const container = document.getElementById('rest-timer-container');
  const inputContainer = document.getElementById('set-input-container');
  if (container) container.classList.add('hidden');
  if (inputContainer) inputContainer.classList.remove('hidden');
};

window.nextExercise = function() {
  if (!liveWorkout) return;
  if (liveWorkout.currentExerciseIndex < liveWorkout.exercises.length - 1) {
    liveWorkout.currentExerciseIndex++;
    if (restTimer) clearInterval(restTimer);
    liveWorkout.isResting = false;
    renderPage();
  }
};

window.previousExercise = function() {
  if (!liveWorkout) return;
  if (liveWorkout.currentExerciseIndex > 0) {
    liveWorkout.currentExerciseIndex--;
    if (restTimer) clearInterval(restTimer);
    liveWorkout.isResting = false;
    renderPage();
  }
};

window.finishWorkout = function() {
  if (!liveWorkout) return;

  const endTime = new Date();
  const duration = Math.floor((endTime - liveWorkout.startTime) / 60000); // minutes

  // Build session object
  const session = {
    id: generateId(),
    date: todayStr(),
    timeStart: liveWorkout.startTime.toTimeString().slice(0, 5),
    timeEnd: endTime.toTimeString().slice(0, 5),
    workoutType: liveWorkout.workoutType,
    exercises: liveWorkout.exercises
      .filter(e => e.completedSets.length > 0)
      .map(e => ({
        name: e.name,
        allSets: e.completedSets,
        workingSets: e.completedSets
      })),
    notes: ''
  };

  APP_DATA.sessions.push(session);
  saveData(APP_DATA);

  // Clean up
  if (workoutTimer) clearInterval(workoutTimer);
  if (restTimer) clearInterval(restTimer);
  liveWorkout = null;

  showToast('Workout saved!');
  navigate('session', session.id);
};

window.cancelWorkout = function() {
  if (!confirm('Cancel this workout? Your progress will be lost.')) return;

  if (workoutTimer) clearInterval(workoutTimer);
  if (restTimer) clearInterval(restTimer);
  liveWorkout = null;

  navigate('dashboard');
};

// ---- Initialize ----

document.addEventListener('DOMContentLoaded', () => {
  handleHash();
});

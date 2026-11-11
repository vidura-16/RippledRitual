import { useMemo, useState } from "react";

type IconName =
  | "home"
  | "users"
  | "dumbbell"
  | "clipboard"
  | "bell"
  | "chevron"
  | "plus"
  | "search"
  | "filter"
  | "calendar"
  | "target"
  | "bolt"
  | "clock"
  | "more"
  | "arrow"
  | "mail"
  | "phone"
  | "ruler"
  | "weight"
  | "edit"
  | "check"
  | "play"
  | "trash"
  | "grip"
  | "settings"
  | "logout"
  | "award"
  | "close";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    dumbbell: (
      <>
        <path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12" />
        <rect x="3" y="8" width="3" height="8" rx="1" />
        <rect x="18" y="8" width="3" height="8" rx="1" />
      </>
    ),
    clipboard: (
      <>
        <path d="M9 5H6a2 2 0 0 0-2 2v13h16V7a2 2 0 0 0-2-2h-3" />
        <rect x="8" y="2" width="8" height="5" rx="2" />
        <path d="m9 14 2 2 4-5" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    filter: <path d="M4 5h16M7 12h10M10 19h4" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    arrow: (
      <>
        <path d="m15 18-6-6 6-6" />
        <path d="M9 12h11" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M6.6 3h3l1.5 5-2 1.5a15 15 0 0 0 5.4 5.4l1.5-2 5 1.5v3c0 2-1.6 3.6-3.6 3.4A16 16 0 0 1 3.2 6.6C3 4.6 4.6 3 6.6 3z" />
    ),
    ruler: (
      <>
        <path d="m4 20 16-16" />
        <path d="m14 4 6 6M8 10l2 2M5 13l2 2M11 7l2 2" />
      </>
    ),
    weight: (
      <>
        <path d="M8 8a4 4 0 1 1 8 0" />
        <path d="M6 8h12l2 13H4z" />
      </>
    ),
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2 2 0 0 1 3 3L8 18l-4 1 1-4z" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m8 5 11 7-11 7z" />,
    trash: (
      <>
        <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6" />
      </>
    ),
    grip: (
      <>
        <circle cx="9" cy="7" r="1" />
        <circle cx="15" cy="7" r="1" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="9" cy="17" r="1" />
        <circle cx="15" cy="17" r="1" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z" />
      </>
    ),
    logout: (
      <>
        <path d="M10 17l5-5-5-5M15 12H3" />
        <path d="M14 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 12-1 9 4.5-3 4.5 3-1-9" />
      </>
    ),
    close: <path d="M6 6l12 12M18 6 6 18" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

const customers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    age: 29,
    goal: "Build strength",
    status: "Active",
    initials: "SM",
    tone: "pink",
    email: "sarah.mitchell@email.com",
    phone: "+1 415 283 9041",
    height: "168 cm",
    weight: "64 kg",
    experience: "Intermediate",
  },
  {
    id: 2,
    name: "Marcus Reed",
    age: 34,
    goal: "Fat loss",
    status: "Active",
    initials: "MR",
    tone: "blue",
    email: "marcus.r@email.com",
    phone: "+1 415 650 1274",
    height: "182 cm",
    weight: "89 kg",
    experience: "Beginner",
  },
  {
    id: 3,
    name: "Emma Thompson",
    age: 26,
    goal: "Improve mobility",
    status: "Active",
    initials: "ET",
    tone: "purple",
    email: "emma.t@email.com",
    phone: "+1 212 980 3420",
    height: "171 cm",
    weight: "61 kg",
    experience: "Advanced",
  },
  {
    id: 4,
    name: "Daniel Kim",
    age: 41,
    goal: "Muscle gain",
    status: "Inactive",
    initials: "DK",
    tone: "orange",
    email: "daniel.k@email.com",
    phone: "+1 646 412 8020",
    height: "175 cm",
    weight: "78 kg",
    experience: "Intermediate",
  },
  {
    id: 5,
    name: "Olivia Chen",
    age: 31,
    goal: "Marathon prep",
    status: "Active",
    initials: "OC",
    tone: "teal",
    email: "olivia.c@email.com",
    phone: "+1 718 205 6641",
    height: "165 cm",
    weight: "57 kg",
    experience: "Advanced",
  },
];

const photo =
  "https://images.unsplash.com/photo-1734630341082-0fec0e10126c?auto=format&fit=crop&w=900&q=85";
const exercises = [
  {
    name: "Barbell Bench Press",
    muscle: "Chest",
    equipment: "Barbell",
    difficulty: "Intermediate",
    pos: "50% 58%",
  },
  {
    name: "Goblet Squat",
    muscle: "Legs",
    equipment: "Dumbbell",
    difficulty: "Beginner",
    pos: "20% 50%",
  },
  {
    name: "Cable Row",
    muscle: "Back",
    equipment: "Cable",
    difficulty: "Intermediate",
    pos: "75% 40%",
  },
  {
    name: "Shoulder Press",
    muscle: "Shoulders",
    equipment: "Dumbbell",
    difficulty: "Beginner",
    pos: "45% 80%",
  },
  {
    name: "Plank Hold",
    muscle: "Abs",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    pos: "80% 80%",
  },
];

const plans = [
  {
    name: "Strength Foundation",
    duration: "8 weeks",
    count: 12,
    level: "Intermediate",
    assigned: 6,
  },
  { name: "Lean & Strong", duration: "6 weeks", count: 16, level: "Beginner", assigned: 4 },
  { name: "Upper Body Power", duration: "4 weeks", count: 9, level: "Advanced", assigned: 3 },
  { name: "Mobility Reset", duration: "3 weeks", count: 8, level: "All levels", assigned: 5 },
];

type Screen = "dashboard" | "customers" | "customer" | "exercises" | "plans" | "profile";
type Modal = "addCustomer" | "addExercise" | "createPlan" | "assign" | null;

export default function App() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [modal, setModal] = useState<Modal>(null);
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All");
  const [planStep, setPlanStep] = useState(1);
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(""), 2400);
  };
  const go = (next: Screen) => {
    setScreen(next);
    setSearch("");
    window.scrollTo(0, 0);
  };
  const filteredCustomers = useMemo(
    () =>
      customers.filter(
        (c) =>
          (filter === "All" || c.status === filter) &&
          c.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [filter, search],
  );
  const filteredExercises = useMemo(
    () =>
      exercises.filter(
        (e) =>
          (category === "All" || e.muscle === category) &&
          e.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [category, search],
  );

  return (
    <div className="app-shell">
      <main className="app-content">
        {screen === "dashboard" && <Dashboard go={go} open={setModal} />}
        {screen === "customers" && (
          <Customers
            list={filteredCustomers}
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            select={(c: (typeof customers)[number]) => {
              setSelectedCustomer(c);
              go("customer");
            }}
            open={() => setModal("addCustomer")}
          />
        )}
        {screen === "customer" && (
          <CustomerDetail
            customer={selectedCustomer}
            back={() => go("customers")}
            notify={notify}
          />
        )}
        {screen === "exercises" && (
          <Exercises
            list={filteredExercises}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            open={() => setModal("addExercise")}
          />
        )}
        {screen === "plans" && (
          <Plans
            open={() => {
              setPlanStep(1);
              setModal("createPlan");
            }}
            assign={() => setModal("assign")}
          />
        )}
        {screen === "profile" && <Profile back={() => go("dashboard")} notify={notify} />}
      </main>
      {screen !== "customer" && screen !== "profile" && <BottomNav screen={screen} go={go} />}
      {modal && (
        <ModalView
          type={modal}
          close={() => setModal(null)}
          step={planStep}
          setStep={setPlanStep}
          notify={(m: string) => {
            setModal(null);
            notify(m);
          }}
          assign={() => setModal("assign")}
        />
      )}
      {toast && (
        <div className="toast">
          <span>
            <Icon name="check" size={16} />
          </span>
          {toast}
        </div>
      )}
    </div>
  );
}

function Header({
  title,
  subtitle,
  action,
  back,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  back?: () => void;
}) {
  return (
    <header className="page-header">
      <div className="header-title">
        {back && (
          <button className="icon-btn back" onClick={back}>
            <Icon name="arrow" />
          </button>
        )}
        <div>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {action}
    </header>
  );
}

function Avatar({
  initials,
  tone = "lime",
  large = false,
}: {
  initials: string;
  tone?: string;
  large?: boolean;
}) {
  return <div className={`avatar ${tone} ${large ? "large" : ""}`}>{initials}</div>;
}

function Dashboard({ go, open }: { go: (s: Screen) => void; open: (m: Modal) => void }) {
  return (
    <div className="screen dashboard-screen">
      <div className="dashboard-top">
        <div className="brand-mark">
          <span>F</span>
        </div>
        <div className="trainer" onClick={() => go("profile")}>
          <div className="trainer-copy">
            <span>Good morning</span>
            <strong>Alex Morgan</strong>
          </div>
          <Avatar initials="AM" tone="lime" />
        </div>
        <button className="icon-btn notification">
          <Icon name="bell" />
          <i />
        </button>
      </div>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">TUESDAY, MAY 28</span>
          <h1>
            Build better.
            <br />
            <em>Coach smarter.</em>
          </h1>
          <p>You have 4 active plans and 2 customer check-ins today.</p>
        </div>
        <div className="hero-ring">
          <div>
            <strong>84%</strong>
            <span>weekly goal</span>
          </div>
        </div>
      </section>
      <section>
        <div className="section-head">
          <h2>Overview</h2>
          <span>This month</span>
        </div>
        <div className="stats-grid">
          <button className="stat-card main" onClick={() => go("customers")}>
            <span className="stat-icon">
              <Icon name="users" />
            </span>
            <strong>24</strong>
            <span>Total customers</span>
            <small>
              <b>+3</b> this month
            </small>
          </button>
          <div className="stat-card">
            <span className="dot active" />
            <strong>18</strong>
            <span>Active</span>
          </div>
          <div className="stat-card">
            <span className="dot inactive" />
            <strong>6</strong>
            <span>Inactive</span>
          </div>
          <button className="stat-card plans-stat" onClick={() => go("plans")}>
            <Icon name="clipboard" />
            <strong>12</strong>
            <span>Workout plans</span>
          </button>
        </div>
      </section>
      <section>
        <div className="section-head">
          <h2>Quick actions</h2>
        </div>
        <div className="quick-grid">
          <button onClick={() => open("addCustomer")}>
            <span>
              <Icon name="users" />
            </span>
            Add customer
            <Icon name="chevron" size={16} />
          </button>
          <button
            onClick={() => {
              go("exercises");
              setTimeout(() => open("addExercise"), 50);
            }}
          >
            <span>
              <Icon name="dumbbell" />
            </span>
            Add exercise
            <Icon name="chevron" size={16} />
          </button>
          <button onClick={() => open("createPlan")}>
            <span>
              <Icon name="clipboard" />
            </span>
            Create plan
            <Icon name="chevron" size={16} />
          </button>
        </div>
      </section>
      <section className="recent-section">
        <div className="section-head">
          <h2>Recently added</h2>
          <button onClick={() => go("customers")}>View all</button>
        </div>
        {customers.slice(0, 3).map((c) => (
          <CustomerRow key={c.id} customer={c} onClick={() => go("customers")} />
        ))}
      </section>
    </div>
  );
}

function CustomerRow({
  customer,
  onClick,
}: {
  customer: (typeof customers)[0];
  onClick: () => void;
}) {
  return (
    <button className="customer-row" onClick={onClick}>
      <Avatar initials={customer.initials} tone={customer.tone} />
      <div>
        <strong>{customer.name}</strong>
        <span>
          {customer.goal} · {customer.age} yrs
        </span>
      </div>
      <span className={`status ${customer.status.toLowerCase()}`}>{customer.status}</span>
      <Icon name="chevron" size={18} />
    </button>
  );
}

function Customers({ list, search, setSearch, filter, setFilter, select, open }: any) {
  return (
    <div className="screen">
      <Header
        title="Customers"
        subtitle="24 people in your roster"
        action={
          <button className="add-btn" onClick={open}>
            <Icon name="plus" />
            Add
          </button>
        }
      />
      <div className="searchbar">
        <Icon name="search" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customers"
        />
        <button>
          <Icon name="filter" size={18} />
        </button>
      </div>
      <div className="segmented">
        {["All", "Active", "Inactive"].map((x) => (
          <button key={x} className={filter === x ? "active" : ""} onClick={() => setFilter(x)}>
            {x}
            {x === "All" ? " 24" : x === "Active" ? " 18" : " 6"}
          </button>
        ))}
      </div>
      <div className="list-card">
        {list.map((c: any) => (
          <CustomerRow key={c.id} customer={c} onClick={() => select(c)} />
        ))}
        {!list.length && <div className="empty">No customers match your search.</div>}
      </div>
    </div>
  );
}

function CustomerDetail({ customer: c, back, notify }: any) {
  return (
    <div className="screen detail-screen">
      <Header
        title="Customer profile"
        back={back}
        action={
          <button className="icon-btn">
            <Icon name="more" />
          </button>
        }
      />
      <section className="profile-hero">
        <div className="avatar-wrap">
          <Avatar initials={c.initials} tone={c.tone} large />
          <span />
        </div>
        <h2>{c.name}</h2>
        <p>
          {c.age} years · {c.experience}
        </p>
        <button className="outline-btn" onClick={() => notify("Customer details ready to edit")}>
          <Icon name="edit" size={17} /> Edit profile
        </button>
      </section>
      <div className="mini-stats">
        <div>
          <span>
            <Icon name="ruler" />
          </span>
          <strong>{c.height}</strong>
          <small>Height</small>
        </div>
        <div>
          <span>
            <Icon name="weight" />
          </span>
          <strong>{c.weight}</strong>
          <small>Weight</small>
        </div>
        <div>
          <span>
            <Icon name="target" />
          </span>
          <strong>-3.2 kg</strong>
          <small>Progress</small>
        </div>
      </div>
      <section className="detail-section">
        <h3>Fitness goal</h3>
        <div className="goal-card">
          <span>
            <Icon name="bolt" />
          </span>
          <div>
            <strong>{c.goal}</strong>
            <p>Target date · August 30, 2025</p>
          </div>
          <Icon name="chevron" />
        </div>
      </section>
      <section className="detail-section">
        <div className="section-head">
          <h3>Assigned plans</h3>
          <button onClick={() => notify("Plan assignment opened")}>Assign new</button>
        </div>
        <div className="assigned-plan">
          <div className="plan-icon">
            <Icon name="clipboard" />
          </div>
          <div>
            <span className="tiny-label">IN PROGRESS</span>
            <strong>Strength Foundation</strong>
            <p>Week 3 of 8 · 62% completed</p>
            <div className="progress">
              <i style={{ width: "62%" }} />
            </div>
          </div>
          <Icon name="chevron" />
        </div>
      </section>
      <section className="detail-section">
        <h3>Contact details</h3>
        <div className="info-card">
          <p>
            <Icon name="mail" />
            <span>{c.email}</span>
          </p>
          <p>
            <Icon name="phone" />
            <span>{c.phone}</span>
          </p>
          <p>
            <Icon name="calendar" />
            <span>Born June 14, 1995</span>
          </p>
        </div>
      </section>
    </div>
  );
}

function Exercises({ list, search, setSearch, category, setCategory, open }: any) {
  const cats = ["All", "Chest", "Back", "Shoulders", "Arms", "Legs", "Abs", "Cardio"];
  return (
    <div className="screen">
      <Header
        title="Exercise library"
        subtitle="86 exercises"
        action={
          <button className="add-btn square" onClick={open}>
            <Icon name="plus" />
          </button>
        }
      />
      <div className="searchbar">
        <Icon name="search" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search exercises"
        />
        <button>
          <Icon name="filter" size={18} />
        </button>
      </div>
      <div className="chips horizontal-scroll">
        {cats.map((x) => (
          <button key={x} className={category === x ? "active" : ""} onClick={() => setCategory(x)}>
            {x}
          </button>
        ))}
      </div>
      <div className="exercise-grid">
        {list.map((e: any) => (
          <article className="exercise-card" key={e.name}>
            <div
              className="exercise-image"
              style={{
                backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(9,10,9,.85)), url("${photo}")`,
                backgroundPosition: e.pos,
              }}
            >
              <span>{e.difficulty}</span>
              <button>
                <Icon name="play" size={17} />
              </button>
            </div>
            <div>
              <small>{e.muscle}</small>
              <h3>{e.name}</h3>
              <p>
                <Icon name="dumbbell" size={14} />
                {e.equipment}
              </p>
            </div>
          </article>
        ))}
      </div>
      <button className="floating-add" onClick={open}>
        <Icon name="plus" /> Add exercise
      </button>
    </div>
  );
}

function Plans({ open, assign }: { open: () => void; assign: () => void }) {
  return (
    <div className="screen">
      <Header
        title="Workout plans"
        subtitle="12 plans · 8 active"
        action={
          <button className="add-btn square" onClick={open}>
            <Icon name="plus" />
          </button>
        }
      />
      <div className="plan-feature">
        <div>
          <span className="eyebrow">YOUR PROGRAMS</span>
          <h2>
            Plan, progress,
            <br />
            <em>perform.</em>
          </h2>
          <p>Build structured workouts that help every customer move forward.</p>
        </div>
        <div className="feature-art">
          <Icon name="clipboard" size={48} />
        </div>
      </div>
      <div className="segmented plan-tabs">
        <button className="active">All plans</button>
        <button>Active</button>
        <button>Drafts</button>
      </div>
      <div className="plans-list">
        {plans.map((p, i) => (
          <article className="plan-card" key={p.name}>
            <div className={`plan-number n${i}`}>0{i + 1}</div>
            <div className="plan-main">
              <span>{p.level}</span>
              <h3>{p.name}</h3>
              <p>
                <Icon name="clock" size={15} />
                {p.duration}
                <b /> <Icon name="dumbbell" size={15} />
                {p.count} exercises
              </p>
              <small>
                <span className="avatar-stack">AM</span> Assigned to {p.assigned} customers
              </small>
            </div>
            <button onClick={assign}>
              <Icon name="more" />
            </button>
          </article>
        ))}
      </div>
      <button className="floating-add" onClick={open}>
        <Icon name="plus" /> Create workout plan
      </button>
    </div>
  );
}

function Profile({ back, notify }: { back: () => void; notify: (m: string) => void }) {
  return (
    <div className="screen detail-screen">
      <Header
        title="Trainer profile"
        back={back}
        action={
          <button className="icon-btn" onClick={() => notify("Profile editing enabled")}>
            <Icon name="edit" />
          </button>
        }
      />
      <section className="profile-hero trainer-profile">
        <div className="avatar-wrap">
          <Avatar initials="AM" tone="lime" large />
          <span />
        </div>
        <h2>Alex Morgan</h2>
        <p>Certified Personal Trainer</p>
        <div className="profile-badge">
          <Icon name="award" size={16} /> 8 years experience
        </div>
      </section>
      <div className="profile-metrics">
        <div>
          <strong>24</strong>
          <span>Customers</span>
        </div>
        <div>
          <strong>12</strong>
          <span>Programs</span>
        </div>
        <div>
          <strong>4.9</strong>
          <span>Rating</span>
        </div>
      </div>
      <section className="detail-section">
        <h3>Specializations</h3>
        <div className="chips static">
          <span>Strength training</span>
          <span>Weight loss</span>
          <span>Mobility</span>
          <span>Sports performance</span>
        </div>
      </section>
      <section className="detail-section">
        <h3>Contact</h3>
        <div className="info-card">
          <p>
            <Icon name="mail" />
            <span>alex@fitconnect.co</span>
          </p>
          <p>
            <Icon name="phone" />
            <span>+1 415 905 2218</span>
          </p>
        </div>
      </section>
      <section className="settings-list">
        <button onClick={() => notify("Notification settings opened")}>
          <span>
            <Icon name="bell" />
          </span>
          <div>
            <strong>Notifications</strong>
            <small>Workout updates and reminders</small>
          </div>
          <Icon name="chevron" />
        </button>
        <button onClick={() => notify("Settings opened")}>
          <span>
            <Icon name="settings" />
          </span>
          <div>
            <strong>App settings</strong>
            <small>Preferences and privacy</small>
          </div>
          <Icon name="chevron" />
        </button>
        <button className="logout" onClick={() => notify("Logged out successfully")}>
          <span>
            <Icon name="logout" />
          </span>
          <div>
            <strong>Log out</strong>
          </div>
        </button>
      </section>
    </div>
  );
}

function BottomNav({ screen, go }: { screen: Screen; go: (s: Screen) => void }) {
  const items: { id: Screen; label: string; icon: IconName }[] = [
    { id: "dashboard", label: "Dashboard", icon: "home" },
    { id: "customers", label: "Customers", icon: "users" },
    { id: "exercises", label: "Exercises", icon: "dumbbell" },
    { id: "plans", label: "Plans", icon: "clipboard" },
  ];
  return (
    <nav className="bottom-nav">
      {items.map((x) => (
        <button key={x.id} className={screen === x.id ? "active" : ""} onClick={() => go(x.id)}>
          <span>
            <Icon name={x.icon} />
          </span>
          <small>{x.label}</small>
        </button>
      ))}
    </nav>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type={type} placeholder={placeholder} />
    </label>
  );
}

function ModalView({ type, close, step, setStep, notify, assign }: any) {
  if (type === "assign")
    return (
      <div className="modal-backdrop">
        <div className="sheet assign-sheet">
          <SheetHead title="Assign customers" sub="Strength Foundation" close={close} />
          <div className="sheet-body">
            <div className="searchbar">
              <Icon name="search" />
              <input placeholder="Search customers" />
            </div>
            <p className="form-label">SELECT CUSTOMERS</p>
            {customers.slice(0, 4).map((c, i) => (
              <label className="select-customer" key={c.id}>
                <Avatar initials={c.initials} tone={c.tone} />
                <div>
                  <strong>{c.name}</strong>
                  <span>{c.goal}</span>
                </div>
                <input type="checkbox" defaultChecked={i < 2} />
                <i>
                  <Icon name="check" size={15} />
                </i>
              </label>
            ))}
          </div>
          <div className="sheet-footer">
            <button className="primary-btn" onClick={() => notify("Plan assigned to 2 customers")}>
              Assign to 2 customers
            </button>
          </div>
        </div>
      </div>
    );

  if (type === "createPlan")
    return (
      <div className="modal-backdrop">
        <div className="sheet full-sheet">
          <SheetHead
            title={
              step === 1 ? "Create workout plan" : step === 2 ? "Build your workout" : "Review plan"
            }
            sub={`Step ${step} of 3`}
            close={close}
          />
          <div className="stepper">
            <i className="done" />
            <i className={step >= 2 ? "done" : ""} />
            <i className={step >= 3 ? "done" : ""} />
          </div>
          <div className="sheet-body">
            {step === 1 && (
              <>
                <h2>Start with the basics</h2>
                <p className="muted">Give your program a clear structure and goal.</p>
                <Field label="PLAN NAME" placeholder="e.g. Strength Foundation" />
                <div className="field-row">
                  <Field label="DURATION" placeholder="8 weeks" />
                  <Field label="LEVEL" placeholder="Intermediate" />
                </div>
                <label className="field">
                  <span>DESCRIPTION</span>
                  <textarea placeholder="Describe the focus and outcome of this plan..." rows={4} />
                </label>
                <p className="form-label">TRAINING DAYS</p>
                <div className="day-picker">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <button className={[0, 2, 4].includes(i) ? "active" : ""} key={i}>
                      {d}
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2>Monday · Upper body</h2>
                <p className="muted">3 exercises · Drag to reorder</p>
                {exercises.slice(0, 3).map((e, i) => (
                  <div className="builder-exercise" key={e.name}>
                    <Icon name="grip" />
                    <span
                      className="exercise-thumb"
                      style={{ backgroundImage: `url("${photo}")`, backgroundPosition: e.pos }}
                    />
                    <div>
                      <strong>{e.name}</strong>
                      <p>{i === 2 ? "3 sets × 12 reps" : "4 sets × 8 reps"} · 60s rest</p>
                    </div>
                    <button>
                      <Icon name="edit" size={17} />
                    </button>
                  </div>
                ))}
                <button className="outline-wide">
                  <Icon name="plus" /> Add exercise
                </button>
                <div className="tip">
                  <Icon name="bolt" />
                  <p>
                    <strong>Smart sequence</strong> Compound movements are placed first for better
                    performance.
                  </p>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="review-icon">
                  <Icon name="check" size={32} />
                </div>
                <h2 className="center">Your plan is ready</h2>
                <p className="muted center">Review the details before assigning it.</p>
                <div className="review-card">
                  <span>STRENGTH FOUNDATION</span>
                  <h3>3 training days per week</h3>
                  <div>
                    <p>
                      <strong>8</strong> weeks
                    </p>
                    <p>
                      <strong>12</strong> exercises
                    </p>
                    <p>
                      <strong>3</strong> days
                    </p>
                  </div>
                </div>
                <div className="summary-row">
                  <Icon name="calendar" />
                  <div>
                    <strong>Mon, Wed, Fri</strong>
                    <span>Training schedule</span>
                  </div>
                </div>
                <div className="summary-row">
                  <Icon name="target" />
                  <div>
                    <strong>Build strength</strong>
                    <span>Primary goal</span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="sheet-footer split">
            {step > 1 && (
              <button className="secondary-btn" onClick={() => setStep(step - 1)}>
                Back
              </button>
            )}
            <button
              className="primary-btn"
              onClick={() => (step < 3 ? setStep(step + 1) : assign())}
            >
              {step < 3 ? "Continue" : "Assign customers"}
              <Icon name="chevron" />
            </button>
          </div>
        </div>
      </div>
    );

  const exercise = type === "addExercise";
  return (
    <div className="modal-backdrop">
      <div className="sheet full-sheet">
        <SheetHead
          title={exercise ? "Add exercise" : "Add customer"}
          sub={exercise ? "Create a custom exercise" : "Grow your coaching roster"}
          close={close}
        />
        <div className="sheet-body">
          <div className="upload-zone">
            <span>
              <Icon name={exercise ? "play" : "users"} size={25} />
            </span>
            <strong>{exercise ? "Add demonstration media" : "Add profile photo"}</strong>
            <p>{exercise ? "Upload an image or video" : "JPG or PNG · Max 5 MB"}</p>
          </div>
          {exercise ? (
            <>
              <Field label="EXERCISE NAME" placeholder="e.g. Incline dumbbell press" />
              <label className="field">
                <span>DESCRIPTION</span>
                <textarea placeholder="What is this exercise best for?" rows={3} />
              </label>
              <div className="field-row">
                <Field label="MUSCLE GROUP" placeholder="Chest" />
                <Field label="DIFFICULTY" placeholder="Intermediate" />
              </div>
              <Field label="EQUIPMENT" placeholder="Dumbbells, bench" />
              <label className="field">
                <span>INSTRUCTIONS</span>
                <textarea placeholder="Add each movement cue on a new line..." rows={5} />
              </label>
            </>
          ) : (
            <>
              <Field label="FULL NAME" placeholder="Customer name" />
              <Field label="EMAIL" placeholder="name@email.com" type="email" />
              <Field label="PHONE" placeholder="+1 000 000 0000" />
              <div className="field-row">
                <Field label="DATE OF BIRTH" placeholder="MM / DD / YYYY" />
                <Field label="GENDER" placeholder="Select" />
              </div>
              <div className="field-row">
                <Field label="HEIGHT" placeholder="cm" />
                <Field label="WEIGHT" placeholder="kg" />
              </div>
              <Field label="FITNESS GOAL" placeholder="e.g. Build strength" />
              <Field label="EXPERIENCE" placeholder="Beginner" />
            </>
          )}
        </div>
        <div className="sheet-footer">
          <button
            className="primary-btn"
            onClick={() =>
              notify(exercise ? "Custom exercise added" : "Customer added successfully")
            }
          >
            {exercise ? "Save exercise" : "Add customer"}
            <Icon name="check" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SheetHead({ title, sub, close }: { title: string; sub: string; close: () => void }) {
  return (
    <div className="sheet-head">
      <div>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
      <button className="icon-btn" onClick={close}>
        <Icon name="close" />
      </button>
    </div>
  );
}

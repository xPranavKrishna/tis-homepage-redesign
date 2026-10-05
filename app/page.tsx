import { ArrowDownRight, ArrowUpRight, BookOpen, Dumbbell, HeartPulse, MapPin, Sparkles, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";

const heroImage = "https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp";
const sportsImage = "https://tis.edu.in/_next/static/media/archery.7a805345.png";

const sports = ["Archery", "Cycling", "Hockey", "Swimming", "Taekwondo", "Football", "Shooting Range", "Horse Riding", "Billiards", "Squash", "Volleyball", "Basketball", "Cricket", "Lawn Tennis", "Badminton", "Table Tennis"];

const stats = [
  { value: "22", label: "Acre pollution-free campus", icon: MapPin },
  { value: "16+", label: "Olympic sports", icon: Dumbbell },
  { value: "24×7", label: "Medical assistance", icon: HeartPulse },
  { value: "6:1", label: "Student teacher ratio", icon: Users },
];

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="hero">
        <div className="hero-texture" />
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <Reveal className="hero-copy">
          <p className="eyebrow">TULA'S INTERNATIONAL SCHOOL · DEHRADUN</p>
          <h1>LET&apos;S DO <em>it</em><br /><span>with Tulas</span></h1>
          <p className="hero-sub">A place where learning becomes an adventure, curiosity leads, creativity thrives, and every day opens a new possibility.</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Apply Now <ArrowUpRight size={18} /></a>
            <a className="btn btn-outline" href="#about">Explore TIS <ArrowDownRight size={18} /></a>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.12}>
          <img src={heroImage} alt="Tulas students playing basketball" />
        </Reveal>
        <div className="scroll-note"><ArrowDownRight size={18} /> Scroll to explore</div>
      </section>

      <section className="intro section" id="about">
        <Reveal className="section-kicker">01 · ABOUT TIS</Reveal>
        <Reveal className="intro-grid">
          <h2>More than a school.<br /><span>A place to belong.</span></h2>
          <div>
            <p className="lead">TIS is one of India&apos;s top boarding and day schools in Dehradun. Our CBSE curriculum combines academic excellence with holistic development and prepares students to become global leaders.</p>
            <p>Established in 2012 under the aegis of Rishabh Educational Trust, Tula&apos;s provides a nurturing environment where students can grow academically, socially and culturally.</p>
            <a className="text-link" href="https://tis.edu.in/" target="_blank" rel="noreferrer">Discover TIS <ArrowUpRight size={17} /></a>
          </div>
        </Reveal>
      </section>

      <section className="stats-section">
        <div className="section stats-inner">
          <Reveal className="stats-heading"><span>THE TULAS DIFFERENCE</span><h2>Built for growth.<br /><i>Designed for life.</i></h2></Reveal>
          <div className="stats-grid">
            {stats.map((s, i) => { const Icon = s.icon; return <Reveal key={s.label} delay={i * .08} className="stat-card"><Icon /><strong>{s.value}</strong><span>{s.label}</span></Reveal>; })}
          </div>
        </div>
      </section>

      <section className="academics section" id="academics">
        <Reveal className="section-kicker">02 · ACADEMICS</Reveal>
        <div className="split-grid">
          <Reveal><h2>Curiosity is<br /><span>the curriculum.</span></h2></Reveal>
          <Reveal delay={.1}><p className="lead">Our CBSE curriculum focuses on academic excellence, holistic development and preparing students for a changing world.</p><p>From modern learning spaces and laboratories to clubs, languages and practical learning, students are encouraged to question, experiment and build confidence.</p></Reveal>
        </div>
        <div className="feature-cards">
          <Reveal className="feature-card"><BookOpen /><h3>Academic Excellence</h3><p>Concept-driven learning supported by modern classrooms, laboratories and digital resources.</p></Reveal>
          <Reveal delay={.08} className="feature-card accent"><Sparkles /><h3>Holistic Development</h3><p>Learning extends beyond textbooks through arts, clubs, leadership and real-world experiences.</p></Reveal>
          <Reveal delay={.16} className="feature-card dark"><Users /><h3>Student Support</h3><p>A nurturing environment where teachers guide students to discover strengths and grow with confidence.</p></Reveal>
        </div>
      </section>

      <section className="boarding section" id="boarding">
        <Reveal className="boarding-copy"><span className="section-kicker light">03 · BOARDING LIFE</span><h2>Home away<br /><i>from home.</i></h2><p>Tula&apos;s creates a secure, comfortable boarding environment where students develop independence, friendships and life skills.</p><a className="btn btn-light" href="https://tis.edu.in/boarding-school/" target="_blank" rel="noreferrer">Explore Boarding <ArrowUpRight size={18} /></a></Reveal>
        <Reveal className="boarding-panel" delay={.12}><div className="panel-number">24×7</div><p>care, supervision and a community that helps students thrive.</p><div className="mini-row"><span>Residential campus</span><span>Student wellbeing</span></div></Reveal>
      </section>

      <section className="sports section" id="beyond">
        <div className="sports-top"><Reveal><span className="section-kicker">04 · BEYOND ACADEMICS</span><h2>Sports are not<br /><span>just a facility.</span></h2></Reveal><Reveal delay={.1}><p className="lead">At Tulas, sports are the foundation. 16+ sports bring joy, discipline, teamwork and confidence to everyday school life.</p></Reveal></div>
        <div className="sports-feature"><Reveal className="sports-image"><img src={sportsImage} alt="Tulas students practicing archery" /></Reveal><Reveal className="sports-list" delay={.08}><p className="sports-count">16+ SPORTS</p><div>{sports.map((sport) => <span key={sport}>{sport}</span>)}</div></Reveal></div>
      </section>

      <section className="story section" id="events">
        <Reveal><span className="section-kicker">05 · THE TULAS EXPERIENCE</span><h2>There is always<br /><span>something to discover.</span></h2></Reveal>
        <Reveal className="story-grid" delay={.1}><div className="story-big">“The secret to making school awesome? Making learning feel like an adventure.”</div><div><p>Students explore music, art, drama, clubs, sports and leadership alongside academics. Every experience is an opportunity to find a new interest and shape a future.</p><a className="text-link" href="https://tis.edu.in/beyond-academics/" target="_blank" rel="noreferrer">Explore beyond academics <ArrowUpRight size={17} /></a></div></Reveal>
      </section>

      <section className="testimonial">
        <Reveal><span className="section-kicker light">06 · FROM THE PARENTS</span><blockquote>“We have seen a remarkable improvement in our child&apos;s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student.”</blockquote><p>— Parent testimonial, Tula&apos;s International School</p></Reveal>
      </section>

      <section className="admission section" id="admission">
        <Reveal className="admission-card"><div><span className="section-kicker">07 · ADMISSIONS</span><h2>Ready to begin<br /><i>your Tulas journey?</i></h2><p>Admissions are open for the upcoming academic session. Explore the process, eligibility and application details.</p></div><a className="btn btn-red" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">Start Application <ArrowUpRight size={18} /></a></Reveal>
      </section>

      <footer className="footer" id="alumni">
        <div className="footer-main"><div><img src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" alt="Tula's International School" /><p>Modern education. Strong values. Endless opportunities.</p></div><div><h4>Explore</h4><a href="#about">About TIS</a><a href="#academics">Academics</a><a href="#boarding">Boarding Life</a><a href="#beyond">Beyond Academics</a></div><div><h4>Admissions</h4><a href="https://admission.tis.edu.in/">Apply Now</a><a href="https://tis.edu.in/admission-procedure/">Admission Procedure</a><a href="https://tis.edu.in/faq/">FAQ</a></div><div><h4>Contact</h4><p>Dhoolkot, P.O – Selaqui,<br />Chakrata Road, Dehradun-248011<br />Uttarakhand</p><p>+91-9837983791<br />info@tis.edu.in</p></div></div>
        <div className="footer-bottom"><span>© Tula&apos;s International School</span><span>Homepage redesign assessment</span></div>
      </footer>

      <a className="floating-apply" href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">APPLY<br />NOW</a>
      <a className="whatsapp" href="https://wa.me/919837983791" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
    </main>
  );
}

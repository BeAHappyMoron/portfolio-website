import { useEffect } from "react";
import React from "react";
import "./Skills.css";

const Skills = () => {

      // 🎇 Particle Background
      useEffect(() => {
        const canvas = document.getElementById('skills-bg');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    
        const particles = [];
        const particleCount = 120;
    
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
          });
        }
    
        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#0cc0df';
            ctx.fill();
    
            p.x += p.dx;
            p.y += p.dy;
    
            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
          });
          requestAnimationFrame(animate);
        }
    
        animate();
    
        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

const skills = [
  {
    title: "Development",
    items: [
      "Full-Stack Web Apps",
      "API Design & Integration",
      "Database Design & Management (SQL Server)",
      "Clean, Scalable Code",
      "Debugging (a.k.a. Detective Work)",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React & Modern JS",
      "HTML, CSS & Tailwind CSS",
      "Responsive Design",
      "CSS Animations & Transitions",
      "UI/UX Implementation",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js & Express",
      "Java & Android Development",
      "C# & .NET",
      "Python & PySpark",
      "API Development & Security",
    ],
  },
  {
    title: "Tools & Libraries",
    items: [
      "Git & GitHub",
      "VS Code, Visual Studio, WebStorm, PyCharm, Jupyter",
      "Pandas, NumPy, Matplotlib, Seaborn",
      "Agile Collaboration & Testing",
      "Deployment & Continuous Learning",
    ],
  },
];


  return (
    <div className="skills-section">
    <canvas id="skills-bg" className="skills-bg"></canvas>
      <h2 className="skills-title">&lt;skills & expertise /&gt;</h2>
      <h2 className="skills-subtitle">WHAT THE F**K CAN I DO?</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, GraduationCap, Code} from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  // Ensure page starts from top on load
  useEffect(() => {
    // Scroll to top immediately on component mount
    window.scrollTo(0, 0);
    
    // Also handle any hash in the URL
    if (window.location.hash) {
      // Clear the hash but don't scroll
      history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Smooth scroll function for navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer"
            >
              Tamzid
            </button>
            <div className="hidden md:flex space-x-8">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Achievements</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 dark:text-slate-400 font-medium"
                >
                  Hi, I am
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
                >
                  <span className="gradient-text">Tamzid Bin Tariq</span>
                </motion.h1>
                <motion.div
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-200"
                >
                  <span className="block">Computer Science Student</span>
                  <span className="block text-accent">& Software Developer</span>
                </motion.div>
              </div>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg"
              >
                I am a <span className="font-semibold text-accent">Competitive Programmer</span> and <span className="font-semibold text-accent-hover">MERN Stack Specialist</span> with a passion for building innovative solutions and solving complex problems.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
              >
                <MapPin size={20} />
                <span>Dhaka, Bangladesh</span>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link href="mailto:tamzidbintariq@gmail.com" className="btn-primary hover-scale flex items-center gap-2">
                  <Mail size={20} />
                  Get In Touch
                </Link>
                <Link href="https://www.linkedin.com/in/tamzid-bin-tariq-b78b61347/" className="btn-outline hover-scale flex items-center gap-2">
                  <Linkedin size={20} />
                  My LinkedIn
                </Link>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 pt-4"
              >
                <Link href="tel:+8801832855742" className="btn-outline hover-scale flex items-center gap-2">
                  <Phone size={18} />
                  <span className="text-sm">Call</span>
                </Link>
                <Link href="https://github.com/Tamzid-Tariq" className="btn-outline hover-scale flex items-center gap-2">
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </Link>
                <Link href="https://codeforces.com/profile/Tamzid_Tariq" className="btn-outline hover-scale flex items-center gap-2">
                  <Code size={18} />
                  <span className="text-sm">Codeforces</span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <img
                    src="/profile.jpg"
                    alt="Tamzid Bin Tariq"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
                    style={{ background: 'var(--accent)' }}
                    onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Tamzid+Bin+Tariq&background=6366f1&color=fff&size=400'; }}
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent to-secondary rounded-2xl flex items-center justify-center shadow-xl">
                    <Code className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Computer Science undergraduate at the University of Dhaka with strong foundation in competitive programming and full-stack web development. 
                Experienced in MERN stack technologies with proven track record in building scalable applications. Active contributor to programming communities 
                with leadership experience and passion for emerging technologies including Machine Learning and AI.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="card hover-lift">
                    <h4 className="font-semibold text-slate-900 dark:text-white">University of Dhaka</h4>
                    <p className="text-slate-600 dark:text-slate-300">Bachelor of Science in Computer Science & Engineering</p>
                    <p className="gradient-text font-semibold">CGPA: 3.63/4.0</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Oct 2022 - Present</p>
                  </div>
                  <div className="card hover-lift">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Notre Dame College, Dhaka</h4>
                    <p className="text-slate-600 dark:text-slate-300">Higher Secondary Certificate - Science</p>
                    <p className="gradient-text font-semibold">GPA: 5.0/5.0</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Jul 2019 - Dec 2021</p>
                  </div>
                  <div className="card hover-lift">
                    <h4 className="font-semibold text-slate-900 dark:text-white">St. Joseph Higher Secondary School</h4>
                    <p className="text-slate-600 dark:text-slate-300">Secondary School Certificate</p>
                    <p className="gradient-text font-semibold">GPA: 5.0/5.0</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Jan 2011 - Apr 2019</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Code className="text-blue-600" />
                  Coding Profiles
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="card hover-lift hover-glow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Code className="text-white" size={20} />
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Codeforces</h4>
                      </div>
                      <Link 
                        href="https://codeforces.com/profile/Tamzid_Tariq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2 flex items-center gap-2 hover-scale"
                      >
                        <span>View Profile</span>
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-slate-600 dark:text-slate-300 mb-1">Expert Level</p>
                        <p className="gradient-text font-semibold">1500+ Problems Solved</p>
                      </div>
                      <div className="badge badge-primary">Expert</div>
                    </div>
                  </div>

                  <div className="card hover-lift hover-glow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                          <Code className="text-white" size={20} />
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-lg">CodeChef</h4>
                      </div>
                      <Link 
                        href="https://www.codechef.com/users/tamzid_tariq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2 flex items-center gap-2 hover-scale"
                      >
                        <span>View Profile</span>
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-slate-600 dark:text-slate-300 mb-1">4 Star Rating</p>
                        <p className="gradient-text font-semibold">Active Competitor</p>
                      </div>
                      <div className="badge badge-secondary">4★</div>
                    </div>
                  </div>

                  <div className="card hover-lift hover-glow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                          <Code className="text-white" size={20} />
                        </div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-lg">AtCoder</h4>
                      </div>
                      <Link 
                        href="https://atcoder.jp/users/tamzid_bin_tariq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2 flex items-center gap-2 hover-scale"
                      >
                        <span>View Profile</span>
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-slate-600 dark:text-slate-300 mb-1">6 KYU • Rating: 871</p>
                        <p className="gradient-text font-semibold">Competitive Programmer</p>
                      </div>
                      <div className="badge badge-success">6 KYU</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              Technical Skills
            </motion.h2>
            <div className="space-y-6">
              {/* Skills by Expertise Level */}
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-xl text-center">Advanced (Professional Level)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {[
                      { name: 'C++', stars: 3 },
                      { name: 'MySQL', stars: 3 },
                      { name: 'Competitive Programming', stars: 3 }
                    ].map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover-scale card">
                        <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                        <div className="flex">
                          {[...Array(3)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < skill.stars ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-xl text-center">Intermediate (Project Experience)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {[
                      { name: 'React.js', stars: 2 },
                      { name: 'Node.js', stars: 2 },
                      { name: 'MongoDB', stars: 2 },
                      { name: 'PostgreSQL', stars: 2 },
                      { name: 'React Native', stars: 2 },
                      { name: 'AWS', stars: 2 },
                      { name: 'Firebase', stars: 2 },
                      { name: 'Git', stars: 2 }
                    ].map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover-scale card">
                        <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                        <div className="flex">
                          {[...Array(2)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < skill.stars ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-xl text-center">Beginner/Learning (Academic/Theoretical)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {[
                      { name: 'Java', stars: 1 },
                      { name: 'Python', stars: 1 },
                      { name: 'HTML5/CSS3', stars: 1 },
                      { name: 'TypeScript', stars: 1 },
                      { name: 'JavaScript (ES6+)', stars: 1 },
                      { name: 'Vue.js', stars: 1 },
                      { name: 'Angular', stars: 1 },
                      { name: 'Express.js', stars: 1 },
                      { name: 'Docker', stars: 1 }
                    ].map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover-scale card">
                        <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                        <div className="flex">
                          {[...Array(1)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < skill.stars ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Additional Specializations */}
              <motion.div variants={itemVariants} className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg max-w-4xl mx-auto">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-xl text-center">Core Specializations</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {['MERN Stack Development', 'Full-Stack Web Development', 'Mobile App Development', 'Algorithm Design & Optimization'].map((skill) => (
                    <span key={skill} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover-scale shadow-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              Work Experience
            </motion.h2>
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Executive Member</h3>
                    <p className="gradient-text font-medium">CSEDU Informatics Club, University of Dhaka</p>
                    <p className="text-slate-500 dark:text-slate-400">University of Dhaka</p>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm glow">
                    2023 - Present
                  </span>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Designed and implemented training programs for competitive programming, improving participant performance by 30%</li>
                  <li>• Mentored 20+ junior students in algorithm optimization and problem-solving techniques</li>
                  <li>• Collaborated with faculty to develop curriculum for programming workshops and contests</li>
                  <li>• Organized intra-university programming competitions with 100+ participants</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">School Prefect</h3>
                    <p className="gradient-text font-medium">St. Joseph Higher Secondary School</p>
                    <p className="text-slate-500 dark:text-slate-400">Leadership Position</p>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    2017 - 2019
                  </span>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Led student council initiatives and managed school events with 500+ student participation</li>
                  <li>• Demonstrated excellent communication skills through presentations to faculty and parents</li>
                  <li>• Developed leadership and teamwork abilities while maintaining academic excellence</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Living App - Home Rental Platform",
                  tech: "React Native, Node.js, MongoDB, Express.js",
                  description: "Developed cross-platform mobile application for home rental marketplace with secure authentication, real-time property search, and location-based services. Integrated payment gateway and push notifications for enhanced user experience.",
                  github: "https://github.com/TAUSEEF-01/LivingConnect"
                },
                {
                  title: "Restaurant Management System",
                  tech: "MySQL, PHP, HTML/CSS, JavaScript",
                  description: "Built comprehensive management system for restaurant operations and inventory tracking. Designed normalized database schema with optimized queries for improved performance and created responsive admin dashboard with real-time analytics.",
                  github: "https://github.com/Tamzid-Tariq/Restaurant-Management-System"
                },
                {
                  title: "Competitive Programming Solutions",
                  tech: "C++, Python, Data Structures, Algorithms",
                  description: "Collection of competitive programming solutions from various platforms including Codeforces and CodeChef. Demonstrates expertise in algorithm design and optimization techniques.",
                  github: "https://github.com/Tamzid-Tariq"
                },
                {
                  title: "Medwise - Medical Application",
                  tech: "MERN Stack, AI Chatbot, Medical Records",
                  description: "Comprehensive medical application providing detailed tracking of past diseases, checkups, and reports. Features AI chatbot for medical questions, complete medical history management, and secure patient data storage. Currently in development.",
                  github: "https://github.com/TAUSEEF-01/MedWise"
                },
                
                {
                  title: "Realtime Chat Application",
                  tech: "Node.js, Express.js, MongoDB, JWT",
                  description: "RESTful API for task management with user authentication, CRUD operations, and role-based access control. Includes comprehensive documentation and testing.",
                  github: "https://github.com/Tamzid-Tariq/Chatting-Application"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift"
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="gradient-text text-sm mb-3">{project.tech}</p>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline hover-scale inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center gradient-text mb-12"
            >
              Achievements
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  title: "Competitive Programming Excellence",
                  description: "Expert in Codeforces and 4 star in CodeChef with 1500+ problems solved overall. Demonstrates advanced problem-solving skills and algorithm optimization expertise."
                },
                {
                  title: "School Prefect Leadership Award",
                  description: "School Prefect Recognition for outstanding leadership and academic performance (2019). Led student council initiatives and managed large-scale school events."
                },
                {
                  title: "Mathematics Olympiad Participation",
                  description: "Participated in Mathematics Olympiad at District Level and Inter University Programming Competitions, showcasing strong mathematical foundation and competitive programming skills."
                },
                {
                  title: "Academic Excellence",
                  description: "Maintained consistently high academic performance with perfect GPAs in both SSC (5.0/5.0) and HSC (5.0/5.0), and strong CGPA (3.63/4.0) in university."
                },
                {
                  title: "Technical Leadership",
                  description: "Executive Member of CSEDU Informatics Club, mentoring 20+ junior students and organizing inter-university programming competitions with 100+ participants."
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover-lift flex items-start gap-4"
                >
                  <Award className="text-yellow-500 mt-1 flex-shrink-0 glow" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold gradient-text mb-8"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              I&lsquo;m always open to discussing new opportunities, interesting projects, or collaborating on innovative solutions. Let&lsquo;s connect and explore how we can work together!
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="mailto:tamzidbintariq@gmail.com"
                className="btn-primary hover-scale flex items-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/tamzid-bin-tariq-b78b61347/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover-scale flex items-center gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Tamzid Bin Tariq. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
# learn-coding-zambia 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn Coding for Beginners - Zambia</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
            --primary: #006600; /* Zambia green */
            --secondary: #D21034; /* Zambia red */
            --accent: #FFD700; /* Zambia gold */
            --dark: #1A2B3C;
            --light: #F8F9FA;
            --gray: #6C757D;
            --light-gray: #E9ECEF;
            --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }
        
        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        header {
            background-color: white;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .logo-icon {
            color: var(--primary);
            font-size: 1.8rem;
        }
        
        .logo h1 {
            font-size: 1.5rem;
            color: var(--primary);
        }
        
        .logo span {
            color: var(--secondary);
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }
        
        nav a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 600;
            transition: var(--transition);
        }
        
        nav a:hover {
            color: var(--primary);
        }
        
        .auth-buttons {
            display: flex;
            gap: 10px;
        }
        
        .btn {
            padding: 8px 20px;
            border-radius: 5px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            border: none;
        }
        
        .btn-outline {
            background-color: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }
        
        .btn-outline:hover {
            background-color: var(--primary);
            color: white;
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: #005000;
        }
        
        .btn-secondary {
            background-color: var(--secondary);
            color: white;
        }
        
        .btn-secondary:hover {
            background-color: #B0102C;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(26, 43, 60, 0.9), rgba(26, 43, 60, 0.9)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .hero h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }
        
        /* Mission Section */
        .mission {
            padding: 60px 0;
            background-color: white;
        }
        
        .mission-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .mission h2 {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .mission p {
            font-size: 1.1rem;
            margin-bottom: 15px;
            color: var(--gray);
        }
        
        .highlight {
            color: var(--secondary);
            font-weight: 600;
        }
        
        /* Courses Section */
        .courses {
            padding: 60px 0;
            background-color: var(--light-gray);
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .section-title h2 {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 10px;
        }
        
        .section-title p {
            color: var(--gray);
            max-width: 600px;
            margin: 0 auto;
        }
        
        .course-filters {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 30px;
        }
        
        .filter-btn {
            padding: 8px 20px;
            background-color: white;
            border: 1px solid var(--gray);
            border-radius: 30px;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .filter-btn.active, .filter-btn:hover {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        
        .course-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
        }
        
        .course-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }
        
        .course-card:hover {
            transform: translateY(-10px);
        }
        
        .course-header {
            padding: 20px;
            background-color: var(--primary);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .course-icon {
            font-size: 1.8rem;
        }
        
        .course-level {
            background-color: var(--accent);
            color: var(--dark);
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        
        .course-content {
            padding: 20px;
        }
        
        .course-content h3 {
            font-size: 1.3rem;
            margin-bottom: 10px;
            color: var(--dark);
        }
        
        .course-content p {
            color: var(--gray);
            margin-bottom: 15px;
            font-size: 0.95rem;
        }
        
        .course-stats {
            display: flex;
            justify-content: space-between;
            color: var(--gray);
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        
        .course-progress {
            height: 6px;
            background-color: var(--light-gray);
            border-radius: 3px;
            margin-bottom: 15px;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background-color: var(--primary);
            width: 0%;
            transition: width 1s ease;
        }
        
        /* AI Chatbot Section */
        .ai-section {
            padding: 60px 0;
            background-color: white;
        }
        
        .ai-container {
            display: flex;
            align-items: center;
            gap: 40px;
        }
        
        .ai-content {
            flex: 1;
        }
        
        .ai-visual {
            flex: 1;
            background-color: var(--light-gray);
            border-radius: 10px;
            padding: 30px;
            text-align: center;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .ai-visual h3 {
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .ai-visual p {
            margin-bottom: 30px;
        }
        
        .chatbot-icon {
            font-size: 4rem;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        /* Analytics Section */
        .analytics {
            padding: 60px 0;
            background-color: var(--light-gray);
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }
        
        .stat-card {
            background-color: white;
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            box-shadow: var(--shadow);
        }
        
        .stat-icon {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 15px;
        }
        
        .stat-number {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--dark);
            margin-bottom: 10px;
        }
        
        .stat-text {
            color: var(--gray);
        }
        
        /* Community Section */
        .community {
            padding: 60px 0;
            background-color: white;
        }
        
        .community-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 60px 0 30px;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-col h3 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: var(--accent);
        }
        
        .footer-col ul {
            list-style: none;
        }
        
        .footer-col ul li {
            margin-bottom: 10px;
        }
        
        .footer-col a {
            color: #ddd;
            text-decoration: none;
            transition: var(--transition);
        }
        
        .footer-col a:hover {
            color: var(--accent);
        }
        
        .copyright {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #aaa;
            font-size: 0.9rem;
        }
        
        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 2000;
            justify-content: center;
            align-items: center;
        }
        
        .modal-content {
            background-color: white;
            width: 90%;
            max-width: 500px;
            border-radius: 10px;
            overflow: hidden;
            animation: modalFade 0.3s;
        }
        
        @keyframes modalFade {
            from {opacity: 0; transform: translateY(-50px);}
            to {opacity: 1; transform: translateY(0);}
        }
        
        .modal-header {
            background-color: var(--primary);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            font-size: 1.5rem;
        }
        
        .close-modal {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .modal-body {
            padding: 30px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .form-control {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
            .ai-container {
                flex-direction: column;
            }
            
            .header-content {
                flex-direction: column;
                gap: 20px;
            }
            
            nav ul {
                flex-wrap: wrap;
                justify-content: center;
            }
        }
        
        @media (max-width: 768px) {
            .hero h2 {
                font-size: 2rem;
            }
            
            .course-grid {
                grid-template-columns: 1fr;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-code logo-icon"></i>
                    <h1>Learn<span>Coding</span></h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#ai">AI Assistant</a></li>
                        <li><a href="#analytics">Analytics</a></li>
                        <li><a href="#community">Community</a></li>
                    </ul>
                </nav>
                <div class="auth-buttons">
                    <button class="btn btn-outline" id="loginBtn">Login</button>
                    <button class="btn btn-primary" id="signupBtn">Sign Up</button>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h2>Welcome Zambian Coders</h2>
            <p>Discover the real secret behind coding. We start with the most difficult concepts to challenge your thinking and build true problem-solving skills. This is not just about syntax - it's about understanding technology at its core.</p>
            <p><strong>Our vision:</strong> To create a community rich with technology information where Zambian people can master the art of coding and become global tech leaders.</p>
            <button class="btn btn-secondary" style="margin-top: 20px;">Start Learning Now</button>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
        <div class="container">
            <div class="mission-content">
                <h2>Our Approach</h2>
                <p>Unlike traditional coding platforms, we believe in challenging you from day one. We start with complex concepts like <span class="highlight">algorithms, data structures, and design patterns</span> before moving to syntax.</p>
                <p>Why? Because in Zambia, we need thinkers, not just coders. We need problem-solvers who can create solutions for our unique challenges.</p>
                <p>Our courses are designed to push you beyond your comfort zone, preparing you for real-world software development from the very beginning.</p>
            </div>
        </div>
    </section>

    <!-- Courses Section -->
    <section class="courses" id="courses">
        <div class="container">
            <div class="section-title">
                <h2>Advanced Coding Courses</h2>
                <p>We start with challenging concepts to build true understanding. All courses are completely free for Zambian learners.</p>
            </div>
            
            <div class="course-filters">
                <button class="filter-btn active" data-filter="all">All Courses</button>
                <button class="filter-btn" data-filter="beginner">Beginner</button>
                <button class="filter-btn" data-filter="intermediate">Intermediate</button>
                <button class="filter-btn" data-filter="advanced">Advanced</button>
            </div>
            
            <div class="course-grid" id="courseContainer">
                <!-- Courses will be dynamically loaded here -->
            </div>
        </div>
    </section>

    <!-- AI Assistant Section -->
    <section class="ai-section" id="ai">
        <div class="container">
            <div class="section-title">
                <h2>AI-Powered Learning Assistant</h2>
                <p>Get personalized help with our AI chatbot designed specifically for Zambian learners</p>
            </div>
            
            <div class="ai-container">
                <div class="ai-content">
                    <h3>Intelligent Coding Support</h3>
                    <p>Our AI assistant is trained to understand the unique challenges faced by Zambian coders. It can help you with:</p>
                    <ul style="padding-left: 20px; margin-top: 15px;">
                        <li>Debugging your code in real-time</li>
                        <li>Explaining complex concepts in simple terms</li>
                        <li>Providing Zambian context to coding problems</li>
                        <li>Suggesting optimizations for your projects</li>
                        <li>Preparing you for technical interviews</li>
                    </ul>
                    <p style="margin-top: 20px;">The chatbot learns from your progress and adapts to your learning style, providing increasingly challenging problems as you improve.</p>
                    <button class="btn btn-primary" id="chatbotBtn" style="margin-top: 20px;">Try AI Assistant (Coming Soon)</button>
                </div>
                
                <div class="ai-visual">
                    <div class="chatbot-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>AI Chatbot Preview</h3>
                    <p>Our intelligent assistant will be available 24/7 to answer your coding questions and provide personalized learning paths.</p>
                    <div id="chatbotDemo" style="background-color: white; padding: 15px; border-radius: 8px; text-align: left; margin-top: 20px;">
                        <p><strong>AI:</strong> Hello! I'm here to help you understand recursion with a Zambian example. Think of a traditional chief's council where...</p>
                        <p><strong>You:</strong> How does this apply to sorting algorithms?</p>
                        <p><strong>AI:</strong> Great question! Let me explain with a market sorting analogy...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Analytics Section -->
    <section class="analytics" id="analytics">
        <div class="container">
            <div class="section-title">
                <h2>Learning Analytics</h2>
                <p>Track your progress with our visualization tools and analytics dashboard</p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="stat-number" id="progressStat">0%</div>
                    <div class="stat-text">Overall Progress</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="stat-number" id="hoursStat">0</div>
                    <div class="stat-text">Hours of Coding</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-code-branch"></i>
                    </div>
                    <div class="stat-number" id="projectsStat">0</div>
                    <div class="stat-text">Projects Completed</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-number">1,250+</div>
                    <div class="stat-text">Zambian Learners</div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <button class="btn btn-secondary" id="viewAnalyticsBtn">View Detailed Analytics</button>
            </div>
        </div>
    </section>

    <!-- Community Section -->
    <section class="community" id="community">
        <div class="container">
            <div class="community-content">
                <h2>Join the Zambian Coding Community</h2>
                <p>Connect with fellow Zambian coders, share projects, collaborate on solutions, and grow together. We're building a network of technology innovators across all provinces.</p>
                <p>Our community features include:</p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin: 30px 0;">
                    <span class="filter-btn" style="background-color: var(--light-gray);">Project Collaboration</span>
                    <span class="filter-btn" style="background-color: var(--light-gray);">Code Reviews</span>
                    <span class="filter-btn" style="background-color: var(--light-gray);">Monthly Challenges</span>
                    <span class="filter-btn" style="background-color: var(--light-gray);">Local Hackathons</span>
                    <span class="filter-btn" style="background-color: var(--light-gray);">Mentorship Program</span>
                </div>
                <button class="btn btn-primary">Join Community Forum</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>Learn Coding Zambia</h3>
                    <p>Empowering Zambian minds through advanced coding education. We believe in challenging thinkers to become creators.</p>
                    <p style="margin-top: 15px;"><i class="fas fa-map-marker-alt"></i> For all Zambians, by Zambians</p>
                </div>
                
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#ai">AI Assistant</a></li>
                        <li><a href="#analytics">Analytics</a></li>
                        <li><a href="#community">Community</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h3>Courses</h3>
                    <ul>
                        <li><a href="#" data-course="html">HTML</a></li>
                        <li><a href="#" data-course="css">CSS</a></li>
                        <li><a href="#" data-course="javascript">JavaScript</a></li>
                        <li><a href="#" data-course="python">Python</a></li>
                        <li><a href="#" data-course="kotlin">Kotlin</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h3>Contact & Future Features</h3>
                    <p>Future updates will include:</p>
                    <ul>
                        <li>AI Chatbot Integration</li>
                        <li>Advanced Analytics Dashboard</li>
                        <li>Mobile Application</li>
                        <li>Live Collaboration Tools</li>
                        <li>Zambian Tech Job Board</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <!-- UPDATED: Changed from 2023 to 2026 -->
                <p>&copy; 2026 Learn Coding for Beginners - Zambia. All rights reserved. | Designed for Zambian Coders</p>
                <p style="margin-top: 10px;">The secret to coding is not in memorizing syntax, but in understanding how to solve problems creatively.</p>
            </div>
        </div>
    </footer>

    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Login to Your Account</h3>
                <button class="close-modal" id="closeLogin">&times;</button>
            </div>
            <div class="modal-body">
                <form id="loginForm">
                    <div class="form-group">
                        <label for="loginEmail">Email Address</label>
                        <input type="email" id="loginEmail" class="form-control" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label for="loginPassword">Password</label>
                        <input type="password" id="loginPassword" class="form-control" placeholder="Enter your password" required>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Login</button>
                </form>
                <p style="text-align: center; margin-top: 20px;">Don't have an account? <a href="#" id="switchToSignup">Sign up here</a></p>
            </div>
        </div>
    </div>

    <!-- Signup Modal -->
    <div class="modal" id="signupModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Create Your Account</h3>
                <button class="close-modal" id="closeSignup">&times;</button>
            </div>
            <div class="modal-body">
                <form id="signupForm">
                    <div class="form-group">
                        <label for="signupName">Full Name</label>
                        <input type="text" id="signupName" class="form-control" placeholder="Enter your full name" required>
                    </div>
                    <div class="form-group">
                        <label for="signupEmail">Email Address</label>
                        <input type="email" id="signupEmail" class="form-control" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label for="signupPassword">Password</label>
                        <input type="password" id="signupPassword" class="form-control" placeholder="Create a password" required>
                    </div>
                    <div class="form-group">
                        <label for="signupProvince">Province (Zambia)</label>
                        <select id="signupProvince" class="form-control" required>
                            <option value="">Select your province</option>
                            <option value="lusaka">Lusaka</option>
                            <option value="copperbelt">Copperbelt</option>
                            <option value="southern">Southern</option>
                            <option value="northern">Northern</option>
                            <option value="muchinga">Muchinga</option>
                            <option value="eastern">Eastern</option>
                            <option value="western">Western</option>
                            <option value="northwestern">Northwestern</option>
                            <option value="luapula">Luapula</option>
                            <option value="central">Central</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Create Account</button>
                </form>
                <p style="text-align: center; margin-top: 20px;">Already have an account? <a href="#" id="switchToLogin">Login here</a></p>
            </div>
        </div>
    </div>

    <script>
        // Course Data
        const courses = [
            {
                id: 1,
                title: "HTML: Semantic Web & Accessibility",
                description: "Start with advanced HTML5 semantic elements, ARIA roles, and creating accessible web content for all users.",
                icon: "fab fa-html5",
                level: "advanced",
                language: "html",
                progress: 30,
                lessons: 12,
                students: 850
            },
            {
                id: 2,
                title: "CSS: Layout Systems & Animations",
                description: "Master CSS Grid, Flexbox, custom properties, and complex animations before learning basic styling.",
                icon: "fab fa-css3-alt",
                level: "advanced",
                language: "css",
                progress: 20,
                lessons: 15,
                students: 720
            },
            {
                id: 3,
                title: "JavaScript: Algorithms & Design Patterns",
                description: "Begin with algorithms, data structures, and design patterns before basic JavaScript syntax.",
                icon: "fab fa-js",
                level: "advanced",
                language: "javascript",
                progress: 45,
                lessons: 20,
                students: 950
            },
            {
                id: 4,
                title: "Python: Data Structures & OOP",
                description: "Start with object-oriented programming, data structures, and algorithms in Python.",
                icon: "fab fa-python",
                level: "intermediate",
                language: "python",
                progress: 60,
                lessons: 18,
                students: 1100
            },
            {
                id: 5,
                title: "Kotlin: Android Architecture",
                description: "Learn Android app architecture, MVVM pattern, and Kotlin coroutines before basic syntax.",
                icon: "fas fa-mobile-alt",
                level: "intermediate",
                language: "kotlin",
                progress: 10,
                lessons: 14,
                students: 420
            },
            {
                id: 6,
                title: "Lua: Game Development Patterns",
                description: "Start with game development patterns and Lua scripting for game engines.",
                icon: "fas fa-gamepad",
                level: "intermediate",
                language: "lua",
                progress: 5,
                lessons: 10,
                students: 310
            },
            {
                id: 7,
                title: "Scratch: Computational Thinking",
                description: "Begin with computational thinking concepts, problem decomposition, and algorithm design.",
                icon: "fas fa-puzzle-piece",
                level: "beginner",
                language: "scratch",
                progress: 80,
                lessons: 8,
                students: 650
            },
            {
                id: 8,
                title: "XML: Data Modeling & Transformation",
                description: "Master XML schema design, XSLT transformations, and data modeling concepts.",
                icon: "fas fa-code",
                level: "advanced",
                language: "xml",
                progress: 25,
                lessons: 11,
                students: 380
            }
        ];

        // DOM Elements
        const courseContainer = document.getElementById('courseContainer');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeSignup = document.getElementById('closeSignup');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const progressStat = document.getElementById('progressStat');
        const hoursStat = document.getElementById('hoursStat');
        const projectsStat = document.getElementById('projectsStat');
        const chatbotBtn = document.getElementById('chatbotBtn');
        const viewAnalyticsBtn = document.getElementById('viewAnalyticsBtn');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Load courses
            displayCourses(courses);
            
            // Initialize stats with animation
            animateStats();
            
            // Set up event listeners
            setupEventListeners();
            
            // Display current year in console for verification
            console.log("Platform launched in 2026 - Current date: January 15, 2026");
        });

        // Display courses
        function displayCourses(coursesToShow) {
            courseContainer.innerHTML = '';
            
            coursesToShow.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';
                courseCard.setAttribute('data-level', course.level);
                courseCard.setAttribute('data-language', course.language);
                
                courseCard.innerHTML = `
                    <div class="course-header">
                        <i class="${course.icon} course-icon"></i>
                        <span class="course-level">${course.level.toUpperCase()}</span>
                    </div>
                    <div class="course-content">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <div class="course-stats">
                            <span><i class="fas fa-book-open"></i> ${course.lessons} lessons</span>
                            <span><i class="fas fa-users"></i> ${course.students} students</span>
                        </div>
                        <div class="course-progress">
                            <div class="progress-bar" data-progress="${course.progress}"></div>
                        </div>
                        <button class="btn btn-outline" style="width: 100%;" onclick="startCourse(${course.id})">Continue Learning</button>
                    </div>
                `;
                
                courseContainer.appendChild(courseCard);
            });
            
            // Animate progress bars
            setTimeout(() => {
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = `${progress}%`;
                });
            }, 100);
        }

        // Filter courses
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                if (filter === 'all') {
                    displayCourses(courses);
                } else {
                    const filteredCourses = courses.filter(course => course.level === filter);
                    displayCourses(filteredCourses);
                }
            });
        });

        // Animate statistics
        function animateStats() {
            // Progress stat
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 1;
                progressStat.textContent = `${progress}%`;
                
                if (progress >= 42) {
                    clearInterval(progressInterval);
                }
            }, 30);
            
            // Hours stat
            let hours = 0;
            const hoursInterval = setInterval(() => {
                hours += 2;
                hoursStat.textContent = hours;
                
                if (hours >= 86) {
                    clearInterval(hoursInterval);
                }
            }, 40);
            
            // Projects stat
            let projects = 0;
            const projectsInterval = setInterval(() => {
                projects += 1;
                projectsStat.textContent = projects;
                
                if (projects >= 7) {
                    clearInterval(projectsInterval);
                }
            }, 150);
        }

        // Setup event listeners
        function setupEventListeners() {
            // Modal controls
            loginBtn.addEventListener('click', () => {
                loginModal.style.display = 'flex';
                signupModal.style.display = 'none';
            });
            
            signupBtn.addEventListener('click', () => {
                signupModal.style.display = 'flex';
                loginModal.style.display = 'none';
            });
            
            closeLogin.addEventListener('click', () => {
                loginModal.style.display = 'none';
            });
            
            closeSignup.addEventListener('click', () => {
                signupModal.style.display = 'none';
            });
            
            switchToSignup.addEventListener('click', (e) => {
                e.preventDefault();
                loginModal.style.display = 'none';
                signupModal.style.display = 'flex';
            });
            
            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                signupModal.style.display = 'none';
                loginModal.style.display = 'flex';
            });
            
            // Close modals when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === loginModal) {
                    loginModal.style.display = 'none';
                }
                if (e.target === signupModal) {
                    signupModal.style.display = 'none';
                }
            });
            
            // Form submissions
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value;
                alert(`Login functionality would be implemented with backend.\nEmail: ${email}`);
                loginModal.style.display = 'none';
            });
            
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('signupName').value;
                const province = document.getElementById('signupProvince').value;
                alert(`Account creation would be implemented with backend.\nWelcome ${name} from ${province} province!`);
                signupModal.style.display = 'none';
            });
            
            // Feature buttons
            chatbotBtn.addEventListener('click', () => {
                alert("AI Chatbot feature coming soon! This will be integrated with a backend AI service to provide personalized coding assistance.");
            });
            
            viewAnalyticsBtn.addEventListener('click', () => {
                alert("Detailed analytics dashboard coming soon! This will include:\n- Progress tracking\n- Skill assessment\n- Learning pace analysis\n- Comparison with peers\n- Personalized recommendations");
            });
            
            // Course links in footer
            document.querySelectorAll('[data-course]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const courseLanguage = link.getAttribute('data-course');
                    const course = courses.find(c => c.language === courseLanguage);
                    
                    if (course) {
                        // Scroll to courses and filter by this language
                        document.querySelector(`[data-filter="all"]`).click();
                        document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
                        
                        // Highlight the course
                        setTimeout(() => {
                            const courseCard = document.querySelector(`[data-language="${courseLanguage}"]`);
                            if (courseCard) {
                                courseCard.style.boxShadow = '0 5px 20px rgba(0, 102, 0, 0.5)';
                                courseCard.style.border = '2px solid var(--primary)';
                                
                                setTimeout(() => {
                                    courseCard.style.boxShadow = 'var(--shadow)';
                                    courseCard.style.border = 'none';
                                }, 3000);
                            }
                        }, 500);
                    }
                });
            });
        }

        // Start course function
        function startCourse(courseId) {
            const course = courses.find(c => c.id === courseId);
            if (course) {
                alert(`Starting "${course.title}"\n\nThis would redirect to the course page with lessons, exercises, and projects.\n\nOur approach: We start with the most challenging concepts to build deep understanding.`);
                
                // Update progress for demo purposes
                const randomIncrement = Math.floor(Math.random() * 5) + 1;
                const newProgress = Math.min(course.progress + randomIncrement, 100);
                
                // Find and update the progress bar
                const courseCards = document.querySelectorAll('.course-card');
                courseCards.forEach(card => {
                    const header = card.querySelector('.course-header');
                    if (header && header.querySelector(`.${course.icon}`)) {
                        const progressBar = card.querySelector('.progress-bar');
                        const currentProgress = parseInt(progressBar.getAttribute('data-progress'));
                        const updatedProgress = Math.min(currentProgress + randomIncrement, 100);
                        
                        progressBar.setAttribute('data-progress', updatedProgress);
                        progressBar.style.width = `${updatedProgress}%`;
                        
                        // Update overall progress stat
                        const currentOverall = parseInt(progressStat.textContent);
                        if (currentOverall < 100) {
                            progressStat.textContent = `${Math.min(currentOverall + 1, 100)}%`;
                        }
                    }
                });
            }
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>

import streamlit as st
import requests
from PIL import Image
import base64
from io import BytesIO

# Page configuration
st.set_page_config(
    page_title="Rudra Vaishnav - Portfolio",
    page_icon="👨‍💻",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS
st.markdown("""
<style>
    .main-header {
        text-align: center;
        color: #2563eb;
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    .sub-header {
        text-align: center;
        color: #64748b;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    .section-header {
        color: #1e40af;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 3rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #3b82f6;
        padding-bottom: 0.5rem;
    }
    .skill-tag {
        background-color: #dbeafe;
        color: #1e40af;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        margin: 0.25rem;
        display: inline-block;
    }
    .project-card {
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem 0;
        background-color: #f9fafb;
    }
    .contact-info {
        background-color: #dbeafe;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 1rem 0;
    }
    .experience-card {
        border-left: 4px solid #3b82f6;
        padding-left: 1rem;
        margin: 1rem 0;
        background-color: #f8fafc;
        border-radius: 0.5rem;
        padding: 1rem;
    }
</style>
""", unsafe_allow_html=True)

def fetch_github_repos(username):
    """Fetch GitHub repositories for a user"""
    try:
        response = requests.get(f"https://api.github.com/users/{username}/repos?sort=updated&per_page=5")
        if response.status_code == 200:
            return response.json()
        else:
            return []
    except:
        return []

def main():
    # Hero Section
    st.markdown('<div class="main-header">Hi, I\'m Rudra Vaishnav 👨‍💻</div>', unsafe_allow_html=True)
    st.markdown('<div class="sub-header">Software Developer & Unreal Engine Developer</div>', unsafe_allow_html=True)
    
    # Introduction
    st.markdown("""
    <div style="text-align: center; font-size: 1.1rem; color: #475569; max-width: 800px; margin: 0 auto;">
        Passionate about creating innovative solutions and immersive experiences. 
        Currently interning at Narb and Escape, building the future of technology.
    </div>
    """, unsafe_allow_html=True)
    
    # Contact buttons
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown('<a href="https://github.com/Rudravaish" target="_blank" style="text-decoration: none;"><button style="background-color: #3b82f6; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.5rem; cursor: pointer;">🐙 GitHub</button></a>', unsafe_allow_html=True)
    with col2:
        st.markdown('<a href="https://www.linkedin.com/in/rudra-vaishnav/" target="_blank" style="text-decoration: none;"><button style="background-color: #0077b5; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.5rem; cursor: pointer;">💼 LinkedIn</button></a>', unsafe_allow_html=True)
    with col3:
        st.markdown('<a href="https://drive.google.com/drive/u/3/home" target="_blank" style="text-decoration: none;"><button style="background-color: #059669; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.5rem; cursor: pointer;">📄 Resume</button></a>', unsafe_allow_html=True)

    # About Section
    st.markdown('<div class="section-header">About Me</div>', unsafe_allow_html=True)
    
    col1, col2 = st.columns([2, 1])
    with col1:
        st.markdown("""
        I'm a passionate software developer with a focus on creating innovative solutions and immersive experiences. 
        My journey in technology has led me to work with cutting-edge tools and frameworks, from web development to game engines.
        
        Currently pursuing dual internships, I'm gaining hands-on experience in both traditional software development and 
        emerging technologies like Unreal Engine development. I believe in continuous learning and applying new technologies 
        to solve real-world problems.
        
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working 
        on personal projects that challenge my skills and creativity.
        """)
    
    with col2:
        st.markdown("""
        <div style="background-color: #f1f5f9; padding: 1rem; border-radius: 0.5rem;">
            <h3>Quick Facts</h3>
            <p><strong>📍 Location:</strong> California, United States</p>
            <p><strong>💼 Status:</strong> Open to Opportunities</p>
            <p><strong>🎓 Education:</strong> Purdue University - Computer Engineering</p>
            <p><strong>❤️ Interests:</strong> AI, Gaming, Web3</p>
        </div>
        """, unsafe_allow_html=True)

    # Experience Section
    st.markdown('<div class="section-header">Work Experience</div>', unsafe_allow_html=True)
    
    # Narb Technology
    st.markdown("""
    <div class="experience-card">
        <h3>💻 Software Developer Intern</h3>
        <h4 style="color: #3b82f6;">Narb Technology</h4>
        <p><em>2025 - Present</em></p>
        <p>Working on innovative software solutions and contributing to cutting-edge projects in a dynamic tech environment.</p>
        <p><strong>Skills:</strong> Python, JavaScript, React, Node.js</p>
        <a href="https://www.linkedin.com/company/narbtechnology/posts/?feedView=all" target="_blank">🔗 View Company</a>
    </div>
    """, unsafe_allow_html=True)
    
    # Escape
    st.markdown("""
    <div class="experience-card">
        <h3>🎮 Unreal Engine Developer Intern</h3>
        <h4 style="color: #3b82f6;">Escape</h4>
        <p><em>2025 - Present</em></p>
        <p>Developing immersive experiences and interactive applications using Unreal Engine, focusing on cutting-edge gaming and visualization technologies.</p>
        <p><strong>Skills:</strong> Unreal Engine, C++, Blueprints, 3D Graphics</p>
        <a href="https://www.linkedin.com/company/escapeappai/posts/?feedView=all" target="_blank">🔗 View Company</a>
    </div>
    """, unsafe_allow_html=True)

    # Projects Section
    st.markdown('<div class="section-header">Featured Projects</div>', unsafe_allow_html=True)
    
    with st.spinner("Loading GitHub repositories..."):
        repos = fetch_github_repos("Rudravaish")
    
    if repos:
        for repo in repos:
            st.markdown(f"""
            <div class="project-card">
                <h3>{repo['name']}</h3>
                <p>{repo.get('description', 'No description available')}</p>
                <p><strong>Language:</strong> {repo.get('language', 'Not specified')}</p>
                <p><strong>Stars:</strong> ⭐ {repo['stargazers_count']}</p>
                <a href="{repo['html_url']}" target="_blank">🔗 View on GitHub</a>
                {f'<a href="{repo["homepage"]}" target="_blank" style="margin-left: 1rem;">🌐 Live Demo</a>' if repo.get('homepage') else ''}
            </div>
            """, unsafe_allow_html=True)
    else:
        st.info("Unable to load GitHub repositories. Please check your internet connection.")
        st.markdown('<a href="https://github.com/Rudravaish" target="_blank">🔗 View GitHub Profile</a>', unsafe_allow_html=True)

    # Skills Section
    st.markdown('<div class="section-header">Skills & Technologies</div>', unsafe_allow_html=True)
    
    skills_data = {
        "Programming Languages": ["Python", "JavaScript", "TypeScript", "C++", "Java"],
        "Web Development": ["React", "Node.js", "Express.js", "Flask", "HTML/CSS"],
        "Game Development": ["Unreal Engine", "Blueprints", "3D Graphics", "Game Design"],
        "Database & Cloud": ["MongoDB", "PostgreSQL", "AWS", "Firebase"],
        "Tools & Frameworks": ["Git", "Docker", "VS Code", "Postman"],
        "AI & Machine Learning": ["TensorFlow", "PyTorch", "OpenAI", "Pandas"]
    }
    
    for category, skills in skills_data.items():
        st.markdown(f"**{category}:**")
        skills_html = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skills])
        st.markdown(skills_html, unsafe_allow_html=True)
        st.markdown("")

    # Contact Section
    st.markdown('<div class="section-header">Get In Touch</div>', unsafe_allow_html=True)
    
    st.markdown("""
    <div class="contact-info">
        <h3>📧 Email Me Directly</h3>
        <p>For the fastest response, email me at:</p>
        <a href="mailto:rudra.vaishnav17@gmail.com" style="font-size: 1.1rem; color: #3b82f6; text-decoration: none;">
            rudra.vaishnav17@gmail.com
        </a>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown("### Quick Message")
    st.markdown("Fill out the form below and it will open your email client with a pre-filled message:")
    
    with st.form("contact_form"):
        name = st.text_input("Your Name")
        email = st.text_input("Your Email")
        message = st.text_area("Your Message", height=150)
        
        if st.form_submit_button("Send Email"):
            if name and email and message:
                subject = f"Portfolio Contact: {name}"
                body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
                mailto_link = f"mailto:rudra.vaishnav17@gmail.com?subject={subject}&body={body}"
                st.success("Click the link below to open your email client:")
                st.markdown(f'<a href="{mailto_link}" target="_blank">📧 Open Email Client</a>', unsafe_allow_html=True)
            else:
                st.error("Please fill in all fields")

    # Footer
    st.markdown("---")
    st.markdown("""
    <div style="text-align: center; color: #64748b; padding: 2rem 0;">
        <p>© 2025 Rudra Vaishnav. All rights reserved.</p>
        <p>
            <a href="https://github.com/Rudravaish" target="_blank" style="color: #64748b; text-decoration: none; margin: 0 1rem;">GitHub</a> |
            <a href="https://www.linkedin.com/in/rudra-vaishnav/" target="_blank" style="color: #64748b; text-decoration: none; margin: 0 1rem;">LinkedIn</a> |
            <a href="https://drive.google.com/drive/u/3/home" target="_blank" style="color: #64748b; text-decoration: none; margin: 0 1rem;">Resume</a>
        </p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()
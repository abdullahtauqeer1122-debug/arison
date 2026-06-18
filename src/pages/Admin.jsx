import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  PlusCircle, Trash2, Edit3, Save, LogOut, LayoutDashboard, 
  Briefcase, FileText, Star, MessageSquare, Settings, Video,
  Menu, X
} from 'lucide-react'
import './Admin.css'

import { projects as initialProjects } from './Projects'
import { articles as initialBlogs } from './Blog'
import { initialTestimonials } from './Testimonials'
import { initialVideos } from './Videos'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('overview') // overview | projects | cms | testimonials | leads | settings
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Database / LocalStorage state
  const [projects, setProjects] = useState([])
  const [blogs, setBlogs] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [leads, setLeads] = useState([])
  const [videos, setVideos] = useState([])
  const [jobs, setJobs] = useState([])
  const [totalViews, setTotalViews] = useState(0)
  const [totalClicks, setTotalClicks] = useState(0)
  const [pathViews, setPathViews] = useState({})

  // Form states
  const [editingId, setEditingId] = useState(null)
  
  // Project form variables
  const [projTitle, setProjTitle] = useState('')
  const [projCategory, setProjCategory] = useState('')
  const [projSummary, setProjSummary] = useState('')
  const [projChallenge, setProjChallenge] = useState('')
  const [projSolution, setProjSolution] = useState('')
  const [projResults, setProjResults] = useState('')
  const [projTech, setProjTech] = useState('')
  const [projImage, setProjImage] = useState('')

  // Blog form variables
  const [blogTitle, setBlogTitle] = useState('')
  const [blogCategory, setBlogCategory] = useState('Engineering')
  const [blogReadTime, setBlogReadTime] = useState('')
  const [blogExcerpt, setBlogExcerpt] = useState('')
  const [blogBody, setBlogBody] = useState('')
  const [blogTags, setBlogTags] = useState('')

  // Testimonial form variables
  const [testName, setTestName] = useState('')
  const [testRole, setTestRole] = useState('')
  const [testCompany, setTestCompany] = useState('')
  const [testContent, setTestContent] = useState('')
  const [testRating, setTestRating] = useState(5)

  // Video form variables
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDesc, setVideoDesc] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [videoTag, setVideoTag] = useState('Tech Talk')

  // Careers form variables
  const [jobTitle, setJobTitle] = useState('')
  const [jobDept, setJobDept] = useState('Engineering')
  const [jobType, setJobType] = useState('Full-Time')
  const [jobLocation, setJobLocation] = useState('Remote')
  const [jobLevel, setJobLevel] = useState('Mid-Level')
  const [jobSkills, setJobSkills] = useState('')
  const [jobDesc, setJobDesc] = useState('')

  // Settings variables
  const [companyName, setCompanyName] = useState('Arison NextStack Technologies')
  const [companyEmail, setCompanyEmail] = useState('arisonnextstacktechnologies@gmail.com')
  const [whatsappNum, setWhatsappNum] = useState('+92 300 4003075')

  // Auth handler
  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'abdullah1122@') {
      setIsAuthenticated(true)
      localStorage.setItem('arison_admin_auth', 'true')
    } else {
      setError('Incorrect admin password.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('arison_admin_auth')
  }

  // Load database from localStorage
  useEffect(() => {
    const isAuth = localStorage.getItem('arison_admin_auth')
    if (isAuth === 'true') {
      setIsAuthenticated(true)
    }

    // Default Seed Leads (not imported as it is contact-form specific)
    const defaultLeads = [
      {
        id: 1,
        name: 'Imran Khan',
        email: 'imran.khan@paktech.pk',
        phone: '+92 300 1234567',
        type: 'Consultation',
        company: 'PakTech Solutions',
        subject: 'Modernizing legacy ERP system',
        message: 'Salam, we are looking to modernize our legacy ERP system which runs on-premise. We need a modern React + Node.js web-based portal. Looking forward to discussing details.',
        status: 'unread',
        date: 'June 17, 2026'
      },
      {
        id: 2,
        name: 'Zainab Bibi',
        email: 'zainab@healthpulse.com.pk',
        phone: '+92 321 7654321',
        type: 'Project Inquiry',
        projectType: 'Healthcare SaaS',
        budget: '$10k - $25k',
        timeline: '3-6 months',
        message: 'We want to build an online patient consultation system. Please share your availability for a call.',
        status: 'unread',
        date: 'June 18, 2026'
      }
    ]

    if (!localStorage.getItem('arison_projects')) {
      localStorage.setItem('arison_projects', JSON.stringify(initialProjects))
    }
    if (!localStorage.getItem('arison_blogs')) {
      localStorage.setItem('arison_blogs', JSON.stringify(initialBlogs))
    }
    if (!localStorage.getItem('arison_testimonials')) {
      localStorage.setItem('arison_testimonials', JSON.stringify(initialTestimonials))
    }
    if (!localStorage.getItem('arison_contact_leads')) {
      localStorage.setItem('arison_contact_leads', JSON.stringify(defaultLeads))
    }
    // Force reset videos to new web dev content (version check to bust old cache)
    const videosVersion = localStorage.getItem('arison_videos_version')
    if (!localStorage.getItem('arison_videos') || videosVersion !== 'v3') {
      localStorage.setItem('arison_videos', JSON.stringify(initialVideos))
      localStorage.setItem('arison_videos_version', 'v3')
    }
    if (!localStorage.getItem('arison_jobs')) {
      localStorage.setItem('arison_jobs', JSON.stringify([])) // Starts empty as they are not actively hiring
    }

    setProjects(JSON.parse(localStorage.getItem('arison_projects')))
    setBlogs(JSON.parse(localStorage.getItem('arison_blogs')))
    setTestimonials(JSON.parse(localStorage.getItem('arison_testimonials')))
    setLeads(JSON.parse(localStorage.getItem('arison_contact_leads')))
    setVideos(JSON.parse(localStorage.getItem('arison_videos')))
    setJobs(JSON.parse(localStorage.getItem('arison_jobs') || '[]'))

    // Analytics load
    setTotalViews(parseInt(localStorage.getItem('arison_analytics_views') || '0', 10))
    setTotalClicks(parseInt(localStorage.getItem('arison_analytics_clicks') || '0', 10))
    setPathViews(JSON.parse(localStorage.getItem('arison_analytics_path_views') || '{}'))
  }, [])

  // Sync utilities
  const saveProjects = (data) => {
    setProjects(data)
    localStorage.setItem('arison_projects', JSON.stringify(data))
  }
  const saveBlogs = (data) => {
    setBlogs(data)
    localStorage.setItem('arison_blogs', JSON.stringify(data))
  }
  const saveTestimonials = (data) => {
    setTestimonials(data)
    localStorage.setItem('arison_testimonials', JSON.stringify(data))
  }
  const saveVideos = (data) => {
    setVideos(data)
    localStorage.setItem('arison_videos', JSON.stringify(data))
  }
  const saveJobs = (data) => {
    setJobs(data)
    localStorage.setItem('arison_jobs', JSON.stringify(data))
  }
  const saveLeads = (data) => {
    setLeads(data)
    localStorage.setItem('arison_contact_leads', JSON.stringify(data))
  }

  // Lead handlers
  const markLeadRead = (id) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: 'read' } : l)
    saveLeads(updated)
  }

  const deleteLead = (id) => {
    const updated = leads.filter(l => l.id !== id)
    saveLeads(updated)
  }

  // Project CRUD Actions
  const handleAddProject = (e) => {
    e.preventDefault()
    const newProj = {
      id: editingId || Date.now(),
      title: projTitle,
      category: projCategory,
      summary: projSummary,
      challenge: projChallenge,
      solution: projSolution,
      results: projResults.split('\n').filter(r => r.trim() !== ''),
      tech: projTech.split(',').map(t => t.trim()).filter(t => t !== ''),
      tags: projTech.split(',').map(t => t.trim()).filter(t => t !== ''),
      image: projImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    }

    if (editingId) {
      const updated = projects.map(p => p.id === editingId ? newProj : p)
      saveProjects(updated)
      setEditingId(null)
    } else {
      saveProjects([...projects, newProj])
    }

    // Reset fields
    setProjTitle('')
    setProjCategory('')
    setProjSummary('')
    setProjChallenge('')
    setProjSolution('')
    setProjResults('')
    setProjTech('')
    setProjImage('')
  }

  const handleEditProject = (p) => {
    setEditingId(p.id)
    setProjTitle(p.title)
    setProjCategory(p.category)
    setProjSummary(p.summary)
    setProjChallenge(p.challenge || '')
    setProjSolution(p.solution || '')
    setProjResults(p.results ? p.results.join('\n') : '')
    setProjTech(p.tech ? p.tech.join(', ') : '')
    setProjImage(p.image || '')
  }

  const handleDeleteProject = (id) => {
    const updated = projects.filter(p => p.id !== id)
    saveProjects(updated)
  }

  // Blog CRUD Actions
  const handleAddBlog = (e) => {
    e.preventDefault()
    const newBlog = {
      id: editingId || Date.now(),
      title: blogTitle,
      category: blogCategory,
      readTime: blogReadTime || '5 min',
      excerpt: blogExcerpt,
      body: blogBody,
      tags: blogTags.split(',').map(t => t.trim()).filter(t => t !== ''),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    }

    if (editingId) {
      const updated = blogs.map(b => b.id === editingId ? newBlog : b)
      saveBlogs(updated)
      setEditingId(null)
    } else {
      saveBlogs([...blogs, newBlog])
    }

    setBlogTitle('')
    setBlogReadTime('')
    setBlogExcerpt('')
    setBlogBody('')
    setBlogTags('')
  }

  const handleEditBlog = (b) => {
    setEditingId(b.id)
    setBlogTitle(b.title)
    setBlogCategory(b.category)
    setBlogReadTime(b.readTime)
    setBlogExcerpt(b.excerpt)
    setBlogBody(b.body || '')
    setBlogTags(b.tags ? b.tags.join(', ') : '')
  }

  const handleDeleteBlog = (id) => {
    const updated = blogs.filter(b => b.id !== id)
    saveBlogs(updated)
  }

  // Testimonials CRUD Actions
  const handleAddTestimonial = (e) => {
    e.preventDefault()
    const newTest = {
      id: editingId || Date.now(),
      name: testName,
      role: testRole,
      company: testCompany,
      content: testContent,
      rating: Number(testRating)
    }

    if (editingId) {
      const updated = testimonials.map(t => t.id === editingId ? newTest : t)
      saveTestimonials(updated)
      setEditingId(null)
    } else {
      saveTestimonials([...testimonials, newTest])
    }

    setTestName('')
    setTestRole('')
    setTestCompany('')
    setTestContent('')
    setTestRating(5)
  }

  const handleEditTestimonial = (t) => {
    setEditingId(t.id)
    setTestName(t.name)
    setTestRole(t.role)
    setTestCompany(t.company)
    setTestContent(t.content)
    setTestRating(t.rating)
  }

  const handleDeleteTestimonial = (id) => {
    const updated = testimonials.filter(t => t.id !== id)
    saveTestimonials(updated)
  }

  // Video CRUD Actions
  const handleAddVideo = (e) => {
    e.preventDefault()
    const newVid = {
      id: editingId || Date.now(),
      title: videoTitle,
      desc: videoDesc,
      url: videoUrl,
      tag: videoTag
    }

    if (editingId) {
      const updated = videos.map(v => v.id === editingId ? newVid : v)
      saveVideos(updated)
      setEditingId(null)
    } else {
      saveVideos([...videos, newVid])
    }

    setVideoTitle('')
    setVideoDesc('')
    setVideoUrl('')
    setVideoTag('Tech Talk')
  }

  const handleEditVideo = (v) => {
    setEditingId(v.id)
    setVideoTitle(v.title)
    setVideoDesc(v.desc)
    setVideoUrl(v.url)
    setVideoTag(v.tag)
  }

  const handleDeleteVideo = (id) => {
    const updated = videos.filter(v => v.id !== id)
    saveVideos(updated)
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-login-layout">
        <div className="login-box">
          <span className="label text-accent">Security Gateway</span>
          <h2 className="heading-lg" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Admin Portal</h2>
          <form onSubmit={handleLogin}>
            <div className="admin-field-group">
              <label>Passkey</label>
              <input 
                type="password" 
                className="admin-input" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="body-sm text-cyan" style={{ marginBottom: '1rem', color: '#EF4444' }}>{error}</p>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Authenticate
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-layout">
      {/* Sidebar Backdrop Overlay on Mobile */}
      {isSidebarOpen && (
        <div className="admin-sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className="heading-md text-grad">Arison Portal</h2>
            <button className="admin-sidebar-close-btn" onClick={() => setIsSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <span className="body-xs text-muted">v2026.1 - Pakistan</span>
        </div>
        <nav className="admin-nav">
          <button onClick={() => { setActiveTab('overview'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'overview' ? ' active' : ''}`}><LayoutDashboard size={16} /> Overview</button>
          <button onClick={() => { setActiveTab('projects'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'projects' ? ' active' : ''}`}><Briefcase size={16} /> Projects CRUD</button>
          <button onClick={() => { setActiveTab('cms'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'cms' ? ' active' : ''}`}><FileText size={16} /> CMS Blogs</button>
          <button onClick={() => { setActiveTab('testimonials'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'testimonials' ? ' active' : ''}`}><Star size={16} /> Testimonials</button>
          <button onClick={() => { setActiveTab('leads'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'leads' ? ' active' : ''}`}><MessageSquare size={16} /> Contact Leads ({leads.filter(l => l.status === 'unread').length})</button>
          <button onClick={() => { setActiveTab('videos'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'videos' ? ' active' : ''}`}><Video size={16} /> Videos CRUD</button>
          <button onClick={() => { setActiveTab('careers'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'careers' ? ' active' : ''}`}><Briefcase size={16} /> Careers CRUD</button>
          <button onClick={() => { setActiveTab('settings'); setEditingId(null); setIsSidebarOpen(false) }} className={`admin-nav-item${activeTab === 'settings' ? ' active' : ''}`}><Settings size={16} /> Global Settings</button>
        </nav>
        <button onClick={handleLogout} className="admin-nav-item admin-logout-btn"><LogOut size={16} /> End Session</button>
      </aside>

      {/* Main Panel */}
      <main className="admin-main">
        <header className="admin-header">
          <button className="admin-mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="admin-search">
            <input type="text" placeholder="Search portal metrics..." />
          </div>
          <div className="admin-profile">
            <span className="body-sm text-secondary">Super User</span>
            <div className="admin-avatar">AD</div>
          </div>
        </header>

        <section className="admin-content">
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div>
              <div className="overview-stats" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div className="stat-card">
                  <div className="stat-card-title">Unique Page Views</div>
                  <div className="stat-card-value" style={{ color: 'var(--cyan)' }}>{totalViews}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-title">Interactions / Clicks</div>
                  <div className="stat-card-value" style={{ color: 'var(--purple)' }}>{totalClicks}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-title">Live Projects</div>
                  <div className="stat-card-value">{projects.length}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-title">Inbound Leads</div>
                  <div className="stat-card-value">{leads.length}</div>
                </div>
              </div>

              <div className="overview-grid">
                <div className="dashboard-card">
                  <div className="dashboard-card-title">Page Breakdown (Views)</div>
                  <div className="leads-list" style={{ maxHeight: '280px', overflowY: 'auto' }}>
                    {Object.entries(pathViews).map(([path, count]) => (
                      <div key={path} className="lead-item" style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                        <span className="body-sm font-code" style={{ color: 'var(--text-secondary)' }}>{path === '/' ? '/ (Home)' : path}</span>
                        <span className="body-sm" style={{ fontWeight: 700, color: 'var(--cyan)' }}>{count} views</span>
                      </div>
                    ))}
                    {Object.keys(pathViews).length === 0 && <p className="body-sm text-muted">No page views recorded yet.</p>}
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="dashboard-card-title">Recent Customer Leads</div>
                  <div className="leads-list">
                    {leads.slice(-3).reverse().map((lead) => (
                      <div key={lead.id} className="lead-item">
                        <div>
                          <div className="lead-info-title">{lead.name} ({lead.company || lead.projectType})</div>
                          <div className="lead-info-desc">{lead.email} | {lead.date}</div>
                        </div>
                        <span className={`lead-status-badge ${lead.status}`}>
                          {lead.status}
                        </span>
                      </div>
                    ))}
                    {leads.length === 0 && <p className="body-sm text-muted">No contact requests received yet.</p>}
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="dashboard-card-title">Quick Actions</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button onClick={() => setActiveTab('projects')} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'flex-start' }}>
                      <Briefcase size={14} style={{ marginRight: '8px' }} /> Manage Projects
                    </button>
                    <button onClick={() => setActiveTab('cms')} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'flex-start' }}>
                      <FileText size={14} style={{ marginRight: '8px' }} /> Publish Blog Article
                    </button>
                    <button onClick={() => setActiveTab('testimonials')} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'flex-start' }}>
                      <Star size={14} style={{ marginRight: '8px' }} /> Edit Testimonials
                    </button>
                    <button onClick={() => setActiveTab('leads')} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'flex-start' }}>
                      <MessageSquare size={14} style={{ marginRight: '8px' }} /> View Inbound Leads
                    </button>
                    <button onClick={() => setActiveTab('careers')} className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'flex-start' }}>
                      <Briefcase size={14} style={{ marginRight: '8px' }} /> Manage Job Openings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Projects CRUD */}
          {activeTab === 'projects' && (
            <div>
              <div className="crud-form-box">
                <h3 className="crud-form-title">{editingId ? 'Edit Project Post' : 'Register New Project'}</h3>
                <form onSubmit={handleAddProject}>
                  <div className="grid-cols-2">
                    <div className="admin-field-group">
                      <label>Title</label>
                      <input className="admin-input" value={projTitle} onChange={(e) => setProjTitle(e.target.value)} required placeholder="e.g. MedCore E-Health" />
                    </div>
                    <div className="admin-field-group">
                      <label>Category</label>
                      <input className="admin-input" value={projCategory} onChange={(e) => setProjCategory(e.target.value)} required placeholder="e.g. Healthcare, SaaS, Enterprise" />
                    </div>
                  </div>

                  <div className="admin-field-group">
                    <label>Summary / Excerpt</label>
                    <input className="admin-input" value={projSummary} onChange={(e) => setProjSummary(e.target.value)} required placeholder="A brief one-liner summary of what the project does" />
                  </div>

                  <div className="admin-field-group">
                    <label>The Challenge</label>
                    <textarea className="admin-textarea" rows={3} value={projChallenge} onChange={(e) => setProjChallenge(e.target.value)} placeholder="What was the client's problem?" />
                  </div>

                  <div className="admin-field-group">
                    <label>Our Solution</label>
                    <textarea className="admin-textarea" rows={3} value={projSolution} onChange={(e) => setProjSolution(e.target.value)} placeholder="How did we solve it?" />
                  </div>

                  <div className="admin-field-group">
                    <label>Results & Impact (One item per line)</label>
                    <textarea className="admin-textarea" rows={3} value={projResults} onChange={(e) => setProjResults(e.target.value)} placeholder="e.g. 50% faster booking&#10;Saved $20k in cloud fees" />
                  </div>

                  <div className="admin-field-group">
                    <label>Tech Stack (Comma-separated)</label>
                    <input className="admin-input" value={projTech} onChange={(e) => setProjTech(e.target.value)} placeholder="React, Node.js, AWS, MongoDB" />
                  </div>

                  <div className="admin-field-group">
                    <label>Project Cover Image URL (Unsplash Link)</label>
                    <input className="admin-input" value={projImage} onChange={(e) => setProjImage(e.target.value)} placeholder="https://images.unsplash.com/photo-..." />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <PlusCircle size={16} style={{ marginRight: '6px' }} /> {editingId ? 'Save Changes' : 'Create Project'}
                  </button>
                </form>
              </div>

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Tech Stack</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.id}>
                        <td style={{ fontWeight: 600 }}>{p.title}</td>
                        <td>{p.category}</td>
                        <td>{p.tech ? p.tech.join(', ') : ''}</td>
                        <td>
                          <div className="admin-action-btns">
                            <button onClick={() => handleEditProject(p)} className="btn btn-secondary btn-sm"><Edit3 size={12} /></button>
                            <button onClick={() => handleDeleteProject(p.id)} className="btn btn-secondary btn-sm" style={{ color: '#EF4444' }}><Trash2 size={12} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: CMS Blogs */}
          {activeTab === 'cms' && (
            <div>
              <div className="crud-form-box">
                <h3 className="crud-form-title">{editingId ? 'Edit Article' : 'Compose Technical Article'}</h3>
                <form onSubmit={handleAddBlog}>
                  <div className="grid-cols-2">
                    <div className="admin-field-group">
                      <label>Title</label>
                      <input className="admin-input" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} required />
                    </div>
                    <div className="admin-field-group">
                      <label>Category</label>
                      <select className="admin-select" value={blogCategory} onChange={(e) => setBlogCategory(e.target.value)}>
                        <option>Engineering</option>
                        <option>Architecture</option>
                        <option>Security</option>
                        <option>AI & ML</option>
                        <option>DevOps</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid-cols-2">
                    <div className="admin-field-group">
                      <label>Read Time</label>
                      <input className="admin-input" value={blogReadTime} onChange={(e) => setBlogReadTime(e.target.value)} placeholder="e.g. 5 min" />
                    </div>
                    <div className="admin-field-group">
                      <label>Keywords / Tags (Comma-separated)</label>
                      <input className="admin-input" value={blogTags} onChange={(e) => setBlogTags(e.target.value)} placeholder="AI, NextJS, Cloud" />
                    </div>
                  </div>

                  <div className="admin-field-group">
                    <label>Excerpt Summary</label>
                    <input className="admin-input" value={blogExcerpt} onChange={(e) => setBlogExcerpt(e.target.value)} required />
                  </div>

                  <div className="admin-field-group">
                    <label>Article Body (Markdown/Text)</label>
                    <textarea className="admin-textarea" rows={6} value={blogBody} onChange={(e) => setBlogBody(e.target.value)} required />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    {editingId ? 'Update Article' : 'Publish Article'}
                  </button>
                </form>
              </div>

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((b) => (
                      <tr key={b.id}>
                        <td style={{ fontWeight: 600 }}>{b.title}</td>
                        <td>{b.category}</td>
                        <td>{b.date}</td>
                        <td>
                          <div className="admin-action-btns">
                            <button onClick={() => handleEditBlog(b)} className="btn btn-secondary btn-sm"><Edit3 size={12} /></button>
                            <button onClick={() => handleDeleteBlog(b.id)} className="btn btn-secondary btn-sm" style={{ color: '#EF4444' }}><Trash2 size={12} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 4: Testimonials */}
          {activeTab === 'testimonials' && (
            <div>
              <div className="crud-form-box">
                <h3 className="crud-form-title">{editingId ? 'Edit Review' : 'Create Client Testimonial'}</h3>
                <form onSubmit={handleAddTestimonial}>
                  <div className="grid-cols-2">
                    <div className="admin-field-group">
                      <label>Client Name</label>
                      <input className="admin-input" value={testName} onChange={(e) => setTestName(e.target.value)} required />
                    </div>
                    <div className="admin-field-group">
                      <label>Role / Position</label>
                      <input className="admin-input" value={testRole} onChange={(e) => setTestRole(e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid-cols-2">
                    <div className="admin-field-group">
                      <label>Company</label>
                      <input className="admin-input" value={testCompany} onChange={(e) => setTestCompany(e.target.value)} required />
                    </div>
                    <div className="admin-field-group">
                      <label>Rating (1-5)</label>
                      <select className="admin-select" value={testRating} onChange={(e) => setTestRating(Number(e.target.value))}>
                        <option value={5}>5 Stars</option>
                        <option value={4}>4 Stars</option>
                        <option value={3}>3 Stars</option>
                      </select>
                    </div>
                  </div>

                  <div className="admin-field-group">
                    <label>Testimonial Content</label>
                    <textarea className="admin-textarea" rows={4} value={testContent} onChange={(e) => setTestContent(e.target.value)} required />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Save Testimonial
                  </button>
                </form>
              </div>

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Company</th>
                      <th>Content Excerpt</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testimonials.map((t) => (
                      <tr key={t.id}>
                        <td style={{ fontWeight: 600 }}>{t.name}</td>
                        <td>{t.company}</td>
                        <td style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.content}</td>
                        <td>
                          <div className="admin-action-btns">
                            <button onClick={() => handleEditTestimonial(t)} className="btn btn-secondary btn-sm"><Edit3 size={12} /></button>
                            <button onClick={() => handleDeleteTestimonial(t.id)} className="btn btn-secondary btn-sm" style={{ color: '#EF4444' }}><Trash2 size={12} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 5: Contact Leads */}
          {activeTab === 'leads' && (
            <div className="dashboard-card">
              <div className="dashboard-card-title">Inbound Inquiries & consultations</div>
              <div className="leads-list">
                {leads.map((lead) => (
                  <div key={lead.id} className="lead-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <span className="body-md" style={{ fontWeight: 700 }}>{lead.name}</span>
                      <span className={`lead-status-badge ${lead.status}`}>{lead.status}</span>
                    </div>
                    <div className="body-sm text-secondary">
                      <strong>Type:</strong> {lead.type} | <strong>Email:</strong> {lead.email} {lead.phone && `| Phone: ${lead.phone}`}
                    </div>
                    {lead.company && <div className="body-sm text-secondary"><strong>Company:</strong> {lead.company}</div>}
                    {lead.projectType && (
                      <div className="body-sm text-secondary">
                        <strong>Project:</strong> {lead.projectType} | <strong>Budget:</strong> {lead.budget} | <strong>Timeline:</strong> {lead.timeline}
                      </div>
                    )}
                    {lead.subject && <div className="body-sm text-secondary"><strong>Subject:</strong> {lead.subject}</div>}
                    <div className="body-sm" style={{ background: 'var(--bg-card)', padding: '10px', borderRadius: '4px', border: '1px solid var(--border)', width: '100%', marginTop: '6px' }}>
                      {lead.message}
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                      {lead.status === 'unread' && (
                        <button onClick={() => markLeadRead(lead.id)} className="btn btn-secondary btn-sm">Mark as Read</button>
                      )}
                      <button onClick={() => deleteLead(lead.id)} className="btn btn-secondary btn-sm" style={{ color: '#EF4444' }}>Delete Lead</button>
                    </div>
                  </div>
                ))}
                {leads.length === 0 && <p className="body-sm text-muted">No lead requests in the database.</p>}
              </div>
            </div>
          )}

          {/* Tab 6: Videos CRUD */}
          {activeTab === 'videos' && (
            <div>
              <div className="crud-form-box">
                <h3 className="crud-form-title">{editingId ? 'Edit Video briefing' : 'Publish Video Briefing'}</h3>
                <form onSubmit={handleAddVideo}>
                  <div className="grid-cols-2">
                    <div className="admin-field-group">
                      <label>Title</label>
                      <input className="admin-input" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} required placeholder="e.g. Building SaaS Architectures" />
                    </div>
                    <div className="admin-field-group">
                      <label>Tag / Category</label>
                      <select className="admin-select" value={videoTag} onChange={(e) => setVideoTag(e.target.value)}>
                        <option value="Corporate">Corporate</option>
                        <option value="Tech Talk">Tech Talk</option>
                        <option value="Case Study">Case Study</option>
                      </select>
                    </div>
                  </div>
                  <div className="admin-field-group">
                    <label>Video Embed Link (YouTube or Direct Video URL)</label>
                    <input className="admin-input" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} required placeholder="e.g. https://www.youtube.com/embed/dQw4w9WgXcQ" />
                  </div>
                  <div className="admin-field-group">
                    <label>Brief Description</label>
                    <textarea className="admin-textarea" rows={3} value={videoDesc} onChange={(e) => setVideoDesc(e.target.value)} required placeholder="Explain what viewers will learn..." />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {editingId ? 'Save Briefing' : 'Publish Briefing'}
                  </button>
                </form>
              </div>

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Embed Link</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videos.map((vid) => (
                      <tr key={vid.id}>
                        <td style={{ fontWeight: 600 }}>{vid.title}</td>
                        <td>
                          <span className="badge badge-blue">{vid.tag}</span>
                        </td>
                        <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{vid.url}</td>
                        <td>
                          <div className="admin-action-btns">
                            <button onClick={() => handleEditVideo(vid)} className="btn btn-secondary btn-sm"><Edit3 size={12} /></button>
                            <button onClick={() => handleDeleteVideo(vid.id)} className="btn btn-secondary btn-sm" style={{ color: '#EF4444' }}><Trash2 size={12} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 8: Careers CRUD */}
          {activeTab === 'careers' && (
            <div>
              <div className="crud-form-box">
                <h3 className="crud-form-title">{editingId ? 'Edit Job Posting' : 'Post New Job Vacancy'}</h3>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const newJob = {
                    id: editingId || Date.now(),
                    title: jobTitle,
                    dept: jobDept,
                    type: jobType,
                    location: jobLocation,
                    level: jobLevel,
                    skills: jobSkills.split(',').map(s => s.trim()).filter(s => s !== ''),
                    desc: jobDesc
                  }

                  if (editingId) {
                    const updated = jobs.map(j => j.id === editingId ? newJob : j)
                    saveJobs(updated)
                    setEditingId(null)
                  } else {
                    saveJobs([...jobs, newJob])
                  }

                  setJobTitle('')
                  setJobDept('Engineering')
                  setJobType('Full-Time')
                  setJobLocation('Remote')
                  setJobLevel('Mid-Level')
                  setJobSkills('')
                  setJobDesc('')
                }}>
                  <div className="grid-cols-2">
                    <div className="admin-field-group">
                      <label>Job Title</label>
                      <input className="admin-input" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required placeholder="e.g. Senior Backend Engineer" />
                    </div>
                    <div className="admin-field-group">
                      <label>Department</label>
                      <select className="admin-select" value={jobDept} onChange={(e) => setJobDept(e.target.value)}>
                        <option>Engineering</option>
                        <option>AI Practice</option>
                        <option>Mobile</option>
                        <option>Infrastructure</option>
                        <option>Design</option>
                        <option>Strategy</option>
                        <option>Delivery</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid-cols-3">
                    <div className="admin-field-group">
                      <label>Employment Type</label>
                      <select className="admin-select" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                      </select>
                    </div>
                    <div className="admin-field-group">
                      <label>Location</label>
                      <input className="admin-input" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} required placeholder="e.g. Remote" />
                    </div>
                    <div className="admin-field-group">
                      <label>Experience Level</label>
                      <input className="admin-input" value={jobLevel} onChange={(e) => setJobLevel(e.target.value)} required placeholder="e.g. Mid-Level" />
                    </div>
                  </div>

                  <div className="admin-field-group">
                    <label>Required Skills (Comma-separated)</label>
                    <input className="admin-input" value={jobSkills} onChange={(e) => setJobSkills(e.target.value)} placeholder="React, Python, AWS" />
                  </div>

                  <div className="admin-field-group">
                    <label>Brief Job Description</label>
                    <textarea className="admin-textarea" rows={4} value={jobDesc} onChange={(e) => setJobDesc(e.target.value)} required placeholder="Describe the responsibilities and duties..." />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <PlusCircle size={16} style={{ marginRight: '6px' }} /> {editingId ? 'Save Posting' : 'Post Job'}
                  </button>
                </form>
              </div>

              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Department</th>
                      <th>Type</th>
                      <th>Location</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((j) => (
                      <tr key={j.id}>
                        <td style={{ fontWeight: 600 }}>{j.title}</td>
                        <td>{j.dept}</td>
                        <td>{j.type}</td>
                        <td>{j.location}</td>
                        <td>
                          <div className="admin-action-btns">
                            <button onClick={() => {
                              setEditingId(j.id)
                              setJobTitle(j.title)
                              setJobDept(j.dept)
                              setJobType(j.type)
                              setJobLocation(j.location)
                              setJobLevel(j.level || 'Mid-Level')
                              setJobSkills(j.skills ? j.skills.join(', ') : '')
                              setJobDesc(j.desc)
                            }} className="btn btn-secondary btn-sm"><Edit3 size={12} /></button>
                            <button onClick={() => {
                              const updated = jobs.filter(item => item.id !== j.id)
                              saveJobs(updated)
                            }} className="btn btn-secondary btn-sm" style={{ color: '#EF4444' }}><Trash2 size={12} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {jobs.length === 0 && (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No jobs listed. (Website will display "not actively hiring")</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 7: Settings */}
          {activeTab === 'settings' && (
            <div className="crud-form-box">
              <h3 className="crud-form-title">Global Corporate Settings</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Settings saved successfully (Simulated)') }}>
                <div className="admin-field-group">
                  <label>Company Name</label>
                  <input className="admin-input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className="admin-field-group">
                  <label>Primary E-Mail</label>
                  <input className="admin-input" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
                </div>
                <div className="admin-field-group">
                  <label>WhatsApp Number</label>
                  <input className="admin-input" value={whatsappNum} onChange={(e) => setWhatsappNum(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save Site Settings</button>
              </form>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

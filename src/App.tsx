

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "神经网络与赛博空间的交汇",
    excerpt: "探索深度学习如何重塑我们对虚拟现实的认知，以及神经元网络与数字架构的完美融合。",
    date: "2026.03.28",
    tag: "深度学习"
  },
  {
    id: 2,
    title: "量子加密：数字边境的最后防线",
    excerpt: "在算力爆炸的时代，量子加密技术如何保护我们的意识数据不被黑客窃取？",
    date: "2026.03.25",
    tag: "量子力学"
  },
  {
    id: 3,
    title: "硅基生命的进化：从算法到自我意识",
    excerpt: "当代码开始产生情感，我们该如何定义生命？一场关于AI伦理的深度探讨。",
    date: "2026.03.20",
    tag: "AI 伦理"
  }
];

function App() {
  return (
    <div className="app-container">
      <div className="scanline"></div>
      
      {/* Navigation */}
      <nav className="glass" style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-cyan)'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '2px',
          color: 'var(--neon-cyan)',
          textShadow: 'var(--glow-cyan)'
        }}>
          AI_BLOG <span style={{ color: 'var(--neon-magenta)' }}>v1.0</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase' }}>主页</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase' }}>档案</a>
          <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase' }}>关于</a>
        </div>
      </nav>

      <main style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="text-gradient" style={{
            fontSize: '5rem',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            filter: 'drop-shadow(0 0 10px rgba(0, 243, 255, 0.3))'
          }}>
            跨越数字边界<br />感知未来脉动
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-dim)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            在这里，我们探讨硅基文明的崛起、量子计算的奇点，以及人类意识在赛博空间中的永生。
          </p>
          <button className="btn-neon">进入矩阵</button>
        </section>

        {/* Blog Grid */}
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '3rem',
          borderLeft: '4px solid var(--neon-magenta)',
          paddingLeft: '1rem',
          color: 'var(--text-main)'
        }}>最新日志_</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="glass" style={{
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid var(--border-cyan)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 243, 255, 0.2)';
              e.currentTarget.style.borderColor = 'var(--neon-magenta)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--border-cyan)';
            }}>
              <div style={{
                color: 'var(--neon-cyan)',
                fontSize: '0.8rem',
                fontWeight: '700',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                [{post.tag}]
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--text-main)'
              }}>{post.title}</h3>
              <p style={{
                color: 'var(--text-dim)',
                fontSize: '1rem',
                marginBottom: '2rem'
              }}>{post.excerpt}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.8rem',
                color: 'var(--neon-magenta)'
              }}>
                <span>{post.date}</span>
                <span style={{ fontWeight: 'bold' }}>READ_MORE &gt;</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border-cyan)',
        marginTop: '6rem',
        color: 'var(--text-dim)',
        fontSize: '0.9rem'
      }}>
        <div style={{ marginBottom: '1rem', color: 'var(--neon-cyan)' }}>
          © 2026 AI_BLOG. POWERED BY NEURAL_VITE.
        </div>
        <div>
          连接状态: <span style={{ color: '#00ff00', textShadow: '0 0 5px #00ff00' }}>在线</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

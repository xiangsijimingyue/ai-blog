import { useState } from 'react';

interface Person {
  id: number;
  name: string;
  idCard?: string;
  amount?: string;
  details: string;
  type: 'defaulter' | 'welfare';
  image: string;
  date: string;
}

const INITIAL_DATA: Person[] = [
  {
    id: 1,
    name: "张*某",
    idCard: "3201**********1234",
    amount: "¥1,250,000",
    details: "拒不履行生效法律文书确定义务，涉案金额巨大。目前下落不明。",
    type: 'defaulter',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    date: "2026.03.15"
  },
  {
    id: 2,
    name: "李*华",
    idCard: "1101**********5678",
    amount: "¥890,000",
    details: "多次规避执行，隐匿财产。最高法院失信被执行人名单在列。",
    type: 'defaulter',
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    date: "2026.03.10"
  },
  {
    id: 101,
    name: "由于由于",
    details: "男，5岁，于2026年2月在某市走失。身穿红色羽绒服，有明显语言障碍。",
    type: 'welfare',
    image: "https://images.unsplash.com/photo-1544605559-00f7e126168e?w=400&h=400&fit=crop",
    date: "2026.02.20"
  },
  {
    id: 102,
    name: "小苹果",
    details: "女，7岁，2026年春节期间于火车站走失。家人万分焦急，提供线索重谢。",
    type: 'welfare',
    image: "https://images.unsplash.com/photo-1595444140026-665be5d36e7a?w=400&h=400&fit=crop",
    date: "2026.01.28"
  }
];

interface Message {
  id: number;
  user: string;
  content: string;
  time: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: "正义使者", content: "支持曝光老赖，让诚信回归。", time: "10分钟前" },
    { id: 2, user: "爱心网友", content: "希望走失的孩子能早日回家，大家多转发。", time: "2小时前" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const msg: Message = {
      id: Date.now(),
      user: userName || "匿名用户",
      content: newMessage,
      time: "刚刚"
    };
    setMessages([msg, ...messages]);
    setNewMessage("");
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#fff',
        padding: '1.5rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #eee'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '4px',
            color: 'var(--skii-red)'
          }}>
            诚信之光 <span style={{ color: '#000', fontSize: '0.8rem', letterSpacing: '1px', verticalAlign: 'middle' }}>HONESTY & JUSTICE</span>
          </div>
          <div style={{ display: 'flex', gap: '3rem', fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '2px' }}>
            <a href="#expose" style={{ color: 'inherit', textDecoration: 'none' }}>失信曝光</a>
            <a href="#welfare" style={{ color: 'inherit', textDecoration: 'none' }}>公益寻人</a>
            <a href="#messages" style={{ color: 'inherit', textDecoration: 'none' }}>社会留言</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        height: '80vh',
        background: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.2)), url('/hero-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div className="animate-fade-in">
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>让真相透明<br />让善良回归</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 3rem', letterSpacing: '1px' }}>
            在这里，我们用科技的力量曝光失信，用爱心的温暖寻找希望。每一份关注，都是正义的力量。
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="#expose" className="btn-skii">我要举报</a>
            <a href="#welfare" className="btn-skii btn-outline">提供线索</a>
          </div>
        </div>
      </header>

      {/* Expose Section */}
      <section id="expose" style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 className="section-title">失信曝光台_</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {INITIAL_DATA.filter(p => p.type === 'defaulter').map(person => (
              <div key={person.id} className="skii-card">
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <img src={person.image} alt={person.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                  <div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--skii-red)' }}>{person.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#999', margin: '0.5rem 0' }}>身份证号：{person.idCard}</p>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>涉案金额：{person.amount}</div>
                  </div>
                </div>
                <p style={{ marginTop: '1.5rem', color: '#666' }}>{person.details}</p>
                <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#bbb' }}>发布日期：{person.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welfare Section */}
      <section id="welfare" style={{ padding: '8rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="section-title">公益寻人_</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {INITIAL_DATA.filter(p => p.type === 'welfare').map(person => (
              <div key={person.id} className="skii-card" style={{ borderLeftColor: '#000' }}>
                <img src={person.image} alt={person.name} style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>寻：{person.name}</h3>
                <p style={{ color: '#444', height: '80px', overflow: 'hidden' }}>{person.details}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>失踪日期：{person.date}</span>
                  <button className="btn-skii" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}>提供线索</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Board */}
      <section id="messages" style={{ padding: '8rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">社会留言板_</h2>
          <form onSubmit={handleSubmit} className="skii-card" style={{ marginBottom: '4rem', borderLeft: 'none', borderTop: '4px solid var(--skii-red)' }}>
            <input 
              className="message-input" 
              placeholder="您的昵称" 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <textarea 
              className="message-input" 
              style={{ minHeight: '120px', resize: 'none' }} 
              placeholder="说点什么吧... 我们支持正义的每一句话"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" className="btn-skii" style={{ width: '100%' }}>提交留言</button>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {messages.map(msg => (
              <div key={msg.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--skii-red)' }}>{msg.user}</span>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>{msg.time}</span>
                </div>
                <p style={{ color: '#333' }}>{msg.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '6rem 0',
        backgroundColor: '#111',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ fontSize: '1.5rem', letterSpacing: '4px', marginBottom: '1.5rem' }}>JUSTICE & HOPE</div>
          <p style={{ fontSize: '0.8rem', color: '#666', maxWidth: '500px', margin: '0 auto 2rem' }}>
            本平台致力于维护社会诚信环境，助力寻亲公益。请确保所提供信息的真实性，共同维护公平正义。
          </p>
          <div style={{ fontSize: '0.7rem', color: '#444' }}>
            © 2026 正义之光. DESIGNED WITH PREMIUM AESTHETICS.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
